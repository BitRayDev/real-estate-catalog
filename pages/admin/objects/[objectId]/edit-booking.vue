<template>
  <div>
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
      </template>
    </Dialog>
    <AppButton @click.native="newRecordDialog.isActive=true">Добавить</AppButton>
    <table>
      <thead>
      <tr>
        <th>С</th>
        <th>По</th>
        <th>Действия</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="record in bookingRecords">
        <td>{{ record.from }}</td>
        <td>{{ record.to }}</td>
        <td>
          <AppButton @click.native="deleteRecord(record)">Удалить</AppButton>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import {useApiFetch} from "../../../../composables/useApiFetch";
import MaterialIcon from "../../../../components/icons/MaterialIcon";
import AppButton from "../../../../components/inputs/buttons/AppButton";
import Dialog from "../../../../components/dialogs/Dialog";

const route = useRoute();
const router = useRouter();

const bookingRecords = ref([])

const newRecordDialog = reactive({
  isActive: false,
  from: "",
  to: "",
})

onMounted(async () => {
  bookingRecords.value = await useApiFetch(`/objects/${route.params.objectId}/booking`);
  console.log(bookingRecords.value)
})

function deleteRecord(record) {
  useApiFetch(`/objects/booking/${record.booking_id}`, {
    method: 'DELETE'
  }).then(() => {
    router.go(0);
  })
}

function addNewRecord() {
  useApiFetch(`/objects/${route.params.objectId}/booking`, {
    method: 'POST',
    body: {
      from: newRecordDialog.from,
      to: newRecordDialog.to,
    }
  }).then(() => {
    router.go(0);
  })
}
</script>

<style scoped>

</style>