<template>
    <div class="container">
        <div class="container">
            <h1 class="login-title">
                Change password
            </h1>
        </div>

        <div class="container">
            <form
                method="POST" 
                @submit.prevent="onSubmit"
                v-if="!this.send"
            >
                <b-field>
                    <b-input v-model="email" placeholder="Enter your email"></b-input>
                </b-field>

                <b-button native-type="submit">Send letter to change password</b-button>

                <p>Already have an account? <router-link to="/">Log in</router-link></p>

                <p>Need help or have a question, <a href="mailto:qwertf030915@gmail.com">get in touch</a>.</p>
            </form>

            <div :class="['message', success ? 'success' : 'failed']" v-else>
                <p>{{this.message}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions} from 'vuex'

export default {
    data() {
        return {
            email : "",
            send: false,
            message: '',
            success: false,
        }
    },
      methods: {
        ...mapActions({
            sendEmailForResetPassword: 'authentication/sendEmailForResetPassword'
        }),

        onSubmit: function () {
            let email = this.email

            this.sendEmailForResetPassword({email})
                .then((resp) => {
                    this.send = true
                    this.success = true
                    this.message = resp.data.message
                })
                .catch(error => {
                    this.send = true
                    this.success = false
                    this.message = error.response.data.message
                })
        }
    }
}
</script>

<style scoped>
    /deep/ input.input {
        height: 45px;
        width: 325px;
        font-weight: 300;
        font-size: 14px;
        padding: 0.9rem;
        padding-top: 0.7rem;
    }

    /deep/ .b-checkbox.checkbox input[type=checkbox] + .check {
        border: 1px solid #E7E7E7;
    }

    .login-title {
        font-size: 20px;
        margin-top: 0.4rem;
        margin-bottom: 2.3rem;
        font-weight: bold;
        color: black;
    }

    .button {
        margin-top: 15px;
        margin-bottom: 20px;
    }

    a {
        color: #00C3AC;
    }

    p {
        text-align: left;
        margin-bottom: 0.5rem;
        background: white;
        text-align: center;
    }

    .message {
        font-size: 20px;
        line-height: 27px;
    }

    .success {
        color: #00C3AC;
    }

    .failed {
        color: #FF5A5E;
    }
</style>