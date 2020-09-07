<template>
    <div class="container">
        <h1 class="title is-5">Add Feedback</h1>

        <b-field>
            <b-input 
                placeholder="What did they do well at or what went wrong?"
                type="textarea"
                min="10"
            ></b-input>
        </b-field>

        <a @click="onBackClick" class="back-button">Back</a>
        <a class="save-button">Save</a>
    </div>
</template>

<script>
export default {
    methods: {
        onBackClick() {
            this.$emit('backButtonClick');
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