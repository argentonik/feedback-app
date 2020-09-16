import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_API_URL
const SERVEY_ID = 1

const getById = ({commit}) => {
    return new Promise((resolve, reject) => {
        axios.get('/surveys/'.concat(SERVEY_ID).concat('?include=questions'))
            .then(resp => {
                commit('set_servey', resp.data)
                commit('set_total_questions')
                commit('set_current_question', 0)
                commit('set_base_answer_structure')
                resolve(resp.data)
            })
            .catch(error => {
                reject(error)
            })
        })
    }

const getAnswers = ({commit, getters}) => {
    return new Promise((resolve, reject) => {
        axios.get('/surveys-passings/current?survey_id=' + SERVEY_ID + '&include=answers')
            .then(resp => {
                if (resp.data.answers && resp.data.answers.length) {
                    commit('set_answers', resp.data.answers)
                    commit('set_survey_passing_id', resp.data.answers[0].survey_passing_id)

                    if (getters.servey.questions.length == getters.answers.length) {
                        commit('set_already_passed_survey', true)
                        commit('set_current_question_index', getters.answers.length)
                    } else {
                        // get array of yet not answered answers
                        let intersectionAnswers = getters.servey.questions.filter(question => {
                            return !getters.answers.find(answer => {
                                return answer.question_id == question.id
                            })
                        });
                        commit('set_current_question_index', intersectionAnswers[0].id - 1)
                    }
                }
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const saveAnswer = ({commit, getters}, answer) => {
    return new Promise((resolve, reject) => {
        let formatedAnswer = Object.assign({}, answer)
        formatedAnswer.question_id = parseInt(formatedAnswer.question_id)
        formatedAnswer.answer_data = JSON.stringify(formatedAnswer.answer_data)

        axios.post('/answers/create', formatedAnswer)
            .then(resp => {
                if (!getters.survey_passing_id) {
                    commit('set_survey_passing_id', resp.data.survey_passing_id)
                }
                resolve(resp)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const incrementCurrentQuestionIndex = ({commit, getters}) => {
    commit('increment_current_question_index')
    let answer = getters.answers.filter(answer => {
        return answer.question_id == (getters.currentQuestionIndex + 1)
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
        return answer.question_id == (getters.currentQuestionIndex + 1)
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

const setFeedbackToAnswer = ({commit}, feedback) => {
    commit('set_feedback_to_answer', feedback)
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

const resetServeyState = ({ commit }) => {
    commit('resetState')
}

export default {
    getById,
    getAnswers,
    saveAnswer,

    incrementCurrentQuestionIndex,
    decrementCurrentQuestionIndex,

    addToAnswersCurrentAnswer,
    setBaseAnswerStructure,
    setFeedbackToAnswer,
    setAnswerRaiting,
    setAnswerTags,
    setAnswerRaitingWithIndicator,
    setAnswerGrade,

    resetServeyState,
}