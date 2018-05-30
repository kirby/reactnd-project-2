import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

class UserInfo extends Component {

  state = {
    toHome: false,
  }

  handleSignout = (e) => {
    e.preventDefault()

    const { dispatch } = this.props

    dispatch(setAuthedUser(null))
  }

  render() {

    const { toHome } = this.state

    if (toHome === true) {
      return <Redirect to='/' />
    }

    const { user, title } = this.props
    const { name, avatarURL } = user

    return (
      <div className='flex-container'>
        <div className='avatar-container'>
          <img
            src={avatarURL}
            alt={`Avatar of ${name}`}
            className='avatar-image'
          />
          <div className='avatar-middle'>
            <div
              className='avatar-text'
              onClick={this.handleSignout}>
                Sign out
            </div>
          </div>
        </div>
        {/* <div>
          <img
            src={avatarURL}
            alt={`Avatar of ${name}`}
            className='avatar'
          />
        </div>
        <div>
          <h4>{name}</h4>
        </div> */}
      </div>
    )
  }
}

{/* <div class="container">
  <img src="img_avatar.png" alt="Avatar" class="image" style="width:100%">
  <div class="middle">
    <div class="text">John Doe</div>
  </div>
</div> */}

function mapStateToProps({ users, authedUser }, { title }) {

  const user = users[authedUser]

  return {
    user
  }
}

export default connect(mapStateToProps)(UserInfo)
