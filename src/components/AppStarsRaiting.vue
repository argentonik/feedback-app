<template>
    <div 
        class="columns stars is-centered is-mobile is-gapless"
        :style="cssProps"
    >
        <figure 
            v-for="n in 5" :key="n"
            :class="['image', 'column', 'star', `star-${n}`]"
            @click="toogleStars(n)"
        >
            <AppStar :ref="`star-${n}`" />
        </figure>
    </div>
</template>

<script>
import AppStar from './AppStar'

export default {
    components: {
        AppStar,
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
    data() {
        return {
            currentStar: -1,
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
        toogleStars(selectedStar) {
            let previousSelectedStar = this.$refs['star-'.concat(this.currentStar)]
            if (previousSelectedStar) {
                for(let i = this.currentStar; i > 0; i--) {
                    this.$refs['star-'.concat(i)][0].selected = false
                }
            }

            this.currentStar = selectedStar
            for(let i = selectedStar; i > 0; i--) {
                if (selectedStar <= 3) {
                    this.$refs['star-'.concat(i)][0].selectedColor = 'black'
                } else {
                    this.$refs['star-'.concat(i)][0].selectedColor = '#FF5A5E'
                }
                this.$refs['star-'.concat(i)][0].selected = true
            }
        },
    }
}
</script>

<style scoped>
    .star {
        max-width: var(--star-max-width);
    }

    .star svg {
        height: var(--star-height);
        width: var(--star-width);
        cursor: pointer;
    }
</style>