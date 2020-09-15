/*
// Survey mutations
*/

const set_servey = (state, servey) => {
    state.servey = servey
}

const set_survey_passing_id = (state, survey_passing_id) => {
    state.survey_passing_id = survey_passing_id
}

const set_already_passed_survey = (state, alreadyPassedSurvey) => {
    state.alreadyPassedSurvey = alreadyPassedSurvey
}

/*
// Current question index mutations
*/

const set_current_question_index = (state, index) => {
    state.currentQuestionIndex = index
    state.currentQuestion = state.servey.questions[index]
}

const increment_current_question_index = (state) => {
    ++state.currentQuestionIndex
    state.currentQuestion = state.servey.questions[state.currentQuestionIndex]
}

const decrement_current_question_index = (state) => {
    --state.currentQuestionIndex
    state.currentQuestion = state.servey.questions[state.currentQuestionIndex]
}

/*
// Questions mutations
*/

const set_total_questions = (state) => {
    state.totalQuestions = state.servey.questions.length
}

const set_current_question = (state, index) => {
    state.currentQuestion = state.servey.questions[index]
}

const set_is_all_question_data_answered = (state) => {
    if (!state.currentQuestion) {
        return true
    }

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

/*
// Answers mutations
*/

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
    if (!state.currentQuestion) {
        return
    }

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

const set_answer_raiting_with_indicator = (state, ratingData) => {
    let oldRatingData = state.currentAnswer.answer_data.find(
        rating => rating.indicator === ratingData.indicator)
    if (oldRatingData) {
        Object.assign(oldRatingData, ratingData)
    } else {
        state.currentAnswer.answer_data.push(ratingData)
    }
}

const set_answer_grade = (state, grade) => {
    state.currentAnswer.answer_data.value = grade
}

export default {
    set_servey,
    set_survey_passing_id,
    set_already_passed_survey,

    set_current_question_index,
    increment_current_question_index,
    decrement_current_question_index,

    set_total_questions,
    set_current_question,
    set_is_all_question_data_answered,

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