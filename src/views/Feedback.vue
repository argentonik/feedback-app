<template>
    <div class="feedback-view container">
        <div class="level is-mobile">
            <div class="level-left"></div>

            <div class="level-right skip-button">
                <a class="level-item" href="#">Skip</a>
            </div>
        </div>

        <div class="column">
            <figure class="image container">
                <img src="../assets/images/logo.png">
            </figure>

            <h1 class="title is-5">How was DDB this week?</h1>

            <p>Your feedback helps improve DDB’s service delivery.</p>

            <div class="columns is-centered is-mobile is-gapless">
                <figure 
                    v-for="n in numbers" v-bind:key="n"
                    class="image column star"
                >
                    <img src="../assets/images/star.png">
                </figure>
            </div>

            <div class="columns is-mobile">
                <div class="column star-options">
                    <div class="columns is-mobile">
                        <div class="column">
                            <b-button outlined>Text 1</b-button>
                        </div>
                        <div class="column">
                            <b-button outlined>Text 2</b-button>
                        </div>
                    </div>
                    <div class="columns is-mobile">
                        <div class="column is-mobile">
                            <b-button outlined>Text 3</b-button>
                        </div>
                        <div class="column">
                            <b-button outlined>Text 4</b-button>
                        </div>
                    </div>
                    <div class="columns is-mobile">
                        <div class="column">
                            <b-button outlined>Text 5</b-button>
                        </div>
                        <div class="column">
                            <b-button outlined>Text 6</b-button>
                        </div>
                    </div>
                </div>
            </div>

            <a href="#">Add feedback</a>

            <b-progress type="is-danger" :value="33"></b-progress>

            <div class="buttons">
                <b-button>Continue</b-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            numbers: [ 1, 2, 3, 4, 5 ]
        }
    },
}
</script>

<style scoped>
    .feedback-view {
        height: 100%;
    }

    .level.is-mobile .level-right.skip-button {
        margin-top: -17px;
        margin-right: 0.1rem;
        font-size: 14px;
        line-height: 19px;
    }

    .image {
        margin-top: -0.2rem;
        margin-bottom: 1.9rem;
        width: 100px;
        height: 100px;
    }

    h1.title {
        color: black;
    }

    .star {
        max-width: 33px;
        max-height: 33px;
    }

    .star-options .button {
        background-color: transparent;
        border-color: #FF5A5E;
        color: #FF5A5E;
        border-radius: 0;
        height: 35px;
    }

    a {
        color: #00C3AC;
        font-weight: bold;
    }
</style>