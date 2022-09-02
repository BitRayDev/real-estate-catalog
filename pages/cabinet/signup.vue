<template>
  <div class="flex flex-grow flex-col justify-center items-center">
    <div class="flex flex-col items-center gap-1 w-60">
      <h1 class="mb-1 text-xl">Регистрация</h1>
      <TextField class="w-full" placeholder="Логин" v-model="loginFieldValue"/>
      <TextField class="w-full" placeholder="Имя" v-model="fullNameFieldValue"/>
      <TextField class="w-full" placeholder="Телефон" v-model="phoneNumberFieldValue"/>
      <TextField class="w-full" placeholder="E-mail" v-model="emailFieldValue"/>
      <TextField class="w-full" placeholder="Пароль" type="password" v-model="passwordFieldValue"/>
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
import {useApiFetch} from "../../composables/useApiFetch";
import {useAuthStore} from "../../stores/auth";

definePageMeta({
  noAuthRequired: true,
  layout: "default",
})


const loginFieldValue = ref("");
const passwordFieldValue = ref("");
const fullNameFieldValue = ref("");
const phoneNumberFieldValue = ref("");
const emailFieldValue = ref("");

const authStore = useAuthStore();
const router = useRouter();

function onSubmit() {
  useApiFetch('/auth/signup', {
    method: 'POST',
    body: {
      user_login: loginFieldValue.value,
      full_name: fullNameFieldValue.value,
      phone_number: phoneNumberFieldValue.value,
      password: passwordFieldValue.value,
      email: passwordFieldValue.value,
    }
  }).then((res) => {
    authStore.logIn(loginFieldValue.value, passwordFieldValue.value);
  })
}
</script>