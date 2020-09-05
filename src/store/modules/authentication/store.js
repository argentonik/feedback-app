import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
    namespaced: true,
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        authorizedUser: {},
    },
    actions,
    mutations,
    getters,
}
