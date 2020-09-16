<template>
    <div class="grades">
        <div class="columns is-mobile is-centered">
            <div 
                :class="['column', 'grade', `grade-${i}`, disabled ? 'grade-disabled' : '']" 
                v-for="(n, i) in 6" :key="i"
                @click="onClickGrade(i)"
            >
                {{ i }}
            </div>
        </div>

        <p class="grade-one-description">Not at all</p>

        <div class="columns is-mobile is-centered grade-second-line">
            <div 
                :class="['column', 'grade', 'grade-after-five', `grade-${i + 6}`, disabled ? 'grade-disabled' : '']" 
                v-for="(n, i) in 5" 
                :key="i + 6"
                @click="onClickGrade(i + 6)"
            >
                {{ i + 6 }}
            </div>
        </div>

        <p class="grade-ten-description">Extremely</p>
    </div>
</template>

<script>
export default {
    props: {
        defaultGrade: {
            default: null,
        }
    },
    data() {
        return {
            currentGrade: -1,
            disabled: this.defaultGrade != null
        }
    },
    mounted() {
        if (this.defaultGrade) {
            this.currentGrade = this.defaultGrade
            this.$el.querySelector('.grade-'.concat(this.currentGrade)).classList.add('selected')
        }
    },
    methods: {
        onClickGrade(i) {
            if (this.disabled) {
                return
            }

            let previousSelectedGrade = this.$el.querySelector('.grade-'.concat(this.currentGrade))
            if (previousSelectedGrade) {
                previousSelectedGrade.classList.remove('selected')
            }
            
            this.currentGrade = i
            this.$el.querySelector('.grade-'.concat(i)).classList.add('selected')

            this.$emit('selectGrade', i)
        }
    },
}
</script>

<style scoped>
    .columns {
        margin-top: 29px;
    }

    .grade {
        width: 40px;
        height: 40px;
        max-width: 40px;
        margin-right: 9px;
        margin-left: 6px;
        background-color: #E0E0E0;
        border-radius: 50%;
        text-align: center;
        cursor: pointer;
    }

    .grade-second-line {
        margin-top: 21px;
    }

    .grade-after-five {
        margin-right: 8px;
        margin-left: 7px;
    }

    .selected {
        background-color: #FF5A5E;
        color: white;
    }

    .grade-one-description {
        text-align: left;
        margin-top: -7px;
        margin-left: -8px;
    }

    .grade-ten-description {
        text-align: right;
        margin-top: -8px;
        margin-right: 16px;
    }

    .grade-disabled {
        cursor: default;
    }
</style>