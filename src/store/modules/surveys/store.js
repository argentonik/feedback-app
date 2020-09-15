import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const getDefaultState = () => {
    return {
        servey: null,
        survey_passing_id: null,

        currentQuestionIndex: 0,
        currentQuestion: null,
        totalQuestions: null,
        isAllQuestionDataAnswered: false,

        answers: [],
        currentAnswer: null,
        loading: true,
    } 
}

export default {
    namespaced: true,
    state: getDefaultState(),
    actions,
    mutations: {
        ...mutations,
        resetState(state) {
            Object.assign(state, getDefaultState())
        },
    },
    getters,
}    