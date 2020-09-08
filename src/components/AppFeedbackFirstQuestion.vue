<template>
    <div class="container">
        <h1 class="title is-5">How was DDB this week?</h1>

        <p>Your feedback helps improve</p>
        <p>DDB’s service delivery.</p>

        <AppStarsRaiting 
            class="stars-raiting"
            size="33px"
            maxSize="39px"
        />

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
import AppStarsRaiting from './AppStarsRaiting'

export default {
    components: {
        AppStarsRaiting,
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

    .stars-raiting {
        margin-top: 1rem;
    }

    .star-options .button {
        background-color: transparent;
        border-color: #FF5A5E;
        color: #FF5A5E;
        border-radius: 0;
        height: 35px;
    }
</style>