import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Tweet from './Tweet'

class Dashboard extends Component {
  render() {
    // console.log(this.props)
    return (
      <div>
        <h3 className='center'>Questions</h3>
        {/* <ul className='dashboard-list'>
          {this.props.tweetIds.map((id) => (
            <li key={id}>
              <Tweet id={id} />
            </li>
          ))}
        </ul> */}
      </div>
    )
  }
}

// function mapStateToProps ( { questions }) {
//
//   return {
//     tweetIds: Object.keys(tweets)
//       .sort((a,b) => tweets[b].timestamp - tweets[a].timestamp)
//   }
// }

// export default connect(mapStateToProps)(Dashboard)
export default Dashboard