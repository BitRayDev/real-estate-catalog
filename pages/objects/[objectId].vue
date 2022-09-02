<template>
  <div>
    <Dialog
        title="Успешное бронирование"
        text="Ожидайте, пока владелец объекта подтвердит вашу заявку."
        v-if="confirmationDialog.isActive"
        @submit="confirmationDialog.isActive = false"
        @cancel="confirmationDialog.isActive = false"
    />
    <Dialog
        title="Новая запись"
        v-if="newRecordDialog.isActive"
        @submit="addNewRecord"
        @cancel="newRecordDialog.isActive = false"
    >
      <template #content>
        <div>
          <p>С</p>
          <input type="date" v-model="newRecordDialog.from"/>
        </div>
        <div>
          <p>По</p>
          <input type="date" v-model="newRecordDialog.to"/>
        </div>
        <TextField label="Контактный номер" v-model="newRecordDialog.contact_phone_number"/>
      </template>
    </Dialog>
    <ObjectProfile :object="object" :properties="properties">
      <template #buttons>
        <AppButton class="mt-2 px-8 !py-2 bg-green-400 text-white font-medium border-none w-fit"
                   @click.native="newRecordDialog.isActive=true">
          Забронировать
        </AppButton>
      </template>
    </ObjectProfile>
  </div>
</template>

<script setup>
import ObjectProfile from "../../components/ObjectProfile";
import {formatAddress} from "../../utils/format";
import {useApiFetch} from "../../composables/useApiFetch";
import AppButton from "../../components/inputs/buttons/AppButton";
import Dialog from "../../components/dialogs/Dialog";
import TextField from "../../components/inputs/text/TextField";
import {useAuthStore} from "../../stores/auth";

const authStore = useAuthStore();
const route = useRoute();

const object = ref({});

const properties = computed(() => {
  return [
    {
      label: "Адрес",
      value: formatAddress(object?.value.city, object?.value.street, object?.value.house_number),
    },
    {
      label: "Цена",
      value: object?.value.price + "$"
    },
    {
      label: "Площадь",
      value: object?.value.area + "кв. м."
    },
    {
      label: "Количество комнат",
      value: object?.value.rooms_amount
    },
  ]
});

const confirmationDialog = reactive({
  isActive: false
})
const newRecordDialog = reactive({
  isActive: false,
  from: "",
  to: "",
  contact_phone_number: authStore.user?.phone_number,
})

function addNewRecord() {
  useApiFetch(`/objects/${route.params.objectId}/booking`, {
    method: 'POST',
    body: {
      from: newRecordDialog.from,
      to: newRecordDialog.to,
      contact_phone_number: newRecordDialog.contact_phone_number,
    }
  }).then(() => {
    newRecordDialog.isActive = false;
    confirmationDialog.isActive = true;
  })
}

onMounted(async () => {
  object.value = await useApiFetch(`/objects/${route.params.objectId}`)
})
</script>

<style scoped>

</style>