<template>
    <div class="feedback-view container">
        <div class="level is-mobile">
            <div class="level-left">
                <a 
                    class="level-item back-button"
                    v-if="question != 1"
                    @click="onBack"
                >
                    <img src="../assets/images/back.png">
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

                <a 
                    class="add-feedback" 
                    @click="isWritingFeedback = true"
                >
                    Add feedback
                </a>
            </div>

            <b-progress type="is-danger" :value="progress"></b-progress>

            <div class="buttons">
                <b-button @click="onContinue">Continue</b-button>
            </div>
        </div>
    </div>
</template>

<script>
import AppFeedbackAdd from '../components/AppFeedbackAdd'
import AppFeedbackFirstQuestion from '../components/AppFeedbackFirstQuestion'
import AppFeedbackSecondQuestion from '../components/AppFeedbackSecondQuestion'
import AppFeedbackThirdQuestion from '../components/AppFeedbackThirdQuestion'

export default {
    components: {
        AppFeedbackAdd,
        AppFeedbackFirstQuestion,
        AppFeedbackSecondQuestion,
        AppFeedbackThirdQuestion,
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
    }
}
</script>

<style scoped>
    .feedback-view {
        height: 100%;
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