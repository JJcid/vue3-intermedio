<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import type { Character } from "@/characters/interfaces/characters";
import breakindBadApi from "@/api/breakingBadApi";
import CharacterCard from "@/characters/components/CharacterCard.vue";

const getCharacters = async (): Promise<Character[]> => {
  const { data } = await breakindBadApi.get<Character[]>("/characters");
  return data.filter((el) => ![14, 17, 39].includes(el.char_id));
};

const { data: characters, isLoading } = useQuery({
  queryKey: ["characters"],
  queryFn: getCharacters,
  cacheTime: 1000 * 60,
  refetchOnReconnect: "always",
});
</script>

<template>
  <h1 v-if="isLoading">Loading...</h1>
  <ul v-else class="card-list">
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
