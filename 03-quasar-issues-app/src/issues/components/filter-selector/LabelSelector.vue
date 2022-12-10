<script setup lang="ts">
import { ref } from "vue";
import LoaderSpinner from "src/shared/components/LoaderSpiner.vue";
</script>
<template>
  <loader-spinner size="50px" :thickness="1" />
  <q-chip v-for="label of 10" :key="label" color="primary" outline clickable>Tag</q-chip>
</template>

<style scoped></style>
