const start_loading = (state) => {
    state.loading = true
}

const end_loading = (state) => {
    state.loading = false
}

const set_servey = (state, servey) => {
    state.servey = servey
}

const set_survey_passing_id = (state, survey_passing_id) => {
    state.survey_passing_id = survey_passing_id
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

const set_answers = (state, answers) => {
    state.answers = answers
}

const add_to_answers = (state, newAnswer) => {
    let existAnswer = state.answers.find(
        answer => answer.question_id == newAnswer.question_id)
    if (!existAnswer) {
        state.answers.push(newAnswer)
    }
}

const set_base_answer_structure = (state) => {
    state.currentAnswer = {
        question_id: state.currentQuestionIndex + 1,
        feedback: '',
    }
    if (state.survey_passing_id) {
        state.currentAnswer.survey_passing_id = state.survey_passing_id
    }
    
    switch (state.currentQuestion.type.id) {
        case 1:
            state.currentAnswer.answer_data = {
                rating: null,
                tags: [],
            }
            break
        case 2:
            state.currentAnswer.answer_data = []
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

const set_feedback_to_answer = (state, feedback) => {
    state.currentAnswer.feedback = feedback
}

const set_answer_raiting = (state, rating) => {
    state.currentAnswer.answer_data.rating = rating
}

const set_answer_tags = (state, tags) => {
    state.currentAnswer.answer_data.tags = tags
}

const set_answer_raiting_with_indicator = (state, raitingData) => {
    let oldRaitingData = state.currentAnswer.answer_data.find(
        raiting => raiting.indicator === raitingData.indicator)
    if (oldRaitingData) {
        Object.assign(oldRaitingData, raitingData)
    } else {
        state.currentAnswer.answer_data.push(raitingData)
    }
}

const set_answer_grade = (state, grade) => {
    state.currentAnswer.answer_data.value = grade
}

const set_is_all_question_data_answered = (state) => {
    let answer = state.currentAnswer.answer_data

    if (state.currentQuestion.type.id == 1) {
        state.isAllQuestionDataAnswered = answer.rating && answer.tags.length
    } else if (state.currentQuestion.type.id == 2) {
        state.isAllQuestionDataAnswered = 
            state.currentAnswer.answer_data.length === state.currentQuestion.options.indicators.length
    } else if (state.currentQuestion.type.id == 3) {
        state.isAllQuestionDataAnswered = state.currentAnswer.answer_data.value != null
    } else {
        state.isAllQuestionDataAnswered = true
    }
}

export default {
    start_loading,
    end_loading,

    set_servey,
    set_survey_passing_id,

    increment_current_question_index,
    decrement_current_question_index,
    set_total_questions,
    set_is_all_question_data_answered,

    set_current_question,

    set_answers,
    add_to_answers,
    set_answer,
    set_base_answer_structure,
    set_feedback_to_answer,
    set_answer_raiting,
    set_answer_tags,
    set_answer_raiting_with_indicator,
    set_answer_grade,
}