<template>
    <div class="container">
        <h1 class="title is-5">How was DDB this week?</h1>

        <p>Your feedback helps improve</p>
        <p>DDB’s service delivery.</p>

        <div class="columns stars is-centered is-mobile is-gapless">
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
    p {
        font-size: 14px;
        font-weight: 300;
        line-height: 19px;
        color: #9B9B9B;
    }

    h1.title {
        margin-bottom: 1.2rem;
        color: black;
    }

    .stars {
        margin-top: 1rem;
    }

    .star {
        max-width: 39px;
    }

    .star img {
        height: 33px;
        width: 33px;
        cursor: pointer;
    }

    .star-options .button {
        background-color: transparent;
        border-color: #FF5A5E;
        color: #FF5A5E;
        border-radius: 0;
        height: 35px;
    }
</style>