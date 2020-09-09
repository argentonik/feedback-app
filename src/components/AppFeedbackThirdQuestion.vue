<template>
    <div class="container is-centered">
        <AppFeedbackHeader class="title">
            How likely is it that you would recommend DDB to a friend or colleague?
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
    }
}
</script>

<style scoped>
    .title {
        max-width: 275px;
    }
</style>