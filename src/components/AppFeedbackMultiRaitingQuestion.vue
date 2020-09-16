<template>
    <div class="container is-centered">
        <AppFeedbackHeader class="title">{{question.text}}</AppFeedbackHeader>

        <div class="colums is-mobile raiting-container" v-if="answer.length">
            <div class="column" v-for="(raitingItem, i) in answer" :key="i">
                <AppStarsRaitingWithDescription
                    :raiting="raitingItem.rating"
                    :description="raitingItem.indicator"
                    @selectStar="onSelectRaiting"
                />
            </div>
        </div>

        <div class="colums is-mobile raiting-container" v-else>
            <div class="column" v-for="(indicator, i) in question.options.indicators" :key="i">
                <AppStarsRaitingWithDescription
                    :description="indicator"
                    @selectStar="onSelectRaiting"
                />
            </div>
        </div>
    </div>
</template>

<script>
import AppFeedbackHeader from './AppFeedbackHeader'
import AppStarsRaitingWithDescription from './AppStarsRaitingWithDescription'

export default {
    components: {
        AppFeedbackHeader,
        AppStarsRaitingWithDescription,
    },
    props: {
        question: {
            type: Object,
            required: true,
        },
        answer: {
            default: []
        }
    },
    methods: {
        onSelectRaiting(raitingData) {
            this.$emit('selectRaiting', raitingData)
        }
    }
}
</script>

<style scoped>
    .title {
        margin-bottom: 1.2rem;
        max-width: 222px;
    }

    .container {
        min-width: 320px;
    }

    .raiting-container {
        margin-top: 4px;
    }
</style>
