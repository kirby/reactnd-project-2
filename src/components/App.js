import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
// import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import Nav from './Nav'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            {this.props.loading === true
              ? null
              : <div>
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/leaderboard' component={Leaderboard} />
                </div>
            }
          </div>
        </Fragment>
      </Router>
    );
  }
}

// <Route path='/questions/:id' component={Questions} />
// <Route path='/add' component={NewQuestion} />

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect()(App);
