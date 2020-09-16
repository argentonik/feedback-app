<template>
    <div class="container">
        <AppFeedbackHeader class="title">{{ question.text }}</AppFeedbackHeader>

        <p class="description" v-if="!checkedStar">
            {{ question.description }}
        </p>
        <p class="description-pre" v-else>
            {{ getOptions().description }}
        </p>

        <AppStarsRaiting 
            class="stars-raiting"
            size="33px"
            maxSize="40px"
            :defaultValue="isAlreadyExistAnswer() ? this.answer.rating : null"
            @toggleStar="onToggleStar"
        />

        <div class="columns is-mobile is-multiline options" v-if="checkedStar">
            <div 
                :class="['column', 'is-half', 'star-options', `star-option-${i}`]"
                v-for="(tag, i) in getOptions().tags"
                :key="i"
                @click="onStarOptionClick(i, tag)"
            >
                <div :class="disabled ? 'disabled' : ''" outlined><span>{{ tag }}</span></div>
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
        answer: {
            type: Object,
            default: null,
        }
    },
    data() {
        return {
            checkedStar: this.answer ? this.answer.rating : null,
            selectedTags: this.answer ? this.answer.tags : [],
            selectedTagsIndices: [],
            disabled: false,
        }
    },
    mounted() {
        if (this.answer && this.selectedTags.length) {
            this.disabled = true
            this.$el.querySelectorAll('.star-options').forEach(starOption => {
                if (this.selectedTags.includes(starOption.firstElementChild.textContent)) {
                    starOption.classList.add('selected')
                }
            })
        }
    },
    methods: {
        onToggleStar(star) {
            if (this.disabled) {
                return
            }

            if (!(this.checkedStar <= 3 && star <= 3) && !(this.checkedStar > 3 && star > 3)) {
                this.unselectAllSelectedTags()
            }
            this.checkedStar = star
            this.$emit('selectStar', star)
        },

        onStarOptionClick(index, tag) {
            if (this.disabled) {
                return
            }

            if (this.selectedTagsIndices.includes(index)) {
                this.selectedTagsIndices = this.selectedTagsIndices.filter(item => item !== index)
                this.selectedTags = this.selectedTags.filter(item => item !== tag)
                this.$el.querySelector('.star-option-'.concat(index)).classList.remove('selected')
            } else {
                this.selectedTagsIndices.push(index)
                this.selectedTags.push(tag)
                this.$el.querySelector('.star-option-'.concat(index)).classList.add('selected')
            }
            this.$emit('selectTag', this.selectedTags)
        },

        unselectAllSelectedTags() {
            this.selectedTagsIndices.forEach(index => {
                this.$el.querySelector('.star-option-'.concat(index)).classList.remove('selected')
            })
            this.selectedTags = []
            this.selectedTagsIndices = []
            this.$emit('selectTag', this.selectedTags)
        },

        getOptions() {
            return this.checkedStar <= 3 ? this.question.options['3'] : this.question.options['5']
        },

        isAlreadyExistAnswer() {
            return this.answer && this.checkedStar && this.selectedTags ? true : false
        }
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

    .description {
        margin: auto;
        margin-top: 14px;
        max-width: 204px;
    }

    .description-pre {
        line-height: 30px;
        margin-top: 9px;
        margin-bottom: -17px;
        white-space: pre-wrap;
    }

    .stars-raiting {
        margin-top: 1rem;
    }

    .options {
        padding-top: 4px;
    }

    /deep/ .column.star-options {
        padding: 12px 5px 3px 10px;
    }

    .star-options div {
        border-style: solid;
        background-color: transparent;
        border-color: #FF5A5E;
        border-width: 1.5px;
        color: #FF5A5E;
        border-radius: 0;
        height: 35px;
        cursor: pointer;
        font-size: 12px;
        font-weight: bold;
        min-width: 155px;
        max-width: 155px;
    }

    .star-options div span {
        display: inline-block;
        margin-top: 7px;
    }

    .star-options.selected div {
        border-color: #FF5A5E;
        background-color: #FF5A5E;
        color: white;
    }

    .star-options div.disabled {
        opacity: 1;
        cursor: default;
    }
</style>