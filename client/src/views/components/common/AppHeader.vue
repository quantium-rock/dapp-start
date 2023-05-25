<script setup lang="ts">
import UserProfileDropdown from "@/views/components/common/UserProfileDropdown.vue";
import useStore from "@/services/store";

const store = useStore();
</script>

<template>
  <header class="flex justify-between my-6 mx-8">
    <div>
      <img
        :src="require('@/views/assets/img/logos/logo-full.svg')"
        alt="Games for a Living"
        width="400"
      />
    </div>

    <UserProfileDropdown v-if="store.isLoggedIn" />

    <div v-else class="flex flex-1 items-center justify-end gap-x-4">
      <RouterLink
        :to="{ name: 'login' }"
        class="leading-6 text-white font-bold px-16 py-1 rounded-md bg-secondary-900 border-2 border-primary-900 cursor-pointer"
      >
        Login
      </RouterLink>
      <RouterLink
        :to="{ name: 'register' }"
        class="rounded-md bg-primary-500 px-16 py-1 font-bold text-white shadow-sm border-2 border-primary-900 cursor-pointer"
      >
        Sign Up
      </RouterLink>
    </div>
  </header>
</template>
