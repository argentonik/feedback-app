<template>
    <div 
        class="feedback-view container"
        v-if="currentQuestion"
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
                v-if="isWritingFeedback"
            >
                <AppFeedbackAdd @backButtonClick="isWritingFeedback = false" />
            </div>

            <div 
                class="container steps"
                v-else
            >
                <AppFeedbackRaitingWithTagsQuestion 
                    :question="currentQuestion"
                    v-if="currentQuestion.type.id == 1"/>
                <AppFeedbackMultiRaitingQuestion 
                    :question="currentQuestion"
                    v-else-if="currentQuestion.type.id == 2"/>
                <AppFeedbackScaleQuestion 
                    :question="currentQuestion"
                    v-else-if="currentQuestion.type.id == 3"/>
                <AppFeedbackFinish v-else />

                <a 
                    class="add-feedback" 
                    v-if="currentQuestionIndex <= totalQuestions - 1"
                    @click="isWritingFeedback = true"
                >
                    Add feedback
                </a>
            </div>

            <b-progress type="is-danger" :value="progress"></b-progress>

            <div class="buttons">
                <b-button @click="onContinue" v-if="currentQuestionIndex <= totalQuestions - 1">Continue</b-button>
                <b-button @click="onClose" v-else>Close</b-button>
            </div>
        </div>
    </div>
</template>

<script>
import AppFeedbackAdd from '../components/AppFeedbackAdd'

import AppFeedbackRaitingWithTagsQuestion from '../components/AppFeedbackRaitingWithTagsQuestion'
import AppFeedbackMultiRaitingQuestion from '../components/AppFeedbackMultiRaitingQuestion'
import AppFeedbackScaleQuestion from '../components/AppFeedbackScaleQuestion'

import AppFeedbackFinish from '../components/AppFeedbackFinish'

import { mapGetters, mapActions } from 'vuex'

export default {
    components: {
        AppFeedbackAdd,
        AppFeedbackRaitingWithTagsQuestion,
        AppFeedbackMultiRaitingQuestion,
        AppFeedbackScaleQuestion,
        AppFeedbackFinish,
    },

    data() {
        return {
            currentQuestionIndex: 0,
            currentQuestion: null,
            totalQuestions: null,
            isWritingFeedback: false,
            progress: 0,
            progressStep: 0,
        }
    },

    computed: mapGetters({
        servey: 'surveys/servey',
    }),

    watch: {
        currentQuestionIndex(index) {
            this.progress = (index + 1) * this.progressStep
        }
    },

    mounted() {
        this.getServeyById().then(() => {
            this.currentQuestion = this.servey.questions[0]
            this.totalQuestions = this.servey.questions.length
            this.progressStep = 100 / this.totalQuestions
            this.progress = this.progressStep

            console.log(this.totalQuestions)
        })
    },

    methods: {
        ...mapActions({
            getServeyById: 'surveys/getById'
        }),

        onBack() {
            this.currentQuestion = this.servey.questions[--this.currentQuestionIndex]
        },

        onSkip() {
            this.currentQuestion = this.servey.questions[++this.currentQuestionIndex]
        },

        onContinue() {
            this.currentQuestion = this.servey.questions[++this.currentQuestionIndex]
        },

        onClose() {

        },
    }
}
</script>

<style scoped>
    .feedback-view {
        height: 100%;
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
        margin-top: 32px;
        margin-bottom: 32px;
        width: 100px;
        height: 100px;
    }

    .add-feedback {
        display: inline-block;
        margin: 30px 0;
    }

    progress.progress {
        background-color: #FF5A5E;
        height: 5px;
    }

    /deep/ .progress-wrapper .progress {
        border-radius: 0;
        height: 5px;
    }

    a {
        color: #00C3AC;
        font-weight: bold;
        font-size: 14px;
        line-height: 19px;
    }
</style>