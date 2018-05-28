import React, { Component } from 'react'
import { connect } from 'react-redux'

// "8xf0y6ziyjabvozdd253nd": {
//   id: '8xf0y6ziyjabvozdd253nd',
//   author: 'sarahedo',
//   timestamp: 1467166872634,
//   optionOne: {
//     votes: ['sarahedo'],
//     text: 'have horrible short term memory',
//   },
//   optionTwo: {
//     votes: [],
//     text: 'have horrible long term memory'
//   }
// },

class QuestionDetail extends Component {

  render() {

    console.log('QuestionDetail: ', this.props)

    const { id, question } = this.props

    const {
      author, optionOne, optionTwo
    } = question
    console.log('QuestionDetail: ', optionOne, optionTwo)

    return (
      <div>
        <p>Question Detail</p>
        <p>{optionOne.text}</p>
        <p>{optionTwo.text}</p>

      </div>
    )
  }

}

function mapStateToProps ( {authedUser, questions}, props ) {
  const { id } = props.match.params
  console.log('mapStateToProps: ', props)
  const question = questions[id]

  return {
    authedUser,
    question: question
      ? question
      : null
  }
}

export default connect(mapStateToProps)(QuestionDetail)
