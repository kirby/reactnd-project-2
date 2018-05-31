import { RECEIVE_USERS } from '../actions/users'
import { SAVE_QUESTION_ANSWER } from '../actions/questions'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case SAVE_QUESTION_ANSWER :
      console.log('reducers/users: ', action)
      const { qid, authedUser, answer } = action
      const user = state[authedUser]
      return {
        ...state,
        [authedUser]: {
          ...user,
          answers: {
            ...user.answers,
            [qid]: answer
          }
        }
      }
    default :
      return state
  }
}
