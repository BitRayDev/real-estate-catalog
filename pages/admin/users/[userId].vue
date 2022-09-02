<template>
  <UserProfile :user="user" :properties="properties" avatar-uploadable/>
</template>

<script setup>
import UserProfile from "../../../components/UserProfile";

const user = {
  avatar: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-on-chest_176420-18743.jpg?w=2000",
  name: "Пупкин Владимир Владимирович",
  createdAt: "02.02.2022",
  objectsAmount: "4",
  phoneNumber: "+72525252525",
  email: "pupkin@gmail.com",
  vk: "@pupkin",
  telegram: "@pupkin",
}

const properties = computed(() => {
  return [
    {
      label: "Дата регистрации",
      value: user.createdAt,
    },
    {
      label: "Количество объектов",
      value: user.createdAt,
    },
    {
      label: "Номер телефона",
      value: user.phoneNumber,
      isEditable: true,
    },
    {
      label: "Email",
      value: user.email,
      isEditable: true,
    },
    {
      label: "VK",
      value: user.vk,
      isEditable: true,
    },
    {
      label: "Telegram",
      value: user.telegram,
      isEditable: true,
    },
  ]
})
</script>

<style scoped>

</style>