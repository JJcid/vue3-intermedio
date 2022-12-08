<script setup lang="ts">
import CharacterCard from "@/characters/components/CharacterCard.vue";
import type { Character } from "@/characters/interfaces/characters";
import { toRefs } from "vue";

interface Props {
  characters: Character[];
}

const props = defineProps<Props>();
const { characters } = toRefs(props);
</script>

<template>
  <ul class="card-list">
    <character-card
      v-for="character of characters"
      :key="character.char_id"
      :character="character"
    />
  </ul>
</template>

<style scoped>
.card-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
