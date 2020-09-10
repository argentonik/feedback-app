const start_loading = (state) => {
    state.loading = true
}

const end_loading = (state) => {
    state.loading = false
}

const set_servey = (state, servey) => {
    state.servey = servey
}

export default {
    start_loading,
    end_loading,
    set_servey,
}