<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

const isMenuOpen = ref(false);
const route = useRoute();

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}
</script>

<template>
  <header class="flex items-center justify-end w-full">
    <!-- Desktop Navigation -->
    <nav class="hidden desktop:flex gap-x-8 mt-7 px-[60px]">
      <router-link
        :to="{ name: 'Works' }"
        class="text-dark font-medium"
        :class="{ 'text-primary': route.name === 'Works' }"
        >Works</router-link
      >

      <router-link
        :to="{ name: 'Blog' }"
        class="text-dark font-medium"
        :class="{ 'text-primary': route.name === 'Blog' }"
        >Blog</router-link
      >

      <router-link
        :to="{ name: 'Contact' }"
        class="text-dark font-medium"
        :class="{ 'text-primary': route.name === 'Contact' }"
        >Contact</router-link
      >
    </nav>

    <!-- Burger Menu for Mobile -->
    <div
      class="desktop:hidden flex flex-col gap-y-2 cursor-pointer relative z-10 mt-5 mr-3"
      @click="toggleMenu"
    >
      <div
        :class="{
          'w-8 h-0.5 bg-white transform rotate-45 translate-y-[10px] transition-all duration-300':
            isMenuOpen,
          'w-8 h-0.5 bg-dark transform rotate-0 translate-y-0 transition-all duration-300':
            !isMenuOpen,
        }"
      ></div>
      <div
        :class="{
          'w-8 h-0.5 bg-dark transition-opacity duration-300': true,
          'opacity-100': !isMenuOpen,
          'opacity-0 bg-white': isMenuOpen,
        }"
      ></div>
      <div
        :class="{
          'w-8 h-0.5 bg-white transform -rotate-45 -translate-y-[10px] transition-all duration-300':
            isMenuOpen,
          'w-8 h-0.5 bg-dark transform rotate-0 translate-y-0 transition-all duration-300':
            !isMenuOpen,
        }"
      ></div>
    </div>

    <!-- Mobile Navigation -->
    <nav
      :class="[
        'fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center space-y-6 transform transition-transform duration-500',
        isMenuOpen ? 'translate-x-0' : '-translate-x-full',
      ]"
    >
      <router-link to="/" class="text-white text-2xl" @click="closeMenu"
        >Home</router-link
      >
      <router-link to="/works" class="text-white text-2xl" @click="closeMenu"
        >Works</router-link
      >
      <router-link to="/contact" class="text-white text-2xl" @click="closeMenu"
        >Contact</router-link
      >
    </nav>
  </header>
</template>

<style scoped></style>
