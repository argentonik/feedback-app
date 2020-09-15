<template>
    <div 
        class="feedback-view container"
        v-if="servey && loadedAnswers"
    >
        <div class="level is-mobile">
            <div class="level-left">
                <a 
                    class="level-item"
                    v-if="currentQuestionIndex != 0"
                >
                    <img 
                        src="../assets/images/back.png" 
                        class="back-button" 
                        v-if="currentQuestionIndex <= totalQuestions - 1"
                        @click="onBack"
                    >
                    <img 
                        src="../assets/images/close.png" 
                        class="close-button" 
                        v-else
                        @click="onClose"
                    >
                </a>
            </div>

            <div class="level-right skip-button">
                <a 
                    class="level-item"
                    @click="onSkip"
                >
                    Skip
                </a>
            </div>
        </div>

        <div class="container">
            <figure class="image container logo">
                <img src="../assets/images/logo.png">
            </figure>

            <div 
                class="container feedback-writing"
                v-show="isWritingFeedback"
            >
                <AppFeedbackAdd 
                    :defaultFeedback="isDefaultFeedback ? currentAnswer.feedback : ''"
                    :isDisabled="isAnswerExist(currentQuestionIndex)"
                    @backButtonClick="isWritingFeedback = false" 
                    @saveButtonClick="onSaveFeedback"
                    :key="currentQuestionIndex"
                />
            </div>

            <div 
                class="container steps"
                v-show="!isWritingFeedback"
            >
                <AppFeedbackRaitingWithTagsQuestion 
                    :question="currentQuestion"
                    :answer="currentAnswer.answer_data"
                    @selectStar="onSelectRaitingWithTagsStar"
                    @selectTag="onSelectRaitingWithTagsTag"
                    v-if="currentQuestion && currentQuestion.type.id == 1"
                />

                <AppFeedbackMultiRaitingQuestion 
                    :question="currentQuestion"
                    :answer="currentAnswer.answer_data"
                    @selectRaiting="onSelectMultiRaitingItem"
                    v-else-if="currentQuestion && currentQuestion.type.id == 2"/>

                <AppFeedbackGradeQuestion 
                    :question="currentQuestion"
                    :answer="currentAnswer.answer_data"
                    @selectValue="onSelectGrade"
                    v-else-if="currentQuestion && currentQuestion.type.id == 3"/>

                <AppFeedbackFinish 
                    :message="finishMessage" 
                    v-else 
                />

            </div>
        </div>

         <div class="functional-buttons">
             <a 
                class="add-feedback" 
                v-if="currentQuestionIndex <= totalQuestions - 1"
                v-show="!isWritingFeedback"
                @click="isWritingFeedback = true"
            >
                Add feedback
            </a>

            <b-progress type="is-danger" :value="progress"></b-progress>

            <b-button 
                class="main-button"
                @click="onContinue" 
                :disabled="!isAllQuestionDataAnswered && !isAnswerExist(currentQuestionIndex)"
                v-if="currentQuestionIndex <= totalQuestions - 1"
            > Continue</b-button>
            <b-button @click="onClose" v-else>Close</b-button>
        </div>
    </div>
</template>

<script>
import AppFeedbackAdd from '../components/AppFeedbackAdd'

import AppFeedbackRaitingWithTagsQuestion from '../components/AppFeedbackRaitingWithTagsQuestion'
import AppFeedbackMultiRaitingQuestion from '../components/AppFeedbackMultiRaitingQuestion'
import AppFeedbackGradeQuestion from '../components/AppFeedbackGradeQuestion'

import AppFeedbackFinish from '../components/AppFeedbackFinish'

import { mapGetters, mapActions } from 'vuex'

