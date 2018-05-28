import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class Question extends Component {

  toParent = (e, id) => {
    e.preventDefault()
    this.props.history.push(`/questions/${id}`)
  }

  render() {

    const { question, answered, id } = this.props
    const { optionOne, optionTwo, author } = question

    return (
      <Link to={`/questions/${id}`} className=''>
        <div>
          <span>{author}</span>
          <button
            className=''
            onClick={(e) => this.toParent(e, id)}>
            Question Details
          </button>
          <span>{optionOne.text}</span>
          <span>{optionTwo.text}</span>
          <span>{answered}</span>
        </div>
      </Link>
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

export default withRouter(connect(mapStateToProps)(Question))
