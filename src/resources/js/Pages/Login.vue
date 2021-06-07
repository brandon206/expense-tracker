<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Login form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <LoginForm 
                            v-if="loginMode"
                            @emailInput="updateEmail"
                            @passwordInput="updatePassword"
                        />
                        <RegistrationForm 
                            v-else
                            v-model="formData"
                        />
                    </v-card-text>
                    <v-card-actions>
                        <div>
                            <Button
                                v-if="loginMode"
                                color="grey darken-2" 
                                text="Register"
                                tooltip-text="Register for account"
                                :onClick="handleRegistration"
                            />
                        </div>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Button from '../components/Button';
import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';

export default {
    components: {
        Button,
        LoginForm,
        RegistrationForm,
    },
    data() {
        return {
            loginMode: true,
        };
    },
    methods: {
        // updateEmail() {
        //     if (event.target) {
        //         this.formData.email = event.target.value;
        //     }
        // },
        // updatePassword() {
        //     if (event.target) {
        //         this.formData.password = event.target.value;
        //     }
        // },
        showRegistrationForm() {
            this.loginMode = false;
        },
        handleRegistration() {
            if (this.loginMode) {
                this.showRegistrationForm();
            } else {
                this.register();
            }
        },
    }
};
</script>

<style></style>
