<script setup lang="ts">
import LoaderSpinner from "src/shared/components/LoaderSpiner.vue";
import FilterSelector from "../components/filter-selector/FilterSelector.vue";
import IssueList from "../components/issue-list/IssueList.vue";
</script>
<template>
  <div class="row q-mb-md">
    <div class="col-12">
      <span class="text-h2">ListPage</span>
    </div>
    <div class="row">
      <div class="col-xs-12 col-md-4">
        <filter-selector />
      </div>
      <div class="col-xs-12 col-md-8">
        <loader-spinner text="Loading" />
        <issue-list />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
