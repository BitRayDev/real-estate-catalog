<template>
  <div class="flex flex-grow flex-col justify-center items-center">
    <div class="flex flex-col items-center gap-1 w-60">
      <h1 class="mb-1 text-xl">Регистрация</h1>
      <TextField class="w-full" placeholder="Логин"/>
      <TextField class="w-full" placeholder="Пароль" type="password"/>
      <TextField class="w-full" placeholder="Повторите пароль" type="password"/>
      <AppButton class="text-sm" @click.native="onSubmit">Зарегистрироваться</AppButton>
      <p class="text-xs">
        Уже есть аккаунт?
        <NuxtLink class="text-blue-700" to="/cabinet/signin">
          Войдите в него
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import TextField from "../../components/inputs/text/TextField";
import AppButton from "../../components/inputs/buttons/AppButton";

definePageMeta({
  noAuthRequired: true,
  layout: "default",
})


const loginFieldValue = ref("");
const passwordFieldValue = ref("");
const repeatPasswordFieldValue = ref("");

function onSubmit() {
  // TODO: Log In
}
</script>