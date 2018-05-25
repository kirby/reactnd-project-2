import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {

  toParent = (e, id) => {
    e.preventDefault()
    this.props.history.push(`/question/${id}`)
  }

  render() {

    const { question, answered } = this.props
    const { optionOne, optionTwo, author } = question

    return (
      <div>
        <div>
          <span>{author}</span>
          <span>{optionOne.text}</span>
          <span>{optionTwo.text}</span>
          <span>{answered}</span>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({questions}, {id}) {
  const question = questions[id]

  return {
    question: question
      ? question
      : null,
    answered:
      (question.optionOne.votes.length +
      question.optionTwo.votes.length ) > 0

  }
}

export default connect(mapStateToProps)(Question)
