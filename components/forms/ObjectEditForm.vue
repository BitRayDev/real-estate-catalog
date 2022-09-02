<template>
  <div class="flex flex-col gap-2">
    <TextField label="Название объявления" v-model="form.name"/>
    <TextArea label="Описание" v-model="form.description"/>
    <TextField label="Количество комнат" type="number" v-model="form.rooms_amount"/>
    <TextField label="Площадь" type="number" v-model="form.area"/>
    <TextField label="Цена ($)" type="number" v-model="form.price"/>
    <ButtonSelect :options="typeOfDealSelectOptions" label="Тип сделки" v-model="form.type_of_deal"/>
    <div class="flex gap-2 flex-wrap">
      <TextField label="Город" v-model="form.city"/>
      <TextField label="Улица" v-model="form.street"/>
      <TextField label="Номер дома" type="number" v-model="form.house_number"/>
    </div>
    <div class="bg-gray-100 p-3 rounded-3xl">
      <p>Фото</p>
      <div class="flex flex-wrap gap-2 w-full overflow-auto p-2">
        <UploadedObjectPhotoCard v-for="photo in photos" :src="useApiAsset(photo)" @remove="removePhoto(photo)"/>
      </div>
      <label>
        <AppButton @click.native="fileInput.click();">Добавить фото</AppButton>
        <input ref="fileInput" class="hidden" type="file" multiple @change="uploadPhotos"/>
      </label>
    </div>
    <AppButton class="bg-green-400 border-none" @click.native="onSubmit">Подтвердить</AppButton>
  </div>
</template>

<script setup>
import TextField from "../inputs/text/TextField";
import TextArea from "../inputs/text/TextArea";
import AppButton from "../inputs/buttons/AppButton";
import ButtonSelect from "../inputs/selects/ButtonSelect";
import UploadedObjectPhotoCard from "../cards/UploadedObjectPhotoCard";

const typeOfDealSelectOptions = [
  {
    label: "Суточная аренда",
    value: "daily",
  },
  {
    label: "Постоянная аренда",
    value: "monthly",
  },
  {
    label: "Продажа",
    value: "sell",
  },
]

const fileInput = ref(null);

const emit = defineEmits(['submit', 'upload:photos', 'remove:photo'])
const props = defineProps({
  photos: {
    type: Array,
    default() {
      return []
    }
  },
})
const form = reactive({
  name: "",
  description: "",
  rooms_amount: "",
  area: "",
  price: "",
  type_of_deal: "",
  city: "",
  street: "",
  house_number: "",
});

function removePhoto(photo) {
  emit('remove:photo', photo);
}

function uploadPhotos(event) {
  emit('upload:photos', event.target.files);
}

function onSubmit() {
  emit('submit', form);
}

</script>

<style scoped>

</style>