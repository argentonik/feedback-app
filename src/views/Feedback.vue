<template>
    <div class="feedback-view container">
        <div class="level is-mobile">
            <div class="level-left">
                <a 
                    class="level-item"
                    v-if="question != 1"
                >
                    <img 
                        src="../assets/images/back.png" 
                        class="back-button" 
                        v-if="question <= totalQuestions"
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
                <AppFeedbackFirstQuestion v-if="question == 1"/>
                <AppFeedbackSecondQuestion v-else-if="question == 2"/>
                <AppFeedbackThirdQuestion v-else-if="question == 3"/>
                <AppFeedbackFinish v-else />

                <a 
                    class="add-feedback" 
                    v-if="question <= totalQuestions"
                    @click="isWritingFeedback = true"
                >
                    Add feedback
                </a>
            </div>

            <b-progress type="is-danger" :value="progress"></b-progress>

            <div class="buttons">
                <b-button @click="onContinue" v-if="question <= totalQuestions">Continue</b-button>
                <b-button @click="onClose" v-else>Close</b-button>
            </div>
        </div>
    </div>
</template>

<script>
import AppFeedbackAdd from '../components/AppFeedbackAdd'
import AppFeedbackFirstQuestion from '../components/AppFeedbackFirstQuestion'
import AppFeedbackSecondQuestion from '../components/AppFeedbackSecondQuestion'
import AppFeedbackThirdQuestion from '../components/AppFeedbackThirdQuestion'
import AppFeedbackFinish from '../components/AppFeedbackFinish'

export default {
    components: {
        AppFeedbackAdd,
        AppFeedbackFirstQuestion,
        AppFeedbackSecondQuestion,
        AppFeedbackThirdQuestion,
        AppFeedbackFinish,
    },
    data() {
        return {
            question: 1,
            totalQuestions: 3,
            isWritingFeedback: false,
            progress: 33,
        }
    },
    watch: {
        question(val) {
            this.progress = val * 33
        }
    },
    methods: {
        onBack() {
            this.question--
        },

        onSkip() {
            this.question++
        },

        onContinue() {
            this.question++
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