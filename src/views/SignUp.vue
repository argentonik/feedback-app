<template>
    <div class="container">
        <div class="container">
            <h1 class="login-title">
                Create an account
            </h1>
        </div>

        <p class="errors-message" v-if="error">{{ errorMessage }}</p>

        <div class="container">
            <form
                method="POST" 
                @submit.prevent="onRegister"
            >
                <b-field>
                    <b-input v-model="email" placeholder="Enter your email" required></b-input>
                </b-field>

                <b-field>
                    <b-input v-model="password" type="password" placeholder="Enter your password" required></b-input>
                </b-field>

                <div class="columns is-mobile">
                    <div class="column remember-me">
                        <b-field>
                            <b-checkbox>Remember me</b-checkbox>
                        </b-field>
                    </div>

                    <div class="column show-password">
                        <a link="#">Show password</a>
                    </div>
                </div>

                <b-button native-type="submit">Register</b-button>

                <p class="login">Already have an account? <router-link to="/login">Log in</router-link></p>

                <p class="get-in-touch">Need help or have a question, <a href="mailto:qwertf030915@gmail.com">get in touch</a>.</p>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions} from 'vuex'

export default {
    data() {
        return {
            email : "",
            password : "",
            error: false,
            errorMessage: '',
        }
    },
      methods: {
        ...mapActions({
            register: 'authentication/register'
        }),

        onRegister: function () {
            let email = this.email
            let password = this.password

            this.register({email, password})
                .then(() => {
                    this.error = false
                    this.$router.push('signup/success')
                })
                .catch(error => {
                    this.error = true
                    let errorData = error.response.data
                    if (errorData.errors && errorData.errors.email) {
                        this.errorMessage = errorData.errors.email[0]
                    } else if (errorData.errors && errorData.errors.password) {
                        this.errorMessage = errorData.errors.password[0]
                    } else {
                        this.errorMessage = 'Oops! That email/ password combination is not valid'
                    }
                    console.log(error)
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
        margin-top: 5px;
        margin-bottom: 38px;
        font-weight: bold;
        color: black;
    }

    a {
        color: #00C3AC;
    }

    p {
        text-align: left;
        margin-bottom: 0.5rem;
    }

    .field:not(:last-child) {
        margin-bottom: 0.9rem !important;
    }

    .column.remember-me {
        text-align: left;
        margin-bottom: 5px;
        margin-top: 1px;
        margin-left: 3px;
    }

    .column.show-password {
        text-align: right;
        margin-right: 4px;
        margin-top: 1px;
    }

    .forgot-password {
        display: inline-block;
        margin: 15px 3px 32px 0;
        font-size: 14px;
    }

    .login {
        margin-left: 2px;
        margin-top: 14px;
        margin-bottom: 16px;
    }

    .get-in-touch {
        margin-left: 2px;
    }

    .errors-message {
        margin: auto;
        margin-top: -18px !important;
        margin-bottom: 32px !important;
        max-width: 204px;
        font-size: 14px;
        line-height: 19px;
        color: #FF5A5E;
        text-align: center;
    }
</style>