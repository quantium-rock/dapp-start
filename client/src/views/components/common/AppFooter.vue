<script setup lang="ts">
const pages = [
  { name: "Terms of Service", href: "#", current: false },
  { name: "Privacy Policy", href: "#", current: true },
  { name: "Cookie Settings", href: "#", current: true },
];
</script>

<template>
  <footer class="bg-neutral-800">
    <div
      class="mx-auto px-6 py-5 flex md:items-center md:justify-between lg:px-8"
    >
      <div class="md:mt-0">
        <p class="text-xs leading-5 text-neutral-300">
          Copyright &copy; {{ new Date().getFullYear() }}. G4AL Entertainment.
          All rights Reserved
        </p>
      </div>
      <nav class="" aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-4">
          <li v-for="(page, idx) in pages" :key="page.name">
            <div class="flex items-center text-neutral-300 font-light">
              <span v-if="idx !== 0">|</span>
              <a
                :href="page.href"
                class="ml-4 text-xs hover:text-gray-700"
                :aria-current="page.current ? 'page' : undefined"
                >{{ page.name }}</a
              >
            </div>
          </li>
        </ol>
      </nav>
      <div class="flex text-neutral-300 font-light text-sm">
        <p class="text-xs flex items-center mr-2">Powered by</p>
        <img
          :src="require('@/views/assets/img/logos/logo-footer.svg')"
          class="w-8"
        />
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss"></style>
