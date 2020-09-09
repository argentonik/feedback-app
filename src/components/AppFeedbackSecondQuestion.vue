<template>
    <div class="container is-centered">
        <AppFeedbackHeader class="title">How did DDB rate against the following?</AppFeedbackHeader>

        <div class="colums is-mobile">
            <div class="column">
                <AppStarsRaitingWithDescription 
                    description="Understands my business"
                />
            </div>
            <div class="column">
                <AppStarsRaitingWithDescription 
                    description="Proactive with ideas"
                />
            </div>
            <div class="column">
                <AppStarsRaitingWithDescription 
                    description="Delivers quality creative"
                />
            </div>
            <div class="column">
                <AppStarsRaitingWithDescription 
                    description="On time and on budget"
                />
            </div>
            <div class="column">
                <AppStarsRaitingWithDescription 
                    description="Value of money"
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
    }
}
</script>

<style scoped>
    .title {
        margin-bottom: 1.2rem;
        max-width: 222px;
    }
</style>
