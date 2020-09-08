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
        max-width: 219px;
        margin: auto;
        font-size: 20px;
        font-weight: bold;
        line-height: 27px;
    }
</style>
