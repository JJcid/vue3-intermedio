<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "@/shared/components/NavBar.vue";
import { routeLinks } from "./router/link-routes";
</script>

<template>
  <div class="wrapper">
    <header>
      <nav-bar title="Breaking Bad" :links="routeLinks" />
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    flex-direction: column;
  }
}
</style>
