<template>
  <div
      class="relative flex-shrink-0 w-48 h-48 aspect-square border border-black/5 rounded-full shadow-md shadow-black/5 overflow-hidden">
    <img class="w-full h-full object-cover" :src="src ?? placeholderImage"/>
    <label
        class="flex justify-center items-center absolute top-0 left-0 bg-black/50 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
        v-if="editable"
    >
      <MaterialIcon class="text-white text-5xl font-black">add_a_photo</MaterialIcon>
      <input class="hidden" type="file" @change="onUpload"/>
    </label>
  </div>
</template>

<script setup>
import MaterialIcon from "../icons/MaterialIcon";

import placeholderImage from "../../assets/images/avatar-placeholder.jpg"

const emit = defineEmits(['upload'])
const props = defineProps({
  src: String,
  editable: Boolean,
})

function onUpload(e) {
  const file = e.target.files[0];
  emit('upload', file);
}
</script>

<style scoped>

</style>