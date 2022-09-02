<template>
  <div>
    <div class="flex justify-end mb-1">
<!--      <NuxtLink to="/cabinet/objects/new">-->
<!--        <AppButton class="bg-blue-100 border-none">Добавить</AppButton>-->
<!--      </NuxtLink>-->
    </div>
    <div class="grid grid-cols-2 gap-2">
      <NuxtLink v-for="object in objects" :to="`/admin/objects/${object.estate_object_id}`">
        <EstateObjectCard :objectData="object"/>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import EstateObjectCard from "../../../components/cards/EstateObjectCard";
import AppButton from "../../../components/inputs/buttons/AppButton";
import {useApiFetch} from "../../../composables/useApiFetch";

const route = useRoute();

const objects = ref([])

onMounted(async () => {
  objects.value = await useApiFetch('/objects/');
})
</script>

<style scoped>

</style>