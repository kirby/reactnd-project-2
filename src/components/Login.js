import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

class Login extends Component {

  state = {
    userId: '',
    toHome: false,
  }

  handleChange = (e) => {
    const userId = e.target.value

    this.setState(() => ({
      userId
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { userId } = this.state
    const { dispatch } = this.props

    dispatch(setAuthedUser(userId))

    this.setState(() => ({
      toHome: true
    }))
  }

  render() {
    const { userId, toHome } = this.state
    const { userIds, users } = this.props

    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <h3>Login</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            {/* User: */}
            <select value={userId} onChange={this.handleChange}>
              <option key='noauth' value='' disabled defaultValue>Username</option>
              {userIds.map((id) => (
                <option key={id} value={id}>{users[id].name}</option>
              ))}
            </select>
          </label>
          {/* <input type="submit" value="Submit" /> */}
          <button
            type='submit'
            disabled={userId === ''}>
              Login
          </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    userIds: Object.keys(users),  // TODO: sorty by name
    users
  }
}

export default connect(mapStateToProps)(Login)
