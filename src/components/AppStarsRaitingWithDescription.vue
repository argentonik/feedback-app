<template>
    <div class="columns is-mobile">
        <div class="column">
            {{ this.description }}
        </div>
        <div class="column">
            <AppStarsRaiting
                size="20px"
                maxSize="23px"
            />
        </div>
    </div>
</template>

<script>
import AppStarsRaiting from './AppStarsRaiting'

export default {
    components: {
        AppStarsRaiting,
    },
    props: {
        stars: {
            type: Number,
            required: false,
        },
        description: {
            type: String,
            required: true,
        }
    }
}
</script>