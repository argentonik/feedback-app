import axios from 'axios'

const onAuth = (commit, resp) => {
    console.log(resp)
    const loginData = resp.data
    const token = loginData.access_token

    localStorage.setItem('token', token)
    axios.defaults.headers.common['Authorization'] = loginData.token_type + ' ' + token
    commit('auth_success', token)
}    

const onAuthError = (commit) => {
    commit('auth_error')
    localStorage.removeItem('token')
}

export default {
    onAuth,
    onAuthError,
}
