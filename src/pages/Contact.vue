<script setup lang="ts">
import { useUsersStore } from "../stores/usersStore";
import { onMounted } from "vue";
import { computed } from "vue";

const usersStore = useUsersStore();

const isLoading = computed(() => usersStore.loading);

const goToNextPage = () => {
  if (usersStore.currentPage < usersStore.totalPages) {
    usersStore.fetchUsers(usersStore.currentPage + 1);
  }
};

const goToPreviousPage = () => {
  if (usersStore.currentPage > 1) {
    usersStore.fetchUsers(usersStore.currentPage - 1);
  }
};

onMounted(() => {
  usersStore.fetchUsers();
});
</script>

<template>
  <div
    class="max-w-[682px] w-full mx-auto px-[18px] pt-6 pb-[104px] desktop:pt-[106px] desktop:px-0 desktop:pb-[104px]"
  >
    <h2 class="font-bold text-3xl desktop:text-[44px]">Users</h2>

    <div class="flex flex-col p-4 h-[600px] overflow-auto">
      <!-- Список пользователей -->
      <ul class="space-y-4 flex-grow">
        <li
          v-for="user in usersStore.users"
          :key="user.id"
          class="bg-white p-4 rounded shadow"
          :class="{ 'opacity-90': isLoading }"
        >
          <h3 class="text-lg font-semibold">{{ user.name }}</h3>
          <p class="text-sm text-light">{{ user.email }}</p>
        </li>
      </ul>

      <!-- Пагинация -->
      <div class="flex justify-between mt-4">
        <button
          @click="goToPreviousPage"
          :disabled="usersStore.currentPage === 1"
          class="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span
          >Page {{ usersStore.currentPage }} of
          {{ usersStore.totalPages }}</span
        >
        <button
          @click="goToNextPage"
          :disabled="usersStore.currentPage === usersStore.totalPages"
          class="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
