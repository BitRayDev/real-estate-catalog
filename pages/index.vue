<template>
  <div>
    <div class="py-2">
      <div class="flex gap-4">
        <div class="flex flex-col gap-2 w-96 h-fit px-4 py-2 border border-black/5 shadow-md shadow-black/5 rounded-2xl">
          <ButtonSelect label="Тип сделки" :options="filter.typeOfDeal.options" v-model="filter.typeOfDeal.value"
                        multiple/>
          <RangeField label="Цена"/>
          <RangeField label="Количество комнат"/>
          <AppButton class="mt-4">Поиск</AppButton>
        </div>
        <div class="flex flex-shrink-0 flex-col gap-2 w-2/3">
          <div class="px-4 py-2 border border-black/5 shadow-md shadow-black/5 rounded-2xl">
            <DropDownSelect class="w-fit" label="Сортировка" :options="sortOptions" v-model="sortSelectedOption"/>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <NuxtLink v-for="object in objects" :to="`/objects/${object.id}`">
              <EstateObjectCard :objectData="object"/>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import EstateObjectCard from "../components/cards/EstateObjectCard";
import ButtonSelect from "../components/inputs/selects/ButtonSelect";
import DropDownSelect from "../components/inputs/selects/DropDownSelect/DropDownSelect";
import TextField from "../components/inputs/text/TextField";
import RangeField from "../components/inputs/text/RangeField";
import AppButton from "../components/inputs/buttons/AppButton";

const testObject = {
  id: 0,
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

const filter = reactive({
  typeOfDeal: {
    options: [
      {
        label: "Суточная аренда",
        value: ""
      },
      {
        label: "Постоянная аренда",
        value: ""
      },
      {
        label: "Покупка",
        value: ""
      },
    ],
    value: []
  }
})

const sortOptions = [
  {
    label: "По цене по возрастанию",
    value: "price_ascending",
    comparer: (a, b) => {
      return a.price - b.price
    }
  },
  {
    label: "По цене по убыванию",
    value: "price_ascending",
    comparer: (a, b) => {
      return b.price - a.price
    }
  },
]
const sortSelectedOption = ref(sortOptions[0])
</script>

<style scoped>

</style>