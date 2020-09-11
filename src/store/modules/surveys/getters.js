const servey = state => state.servey

const answers = state => state.answers

const isAnswerExist = state => questionIndex => {
    let answer = state.answers.filter(answer => {
        return answer.question_id === questionIndex
    })

    return answer.length ? true : false
}

const getAnswerIfExist = state => questionIndex => {
    let answer = state.answers.filter(answer => {
        return answer.question_id === questionIndex
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
    answers,
    isAnswerExist,
    getAnswerIfExist,
    getFeedbackIfExist,
}