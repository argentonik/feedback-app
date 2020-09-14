import axios from 'axios'
import helpers from './helpers'

axios.defaults.baseURL = process.env.VUE_APP_API_URL

const login = ({commit}, user) => {
    commit('auth_request')
    return new Promise((resolve, reject) => {
        axios.post('/auth/login', user)
            .then(resp => {
                helpers.onAuth(commit, resp)
                resolve()
            })
            .catch(error => {
                helpers.onAuthError(commit, error)
                reject(error.response)
            })
        })
    }

const register = ({commit}, user) => {
    commit('auth_request')
    return new Promise((resolve, reject) => {
        axios.post('/auth/register', user)
            .then(resp => {
                console.log(resp)
                helpers.onAuth(commit, resp)
                resolve()
            })
            .catch(error => {
                helpers.onAuthError(commit, error)
                reject(error)
            })
        })
    }

const emailVerify = ({commit}, verifyData) => {
    console.log(commit)
    return new Promise((resolve, reject) => {
        axios.post('/email/verify', verifyData)
            .then(resp => {
                resolve(resp)
            })
            .catch(error => {
                reject(error)
            })
    })
}

const logout = ({commit}) => {
    return new Promise((resolve, reject) => {
        axios.post('/auth/logout')
            .then(() => {
                commit('logout')
                localStorage.removeItem('token')
                delete axios.defaults.headers.common['Authorization']
                resolve()
            })
            .catch(error => {
                reject(error)
        })   
    })
}

export default {
    login,
    register,
    emailVerify,
    logout,
};
