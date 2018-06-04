import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatUser } from '../utils/helpers'

class User extends Component {

  render() {

    const { user } = this.props
    const { name, avatar, asked, answered } = user

    return (
      <div className='flex-container-wyr'>
        <div className='avatar-container'>
          <img
            src={avatar}
            alt={`avatar of ${name}`}
            className='avatar-image'
          />
        </div>
        <div>
          <h4><i>{name} has asked {asked} questions and answered {answered}</i></h4>
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
