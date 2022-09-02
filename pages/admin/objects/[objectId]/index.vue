<template>
  <ObjectProfile :object="object" :properties="properties" @property-edited="onPropertyEdited">
    <template #buttons>
      <AppButton class="mt-2 px-8 !py-2 bg-red-400 text-white font-medium border-none w-fit"
                 @click.native="deleteClick">Удалить обяъвление
      </AppButton>
      <NuxtLink :to="`/admin/objects/${route.params.objectId}/edit-booking`">
        <AppButton class="mt-2 px-8 !py-2 bg-green-400 text-white font-medium border-none w-fit">
          Редактировать календарь бронрования
        </AppButton>
      </NuxtLink>
    </template>
  </ObjectProfile>
</template>

<script setup>
import {useRouter} from "nuxt/app";
import AppButton from "../../../../components/inputs/buttons/AppButton";
import ObjectProfile from "../../../../components/ObjectProfile";
import {formatAddress} from "../../../../utils/format";
import {useApiFetch} from "../../../../composables/useApiFetch";

const route = useRoute();
const router = useRouter();

const object = ref({});

const properties = computed(() => [
  {
    label: "Адрес",
    value: formatAddress(object?.value.city, object?.value.street, object?.value.house_number),
  },
  {
    name: "price",
    label: "Цена",
    value: object?.value.price + "$",
    isEditable: true,
  },
  {
    name: "area",
    label: "Площадь",
    value: object?.value.area + "кв. м.",
    isEditable: true,
  },
  {
    name: "rooms_amount",
    label: "Количество комнат",
    value: object?.value.rooms_amount,
    isEditable: true,
  },
]);

onMounted(async () => {
  object.value = await useApiFetch(`/objects/${route.params.objectId}`)
})

function onPropertyEdited(property, value) {
  useApiFetch(`/objects/${route.params.objectId}`, {
    method: 'POST',
    body: {
      ...object.value,
      [property.name]: value,
    }
  }).then(() => {
    router.go(0);
  })
}

function deleteClick() {
  useApiFetch(`/objects/${route.params.objectId}`, {
    method: 'DELETE',
  }).then(() => {
    router.push('/cabinet/objects/');
  })
}

function editBookCalendar() {

}
</script>

<style scoped>

</style>