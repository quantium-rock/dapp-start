<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  FunnelIcon,
  PlusIcon,
} from "@heroicons/vue/20/solid";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { ref } from "vue";
const mobileFiltersOpen = ref(false);

const pages = [
  { name: "Marketplace", href: "/#/marketplace", current: false },
  { name: "Elemental Raiders", href: "#", current: false },
  { name: "Skins", href: "#", current: true },
];
const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "beige", label: "Beige" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "purple", label: "Purple" },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "All New Arrivals" },
      { value: "tees", label: "Tees" },
      { value: "crewnecks", label: "Crewnecks" },
      { value: "sweatshirts", label: "Sweatshirts" },
      { value: "pants-shorts", label: "Pants & Shorts" },
    ],
  },
  {
    id: "sizes",
    name: "Sizes",
    options: [
      { value: "xs", label: "XS" },
      { value: "s", label: "S" },
      { value: "m", label: "M" },
      { value: "l", label: "L" },
      { value: "xl", label: "XL" },
      { value: "2xl", label: "2XL" },
    ],
  },
];
const people = [
  {
    name: "Freyana Corrupted",
    type: "uncommon",
    number: "123/10,000",
    gfal: "12,024.03",
    usd: "240,00",
  },
  {
    name: "Giovanna Demon",
    type: "rare",
    number: "389/5,000",
    gfal: "12,024.03",
    usd: "240,00",
  },
  {
    name: "Igniel Flamboyant",
    type: "epic",
    number: "389/2,500",
    gfal: "12,024.03",
    usd: "240,00",
  },
  {
    name: "Igniel Flamboyant",
    type: "legendary",
    number: "389/2,500",
    gfal: "12,024.03",
    usd: "240,00",
  },
  {
    name: "Igniel Flamboyant",
    type: "exotic",
    number: "389/2,500",
    gfal: "12,024.03",
    usd: "240,00",
  },
  {
    name: "Igniel Flamboyant",
    type: "unique",
    number: "389/2,500",
    gfal: "12,024.03",
    usd: "240,00",
  },
];

const getRarityColor = (rarity, type) => {
  if (type === "text") {
    switch (rarity) {
      case "uncommon":
        return "text-rarity-uncommon";
      case "rare":
        return "text-rarity-rare";
      case "epic":
        return "text-rarity-epic";
      case "legendary":
        return "text-rarity-legendary";
      case "exotic":
        return "text-rarity-exotic";
      case "unique":
        return "text-rarity-unique";
      default:
        return "text-white";
    }
  } else if (type === "bg") {
    switch (rarity) {
      case "uncommon":
        return "bg-rarity-uncommon";
      case "rare":
        return "bg-rarity-rare";
      case "epic":
        return "bg-rarity-epic";
      case "legendary":
        return "bg-rarity-legendary";
      case "exotic":
        return "bg-rarity-exotic";
      case "unique":
        return "bg-rarity-unique";
      default:
        return "bg-white";
    }
  } else {
    switch (rarity) {
      case "uncommon":
        return "border-rarity-uncommon";
      case "rare":
        return "border-rarity-rare";
      case "epic":
        return "border-rarity-epic";
      case "legendary":
        return "border-rarity-legendary";
      case "exotic":
        return "border-rarity-exotic";
      case "unique":
        return "border-rarity-unique";
      default:
        return "border-white";
    }
  }
};
</script>

