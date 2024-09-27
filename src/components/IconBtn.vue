<script setup lang="ts">
interface Props {
  url: string;
}

const { url } = defineProps<Props>();
</script>

<template>
  <a :href="url" target="_blank">
    <slot />
  </a>
</template>

<style scoped></style>
