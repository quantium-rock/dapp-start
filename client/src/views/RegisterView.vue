<script setup lang="ts">
import { IUserLoginInput } from "@/global/interfaces/auth.interfaces";
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/20/solid";
import { ref } from "vue";
import AuthLayout from "./layouts/AuthLayout.vue";

const form = ref<IUserLoginInput>({
  _uid_: "",
  _ukey_: "",
});

const showPassword = ref<boolean>(false);

const doAuth = () => {
  console.log("Login in...");
};
</script>
<template>
  <AuthLayout :show-terms="true">
    <form @submit.prevent="doAuth">
      <h2 class="mt-8 text-4xl font-bold leading-9 tracking-tight text-white">
        Sign Up
      </h2>
      <p class="mt-4 leading-6 text-neutral-300 font-light">
        Create your account on Games for a living.
      </p>
      <div>
        <div class="space-y-4 pt-6">
          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-neutral-300"
              >Email</label
            >
            <div class="mt-1">
              <input
                v-model="form._uid_"
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="block w-full rounded-md border border-primary-500 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-primary-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-400 sm:text-sm sm:leading-6"
                placeholder="Email Address"
              />
            </div>
          </div>

          <div>
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-neutral-300"
              >Password</label
            >
            <div class="relative mt-1">
              <input
                v-model="form._ukey_"
                id="password"
                name="password"
                :type="showPassword ? 'text' : 'password'"
                autocomplete="current-password"
                required
                class="block w-full rounded-md border border-primary-500 py-1.5 px-4 text-neutral-300 shadow-sm ring-1 ring-inset ring-primary-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-400 sm:text-sm sm:leading-6"
                placeholder="Password"
              />
              <div
                class="cursor-pointer absolute inset-y-0 right-0 flex items-center pr-3"
              >
                <EyeSlashIcon
                  v-if="!showPassword"
                  @click="showPassword = !showPassword"
                  class="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <EyeIcon
                  v-else
                  @click="showPassword = !showPassword"
                  class="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          <div>
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-neutral-300"
              >Reenter Password</label
            >
            <div class="relative mt-1">
              <input
                id="password"
                name="password"
                :type="showPassword ? 'text' : 'password'"
                autocomplete="current-password"
                required
                class="block w-full rounded-md border border-primary-500 py-1.5 px-4 text-neutral-300 shadow-sm ring-1 ring-inset ring-primary-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-400 sm:text-sm sm:leading-6"
                placeholder="Password"
              />
              <div
                class="cursor-pointer absolute inset-y-0 right-0 flex items-center pr-3"
              >
                <EyeSlashIcon
                  v-if="!showPassword"
                  @click="showPassword = !showPassword"
                  class="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <EyeIcon
                  v-else
                  @click="showPassword = !showPassword"
                  class="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button
          type="submit"
          class="flex w-full justify-center rounded-sm bg-primary-500 px-3 py-5 mt-5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-primary-400"
        >
          Create Account
        </button>
        <p
          class="text-center pt-6 pb-4 text-white border-b border-secondary-500"
        >
          Already have an account?
          <RouterLink
            :to="{ name: 'login' }"
            class="text-primary-500 cursor-pointer"
          >
            Login
          </RouterLink>
        </p>
      </div>
    </form>
  </AuthLayout>
</template>
