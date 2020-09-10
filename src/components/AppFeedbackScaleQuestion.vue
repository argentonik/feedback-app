<template>
    <div class="container is-centered">
        <AppFeedbackHeader class="title">
            {{ question.text }}
        </AppFeedbackHeader>

        <AppFromOneToTenRaiting />
    </div>
</template>

<script>
import AppFeedbackHeader from './AppFeedbackHeader'
import AppFromOneToTenRaiting from './AppFromOneToTenRaiting'

export default {
    components: {
        AppFeedbackHeader,
        AppFromOneToTenRaiting,
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
        max-width: 275px;
    }
</style>