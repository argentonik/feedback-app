<template>
    <div class="container">
        <div class="container">
            <h1 class="login-title">
                Log in
            </h1>
        </div>

        <div class="container">
            <form                 
                method="POST" 
                @submit.prevent="onLogin"
            >
                <b-field>
                    <b-input v-model="email" placeholder="Enter your email"></b-input>
                </b-field>

                <b-field>
                    <b-input v-model="password" type="password" placeholder="Enter your password"></b-input>
                </b-field>

                <div class="columns">
                    <div class="column remember-me">
                        <b-field>
                            <b-checkbox>Remember me</b-checkbox>
                        </b-field>
                    </div>

                    <div class="column show-password">
                        <a link="#">Show password</a>
                    </div>
                </div>

                <b-button native-type="submit">Login</b-button>

                <a link="#" class="forgot-password">Forgot password</a>

                <p>Don't have an account? <router-link to="/signup">Sign up</router-link></p>

                <p>Need help or have a question, <a link="#">get in touch</a>.</p>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            email : "",
            password : "",
        }
    },
    methods: {
        ...mapActions({
            login: 'authentication/login'
        }),

        onLogin: function () {
            let email = this.email 
            let password = this.password
            
            this.login({ email, password })
                .then(() => {
                    this.$router.push('/')
                })
                .catch(error => {
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
        margin-top: 0.4rem;
        margin-bottom: 2.3rem;
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
    }

    .column.show-password {
        text-align: right;
    }

    .forgot-password {
        display: inline-block;
        margin: 1rem;
    }
</style>