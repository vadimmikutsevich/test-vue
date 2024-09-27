<script setup lang="ts">
import FBIcon from "../assets/icons/fb.svg";
import InstIcon from "../assets/icons/inst.svg";
import TwitterIcon from "../assets/icons/twitter.svg";
import LinkedinIcon from "../assets/icons/linkedin.svg";

import IconBtn from "./IconBtn.vue";

const mockUrl = "https://www.linkedin.com/in/vadzimsodyssey/";
</script>

<template>
  <footer
    class="flex flex-col gap-y-[26px] w-full justify-center items-center mb-[54px]"
  >
    <div class="flex gap-x-9 items-center">
      <IconBtn :url="mockUrl">
        <FBIcon class="w-[30px] h-[30px] text-dark" />
      </IconBtn>

      <IconBtn :url="mockUrl">
        <InstIcon class="w-[30px] h-[30px] text-dark" />
      </IconBtn>
      <IconBtn :url="mockUrl">
        <TwitterIcon class="w-[30px] h-[30px] text-dark" />
      </IconBtn>
      <IconBtn :url="mockUrl">
        <LinkedinIcon class="w-[30px] h-[30px] text-dark" />
      </IconBtn>
    </div>

    <p class="text-dark text-sm">Copyright ©2020 All rights reserved</p>
  </footer>
</template>

<style scoped></style>
