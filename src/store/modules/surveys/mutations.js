const start_loading = (state) => {
    state.loading = true
}

const end_loading = (state) => {
    state.loading = false
}

const set_servey = (state, servey) => {
    state.servey = servey
}

const increment_current_question_index = (state) => {
    ++state.currentQuestionIndex
    state.currentQuestion = state.servey.questions[state.currentQuestionIndex]
}

const decrement_current_question_index = (state) => {
    --state.currentQuestionIndex
    state.currentQuestion = state.servey.questions[state.currentQuestionIndex]
}

const set_total_questions = (state) => {
    state.totalQuestions = state.servey.questions.length
}

const set_current_question = (state, index) => {
    state.currentQuestion = state.servey.questions[index]
}

const add_to_answers = (state, answer) => {
    state.answers.push(answer)
}

const set_base_answer_structure = (state) => {
    state.currentAnswer = {
        survey_passing_id: state.servey.id,
        question_id: state.currentQuestionIndex,
        feedback: '',
    }
    
    switch (state.currentQuestion.type.id) {
        case 1:
            state.currentAnswer.answer_data = {
                raiting: null,
                tags: [],
            }
            break
        case 2:
            state.currentAnswer.answer_data = {
                indicator: '',
                raiting: null,
            }
            break
        case 3:
            state.currentAnswer.answer_data = {
                value: null
            }
            break
    }
}

const set_answer = (state, answer) => {
    state.currentAnswer = answer
}

const set_answer_raiting = (state, raiting) => {
    state.currentAnswer.answer_data.raiting = raiting
}

const set_answer_tags = (state, tags) => {
    state.currentAnswer.answer_data.tags = tags
}

const set_is_all_question_data_answered = (state) => {
    let answer = state.currentAnswer.answer_data
    if (state.currentQuestion.id == 1) {
        state.isAllQuestionDataAnswered = answer.raiting && answer.tags.length
    } else {
        state.isAllQuestionDataAnswered = true
    }
}

export default {
    start_loading,
    end_loading,

    set_servey,

    increment_current_question_index,
    decrement_current_question_index,
    set_total_questions,
    set_is_all_question_data_answered,

    set_current_question,

    add_to_answers,
    set_answer,
    set_base_answer_structure,
    set_answer_raiting,
    set_answer_tags,
}