export default {
    components: {
        AppFeedbackAdd,
        AppFeedbackRaitingWithTagsQuestion,
        AppFeedbackMultiRaitingQuestion,
        AppFeedbackGradeQuestion,
        AppFeedbackFinish,
    },

    data() {
        return {
            isDefaultFeedback: '',
            loadedAnswers: false,
            isWritingFeedback: false,
            progress: 0,
            progressStep: 0,
            finishMessage: 'Thanks',
        }
    },

    computed: {
        ...mapGetters({
            servey: 'surveys/servey',
            isAlreadyPassedSurvey:'surveys/isAlreadyPassedSurvey',

            currentQuestionIndex: 'surveys/currentQuestionIndex',
            currentQuestion: 'surveys/currentQuestion',
            totalQuestions: 'surveys/totalQuestions',
            isAllQuestionDataAnswered: 'surveys/isAllQuestionDataAnswered',

            answers: 'surveys/answers',
            currentAnswer: 'surveys/currentAnswer',
            isAnswerExist: 'surveys/isAnswerExist',
        }),
    },

    watch: {
        isAlreadyPassedSurvey(val) {
            if (val) {
                this.finishMessage = 'This week you have already completed a survey'
            }
        },

        currentQuestionIndex(index) {
            this.progress = (index + 1) * this.progressStep
            this.isDefaultFeedback = this.currentAnswer.feedback ? true : false
            this.isWritingFeedback = false
        },
    },

    mounted() {
        this.getServeyById()
            .then(() => {
                this.progressStep = 100 / this.totalQuestions
                this.progress = this.progressStep
                this.getAnswers().then(() => {
                    this.loadedAnswers = true
                })
            })
            .catch(err => {
                console.log('error', err.response)
                if (err.response.status == 401) {
                    this.resetServeyState()
                    this.$router.push({ name: 'Login' })
                }
            })
    },
    methods: {
        ...mapActions({
            getServeyById: 'surveys/getById',
            getAnswers: 'surveys/getAnswers',
            saveAnswer: 'surveys/saveAnswer',

            incrementCurrentQuestionIndex: 'surveys/incrementCurrentQuestionIndex',
            decrementCurrentQuestionIndex: 'surveys/decrementCurrentQuestionIndex',

            addToAnswersCurrentAnswer: 'surveys/addToAnswersCurrentAnswer',
            setBaseAnswerStructure: 'surveys/setBaseAnswerStructure',
            setFeedbackToAnswer: 'surveys/setFeedbackToAnswer',
            setAnswerRaiting: 'surveys/setAnswerRaiting',
            setAnswerTags: 'surveys/setAnswerTags',
            setAnswerRaitingWithIndicator: 'surveys/setAnswerRaitingWithIndicator',
            setAnswerGrade: 'surveys/setAnswerGrade',

            logout: 'authentication/logout',
            resetServeyState: 'surveys/resetServeyState',
            resetAuthState: 'authentication/resetState',
        }),

        onBack() {
            this.decrementCurrentQuestionIndex()
        },

        onSkip() {
            this.incrementCurrentQuestionIndex()
        },

        onContinue() {
            if (!this.isAnswerExist(this.currentQuestionIndex)) {
                this.addToAnswersCurrentAnswer()
                this.saveAnswer(this.currentAnswer)
                    .then(() => this.incrementCurrentQuestionIndex())
            } else {
                this.incrementCurrentQuestionIndex()
            }
        },

        onClose() {
            this.logout().then(() => {
                this.$router.push({ name: 'Login' })
                this.resetServeyState()
                this.resetAuthState()
            })
        },

        onSaveFeedback(feedback) {
            this.isWritingFeedback = false
            this.setFeedbackToAnswer(feedback)
        },

        onSelectRaitingWithTagsStar(star) {
            this.setAnswerRaiting(star)
        },

        onSelectRaitingWithTagsTag(tags) {
            this.setAnswerTags(tags)
        },

        onSelectMultiRaitingItem(raitingData) {
            this.setAnswerRaitingWithIndicator(raitingData)
        },

        onSelectGrade(grade) {
            this.setAnswerGrade(grade)
        },
    }
}
</script>

<style scoped>
    .feedback-view {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .close-button {
        width: 12px;
        height: 12px;
    }

    .back-button {
        width: 25px;
        height: 25px;
    }

    .level.is-mobile .level-right.skip-button {
        margin-top: -17px;
        margin-right: 0.1rem;
    }

    .image.logo {
        margin-top: 10px;
        margin-bottom: 29px;
        width: 100px;
        height: 100px;
    }

    .add-feedback {
        display: inline-block;
        margin: 30px 0;
    }

    .buttons progress.progress {
        background-color: #FF5A5E;
        height: 5px;
    }

    /deep/ .progress-wrapper {
        margin-bottom: 15px;
    }

    /deep/ .progress-wrapper .progress {
        border-radius: 0;
        height: 5px;
        max-width: 325px;
    }

    a {
        color: #00C3AC;
        font-weight: bold;
        font-size: 14px;
        line-height: 19px;
    }

    .functional-buttons {
        margin-top: auto;
        margin-bottom: -31px;
    }

    .main-button {
        margin-bottom: 8px;
    }
</style>