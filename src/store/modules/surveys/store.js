import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
    namespaced: true,
    state: {
        servey: null,
        answers: [],
        loading: true,
    },
    actions,
    mutations,
    getters,
}
