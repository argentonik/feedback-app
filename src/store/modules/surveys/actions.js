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
                resolve(resp.data)
            })
            .catch(error => {
                commit('end_loading')
                reject(error.response)
            })
        })
    }

const addToAnswers = ({commit}, answer) => {
    commit('add_to_answers', answer)
}

export default {
    getById,
    addToAnswers,
}