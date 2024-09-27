<script setup lang="ts">
import { Post } from "../stores/postsStore";

interface Props {
  item: Post;
}

const { item } = defineProps<Props>();
</script>

<template>
  <div>
    <h5 class="font-medium text-2xl desktop:text-3xl">{{ item.title }}</h5>

    <div class="mt-1.5 desktop:mt-4 desktop:text-lg">
      <span class="mr-6">{{ item.date }}</span>
      <span class="mr-6">|</span>
      <span v-for="(category, index) in item.categories" :key="index">
        {{ category }}<span v-if="index < item.categories.length - 1">, </span>
      </span>
    </div>

    <p class="mt-4 desktop:mt-1.5">{{ item.content }}</p>

    <div class="bg-light h-[1px] mt-4 opacity-50" />
  </div>
</template>

<style scoped></style>
