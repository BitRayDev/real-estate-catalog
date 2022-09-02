<template>
  <div class="flex flex-col gap-2">
    <FullScreenGallery :images="images" :initial-active-index="fullScreenGallery.initialIndex" v-if="fullScreenGallery.isActive" @close="fullScreenGallery.isActive = false"/>
    <img class="rounded-2xl aspect-video object-cover cursor-pointer" :src="images?.[0]" @click="zoomPhoto(0)"/>
    <div class="flex gap-2 overflow-auto" v-if="images?.length > 1">
      <img class="rounded-2xl h-24 aspect-video object-cover cursor-pointer" v-for="(image, index) in images" :src="image" @click="zoomPhoto(index)"/>
    </div>
  </div>
</template>

<script setup>
import FullScreenGallery from "./FullScreenGallery";

const props = defineProps({
  images: Array,
})

const fullScreenGallery = reactive({
  isActive: false,
  initialIndex: 0,
})

function zoomPhoto(photoIndex) {
  fullScreenGallery.initialIndex = photoIndex;
  fullScreenGallery.isActive = true;
}
</script>

<style scoped>

</style>