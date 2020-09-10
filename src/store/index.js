import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

import authentication from './modules/authentication/store'
import surveys from './modules/surveys/store'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        authentication,
        surveys,
    },
    plugins: [
        createPersistedState({
            paths: [
                'authentication',
            ]
        }),
    ],
})
