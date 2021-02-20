<!-- <template>
  <nav class="navBar">
      <ul class="navBar__link">
          <li><router-link :to="{ name: 'home' }" exact></router-link></li>
          <li><router-link :to="{ name: 'about' }" exact></router-link></li>
      </ul>
  </nav>
</template> -->

<template>
    <v-layout row justify-center>
        <v-app-bar app
            dark
            color="blue-grey darken-1"
            class="hidden-xs-and-down"
        >
            <v-toolbar-title>Expense Tracker</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-tab
                    v-for="item in nav"
                    :key="item.id"
                    :to="item.href"
                    text
                    >{{ item.text }}</v-tab
                >
            </v-toolbar-items>
        </v-app-bar>
    </v-layout>
</template>

<script>
export default {
    name: 'navbar',
    data() {
        return {
            dialog: false,
            nav: [
                {
                    id: 1,
                    href: {
                        name: 'overview'
                    },
                    text: 'Overview',
                    active: true
                },
                {
                    id: 2,
                    href: {
                        name: 'ledger'
                    },
                    text: 'My Ledger',
                    active: false
                },
                {
                    id: 3,
                    href: {
                        name: 'calendar'
                    },
                    text: 'Calendar',
                    active: false
                },
                {
                    id: 4,
                    href: {
                        name: 'about'
                    },
                    text: 'About',
                    active: false
                }
            ]
        };
  },
};
</script>

<style></style>
