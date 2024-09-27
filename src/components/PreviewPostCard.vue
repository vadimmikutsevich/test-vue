<script setup lang="ts">
import { Post } from "../stores/postsStore";

interface Props {
  item: Post;
}

const { item } = defineProps<Props>();
</script>

<template>
  <div
    class="rounded drop-shadow bg-white max-w-[354px] w-full px-5 py-3 min-h-[266px] desktop:min-h-[294px] desktop:max-w-[418px] desktop:px-6 desktop:py-4"
  >
    <h5 class="text-xl font-bold desktop:text-2xl">{{ item.title }}</h5>
    <div class="mt-3 desktop:mt-[18px] desktop:text-lg">
      <span class="mr-6">{{ item.date }}</span>
      <span class="mr-6">|</span>
      <span v-for="(category, index) in item.categories" :key="index">
        {{ category }}<span v-if="index < item.categories.length - 1">, </span>
      </span>
    </div>

    <div class="mt-3">{{ item.content }}</div>
  </div>
</template>

<style scoped></style>
