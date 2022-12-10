<script setup lang="ts">
import { toRefs } from "vue";

export interface Props {
  color?: string;
  size?: string;
  thickness?: number;
  text?: string;
}

const props = withDefaults(defineProps<Props>(), {
  color: "primary",
  size: "3rem",
  thickness: 2,
  text: "",
});

const { color, size, thickness, text } = toRefs(props);
</script>
<template>
  <div class="column items-center">
    <q-spinner :color="color" :size="size" :thickness="thickness" />
    <span v-if="text" class="q-mt-sm">{{ text }}</span>
  </div>
</template>

<style scoped></style>
