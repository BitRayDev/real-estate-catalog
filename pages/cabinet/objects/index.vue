<template>
  <div class="grid grid-cols-2 gap-2">
    <NuxtLink v-for="object in objects" :to="`/objects/${object.id}`">
      <EstateObjectCard :objectData="object"/>
    </NuxtLink>
  </div>
</template>

<script setup>
import EstateObjectCard from "../../../components/cards/EstateObjectCard";

const testObject = {
  name: "Сдам квартиру посуточно",
  address: "г. Новосибирск, ул. Советская, д.2",
  price: 250,
  images: [
    'https://media.istockphoto.com/photos/beautiful-residential-home-exterior-on-bright-sunny-day-with-green-picture-id1211174464?k=20&m=1211174464&s=612x612&w=0&h=fQ3ahmaJnYcZb0UQtBXvOhcuhHFTgK9BA5Mylic7Gnw='
  ],
  area: 70,
  roomsAmount: 3,
}
const objects = [
  testObject,
  testObject,
  testObject,
  testObject,
]
</script>

<style scoped>

</style>