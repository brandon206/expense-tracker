<template>
    <v-form>
        <v-text-field
            v-model="formData.email"
            :error-messages="errors.email"
            prepend-icon="mdi-at"
            name="email"
            label="email"
            type="text"
        ></v-text-field>
        <v-text-field
            v-model="formData.password"
            :error-messages="errors.password"
            id="password"
            prepend-icon="mdi-lock"
            name="password"
            label="Password"
            type="password"
        ></v-text-field>
    </v-form>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                email: "",
                password: "",
                device_name: "browser"
            },
            data: {},
            errors: {}
        };
    },
    methods: {
        login() {
            axios
                .post("api/login", this.formData)
                .then(response => {
                    this.data = response.data;
                })
                .catch(errors => {
                    this.errors = errors.response.data.errors;
                });
        }
    }
};
</script>

<style></style>
