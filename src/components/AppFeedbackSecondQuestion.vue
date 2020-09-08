<template>
    <div class="container is-centered">
        <h1 class="title">How did DDB rate against the following?</h1>

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
import AppStarsRaitingWithDescription from './AppStarsRaitingWithDescription'

export default {
    components: {
        AppStarsRaitingWithDescription,
    }
}
</script>

<style scoped>
    h1.title {
        margin-bottom: 1.2rem;
        color: black;
        max-width: 222px;
        margin: auto;
        font-size: 20px;
        font-weight: bold;
        line-height: 27px;
    }
</style>
