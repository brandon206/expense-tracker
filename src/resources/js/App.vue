<template>
    <v-app>
        <div>
            <Navbar />
            <v-main>
                <router-view />
            </v-main>
        </div>
    </v-app>
</template>

<script>
import "./Styles/app.scss";
import Navbar from "./components/Navbar";

export default {
    name: "app",
    components: {
        Navbar,
    },
};
</script>

<style></style>
