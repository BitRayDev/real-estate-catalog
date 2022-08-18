<template>
  <div class="flex flex-col gap-2">
    <UserCard v-for="user in users" :user-data="user"/>
  </div>
</template>

<script setup>
import UserCard from "../../components/cards/UserCard";

const testUser = {
  id: 0,
  avatar: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-on-chest_176420-18743.jpg?w=2000",
  name: "Пупкин Владимир Владимирович",
  createdAt: "02.02.2022",
  objectsAmount: "4",
  phoneNumber: "+72525252525",
  email: "pupkin@gmail.com",
  vk: "@pupkin",
  telegram: "@pupkin",
}
const users = [
  testUser,
  testUser,
  testUser,
  testUser,
  testUser,
  testUser,
  testUser,
]
</script>

<style scoped>

</style>