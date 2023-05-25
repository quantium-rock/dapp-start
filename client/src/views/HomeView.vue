<script setup lang="ts">
import { MagnifyingGlassIcon } from "@heroicons/vue/20/solid";

const games = [
  {
    name: "Elemental Raiders",
    url: "elemental-raiders",
    role: "Arena RPG",
    imageUrl: require("@/views/assets/img/home/elemental-raiders.png"),
    imageUrlLogo: require("@/views/assets/img/home/elemental-raiders-icon.png"),
    enabled: true,
  },
  {
    name: "Diamond Dreams",
    url: "diamond-dreams",
    role: "Match 3",
    imageUrl: require("@/views/assets/img/home/diamonddreams_thumbnail.jpg"),
    imageUrlLogo: require("@/views/assets/img/home/diamonddreams_icon.png"),
    enabled: false,
  },
  {
    name: "Soccer Legends",
    url: "soccer-legends",
    role: "Sports RPG",
    imageUrl: require("@/views/assets/img/home/soccerlegends_thumbnail.jpg"),
    imageUrlLogo: require("@/views/assets/img/home/soccerlegends_icon.png"),
    enabled: false,
  },
];
</script>

<template>
  <div class="relative isolate overflow-hidden bg-secondary-900 px-6 py-16">
    <h2
      class="mx-auto max-w-2xl text-center text-4xl font-bold tracking-tight text-white"
    >
      Marketplace
    </h2>
    <p
      class="mx-auto mt-2 max-w-xl text-center text-2xl font-bold leading-8 text-neutral-300"
    >
      Discover a world of gaming NFTs
    </p>
    <form class="mx-auto mt-6 flex max-w-4xl">
      <input
        name="q"
        type="text"
        required
        class="min-w-0 flex-auto rounded-l-md border border-primary-500 bg-white px-4 py-2 text-neutral-300 shadow-sm focus:outline-none sm:text-sm sm:leading-6"
        placeholder="Search all collections"
      />
      <MagnifyingGlassIcon
        class="flex-none rounded-r-md bg-primary-500 h-11 w-11 px-2.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-100 focus:outline-none"
      >
        Notify me
      </MagnifyingGlassIcon>
    </form>
    <div class="mx-auto max-w-screen-2xl px-6 lg:px-8">
      <ul
        role="list"
        class="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <li
          v-for="game in games"
          :key="game.name"
          class="relative saturate-100 border-b border-primary-900 rounded-2xl shadow-sm bg-neutral-800 rounded-b-2xl border-x"
        >
          <RouterLink
            :to="{ name: 'marketplace-game', params: { game: game.url } }"
            :class="{ 'pointer-events-none': !game.enabled }"
          >
            <div v-if="!game.enabled" class="absolute right-0 z-50">
              <div
                class="bg-primary-500 px-2 py-1 text-neutral-200 text-sm font-light"
              >
                Coming Soon
              </div>
            </div>

            <img
              class="aspect-[3/2] w-full rounded-t-2xl object-cover"
              :class="{ 'saturate-0 opacity-60': !game.enabled }"
              :src="game.imageUrl"
              alt=""
            />

            <div class="relative pt-10">
              <div>
                <img
                  class="absolute -top-10 left-4 w-16"
                  :src="game.imageUrlLogo"
                  :alt="game.name"
                />

                <h3
                  class="px-4 text-2xl font-semibold leading-8 tracking-tight text-white"
                >
                  {{ game.name }}
                </h3>
                <p
                  class="text-base font-light leading-7 px-4 text-neutral-300 pb-12"
                >
                  {{ game.role }}
                </p>
              </div>
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
