<script setup lang="ts">
import { onMounted } from "vue";

import PostCard from "../components/PostCard.vue";

import { usePostsStore } from "../stores/postsStore";

const postsStore = usePostsStore();

onMounted(() => {
  postsStore.fetchMockPosts();
});
</script>

<template>
  <div
    class="max-w-[682px] w-full mx-auto px-[18px] pt-6 pb-[104px] desktop:pt-[106px] desktop:px-0 desktop:pb-[104px]"
  >
    <h2 class="font-bold text-3xl desktop:text-[44px]">Blog</h2>

    <div
      class="flex flex-col mt-[18px] gap-y-[18px] desktop:gap-y-[32px] desktop:mt-[55px]"
    >
      <PostCard v-for="post in postsStore.posts" :key="post.id" :item="post" />
    </div>
  </div>
</template>

<style scoped></style>
