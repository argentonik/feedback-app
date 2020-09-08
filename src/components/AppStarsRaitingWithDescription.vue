<template>
    <div class="columns is-mobile">
        <div class="column description">
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

<style scoped>
    .column {
        padding-left: 0;
        padding-right: 0;
    } 

    .description {
        font-size: 12px;
        font-weight: 300;
        text-align: left;
    }
</style>