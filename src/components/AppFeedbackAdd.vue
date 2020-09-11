<template>
    <div class="container">
        <h1 class="title is-5">Add Feedback</h1>

        <b-field>
            <b-input 
                placeholder="What did they do well at or what went wrong?"
                type="textarea"
                min="10"
                v-model="feedback"
                :disabled="disabled"
            ></b-input>
        </b-field>

        <a class="back-button" @click="onBack">Back</a>
        <a class="save-button" @click="onSave">Save</a>
    </div>
</template>

<script>
export default {
    props: {
        defaultFeedback: {
            type: String,
            default: null,
        }
    },
    data() {
        return {
            feedback: this.defaultFeedback ? this.defaultFeedback : null,
            disabled: this.defaultFeedback ? true : false,
        }
    },
    methods: {
        onBack() {
            this.$emit('backButtonClick')
        },

        onSave() {
            this.$emit('saveButtonClick', this.feedback)
        }
    }
}
</script>

<style scoped>
    a {
        color: #00C3AC;
        font-weight: bold;
        font-size: 14px;
        line-height: 19px;
    }

    /deep/ .textarea {
        resize: none;
        font-size: 14px;
        line-height: 19px;
        height: 252px;
    }

    h1.title {
        margin-bottom: 1.2rem;
        color: black;
    }

    .field {
        margin-bottom: 1rem;
    }

    .back-button {
        display: inline-block;
        margin-right: 2rem;
        margin-bottom: 1rem;
    }
</style>