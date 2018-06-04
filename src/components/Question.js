import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class Question extends Component {

  toParent = (e, id) => {
    e.preventDefault()
    this.props.history.push(`/questions/${id}`)
  }

  render() {

    const { question, id } = this.props
    const { optionOne, optionTwo } = question

    return (
      <Link to={`/questions/${id}`} className=''>
        <div className='wyr-btn-question-group'>
          <button
            onClick={(e) => this.toParent(e, id)}>
              {optionOne.text}
          </button>
          <button
            onClick={(e) => this.toParent(e, id)}>
              {optionTwo.text}
          </button>
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
