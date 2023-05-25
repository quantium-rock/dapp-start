<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  showTerms: {
    type: Boolean,
    default: true,
  },
});
</script>
<template>
  <div class="h-screen">
    <div class="flex min-h-full flex-1">
      <div
        class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-secondary-900"
      >
        <div
          class="mx-auto w-full h-full max-w-sm lg:w-96 flex flex-col justify-center gap-6"
        >
          <div>
            <img
              :src="require('@/views/assets/img/auth/gfal-id.svg?url')"
              alt="Games for a Living"
              class="w-auto"
            />

            <slot />

            <div>
              <p
                v-if="showTerms"
                class="text-xs text-neutral-400 font-light text-center pt-8"
              >
                By signing up, you agree to the
                <span class="text-primary-500 cursor-pointer"
                  >Terms & Conditions, Privacy Policy</span
                >
                and to receive updates from Games for a Living.
              </p>
            </div>
          </div>
          <div>
            <p class="text-center text-xs text-neutral-400">
              Copyright © 2023. G4AL Entertainment . All rights Reserved
            </p>
          </div>
        </div>
      </div>
      <div class="relative hidden w-0 flex-1 lg:block">
        <img
          class="absolute inset-0 h-full w-full object-cover"
          :src="require('@/views/assets/img/auth/background.svg')"
          alt="Background"
        />
      </div>
    </div>
  </div>
</template>
