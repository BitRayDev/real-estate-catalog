<template>
  <div class="flex gap-4 p-2 w-full border border-black/5 shadow-md shadow-black/5 rounded-2xl overflow-hidden">
    <Avatar class="h-20 w-20" :src="useApiAsset(userData?.avatar_url)"/>
    <div>
      <p>{{ userData?.full_name }}</p>
<!--      <NuxtLink :to="`/admin/users/${userData?.user_login}`">-->
<!--        <AppButton>Редактировать</AppButton>-->
<!--      </NuxtLink>-->
      <AppButton @click.native="deleteUser">Удалить</AppButton>
    </div>
  </div>
</template>

<script setup>
import Avatar from "../avatars/Avatar";
import AppButton from "../inputs/buttons/AppButton";
import {useApiFetch} from "../../composables/useApiFetch";

const props = defineProps({
  userData: Object,
})

function deleteUser() {
  useApiFetch(`/users/${userData.user_login}`, {
    method: "DELETE"
  })
}
</script>

<style scoped>

</style>