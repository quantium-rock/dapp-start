<script setup lang="ts">
import { ChevronRightIcon } from "@heroicons/vue/20/solid";

const pages = [
  { name: "Marketplace", href: "#", current: false },
  { name: "Elemental Raiders", href: "#", current: false },
  { name: "Skins", href: "#", current: true },
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

const product = {
  name: "Everyday Ruck Snack",
  href: "#",
  price: "$220",
  description:
    "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
  imageSrc:
    "https://tailwindui.com/img/ecommerce-images/product-page-04-featured-product-shot.jpg",
  imageAlt:
    "Model wearing light green backpack with black canvas straps and front zipper pouch.",
  breadcrumbs: [
    { id: 1, name: "Travel", href: "#" },
    { id: 2, name: "Bags", href: "#" },
  ],
  sizes: [
    { name: "18L", description: "Perfect for a reasonable amount of snacks." },
    { name: "20L", description: "Enough room for a serious amount of snacks." },
  ],
};
</script>

<template>
  <div>
    <div>
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
        <div>
          <h1 class="text-5xl font-bold tracking-tight text-white">
            Elemental Raiders Skins
          </h1>
        </div>
        <div class="bg-neutral-800 border-2 border-primary-900 rounded-lg">
          <div class="mx-auto lg:grid lg:grid-cols-2">
            <!-- Product image -->
            <div
              class="mt-10 lg:col-start-1 lg:row-span-2 lg:mt-0 lg:self-center"
            >
              <div
                class="overflow-hidden rounded-bl-lg border-b-8 border-r-0 lg:border-r-2 border-r-primary-900"
                :class="getRarityColor('unique', 'border')"
              >
                <img
                  :src="require('@/views/assets/dummy/skin.png')"
                  :alt="product.imageAlt"
                  class="w-full h-full object-contain"
                />
              </div>
            </div>
            <div class="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0">
              <div class="border-b-2 border-primary-900 p-5 pb-20">
                <p class="text-lg text-neutral-300 font-light">
                  Elemental Raiders
                </p>
                <h2 class="text-white text-4xl font-bold">
                  Reef Victorious Crab Feeder
                </h2>
                <p
                  class="text-lg font-semibold"
                  :class="getRarityColor('unique', 'text')"
                >
                  Unique <span class="font-light">(1/1)</span>
                </p>
              </div>
              <div
                class="grid grid-cols-1 sm:grid-cols-2 border-b-2 border-primary-900 p-5 text-center sm:text-left"
              >
                <div>
                  <span class="text-neutral-300 font-normal">Skin ID: </span
                  ><span class="text-primary-500">#16675682927561</span>
                </div>
                <div>
                  <span class="text-neutral-300 font-normal">Owned by: </span
                  ><span class="text-primary-500">0xc212ea...4d7d16b7</span>
                </div>
              </div>
              <div
                class="border-b-2 border-primary-900 p-5 text-center sm:text-left"
              >
                <p class="text-white font-bold text-base">Description</p>
                <p class="text-neutral-300 font-light">
                  Reef Victorious Crab Feeder. Winner of the Ignite GFAL
                  Tournament.
                </p>
              </div>
              <div
                class="border-b-2 border-primary-900 p-5 text-center sm:text-left"
              >
                <p class="text-white font-bold text-base">Properties</p>
                <div class="flex">
                  <p
                    class="text-center px-2.5 py-1 text-xs font-light leading-5 text-white w-24 capitalize bg-primary-900 mr-2"
                  >
                    Reef
                  </p>
                  <p
                    class="text-center px-2.5 py-1 text-xs font-light leading-5 text-white w-24 capitalize bg-primary-900 mr-2"
                  >
                    Unique
                  </p>
                  <p
                    class="text-center px-2.5 py-1 text-xs font-light leading-5 text-white w-24 capitalize bg-primary-900 mr-2"
                  >
                    1st Edition
                  </p>
                  <p
                    class="text-center px-2.5 py-1 text-xs font-light leading-5 text-white w-24 capitalize bg-primary-900"
                  >
                    Water
                  </p>
                </div>
              </div>
              <div
                class="flex items-center space-x-3 rounded-b-lg bg-neutral-800 px-6 py-5 shadow-sm"
              >
                <div class="flex-shrink-0">
                  <img
                    class="h-12 w-12 object-cover"
                    :src="
                      require('@/views/assets/img/logos/gfaltoken_icon_GFAL.svg')
                    "
                    alt=""
                  />
                </div>
                <div class="min-w-0 flex-1">
                  <p class="text-2xl font-bold text-white">
                    1,793,790.86 <span class="text-xs">GFAL</span>
                  </p>
                  <p class="truncate text-sm text-neutral-300">
                    358,758.67 USD
                  </p>
                </div>
              </div>
              <button
                type="button"
                class="ml-5 bg-primary-500 p-2 text-white font-light w-72 rounded-sm"
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
