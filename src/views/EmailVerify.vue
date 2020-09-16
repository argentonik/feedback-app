<template>
    <div class="container" v-if="message">
        <div class="container">
            <h1 class="success-title">
                {{verified ? 'Success verified' : 'Failed verified'}}
            </h1>
        </div>

        <div class="container">
          <p :class="[verified ? 'success' : 'failed']">{{message}}</p>
          <router-link v-if="verified" to="/login">Log in</router-link>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            verified: false,
            message: '',
        }
    },
    mounted() {
        let verifyData = {
            id: this.$route.params.id,
            hash: this.$route.params.hash,
            expires: this.$route.query.expires,
            signature: this.$route.query.signature,
        }
        this.emailVerify(verifyData)
            .then(resp => {
                this.message = resp.data.message
                this.verified = true
            })
            .catch(error => {
                this.message = error.response.data.message
                this.verified = false
            })
    },
    methods: {
        ...mapActions({
            emailVerify: 'authentication/emailVerify'
        }),
    }
}
</script>

<style scoped>
    .success-title {
        font-size: 20px;
        margin-top: 0.4rem;
        margin-bottom: 2.3rem;
        font-weight: bold;
        color: black;
    }

    p {
        font-size: 20px;
        line-height: 27px;
    }

    a {
        color: #00C3AC;
        display: inline-block;
        margin-top: 20px;
        font-size: 14px;
    }

    .success {
        color: #00C3AC;
    }

    .failed {
        color: #FF5A5E;
    }
</style>