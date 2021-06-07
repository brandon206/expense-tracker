<template>
    <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                @click="onClick"
                :class="textColor"
                :color="color"
                v-bind="attrs"
                v-on="on"
                >{{ text }}
            </v-btn>
        </template>
        <span v-if="tooltipText">{{ tooltipText }}</span>
    </v-tooltip>
</template>

<script>
export default {
    props: {
        textColor: {
            type: String,
            default: 'white--text',
        },
        color: {
            type: String,
            default: 'grey darken-2',
        },
        text: {
            type: String,
            default: '',
        },
        tooltipText: {
            type: String,
            default: null,
        },
        onClick: {
            type: Function,
            default: () => {},
        },
    },
};
</script>

<style></style>
