<template>
  <div class="grid grid-cols-2 gap-2">
    <NuxtLink v-for="object in objects" :to="`/objects/${object.id}`">
      <EstateObjectCard :objectData="object"/>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "EstateObjectList"
}
</script>

<style scoped>

</style>