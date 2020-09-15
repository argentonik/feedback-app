const servey = state => state.servey
const survey_passing_id = state => state.survey_passing_id

const currentQuestionIndex = state => state.currentQuestionIndex
const currentQuestion = state => state.currentQuestion
const totalQuestions = state => state.totalQuestions
const isAllQuestionDataAnswered = state => state.isAllQuestionDataAnswered

const answers = state => state.answers

const currentAnswer = state => state.currentAnswer

const isAnswerExist = state => questionIndex => {
    let answer = state.answers.find(answer => {
        return answer.question_id == (questionIndex + 1)
    })

    return answer ? true : false
}

const getAnswerIfExist = state => {
    let answer = state.answers.find(answer => {
        return answer.question_id == (state.currentQuestionIndex + 1)
    })

    return answer ? answer : null
}


export default {
    servey,
    survey_passing_id,

    currentQuestionIndex,
    currentQuestion,
    totalQuestions,
    isAllQuestionDataAnswered,

    answers,
    currentAnswer,
    isAnswerExist,
    getAnswerIfExist,
}