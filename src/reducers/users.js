import { RECEIVE_USERS } from '../actions/users'
import { ADD_QUESTION, SAVE_QUESTION_ANSWER } from '../actions/questions'

export default function users (state = {}, action) {

  const { qid, authedUser, answer } = action
  const user = state[authedUser]

  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case ADD_QUESTION: {
      const author = state[action.question.author]
      return {
        ...state,
        [author.id]: {
          ...author,
          questions: author.questions.concat([action.question.id])
        }
      }
    }
    case SAVE_QUESTION_ANSWER :
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
