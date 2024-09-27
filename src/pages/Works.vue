<script setup lang="ts">
import { onMounted } from "vue";

import WorkCard from "../components/WorkCard.vue";

import { useWorksStore } from "../stores/worksStore";

const worksStore = useWorksStore();

onMounted(() => {
  worksStore.fetchMockWorks();
});
</script>

<template>
  <div
    class="max-w-[682px] w-full mx-auto pb-[58px] pt-6 px-[18px] desktop:pb-[104px] desktop:pt-[106px] desktop:px-0"
  >
    <h2 class="font-bold text-3xl desktop:text-[44px]">Works</h2>

    <div
      class="flex flex-col mt-[18px] gap-y-[22px] desktop:gap-y-[42px] desktop:mt-[55px]"
    >
      <WorkCard v-for="work in worksStore.works" :key="work.id" :item="work" />
    </div>
  </div>
</template>

<style scoped></style>
