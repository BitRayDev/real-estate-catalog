<template>
  <div class="flex-shrink-0 h-36 aspect-video relative">
    <div
        class="absolute flex justify-center items-center h-6 aspect-square z-10 bg-red-500 rounded-full top-2 right-2 shadow-md cursor-pointer"
        @click="emit('remove')"
    >
      <MaterialIcon class="text-white" @click.native="emit('remove')">close</MaterialIcon>
    </div>
    <img class="w-full h-full object-cover rounded-2xl border border-black/5 shadow-md shadow-black/20" :src="src"/>
  </div>
</template>

<script setup>
import MaterialIcon from "../icons/MaterialIcon";

const emit = defineEmits(['remove'])
const props = defineProps({
  src: String,
})
</script>

<style scoped>

</style>