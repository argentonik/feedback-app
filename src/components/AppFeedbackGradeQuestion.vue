<template>
    <div class="container is-centered">
        <AppFeedbackHeader class="title">
            {{ question.text }}
        </AppFeedbackHeader>

        <AppFromOneToTenRaiting 
            :defaultGrade="answer.value"
            @selectGrade="onSelectGrade" 
        />
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
        answer: {
            type: Object,
            default: null,
        }
    },
    methods: {
        onSelectGrade(i) {
            this.$emit('selectValue', i)
        }
    },
}
</script>

<style scoped>
    /deep/ h1.title {
        max-width: 275px;
        line-height: 28px;
    }

    .container {
        margin-top: 27px;
    }
</style>