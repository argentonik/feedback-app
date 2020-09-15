import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const getDefaultState = () => {
    return {
        status: '',
        token: localStorage.getItem('token') || '',
        authorizedUser: {},
    }
}

export default {
    namespaced: true,
    state: getDefaultState(),
    actions,
    mutations: {
        ...mutations,
        reset_state(state) {
            Object.assign(state, getDefaultState())
        },
    },
    getters,
}
