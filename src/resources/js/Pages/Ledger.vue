<template>
    <div>
        <v-app>
            <v-container fluid>
                <h1>Ledger Page</h1>
                <div v-if="$apollo.loading">Loading...</div>
                <div v-else>
                    <h2>{{ ledger.name }}</h2>
                    <div>{{ ledger.description }}</div>
                    <div v-for="transaction in ledger.transactions" :key="transaction.id">
                        <div>Updated: {{ transaction.updated_at }}</div>
                        <div>Created: {{ transaction.created_at }}</div>
                        <div>{{ transaction.description }}</div>
                        <div>Amount: {{ transaction.amount }}</div>
                        <div>Status: {{ transaction.status }}</div>
                    </div>
                </div>
            </v-container>
        </v-app>
    </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
    apollo: {
        ledger: {
            query: gql`query($id: ID!) {
                ledger(id: $id) {
                    id
                    name
                    description
                    transactions
                    {
                        id
                        description
                        amount
                        status
                        created_at
                        updated_at
                    }
                }
            }`,
            variables() {
                return {
                    id: this.$route.params.id
                }
            },
        }
    },
};
</script>

<style></style>
