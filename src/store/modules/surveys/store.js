import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
    namespaced: true,
    state: {
        servey: null,
        survey_passing_id: null,

        currentQuestionIndex: 0,
        currentQuestion: null,
        totalQuestions: null,
        isAllQuestionDataAnswered: false,

        answers: [],
        currentAnswer: null,
        loading: true,
    },
    actions,
    mutations,
    getters,
}
