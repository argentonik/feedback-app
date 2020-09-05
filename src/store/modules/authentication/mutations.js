const update_user_info = (state, user) => {
    state.authorizedUser = user
    user.fullName = user.first_name + ' ' + user.last_name
}

const auth_request = (state) => {
    state.status = 'loading'
}

const auth_success = (state, token) => {   
    state.status = 'success'
    state.token = token
}

const auth_error = (state) => {
    state.status = 'error'
}

const logout = (state) => {
    state.status = ''
    state.token = ''
    state.authorizedUser = {}
}

export default {
    update_user_info,
    auth_request,
    auth_success,
    auth_error,
    logout,
};
