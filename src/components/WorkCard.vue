<script setup lang="ts">
import BadgeNumber from "./BadgeNumber.vue";

import { Work } from "../stores/worksStore";

interface Props {
  item: Work;
}

const { item } = defineProps<Props>();
</script>

<template>
  <div>
    <div
      class="flex flex-col gap-y-4 desktop:flex-row desktop:gap-x-[18px] desktop:items-start"
    >
      <img
        :src="item.previewImg"
        alt=""
        class="rounded-md w-[310px] h-[230px] desktop:w-[246px] desktop:h-[180px]"
      />

      <div class="flex flex-col">
        <h5 class="font-bold text-2xl desktop:text-3xl">{{ item.title }}</h5>

        <div class="flex gap-x-5 mt-4">
          <BadgeNumber :number="item.year" />

          <span v-for="(category, index) in item.type" :key="index">
            {{ category }}<span v-if="index < item.type.length - 1">, </span>
          </span>
        </div>

        <p class="mt-6">{{ item.desc }}</p>
      </div>
    </div>

    <div class="bg-light h-[1px] mt-4 opacity-50" />
  </div>
</template>

<style scoped></style>
