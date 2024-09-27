<script setup lang="ts">
import { onMounted } from "vue";

import Avatar from "../assets/images/avatar.svg";

import Button from "../components/Button.vue";
import PreviewPostCard from "../components/PreviewPostCard.vue";
import WorkCard from "../components/WorkCard.vue";

import { usePostsStore } from "../stores/postsStore";
import { useWorksStore } from "../stores/worksStore";

const postsStore = usePostsStore();
const worksStore = useWorksStore();

onMounted(() => {
  postsStore.fetchMockPosts();
  worksStore.fetchMockWorks();
});
</script>

<template>
  <div
    class="max-w-[860px] w-full mx-auto mt-8 mb-[150px] desktop:mt-[158px] desktop:mb-[82px]"
  >
    <div
      class="flex flex-col gap-y-[34px] items-center px-6 desktop:px-0 desktop:flex-row-reverse desktop:items-start desktop:justify-between"
    >
      <div class="relative">
        <Avatar class="relative z-[1]" />
        <div
          class="absolute z-0 top-[13px] right-1.5 bg-sky w-[243px] h-[243px] rounded-full"
        />
      </div>

      <div class="flex flex-col items-center desktop:items-start">
        <h1
          class="font-bold text-[32px] max-w-[312px] text-center desktop:max-w-[506px] desktop:text-left desktop:text-[44px]"
        >
          Hi, I am John,
          <br class="hidden desktop:block" />
          Creative Technologist
        </h1>

        <p class="mt-5 text-center desktop:text-left desktop:max-w-[498px]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>

        <Button @click="() => {}" :class="'mt-7'"> Download Resume </Button>
      </div>
    </div>

    <div
      class="mt-[58px] bg-sky w-screen relative left-1/2 transform -translate-x-1/2 px-2.5 pb-[38px] pt-4 desktop:mt-[70px] desktop:px-0 desktop:pb-[32px]"
    >
      <div class="max-w-[860px] mx-auto">
        <div class="flex items-center justify-center desktop:justify-between">
          <h4 class="text-lg">Recent posts</h4>

          <router-link to="/blog" class="hidden text-secondary desktop:block"
            >View all</router-link
          >
        </div>

        <div
          class="flex flex-col gap-y-4 items-center mt-[20px] desktop:flex-row desktop:gap-x-5"
        >
          <PreviewPostCard
            v-for="post in postsStore.posts.slice(0, 2)"
            :key="post.id"
            :item="post"
          />
        </div>
      </div>
    </div>

    <div class="px-[18px]">
      <h4 class="text-lg text-center mt-4 desktop:mt-[32px]">Featured works</h4>

      <div
        class="flex flex-col gap-y-6 items-center mt-[20px] desktop:gap-y-[30px]"
      >
        <WorkCard
          v-for="work in worksStore.works.slice(0, 3)"
          :key="work.id"
          :item="work"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
