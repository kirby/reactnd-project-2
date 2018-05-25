import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Dashboard extends Component {

  state = {
    answered: false,
  }

  render() {

    const { answered } = this.state
    const { authedUser, questions } = this.props

    let questionIds = []

    if (Object.keys(questions).length > 0) {
      console.log('Dashboard: ', questions)
      if (answered === false) {
        for (const key of Object.keys(questions)) {
          if (questions[key].optionOne.votes.includes(authedUser) + questions[key].optionTwo.votes.includes(authedUser)) {
            // questionIds[key] = questions[key]
            // console.log(key, questions[key])
            questionIds.push(key)
            console.log('questionIds: ', questionIds)

          }
        }
      }

      return (
        <div>
          <h3 className='center'>Questions</h3>
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
    questionIds: Object.keys(questions),
    questions
  }
}

export default connect(mapStateToProps)(Dashboard)
