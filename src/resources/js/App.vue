<template>
    <v-app>
        <div>
            <!-- <Navbar /> -->
            <Navbar />
            <v-content>
                <router-view />
            </v-content>
        </div>
    </v-app>
</template>

<script>
import "./Styles/app.scss";
import Navbar from "./Components/Navbar";

export default {
    name: "app",
    components: {
        Navbar,
    },
};
</script>

<style></style>
