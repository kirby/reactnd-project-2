import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {

  toParent = (e, id) => {
    e.preventDefault()
    this.props.history.push(`/question/${id}`)
  }

  render() {

    const { question } = this.props
    const { optionOne, optionTwo, author } = question

    return (
      <div>
        <div>
          <span>{author}</span>
          <span>{optionOne.text}</span>
          <span>{optionTwo.text}</span>
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
      : null
  }
}

export default connect(mapStateToProps)(Question)
