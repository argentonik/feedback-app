import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

import authentication from './modules/authentication/store'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        authentication,
    },
    plugins: [
        createPersistedState({
            paths: [
                'authentication',
            ]
        }),
    ],
})
