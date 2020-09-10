<template>
    <div class="container is-centered">
        <AppFeedbackHeader class="title">{{question.text}}</AppFeedbackHeader>

        <div class="colums is-mobile">
            <div class="column" v-for="(indicator, i) in question.options.indicators" :key="i">
                <AppStarsRaitingWithDescription
                    :description="indicator"
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
    },
}
</script>

<style scoped>
    .title {
        margin-bottom: 1.2rem;
        max-width: 222px;
    }
</style>
