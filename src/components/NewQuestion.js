import React, { Component } from 'react'
import { connect } from 'react-redux'
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
        <h3 className='center'>Compose New Question</h3>
        <form className='new-question' onSubmit={this.handleSubmit}>
          <textarea
            placeholder='drink coffee'
            value={optionOneText}
            onChange={this.handleChangeOne}
            className='textarea'
            maxLength={100}
          />
          <textarea
            placeholder='drink tea'
            value={optionTwoText}
            onChange={this.handleChangeTwo}
            className='textarea'
            maxLength={100}
          />
          <button
            className='btn'
            type='submit'
            disabled={(optionOneText === '' && optionTwoText === '')}>
              Submit
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(NewQuestion)
