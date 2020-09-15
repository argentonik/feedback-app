<template>
    <div class="container">
        <div class="container">
            <h1 class="login-title">
                Reset password
            </h1>
        </div>

        <p v-if="errorMessage" class="error-message">{{errorMessage}}</p>

        <div class="container">
            <form                 
                method="POST" 
                @submit.prevent="onSubmit"
            >
                <b-field>
                    <b-input 
                        :key="passwordType"
                        v-if="passwordType" 
                        v-model="password" 
                        type="password" 
                        placeholder="Enter your password"></b-input>
                    <b-input v-else v-model="password" type="text" placeholder="Enter your password"></b-input>
                </b-field>

                <b-field>
                    <b-input 
                        :key="passwordType"
                        v-if="passwordType" 
                        v-model="passwordConfirm" 
                        type="password" 
                        placeholder="Confirm your password"></b-input>
                    <b-input v-else v-model="password" type="text" placeholder="Confirm your password"></b-input>
                </b-field>

                <div class="columns is-mobile">
                    <div class="column"></div>

                    <div class="column show-password">
                        <a @click="onPasswordTypeSwitch">{{ passwordSwitchLabel }}</a>
                    </div>
                </div>

                <b-button native-type="submit">Change</b-button>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            password : "",
            passwordConfirm: '',
            passwordType: true,
            passwordSwitchLabel: 'Show password',
            resetData: {},
            errorMessage: '',
        }
    },
    mounted() {
        this.resetData = {
            token: this.$route.query.token,
            email: this.$route.query.email,
        }
    },
    methods: {
        ...mapActions({
            resetPassword: 'authentication/resetPassword'
        }),

        onSubmit: function () {
            this.resetData.password = this.password
            this.resetData.password_confirmation = this.passwordConfirm
            
            this.resetPassword(this.resetData)
                .then(() => {
                    this.errorMessage = ''
                    this.$router.push('/')
                })
                .catch(error => {
                    this.errorMessage = error.response.data.message
                })
        },

        onPasswordTypeSwitch() {
            this.passwordType = !this.passwordType
            this.passwordSwitchLabel = this.passwordSwitchLabel == 'Show password' 
                ? 'Hide password' : 'Show password'
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

    .error-message {
        font-size: 20px;
        line-height: 27px;
        color: #FF5A5E;
        text-align: center;
    }
</style>