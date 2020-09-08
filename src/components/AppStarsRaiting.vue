<template>
    <div 
        class="columns stars is-centered is-mobile is-gapless"
        :style="cssProps"
    >
        <figure 
            v-for="s in stars" v-bind:key="s"
            class="image column star"
        >
            <img src="../assets/images/star.png">
        </figure>
    </div>
</template>

<script>
export default {
    data() {
        return {
            stars: [ 1, 2, 3, 4, 5 ]
        }
    },
    props: {
        size: {
            type: String,
            required: true,
        },
        maxSize: {
            type: String,
            required: true,
        }
    },
    computed: {
        cssProps() {
            return {
                '--star-width': this.size,
                '--star-height': this.size,
                '--star-max-width': this.maxSize,
            }
        }
    }
}
</script>

<style scoped>
    .star {
        max-width: var(--star-max-width);
    }

    .star img {
        height: var(--star-height);
        width: var(--star-width);
        cursor: pointer;
    }
</style>