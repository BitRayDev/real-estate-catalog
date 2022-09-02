<template>
  <div class="p-4 bg-white shadow-md shadow-black/5">
    <div class="flex items-center justify-between gap-4 lg:w-5/6 xl:w-2/3 mx-auto">
      <NuxtLink class="flex items-center gap-2" to="/">
        <img class="h-8" :src="logo"/>
        <p class="text-2xl font-semibold leading-none uppercase">{{ websiteName }}</p>
      </NuxtLink>
      <div class="flex gap-2">
        <template v-if="!authStore.isAuthorized">
          <NuxtLink to="/cabinet/signin">
            <AppButton class="text-sm bg-blue-50 !border-blue-300">
              Войти
            </AppButton>
          </NuxtLink>
        </template>
        <template v-else>
          <NuxtLink to="/admin/" v-if="authStore.isAdmin">
            <AppButton class="text-sm !border-blue-300">
              Админка
            </AppButton>
          </NuxtLink>
          <NuxtLink to="/cabinet/">
            <AppButton class="text-sm bg-blue-50 !border-blue-300">
              Личный кабинет
            </AppButton>
          </NuxtLink>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppButton from "./inputs/buttons/AppButton";
import {useAuthStore} from "../stores/auth";

const authStore = useAuthStore();

const logo = 'https://icon-library.com/images/skyscrapers-icon/skyscrapers-icon-20.jpg';
const websiteName = 'Site Name'
const navMenuItems = [
  {
    label: "Личный Кабинет",
    to: "/cabinet"
  }
]
</script>