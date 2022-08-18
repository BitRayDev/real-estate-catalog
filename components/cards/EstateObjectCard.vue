<template>
  <div class="w-full border border-black/5 shadow-md shadow-black/5 rounded-2xl overflow-hidden">
    <img class="w-full aspect-video object-cover" :src="objectData?.images?.[0]"/>
    <div class="flex items-center gap-4 px-4 py-2">
      <div class="flex-grow">
        <p>{{ objectData?.name }}</p>
        <p class="text-xs">
          <span class="font-medium">Адрес:</span> {{ objectData?.address }};
          <span class="font-medium">Площадь:</span> {{ objectData?.area }};
          <span class="font-medium">Комнат:</span> {{ objectData?.roomsAmount }};
        </p>
      </div>
      <div>
        <p class="text-xl">{{ objectData?.price }}$</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  objectData: Object,
})
</script>

<style scoped>

</style>