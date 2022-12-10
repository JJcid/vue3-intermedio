<script setup lang="ts">
import IssueCard from "src/issues/components/issue-list/IssueCard.vue";
import LoaderSpinner from "src/shared/components/LoaderSpiner.vue";
import { useRoute } from "vue-router";
const route = useRoute();
const { id } = route.params;
</script>

<template>
  <div>
    <loader-spinner color="white" />
    <router-link class="text-white" to="/">Go Back</router-link>
    <issue-card />
    <loader-spinner color="white" :thickness="1" size="1.5rem" />
    <div class="column">
      <span class="text-h3 q-mb-md"></span>
    </div>
    <issue-card v-for="comment of 5" :key="comment" />
  </div>
</template>

<style scoped></style>
