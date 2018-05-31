import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserInfo from './UserInfo'
import { handleAnswerQuestion } from '../actions/questions'

class QuestionDetail extends Component {

  handleAnswer = (answer) => {
    const { dispatch, authedUser, qid } = this.props

    dispatch(handleAnswerQuestion({
      authedUser,
      qid,
      answer
    }))
  }

  render() {
    const { id, question } = this.props
    const {
      author, optionOne, optionTwo
    } = question

    return (
      <div>
        <UserInfo />
        <h3>Would you rather?</h3>
        <div className='wyr-btn-group'>
          <button
            onClick={() => this.handleAnswer('optionOne')}>
              {optionOne.text}
          </button>
          <button
            onClick={() => this.handleAnswer('optionTwo')}>
              {optionTwo.text}
          </button>
        </div>
      </div>
    )
  }

}

function mapStateToProps ( {authedUser, questions}, props ) {
  const { id } = props.match.params
  const question = questions[id]

  return {
    authedUser,
    qid: id,
    question: question
      ? question
      : null
  }
}

export default connect(mapStateToProps)(QuestionDetail)
