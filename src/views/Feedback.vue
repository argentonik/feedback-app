<template>
    <div class="feedback-view container">
        <div class="level is-mobile">
            <div class="level-left"></div>

            <div class="level-right skip-button">
                <a class="level-item" href="#">Skip</a>
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
                <AppFeedbackSecondQuestion v-if="question == 2"/>

                <a 
                    class="add-feedback" 
                    @click="isWritingFeedback = true"
                >
                    Add feedback
                </a>
            </div>

            <b-progress type="is-danger" :value="33"></b-progress>

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

export default {
    data() {
        return {
            question: 1,
            totalQuestions: 3,
            isWritingFeedback: false,
        }
    },
    components: {
        AppFeedbackAdd,
        AppFeedbackFirstQuestion,
        AppFeedbackSecondQuestion,
    },
    methods: {
        onContinue() {
            this.question += 1
            console.log(this.question)
        }
    }
}
</script>

<style scoped>
    .feedback-view {
        height: 100%;
    }

    .level.is-mobile .level-right.skip-button {
        margin-top: -17px;
        margin-right: 0.1rem;
    }

    .image.logo {
        margin-top: -0.2rem;
        margin-bottom: 1.9rem;
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