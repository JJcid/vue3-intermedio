import breakindBadApi from "@/api/breakingBadApi";
import type { Character } from "@/characters/interfaces/characters";
import { onMounted, ref } from "vue";
import axios from "axios";

const characters = ref<Character[]>([]);
const isLoading = ref<boolean>(true);
const hasError = ref<boolean>(false);
const errorMessage = ref<string>();
const loadCharacters = async () => {
  try {
    if (characters.value.length) return;
    isLoading.value = true;
    const { data } = await breakindBadApi.get<Character[]>("/characters");
    characters.value = data;
    isLoading.value = false;
  } catch (error) {
    hasError.value = true;
    if (axios.isAxiosError(error)) {
      errorMessage.value = error.message;
    }
    errorMessage.value = error as string;
  } finally {
    isLoading.value = false;
  }
};

export const useCharacters = () => {
  onMounted(loadCharacters);
  return {
    characters,
    isLoading,
    hasError,
    errorMessage,
  };
};
