const authorizedUser = state => state.authorizedUser
const isLoggedIn = state => !!state.token
const authStatus = state => state.status

export default {
    authorizedUser,
    isLoggedIn,
    authStatus,
}
