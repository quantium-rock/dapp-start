<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { EllipsisVerticalIcon } from "@heroicons/vue/20/solid";
</script>

<template>
  <div
    class="w-80 flex align-bottom bg-neutral-800 border border-secondary-500 hover:bg-secondary-500"
  >
    <Menu as="div" class="relative inline-block text-left">
      <MenuButton class="gap-x-2 px-4 py-2 flex items-center justify-start">
        <div>
          <img
            :src="require('@/views/assets/dummy/avatar.png')"
            alt="Avatar"
            class="w-16"
          />
        </div>
        <div class="flex-1">
          <div class="text-neutral-200">Username7979</div>
          <div class="text-neutral-400">67AAsad...5a4386cf3</div>
        </div>
        <div
          class="flex items-center rounded-full text-gray-400 hover:text-gray-600 focus:outline-none cursor-pointer"
        >
          <span class="sr-only">Open options</span>
          <EllipsisVerticalIcon class="h-8 w-8" aria-hidden="true" />
        </div>
      </MenuButton>

      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <MenuItems
          class="absolute z-10 w-80 origin-top-right border-2 border-secondary-500 bg-neutral-800 focus:outline-none"
        >
          <div class="">
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active ? 'bg-secondary-500' : 'text-neutral-300',
                  'block px-4 py-4 border-b border-secondary-500',
                ]"
                >Wallet</a
              >
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active ? 'bg-secondary-500' : 'text-neutral-300',
                  'block px-4 py-4 border-b border-secondary-500',
                ]"
                >My Collection</a
              >
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active ? 'bg-secondary-500' : 'text-neutral-300',
                  'block px-4 py-4 border-b border-secondary-500',
                ]"
                >Transaction History</a
              >
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active ? 'bg-secondary-500' : 'text-neutral-300',
                  'block px-4 py-4 border-b border-secondary-500',
                ]"
                >Settings</a
              >
            </MenuItem>
            <form method="POST" action="#">
              <MenuItem v-slot="{ active }">
                <button
                  type="submit"
                  :class="[
                    active ? 'bg-secondary-500' : 'text-neutral-300',
                    'w-full  text-left block px-4 py-4 border-b border-secondary-500',
                  ]"
                >
                  Sign out
                </button>
              </MenuItem>
            </form>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>
