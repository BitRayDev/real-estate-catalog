<template>
  <div>
    <Dialog
        title="Новая запись"
        v-if="addDialogPricing.isActive"
        @submit="addPricing"
        @cancel="addDialogPricing.isActive = false"
    >
      <template #content>
        <div>
          <p>С</p>
          <input type="date" v-model="addDialogPricing.from"/>
        </div>
        <div>
          <p>По</p>
          <input type="date" v-model="addDialogPricing.to"/>
        </div>
        <TextField label="Цена" type="number" v-model="addDialogPricing.price"/>
      </template>
    </Dialog>
    <p>Заявки бронирования</p>
    <table>
      <thead>
      <tr>
        <th>С</th>
        <th>По</th>
        <th>Контактный телефон</th>
        <th>Статус</th>
        <th>Действия</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="record in bookingRecords">
        <td>{{ new Date(record.from).toLocaleDateString() }}</td>
        <td>{{ new Date(record.to).toLocaleDateString() }}</td>
        <td>{{ record.contact_phone_number }}</td>
        <td>{{ record.status === 'accepted' ? 'Активна' : 'На рассмотрении' }}</td>
        <td>
          <div class="flex gap-1">
            <AppButton @click.native="deleteRecord(record)">Удалить</AppButton>
            <AppButton @click.native="acceptRecord(record)">Подтвердить</AppButton>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <p class="mt-8">Специальные цены</p>
    <table>
      <thead>
      <tr>
        <th>С</th>
        <th>По</th>
        <th>Цена</th>
        <th>Действия</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="pricing in bookingPricing">
        <td>{{ new Date(pricing.from).toLocaleDateString() }}</td>
        <td>{{ new Date(pricing.to).toLocaleDateString() }}</td>
        <td>{{ pricing.price }}$</td>
        <td>
          <div class="flex gap-1">
            <AppButton @click.native="deletePricing(pricing)">Удалить</AppButton>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <AppButton class="mt-2" @click.native="addDialogPricing.isActive=true">Добавить</AppButton>
  </div>
</template>

<script setup>
import {useApiFetch} from "../../../../composables/useApiFetch";
import MaterialIcon from "../../../../components/icons/MaterialIcon";
import AppButton from "../../../../components/inputs/buttons/AppButton";
import Dialog from "../../../../components/dialogs/Dialog";
import TextField from "../../../../components/inputs/text/TextField";

const route = useRoute();
const router = useRouter();

const bookingRecords = ref([])
const bookingPricing = ref([])

const addDialogPricing = reactive({
  isActive: false,
  from: "",
  to: "",
  price: "",
})

onMounted(async () => {
  bookingRecords.value = await useApiFetch(`/objects/${route.params.objectId}/booking`);
  bookingPricing.value = await useApiFetch(`/objects/${route.params.objectId}/booking-pricing`);
})

function deleteRecord(record) {
  useApiFetch(`/objects/booking/${record.booking_id}`, {
    method: 'DELETE'
  }).then(() => {
    router.go(0);
  })
}
function acceptRecord(record) {
  useApiFetch(`/objects/booking/${record.booking_id}`, {
    method: 'POST',
    body: {
      ...record,
      status: 'accepted'
    }
  }).then(() => {
    router.go(0);
  })
}

function deletePricing(pricing) {
  useApiFetch(`/objects/booking-pricing/${pricing.booking_pricing_id}`, {
    method: 'DELETE'
  }).then(() => {
    router.go(0);
  })
}


function addPricing() {
  useApiFetch(`/objects/${route.params.objectId}/booking-pricing`, {
    method: 'POST',
    body: {
      from: addDialogPricing.from,
      to: addDialogPricing.to,
      price: addDialogPricing.price,
    }
  }).then(() => {
    router.go(0);
  })
}
</script>

<style scoped>

</style>