<template>
  <div class="flex gap-4 p-2 w-full border border-black/5 shadow-md shadow-black/5 rounded-2xl overflow-hidden">
    <Avatar class="h-20 w-20" :src="userData?.avatar"/>
    <div>
      <p>{{ userData?.name }}</p>
      <NuxtLink :to="`/admin/users/${userData?.id}`">
        <AppButton>Редактировать</AppButton>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import Avatar from "../avatars/Avatar";
import AppButton from "../inputs/buttons/AppButton";

const props = defineProps({
  userData: Object,
})
</script>

<style scoped>

</style>