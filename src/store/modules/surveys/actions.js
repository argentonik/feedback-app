import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_API_URL
const SERVEY_ID = 1

const getById = ({commit}) => {
    return new Promise((resolve, reject) => {
        commit('start_loading')
        axios.get('/surveys/'.concat(SERVEY_ID).concat('?include=questions'))
            .then(resp => {
                console.log(resp.data)
                commit('set_servey', resp.data)
                commit('end_loading')
                commit('set_total_questions')
                commit('set_current_question', 0)
                commit('set_base_answer_structure')
                resolve(resp.data)
            })
            .catch(error => {
                commit('end_loading')
                reject(error.response)
            })
        })
    }

const incrementCurrentQuestionIndex = ({commit, getters}) => {
    commit('increment_current_question_index')
    let answer = getters.answers.filter(answer => {
        return answer.question_id === getters.currentQuestionIndex
    })

    if (answer.length) {
        commit('set_answer', answer[0])
    } else {
        commit('set_base_answer_structure')
    }
    commit('set_is_all_question_data_answered')
}

const decrementCurrentQuestionIndex = ({commit, getters}) => {
    commit('decrement_current_question_index')
    let answer = getters.answers.filter(answer => {
        return answer.question_id === getters.currentQuestionIndex
    })

    if (answer.length) {
        commit('set_answer', answer[0])
    } else {
        commit('set_base_answer_structure')
    }
    commit('set_is_all_question_data_answered')
}

const addToAnswersCurrentAnswer = ({commit, getters}) => {
    commit('add_to_answers', getters.currentAnswer)
}

const setBaseAnswerStructure = ({commit}) => {
    commit('set_base_answer_structure')
}

const setAnswerRaiting = ({commit}, raiting) => {
    commit('set_answer_raiting', raiting)
    commit('set_is_all_question_data_answered')
}

const setAnswerTags = ({commit}, tags) => {
    commit('set_answer_tags', tags)
    commit('set_is_all_question_data_answered')
}

const setAnswerRaitingWithIndicator = ({commit}, raitingData) => {
    commit('set_answer_raiting_with_indicator', raitingData)
    commit('set_is_all_question_data_answered')
}

const setAnswerGrade = ({commit}, grade) => {
    commit('set_answer_grade', grade)
    commit('set_is_all_question_data_answered')
}

export default {
    getById,

    incrementCurrentQuestionIndex,
    decrementCurrentQuestionIndex,

    addToAnswersCurrentAnswer,
    setBaseAnswerStructure,
    setAnswerRaiting,
    setAnswerTags,
    setAnswerRaitingWithIndicator,
    setAnswerGrade,
}