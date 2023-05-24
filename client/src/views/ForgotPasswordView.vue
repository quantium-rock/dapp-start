<script setup lang="ts">
import { ref } from "vue";
import { IUserLoginInput } from "@/global/interfaces/auth.interfaces";
import AuthLayout from "@/views/layouts/AuthLayout.vue";

const form = ref<IUserLoginInput>({
  _uid_: "",
  _ukey_: "",
});

const doRecoverPassword = () => {
  console.log("Login in...");
};
</script>
<template>
  <AuthLayout :show-terms="true">
    <form @submit.prevent="doRecoverPassword">
      <h2 class="mt-8 text-4xl font-bold leading-9 tracking-tight text-white">
        Forgot Password
      </h2>
      <p class="mt-4 leading-6 text-neutral-300 font-light">
        Please enter the email address associated with your GFAL ID account. We
        will email you a link to reset your password.
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
        </div>
      </div>

      <div>
        <button
          type="submit"
          class="flex w-full justify-center rounded-sm bg-primary-500 px-3 py-5 mt-5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-primary-400"
        >
          Send Email
        </button>

        <p
          class="text-center pt-6 pb-4 text-white border-b border-secondary-500"
        >
          <RouterLink
            :to="{ name: 'login' }"
            class="text-primary-500 cursor-pointer"
          >
            Back to login
          </RouterLink>
        </p>
      </div>
    </form>
  </AuthLayout>
</template>
