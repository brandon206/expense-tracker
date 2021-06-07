<template>
    <v-form>
        <TextField
            :fullName="formData.name"
            v-on:update="formData.name = $event"
            icon="mdi-person"
            labelText="name"
        ></TextField>
        <TextField
            :email="formData.email"
            v-on:update="formData.email = $event"
            icon="mdi-at"
            labelText="email"
        ></TextField>
        <TextField
            :password="formData.password"
            v-on:update="formData.password = $event"
            icon="mdi-lock"
            labelText="password"
            type="password"
        ></TextField>
        <TextField
            :confirmedPassword="formData.password_confirmation"
            v-on:update="formData.password_confirmation = $event"
            icon="mdi-lock-check"
            labelText="password_confirmation"
            type="password"
        ></TextField>
        <Button
            :onClick="register"
            color="blue darken-2"
            text="Register"
        />
    </v-form>
</template>

<script>
import TextField from './TextField';
import Button from './Button';

export default {
    data() {
        return {
            formData: {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
            },
        };
    },
    components: {
        Button,
        TextField,
    },
    methods: {
        register() {
            debugger;
            axios
                .post("api/register", this.formData)
                .then(response => {
                    this.data = response.data;
                    this.$router.push({ name: 'overview' });
                })
                .catch(errors => {
                    this.errors = errors.response.data.errors;
                });
        }
    },
};
</script>

<style></style>
