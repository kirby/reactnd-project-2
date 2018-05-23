import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatUser } from '../utils/helpers'

class User extends Component {

  render() {

    const { user } = this.props
    const { name, avatar, asked, answered, score } = user

    return (
      <div>
        <img
          src={avatar}
          alt={`avatar of ${name}`}
          className='avatar'
        />
        <div>
          <span>{name}</span>
          {asked}
          {answered}
          {score}
        </div>
      </div>
    )
  }
}

function mapStateToProps ({users}, {id}) {
  const user = users[id]

  return {
    user: user
      ? formatUser(user)
      : null
  }
}

export default connect(mapStateToProps)(User)
