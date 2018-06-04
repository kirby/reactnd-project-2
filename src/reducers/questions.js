import { RECEIVE_QUESTIONS, ADD_QUESTION, SAVE_QUESTION_ANSWER } from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION :
      return {
        ...state,
        [action.question.id]: action.question
      }
    case SAVE_QUESTION_ANSWER :
      const { qid, authedUser, answer } = action
      const question = state[qid]
      return {
        ...state,
        [qid]: {
          ...question,
          [answer]: {
            ...question[answer],
            votes: [...question[answer].votes, authedUser]
          }
        }
      }
    default :
      return state
  }
}
