<script setup lang="ts">
import type { RouterLink } from "@/router/link-routes";

interface Props {
  title?: string;
  links: RouterLink[];
  showIcon?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  links: () => [],
  showIcon: true,
});
</script>
<template>
  <nav>
    <img
      v-if="props.showIcon"
      src="@/assets/logo.svg"
      alt="Vue Logo"
      height="25"
      width="25"
    />
    <span>{{ props.title }}</span>
    <RouterLink v-for="link of props.links" :key="link.path" :to="link.path">{{
      link.title
    }}</RouterLink>
  </nav>
</template>
<style scoped>
nav {
  display: flex;
  font-style: 12px;
  margin-top: 10px;
  text-align: center;
  width: 100%;
}

img,
span,
a {
  margin-right: 5px;
}
</style>
