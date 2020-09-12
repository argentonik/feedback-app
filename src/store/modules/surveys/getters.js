const servey = state => state.servey

const currentQuestionIndex = state => state.currentQuestionIndex
const currentQuestion = state => state.currentQuestion
const totalQuestions = state => state.totalQuestions
const isAllQuestionDataAnswered = state => state.isAllQuestionDataAnswered

const answers = state => state.answers

const currentAnswer = state => state.currentAnswer

const isAnswerExist = state => questionIndex => {
    let answer = state.answers.filter(answer => {
        return answer.question_id === questionIndex
    })

    return answer.length ? true : false
}

const getAnswerIfExist = state => {
    let answer = state.answers.filter(answer => {
        return answer.question_id === state.currentQuestionIndex
    })

    return answer.length ? answer[0].answer_data : null
}

const getFeedbackIfExist = state => questionIndex => {
    let answer = state.answers.filter(answer => {
        return answer.question_id === questionIndex
    })

    return answer.length ? answer[0].feedback : null
}


export default {
    servey,

    currentQuestionIndex,
    currentQuestion,
    totalQuestions,
    isAllQuestionDataAnswered,

    answers,
    currentAnswer,
    isAnswerExist,
    getAnswerIfExist,
    getFeedbackIfExist,
}