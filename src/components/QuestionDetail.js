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
    const {
      question
    } = this.props

    if (question === null) {
      return (
        <div>
          <UserInfo />

          <h2>Question not found</h2>
        </div>
      )
    }

    const {
      user,
      answered,
      answeredOne,
      answeredTwo,
      voteCount,
      voteCountOne,
      voteCountTwo } = this.props
    const { optionOne, optionTwo } = question
    const { name, avatarURL } = user

    const textOne = answeredOne ?
      voteCountOne > 1 ?
        'You and ' + voteCountOne - 1 + ' other people voted for this!' :
        'You voted for this!' :
      voteCountOne + ' votes'
    const percentOne = ((voteCountOne / voteCount) * 100).toFixed(2)
    const percentTwo = ((voteCountTwo / voteCount) * 100).toFixed(2)
    const textTwo = answeredTwo ?
      voteCountTwo > 1 ?
        'You and ' + voteCountTwo - 1 + ' other people voted for this!' :
        'You voted for this!' :
      voteCountTwo + ' votes'

    return (
      <div>
        <UserInfo />

        <div className='flex-container-wyr'>
          <div className='avatar-container'>
            <img
              src={avatarURL}
              alt={`Avatar of ${name}`}
              className='avatar-image'
            />
          </div>
          <div>
            <h4><i>{user.name} asks, Would you rather?</i></h4>
          </div>
        </div>

        <div>
          <div className='wyr-btn-group-a'>
            {answered ?
              (<button>
                <h2><i>{optionOne.text}</i></h2>
                <br />
                <br />
                {textOne}
                <br />
                <br />
                {percentOne}%
              </button>) :
              (<button
                onClick={() => this.handleAnswer('optionOne')}>
                  {optionOne.text}
              </button>)
            }
          </div>
          <div className='wyr-btn-group-b'>
            {answered ?
              (<button>
                <h2><i>{optionTwo.text}</i></h2>
                <br />
                <br />
                {textTwo}
                <br />
                <br />
                {percentTwo}%
              </button>) :
              (<button
                onClick={() => this.handleAnswer('optionTwo')}>
                  {optionTwo.text}
              </button>)
            }
          </div>
        </div>
      </div>
    )
  }

}

function mapStateToProps ( {authedUser, questions, users}, props ) {
  const { id } = props.match.params
  const question = questions[id]
  console.log('mapStateToProps: ', question)
  if (question === undefined) {
    return {
      authedUser,
      question: null
    }
  }
  const user = users[question.author]
  const answered =
    question.optionOne.votes.includes(authedUser) ||
    question.optionTwo.votes.includes(authedUser)
  const answeredOne = question.optionOne.votes.includes(authedUser) ?
    true : false
  const answeredTwo = question.optionTwo.votes.includes(authedUser) ?
    true : false

  const voteCount =
    question.optionOne.votes.length +
    question.optionTwo.votes.length
  const voteCountOne = question.optionOne.votes.length
  const voteCountTwo = question.optionTwo.votes.length

  return {
    authedUser,
    user,
    answered: answered,
    answeredOne: answeredOne,
    answeredTwo: answeredTwo,
    voteCount: voteCount,
    voteCountOne: voteCountOne,
    voteCountTwo: voteCountTwo,
    qid: id,
    question: question
      ? question
      : null
  }
}

export default connect(mapStateToProps)(QuestionDetail)
