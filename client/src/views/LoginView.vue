<script setup lang="ts">
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/20/solid";
import { IUserLoginInput } from "@/global/interfaces/auth.interfaces";
import AuthLayout from "@/views/layouts/AuthLayout.vue";
import { ref } from "vue";
import useStore from "@/services/store";
import { useRouter } from "vue-router";
const store = useStore();
const router = useRouter();

const form = ref<IUserLoginInput>({
  _uid_: "",
  _ukey_: "",
});

const showPassword = ref<boolean>(false);

const doAuth = async () => {
  try {
    await store.doLogin(form.value);

    router.replace({
      name: "marketplace-game",
      params: { game: "elemental-raiders" },
    });
  } catch (error) {
    // TODO
    alert(error);
  }

  return true;
};
</script>
<template>
  <AuthLayout :show-terms="true">
    <form @submit.prevent="doAuth">
      <h2 class="mt-8 text-4xl font-bold leading-9 tracking-tight text-white">
        Login
      </h2>
      <p class="mt-4 leading-6 text-neutral-300 font-light">
        Please log in with your username and password.
      </p>
      <div>
        <div class="pt-6">
          <div class="space-y-4">
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-neutral-300"
                >Email</label
              >
              <div class="mt-1">
                <input
                  id="email"
                  name="email"
                  v-model="form._uid_"
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
                  id="password"
                  name="password"
                  v-model="form._ukey_"
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

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  class="h-4 w-4 rounded border-primary-500 accent-primary-500 focus:ring-primary-500"
                />
                <label
                  for="remember-me"
                  class="ml-3 block text-sm leading-6 text-neutral-300"
                  >Remember me</label
                >
              </div>

              <div class="text-sm leading-6">
                <RouterLink
                  :to="{ name: 'forgot-password' }"
                  class="text-primary-500 hover:text-indigo-500"
                >
                  Forgot password
                </RouterLink>
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
          Login
        </button>

        <p
          class="text-center pt-6 pb-4 text-white border-b border-secondary-500"
        >
          Not registered yet?
          <RouterLink
            :to="{ name: 'register' }"
            class="text-primary-500 cursor-pointer"
          >
            Sign up
          </RouterLink>
        </p>
      </div>
    </form>
  </AuthLayout>
</template>
