<script setup lang="ts">
import type { Character } from "@/characters/interfaces/characters";
import { toRefs } from "vue";

interface Props {
  character: Character;
}
const props = defineProps<Props>();
const { character } = toRefs(props);
</script>
<template>
  <div class="character-card">
    <img :src="character.img" :alt="character.name" />
    <h3>{{ character.name }}</h3>
  </div>
</template>

<style scoped>
.character-card {
  margin-right: 5px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
}

img {
  width: 150px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(255 255 255 0.1);
}
</style>
