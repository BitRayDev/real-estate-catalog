<template>
  <div class="flex flex-col gap-2 p-4 border border-black/5 shadow-md shadow-black/5 rounded-2xl">
    <div class="flex flex-col md:flex-row gap-4">
      <Gallery class="w-full md:w-1/2 flex-shrink-0" :images="photoUrls"/>
      <div class="flex flex-grow flex-col gap-4">
        <h1 class="text-2xl">{{ object?.name }}</h1>
        <PropertyList :items="properties">
          <template #item.value="{ item }">
            <EditableText :value="item.value" v-if="item.isEditable" @editConfirm="onPropertyEdited(item, $event)"/>
            <div class="flex items-center gap-1" v-else>
              <p>{{ item.value }}</p>
            </div>
          </template>
        </PropertyList>
        <div class="flex gap-2">
          <slot name="buttons"/>
        </div>
        <div>
          <p>Календарь бронирования</p>
          <BookingCalendar :records="bookingRecords" :special-prices="specialPrices" :regular-price="object.price"/>
        </div>
      </div>
    </div>
    <div>
      <h2 class="text-xl font-medium">Описание</h2>
      <p class="text-sm">{{ object?.description }}</p>
    </div>
  </div>
</template>

<script setup>
import Gallery from "./galleries/Gallery";
import PropertyList from "./data-views/property-list/PropertyList";
import BookingCalendar from "./date/BookingCalendar";
import AppButton from "./inputs/buttons/AppButton";
import EditableText from "./inputs/text/EditableText";
import {useApiFetch} from "../composables/useApiFetch";
import FullScreenGallery from "./galleries/FullScreenGallery";

const route = useRoute();

const emit = defineEmits(['property-edited'])
const props = defineProps({
  object: Object,
  properties: Array,
})

const bookingRecords = ref([]);
const specialPrices = ref([]);
onMounted(async () => {
  bookingRecords.value = await useApiFetch(`/objects/${route.params.objectId}/booking`);
  specialPrices.value = await useApiFetch(`/objects/${route.params.objectId}/booking-pricing`);
})

function onPropertyEdited(property, value) {
  emit('property-edited', property, value)
}

const photoUrls = computed(() => {
  return props.object?.photos?.map(photoName => useApiAsset(photoName));
})


</script>

<style scoped>

</style>