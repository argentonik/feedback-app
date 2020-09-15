<template>
    <AppFeedbackHeader>{{ message }}</AppFeedbackHeader>
</template>

<script>
import AppFeedbackHeader from './AppFeedbackHeader'

export default {
    props: {
        message: {
            type: String,
            default: 'Thanks',
        }
    },
    components: {
        AppFeedbackHeader,
    }
}
</script>