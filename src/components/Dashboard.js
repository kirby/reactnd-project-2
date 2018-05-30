import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import UserInfo from './UserInfo'

class Dashboard extends Component {

  state = {
    answered: false,
  }

  handleCategory = (answered) => {
    console.log('handleButton: ', answered)

    this.setState(() => ({
      answered
    }))
  }

  render() {

    const { answered } = this.state
    const { authedUser, questions } = this.props

    let questionIds = []

    if (Object.keys(questions).length > 0) {
      for (const key of Object.keys(questions)) {
        if (answered === true) {
          if (questions[key].optionOne.votes.includes(authedUser) || questions[key].optionTwo.votes.includes(authedUser)) {
            questionIds.push(key)
            console.log('questionIds: ', questionIds)
          }
        } else {
          if (!questions[key].optionOne.votes.includes(authedUser) && !questions[key].optionTwo.votes.includes(authedUser)) {
            questionIds.push(key)
            console.log('questionIds: ', questionIds)
          }
        }
      }

      return (
        <div>
          <UserInfo title='questions'/>
          <div className='btn-group'>
            <button onClick={() => this.handleCategory(true)}>Answered</button>
            <button onClick={() => this.handleCategory(false)}>Unanswered</button>
          </div>
          <ul className='dashboard-list'>
            {questionIds.map((id) => (
              <li key={id}>
                <p>{id}</p>
                <Question id={id} />
              </li>
            ))}
          </ul>
        </div>
      )
    } else {
      return (
        <div>
          <h3>No Questions</h3>
        </div>
      )
    }
  }
}

function mapStateToProps ( { questions, authedUser }) {
  return {
    authedUser,
    questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    questions
  }
}

export default connect(mapStateToProps)(Dashboard)
