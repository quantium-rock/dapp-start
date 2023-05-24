<script setup lang="ts">
import AuthLayout from "@/views/layouts/AuthLayout.vue";
</script>
<template>
  <AuthLayout :show-terms="false">
    <div>
      <h2 class="mt-8 text-4xl font-bold leading-9 tracking-tight text-white">
        Hello there
      </h2>
      <p class="mt-4 leading-6 text-neutral-300 font-light">
        Please log in to your account
      </p>
      <div>
        <RouterLink
          :to="{ name: 'login' }"
          class="flex w-full justify-center rounded-sm bg-primary-500 px-3 py-5 mt-5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-primary-400"
        >
          Login
        </RouterLink>
      </div>
      <div class="relative mt-5">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="w-full border-t border-secondary-500" />
        </div>
        <div class="relative flex justify-center text-sm font-medium leading-6">
          <span class="bg-secondary-900 px-2 text-neutral-400 font-light">
            or create a new one
          </span>
        </div>
      </div>

      <div class="mt-5">
        <RouterLink
          :to="{ name: 'register' }"
          class="flex w-full justify-center rounded-sm bg-secondary-500 px-3 py-5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-secondary-800"
        >
          Sign up
        </RouterLink>
      </div>
    </div>
  </AuthLayout>
</template>
