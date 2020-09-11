<template>
    <div class="container">
        <AppFeedbackHeader class="title">{{ question.text }}</AppFeedbackHeader>

        <p v-if="!checkedStar">
            {{ question.description }}
        </p>
        <p v-else>
            {{getOptions().description}}
        </p>

        <AppStarsRaiting 
            class="stars-raiting"
            size="33px"
            maxSize="39px"
            @toggleStar="onToggleStar"
        />

        <div class="columns is-mobile is-multiline" v-if="checkedStar">
            <div 
                :class="['column', 'is-half', 'star-options', `star-option-${i}`]"
                v-for="(tag, i) in getOptions().tags"
                :key="i"
                @click="onStarOptionClick(i, tag)"
            >
                <b-button outlined>{{ tag }}</b-button>
            </div>
        </div>
    </div>
</template>

<script>
import AppFeedbackHeader from './AppFeedbackHeader'
import AppStarsRaiting from './AppStarsRaiting'

export default {
    components: {
        AppFeedbackHeader,
        AppStarsRaiting,
    },
    props: {
        question: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            checkedStar: null,
            selectedTags: [],
            selectedTagsIndices: [],
        }
    },
    methods: {
        onToggleStar(star) {
            if (!(this.checkedStar <= 3 && star <= 3) && !(this.checkedStar > 3 && star > 3)) {
                this.unselectAllSelectedTags()
            }
            this.checkedStar = star
        },

        onStarOptionClick(index, tag) {
            if (this.selectedTagsIndices.includes(index)) {
                this.selectedTagsIndices = this.selectedTagsIndices.filter(item => item !== index)
                this.selectedTags = this.selectedTags.filter(item => item !== tag)
                this.$el.querySelector('.star-option-'.concat(index)).classList.remove('selected')
            } else {
                this.selectedTagsIndices.push(index)
                this.selectedTags.push(tag)
                this.$el.querySelector('.star-option-'.concat(index)).classList.add('selected')
            }
        },

        unselectAllSelectedTags() {
            this.selectedTagsIndices.forEach(index => {
                this.$el.querySelector('.star-option-'.concat(index)).classList.remove('selected')
            })
            this.selectedTags = []
            this.selectedTagsIndices = []
        },

        getOptions() {
            return this.checkedStar <= 3 ? this.question.options['3'] : this.question.options['5']
        },
    }
}
</script>

<style scoped>
    p {
        font-size: 14px;
        font-weight: 300;
        line-height: 19px;
        color: #9B9B9B;
    }

    .title {
        margin-bottom: 1.2rem;
    }

    .stars-raiting {
        margin-top: 1rem;
    }

    .star-options .button {
        background-color: transparent;
        border-color: #FF5A5E;
        color: #FF5A5E;
        border-radius: 0;
        height: 35px;
    }

    .star-options.selected .button {
        border-color: #FF5A5E;
        background-color: #FF5A5E;
        color: white;
    }
</style>