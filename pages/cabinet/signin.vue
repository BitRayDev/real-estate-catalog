<template>
  <div class="flex flex-grow flex-col justify-center items-center h-full">
    <div class="flex flex-col items-center gap-1 w-60">
      <h1 class="text-xl">Вход</h1>
      <TextField class="w-full" placeholder="Логин"/>
      <TextField class="w-full" placeholder="Пароль" type="password"/>
      <AppButton class="text-sm" @click.native="onSubmit">Войти</AppButton>
      <p class="text-xs">
        Нет аккаунта?
        <NuxtLink class="text-blue-700" to="/cabinet/signup">
          Зарегистрируйтесь
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import TextField from "../../components/inputs/text/TextField";
import AppButton from "../../components/inputs/buttons/AppButton";
import {useAuthStore} from "../../stores/auth";

definePageMeta({
  noAuthRequired: true,
  layout: "default",
})

const authStore = useAuthStore();

const loginFieldValue = ref("");
const passwordFieldValue = ref("");

function onSubmit() {
  authStore.logIn();
}
</script>