<template>
  <div class="flex flex-col gap-2 p-4 border border-black/5 shadow-md shadow-black/5 rounded-2xl">
    <div class="flex gap-4">
      <div class="flex flex-col gap-2 w-1/2">
        <img class="rounded-2xl" :src="object.images[0]"/>
        <div class="flex gap-2 overflow-auto">
          <img class="rounded-2xl h-24 aspect-video object-cover" v-for="image in object.images" :src="image"/>
        </div>
      </div>
      <div class="flex flex-grow flex-col gap-4">
        <h1 class="text-2xl">{{ object.name }}</h1>
        <PropertyList :items="properties"/>
        <div>
          <p>Календарь бронирования</p>
          <BookingCalendar/>
          <AppButton class="mt-2 px-8 !py-2 bg-green-400 text-white font-medium border-none w-fit">Забронировать</AppButton>
        </div>
      </div>
    </div>
    <div>
      <h2 class="text-xl font-medium">Описание</h2>
      <p class="text-sm">{{ object.description }}</p>
    </div>
  </div>
</template>

<script setup>
import AppButton from "../../components/inputs/buttons/AppButton";
import PropertyList from "../../components/data-views/property-list/PropertyList";
import BookingCalendar from "../../components/date/BookingCalendar";

const object = {
  id: 0,
  name: "Сдам квартиру посуточно",
  description: "Да-да, сдам",
  address: "г. Новосибирск, ул. Советская, д.2",
  price: 250,
  images: [
    'https://media.istockphoto.com/photos/beautiful-residential-home-exterior-on-bright-sunny-day-with-green-picture-id1211174464?k=20&m=1211174464&s=612x612&w=0&h=fQ3ahmaJnYcZb0UQtBXvOhcuhHFTgK9BA5Mylic7Gnw=',
    'https://media.istockphoto.com/photos/beautiful-residential-home-exterior-on-bright-sunny-day-with-green-picture-id1211174464?k=20&m=1211174464&s=612x612&w=0&h=fQ3ahmaJnYcZb0UQtBXvOhcuhHFTgK9BA5Mylic7Gnw=',
    'https://media.istockphoto.com/photos/beautiful-residential-home-exterior-on-bright-sunny-day-with-green-picture-id1211174464?k=20&m=1211174464&s=612x612&w=0&h=fQ3ahmaJnYcZb0UQtBXvOhcuhHFTgK9BA5Mylic7Gnw=',
    'https://media.istockphoto.com/photos/beautiful-residential-home-exterior-on-bright-sunny-day-with-green-picture-id1211174464?k=20&m=1211174464&s=612x612&w=0&h=fQ3ahmaJnYcZb0UQtBXvOhcuhHFTgK9BA5Mylic7Gnw=',
    'https://media.istockphoto.com/photos/beautiful-residential-home-exterior-on-bright-sunny-day-with-green-picture-id1211174464?k=20&m=1211174464&s=612x612&w=0&h=fQ3ahmaJnYcZb0UQtBXvOhcuhHFTgK9BA5Mylic7Gnw=',
    'https://media.istockphoto.com/photos/beautiful-residential-home-exterior-on-bright-sunny-day-with-green-picture-id1211174464?k=20&m=1211174464&s=612x612&w=0&h=fQ3ahmaJnYcZb0UQtBXvOhcuhHFTgK9BA5Mylic7Gnw=',
  ],
  area: 70,
  roomsAmount: 3,
}

const activeGalleryImage = ref(object.images[0]);

const properties = [
  {
    label: "Адрес",
    value: object.address
  },
  {
    label: "Цена",
    value: object.price + "$"
  },
  {
    label: "Площадь",
    value: object.area + "кв. м."
  },
  {
    label: "Количество комнат",
    value: object.roomsAmount
  },
]
</script>

<style scoped>

</style>