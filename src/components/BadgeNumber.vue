<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  number: string | number;
}>();

const isSingleDigit = computed(() => props.number.toString().length === 1);
</script>

<template>
  <div
    :class="[
      'inline-flex items-center justify-center px-2 font-bold text-white bg-dark',
      isSingleDigit ? 'rounded-full w-8 h-8' : 'rounded-2xl px-3',
    ]"
  >
    {{ number }}
  </div>
</template>

<style scoped></style>
