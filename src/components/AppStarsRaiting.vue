<template>
    <div 
        class="columns stars is-centered is-mobile is-gapless"
        :style="cssProps"
    >
        <figure 
            v-for="n in 5" v-bind:key="n"
            class="image column star"
        >
            <img src="../assets/images/star.svg" @click="toogleStars($event)">
        </figure>
    </div>
</template>

<script>

export default {
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
    },
    methods: {
        toogleStars(event) {
            let selectedStar = event.target
            selectedStar.classList.toggle('selected')

            if (selectedStar.classList.contains('selected')) {
                selectedStar.src = require('../assets/images/selected-star.svg')
            } else {
                selectedStar.src = require('../assets/images/star.svg')
            }

            this.toogleNextSiblingStars(selectedStar)
            this.tooglePrevSiblingStars(selectedStar, selectedStar.src)
        },

        toogleNextSiblingStars(selectedStar) {
            let sibling = selectedStar.parentElement.nextSibling
            while (sibling) {
                sibling.firstElementChild.src = require('../assets/images/star.svg')
                sibling = sibling.nextSibling
            }
        },

        tooglePrevSiblingStars(selectedStar, selectedStarSrc) {
            let sibling = selectedStar.parentElement.previousSibling
            while (sibling) {
                sibling.firstElementChild.src = selectedStarSrc
                sibling = sibling.previousSibling
            }
        },
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