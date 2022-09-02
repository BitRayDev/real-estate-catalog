<template>
  <div>
    <div class="flex justify-end mb-1">
      <NuxtLink to="/cabinet/objects/new">
        <AppButton class="bg-green-400 text-white text-xl border-none">Добавить</AppButton>
      </NuxtLink>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
      <NuxtLink v-for="object in objects" :to="`/cabinet/objects/${object.estate_object_id}`">
        <EstateObjectCard :objectData="object"/>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import EstateObjectCard from "../../../components/cards/EstateObjectCard";
import AppButton from "../../../components/inputs/buttons/AppButton";
import {useApiFetch} from "../../../composables/useApiFetch";

const objects = ref([]);

onMounted(async () => {
  objects.value = await useApiFetch('/auth/user/objects');
})
</script>

<style scoped>

</style>