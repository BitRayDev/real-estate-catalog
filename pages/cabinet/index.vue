<template>
  <UserProfile
      :user="user"
      :properties="properties"
      avatar-uploadable
      @property-edited="editProperty"
      @avatar-uploaded="onAvatarUploaded"
  >
    <template #buttons>
      <AppButton class="bg-red-500 border-none" @click.native="logOut()">Выйти из аккаунта</AppButton>
    </template>
  </UserProfile>
</template>

<script setup>
import UserProfile from "../../components/UserProfile";
import {useAuthStore} from "../../stores/auth";
import AppButton from "../../components/inputs/buttons/AppButton";
import {useApiFetch} from "../../composables/useApiFetch";
import {useRouter} from "nuxt/app";
import {formatDate} from "../../utils/format"


definePageMeta({
  layout: "cabinet"
})

const authStore = useAuthStore();
const user = ref({});

const properties = computed(() => {
  return [
    {
      name: "created_at",
      label: "Дата регистрации",
      value: formatDate(user.value.created_at),
    },
    {
      name: "phone_number",
      label: "Номер телефона",
      value: user.value.phone_number,
      isEditable: true,
    },
    {
      name: "email",
      label: "Email",
      value: user.value.email,
      isEditable: true,
    },
  ]
})

onMounted(() => {
  user.value = authStore.getUser;
})
const router = useRouter();
function editProperty(property, value) {
  useApiFetch('/auth/user', {
    method: 'POST',
    body: {
      ...user.value,
      [property.name]: value,
    }
  }).then(() => {
    router.go(0);
  })
}

function onAvatarUploaded(file) {
  const formData = new FormData();
  formData.append('files', file);

  useApiFetch('/upload', {
    method: 'POST',
    body: formData
  }).then((filenames) => {
    editProperty({name: 'avatar_url'}, filenames[0])
  })
}

function logOut() {
  authStore.logOut();
}
</script>

<style scoped>

</style>