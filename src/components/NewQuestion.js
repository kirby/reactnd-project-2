import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserInfo from './UserInfo'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {

  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false,
  }

  handleChangeOne = (e) => {
    const optionOneText = e.target.value

    this.setState(() => ({
      optionOneText
    }))
  }

  handleChangeTwo = (e) => {
    const optionTwoText = e.target.value

    this.setState(() => ({
      optionTwoText
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOneText, optionTwoText } = this.state
    const { dispatch, id } = this.props

    dispatch(handleAddQuestion(optionOneText, optionTwoText))

    this.setState(() => ({
      optionOneText: '',
      optionTwoText: '',
      toHome: id ? false : true
    }))
  }

  render() {

    const { optionOneText, optionTwoText, toHome } = this.state

    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <UserInfo title='Create Poll'/>
        <form className='new-question' onSubmit={this.handleSubmit}>
          <textarea
            className='textarea-a'
            placeholder='drink coffee'
            value={optionOneText}
            onChange={this.handleChangeOne}
            maxLength={100}
          />
          <textarea
            className='textarea-b'
            placeholder='drink tea'
            value={optionTwoText}
            onChange={this.handleChangeTwo}
            maxLength={100}
          />
          <button
            className='btn'
            type='submit'
            disabled={optionOneText === '' || optionTwoText === ''}>
              Add Question
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(NewQuestion)
