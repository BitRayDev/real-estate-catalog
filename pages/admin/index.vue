<template>
  <div>
    <div class="flex justify-end mb-1">
<!--      <NuxtLink to="/cabinet/objects/new">-->
<!--        <AppButton class="bg-blue-100 border-none">Добавить</AppButton>-->
<!--      </NuxtLink>-->
    </div>
    <div class="flex flex-col gap-2">
      <UserCard v-for="user in users" :user-data="user"/>
    </div>
  </div>
</template>

<script setup>
import UserCard from "../../components/cards/UserCard";
import AppButton from "../../components/inputs/buttons/AppButton";
import {useApiFetch} from "../../composables/useApiFetch";
import {useAuthStore} from "../../stores/auth";

const authStore = useAuthStore();

const users = ref([])

onMounted(async () => {
  users.value = (await useApiFetch('/users/')).filter(user => user.user_login == authStore.user.user_login);
  console.log(users.value);
})
</script>

<style scoped>

</style>