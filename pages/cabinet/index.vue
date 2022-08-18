<template>
  <div class="flex flex-shrink-0 gap-2 p-4 border border-black/5 shadow-md shadow-black/5 rounded-2xl">
    <div class="flex-grow">
      <h2 class="text-2xl">{{ user.name }}</h2>
      <PropertyList :items="properties">
        <template #item.value="{ item }">
          <EditableText :value="item.value" v-if="item.isEditable" @editConfirm="onItemEdited(item, $event)" />
          <div class="flex items-center gap-1" v-else>
            <p>{{ item.value }}</p>
          </div>
        </template>
      </PropertyList>
    </div>
    <Avatar :src="user.avatar"/>
  </div>
</template>

<script setup>
import Avatar from "../../components/avatars/Avatar";
import PropertyList from "../../components/data-views/property-list/PropertyList";
import AppButton from "../../components/inputs/buttons/AppButton";
import IconButton from "../../components/inputs/buttons/IconButton";
import EditableText from "../../components/inputs/text/EditableText";

definePageMeta({
  layout: "cabinet"
})

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

function onItemEdited(item, newValue) {
  console.log(newValue)
}
</script>

<style scoped>

</style>