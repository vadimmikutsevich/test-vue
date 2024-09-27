<script setup lang="ts">
interface Props {
  class?: string;
}

const { class: buttonClass } = defineProps<Props>();
const emit = defineEmits(["click"]);

function handleClick(event: MouseEvent) {
  emit("click", event);
  console.log("Button clicked!!!");
}
</script>

<template>
  <button
    @click="handleClick"
    class="bg-primary py-2 px-5 font-medium text-xl text-white"
    :class="buttonClass"
  >
    <slot />
  </button>
</template>

<style scoped></style>
