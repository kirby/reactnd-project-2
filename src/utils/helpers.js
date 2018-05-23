export function formatUser (user) {

  const { id, name, avatarURL, questions, answers } = user
  const asked = questions.length
  const answered = Object.keys(answers).length
  const score = asked + answered

  return {
    id,
    name,
    avatar: avatarURL,
    asked,
    answered,
    score,
  }
}
