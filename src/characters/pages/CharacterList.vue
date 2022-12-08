<script setup lang="ts">
import breakindBadApi from "@/api/breakingBadApi";
import CardList from "@/characters/components/CardList.vue";
import { Category, Status, type Character } from "@/characters/interfaces/characters";
import { useQuery } from "@tanstack/vue-query";
import characterStore from "@/store/characters.store";

const props = defineProps<{ title: string; visible: boolean }>();
const characters = characterStore.characters;
//! Eliminar cuando funcione el end-point
const defaultList: Character[] = [
{
  char_id: 1,
  name: "Walter White",
    birthday: "09-07-1958",
    occupation: ["High School Chemistry Teacher", "Meth King Pin"],
    img:
      "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
    status: Status.Deceased,
    appearance: [1, 2, 3, 4, 5],
    nickname: "Heisenberg",
    portrayed: "Bryan Cranston",
    category: Category.BetterCallSaul,
    better_call_saul_appearance: [1],
  },
];

const getCharacters = async (): Promise<Character[]> => {
  if (characters.count) return characters.list;
  // const { data } = await breakindBadApi.get<Character[]>("/characters");
  // return data;
  //! descomentar cuando funcione el end-point
  return defaultList;
};

const { isLoading } = useQuery({
  queryKey: ["characters"],
  queryFn: getCharacters,
  onSuccess(data) {
    characterStore.loadedCharacters(data);
  },
});
</script>

<template>
  <h2>{{ props.title }}</h2>
  <h1 v-if="isLoading">Loading...</h1>
  <card-list v-else :characters="characters.list" />
</template>
<style scoped></style>
