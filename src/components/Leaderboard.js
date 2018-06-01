import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserInfo from './UserInfo'
import User from './User'

class Leaderboard extends Component {
  render() {
    // TODO: add 'leaderboard-list' to CSS
    const { userIds } = this.props
    return (
      <div>
        <UserInfo title='Leaderboard'/>

        <ul className='leaderboard-list'>
          {userIds.map((id) => (
            <li key={id}>
              <User id={id} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function score(user) {
  const asked = user.questions.length
  const answered = Object.keys(user.answers).length

  return (asked + answered)
}

function mapStateToProps ({ users }) {
  return {
    userIds: Object.keys(users)
      .sort((a,b) => score(users[b]) - score(users[a]))
  }
}

export default connect(mapStateToProps)(Leaderboard)