<template>
  <div>
    <!-- Mobile filter dialog -->
    <TransitionRoot as="template" :show="mobileFiltersOpen">
      <Dialog
        as="div"
        class="relative z-40 lg:hidden"
        @close="mobileFiltersOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="translate-x-full"
          >
            <DialogPanel
              class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl"
            >
              <div class="flex items-center justify-between px-4">
                <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  class="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
                  @click="mobileFiltersOpen = false"
                >
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <!-- Filters -->
              <form class="mt-4">
                <Disclosure
                  as="div"
                  v-for="section in filters"
                  :key="section.name"
                  class="border-t border-gray-200 pb-4 pt-4"
                  v-slot="{ open }"
                >
                  <fieldset>
                    <legend class="w-full px-2">
                      <DisclosureButton
                        class="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span class="text-sm font-medium text-gray-900">{{
                          section.name
                        }}</span>
                        <span class="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            :class="[
                              open ? '-rotate-180' : 'rotate-0',
                              'h-5 w-5 transform',
                            ]"
                            aria-hidden="true"
                          />
                        </span>
                      </DisclosureButton>
                    </legend>
                    <DisclosurePanel class="px-4 pb-2 pt-4">
                      <div class="space-y-6">
                        <div
                          v-for="(option, optionIdx) in section.options"
                          :key="option.value"
                          class="flex items-center"
                        >
                          <input
                            :id="`${section.id}-${optionIdx}-mobile`"
                            :name="`${section.id}[]`"
                            :value="option.value"
                            type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            :for="`${section.id}-${optionIdx}-mobile`"
                            class="ml-3 text-sm text-gray-500"
                            >{{ option.label }}</label
                          >
                        </div>
                      </div>
                    </DisclosurePanel>
                  </fieldset>
                </Disclosure>
              </form>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <main
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-screen-2xl lg:px-24"
    >
      <nav class="flex" aria-label="Breadcrumb">
        <ol role="list" class="flex items-center">
          <li v-for="(page, index) in pages" :key="page.name">
            <div class="flex items-center pb-2">
              <ChevronRightIcon
                v-if="index !== 0"
                class="h-5 w-5 flex-shrink-0 text-neutral-300 mr-1"
                aria-hidden="true"
              />
              <a
                :href="page.href"
                class="text-sm font-normal text-neutral-300 hover:text-gray-700"
                :class="page.current ? 'text-primary-500' : ''"
                :aria-current="page.current ? 'page' : undefined"
                >{{ page.name }}</a
              >
            </div>
          </li>
        </ol>
      </nav>
      <div class="pb-10">
        <div>
          <h1 class="text-5xl font-bold tracking-tight text-white">
            Elemental Raiders Skins
          </h1>
        </div>
      </div>

      <div class="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
        <aside>
          <h2 class="sr-only">Filters</h2>

          <button
            type="button"
            class="inline-flex items-center lg:hidden"
            @click="mobileFiltersOpen = true"
          >
            <span class="text-sm font-medium text-white">Filters</span>
            <PlusIcon
              class="ml-1 h-5 w-5 flex-shrink-0 text-white"
              aria-hidden="true"
            />
          </button>

          <div class="hidden lg:block bg-neutral-800 rounded-lg">
            <form class="hidden lg:block">
              <h3 class="sr-only">Categories</h3>
              <Disclosure as="div" class="border-b border-secondary-500">
                <h2 id="filter-heading" class="sr-only">Filter</h2>
                <div class="relative col-start-1 row-start-1 py-3">
                  <div
                    class="mx-auto flex justify-between align-middle px-4 text-sm"
                  >
                    <div>
                      <DisclosureButton
                        class="group flex items-center font-bold text-xl text-neutral-300"
                      >
                        <FunnelIcon
                          class="mr-2 h-5 w-5 flex-none text-neutral-300 font-bold group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                        Filter
                      </DisclosureButton>
                    </div>
                    <div class="pl-6 flex items-center">
                      <button type="button" class="text-primary-500">
                        Clear all
                      </button>
                    </div>
                  </div>
                </div>
              </Disclosure>
              <Disclosure
                as="div"
                v-for="section in filters"
                :key="section.id"
                class="border-b border-secondary-500 py-4"
                v-slot="{ open }"
              >
                <h3 class="-my-3 flow-root">
                  <DisclosureButton
                    class="flex w-full items-center justify-between bg-neutral-800 py-3 text-sm text-gray-400 hover:text-gray-500"
                  >
                    <span class="font-light text-white px-4 text-base">{{
                      section.name
                    }}</span>
                    <span class="ml-6 flex items-center px-3 text-white">
                      <ChevronDownIcon
                        v-if="!open"
                        class="h-5 w-5"
                        aria-hidden="true"
                      />
                      <ChevronUpIcon
                        v-else
                        class="h-5 w-5"
                        aria-hidden="true"
                      />
                    </span>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel class="pt-6">
                  <div class="space-y-4 px-4">
                    <div
                      v-for="(option, optionIdx) in section.options"
                      :key="option.value"
                      class="flex items-center"
                    >
                      <input
                        :id="`filter-${section.id}-${optionIdx}`"
                        :name="`${section.id}[]`"
                        :value="option.value"
                        type="checkbox"
                        :checked="option.checked"
                        class="h-4 w-4 rounded accent-neutral-800 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        :for="`filter-${section.id}-${optionIdx}`"
                        class="ml-3 text-sm text-white font-light"
                        >{{ option.label }}</label
                      >
                    </div>
                  </div>
                </DisclosurePanel>
              </Disclosure>
              <Disclosure as="div" class="h-12"></Disclosure>
            </form>
          </div>
        </aside>

        <!-- Product grid -->
        <div class="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
          <ul
            role="list"
            class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
          >
            <li
              v-for="person in people"
              :key="person.email"
              class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg shadow"
            >
              <RouterLink
                :to="{
                  name: 'marketplace-game-detail',
                  params: { game: $route.params.game, id: person.name },
                }"
              >
                <div
                  class="flex flex-1 flex-col border-2 rounded-lg border-primary-900"
                >
                  <img
                    class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    :src="require('@/views/assets/dummy/freyana.png')"
                    :alt="person.name"
                  />
                  <div
                    class="bg-black py-3.5 px-4 border-t-8"
                    :class="getRarityColor(person.type, 'border')"
                  >
                    <h3 class="text-sm font-bold text-white text-base">
                      {{ person.name }}
                    </h3>
                    <p
                      class="capitalize text-xs font-bold"
                      :class="`${getRarityColor(person.type, 'text')}`"
                    >
                      {{ person.type }} ({{ person.number }})
                    </p>
                    <p class="capitalize text-xs text-neutral-300">
                      Elemental Raiders
                    </p>
                    <div class="flex mt-2.5">
                      <p
                        class="text-center bg-secondary-500 px-2.5 py-1 text-xs font-light leading-5 text-neutral-300 w-20 mr-1.5"
                      >
                        Skins
                      </p>
                      <p
                        class="text-center px-2.5 py-1 text-xs font-light leading-5 text-black w-24 capitalize"
                        :class="`${getRarityColor(person.type, 'bg')}`"
                      >
                        {{ person.type }}
                      </p>
                    </div>
                  </div>
                  <div
                    class="relative flex items-center space-x-3 rounded-b-lg border-t border-primary-900 bg-black px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2"
                  >
                    <div class="flex-shrink-0">
                      <img
                        class="w-8"
                        :src="
                          require('@/views/assets/img/logos/gfaltoken_icon_GFAL.svg')
                        "
                        alt=""
                      />
                    </div>
                    <div class="min-w-0 flex-1">
                      <p class="text-base font-bold text-white">
                        {{ person.gfal }} <span class="text-xs">GFAL</span>
                      </p>
                      <p class="truncate text-sm text-neutral-300">
                        {{ person.usd }} USD
                      </p>
                    </div>
                  </div>
                </div>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>
