import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Dashboard extends Component {

  state = {
    answered: false,
    questions: {}
  }

  render() {

    const { answered } = this.state
    const { questionIds } = this.props

    if (answered === true) {

    } else {

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
  }
}

function mapStateToProps ( { questions }) {

  return {
    questionIds: Object.keys(questions)
    // TODO: sort by category
      // .sort((a,b) => tweets[b].timestamp - tweets[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard)
