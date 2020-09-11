<template>
    <div class="container">
        <AppFeedbackHeader class="title">{{ question.text }}</AppFeedbackHeader>

        <p v-if="!checkedStar">
            {{ question.description }}
        </p>
        <p v-else>
            {{getOptions().description}}
        </p>

        <AppStarsRaiting 
            class="stars-raiting"
            size="33px"
            maxSize="39px"
            @toggleStar="onToggleStar"
        />

        <div class="columns is-mobile is-multiline" v-if="checkedStar">
            <div 
                class="column is-half star-options"
                v-for="(tag, i) in getOptions().tags"
                :key="i"
            >
                <b-button outlined>{{ tag }}</b-button>
            </div>
        </div>
    </div>
</template>

<script>
import AppFeedbackHeader from './AppFeedbackHeader'
import AppStarsRaiting from './AppStarsRaiting'

export default {
    components: {
        AppFeedbackHeader,
        AppStarsRaiting,
    },
    props: {
        question: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            checkedStar: null,
        }
    },
    methods: {
        onToggleStar(star) {
            this.checkedStar = star
        },
        getOptions() {
            return this.checkedStar <= 3 ? this.question.options['3'] : this.question.options['5']
        },
    }
}
</script>

<style scoped>
    p {
        font-size: 14px;
        font-weight: 300;
        line-height: 19px;
        color: #9B9B9B;
    }

    .title {
        margin-bottom: 1.2rem;
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