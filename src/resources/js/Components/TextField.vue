<template>
    <v-text-field
        v-model="val"
        @input="$emit('update', $event)"
        :label="labelText"
        :prepend-icon="icon"
        :type="type"
    />
</template>
<script>
export default {
    name: "TextField",
    props: {
        labelText: String,
        icon: String,
        type: {
            type: String,
            default: "text"
        }
    },
    data: () => ({
        val: ""
    })
};
</script>
