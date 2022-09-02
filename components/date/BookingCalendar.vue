<template>
  <div class="flex flex-col gap-2 py-2 px-4 border border-black/5 shadow-md shadow-black/5 rounded-2xl w-fit">
    <div class="flex justify-between items-center gap-2">
      <IconButton class="text-xl" @click.native="showPreviousMonth">chevron_left</IconButton>
      <p class="capitalize">{{ monthAndYearLabel }}</p>
      <IconButton class="text-xl" @click.native="showNextMonth">chevron_right</IconButton>
    </div>
    <div class="grid grid-cols-7 gap-1">
      <p class="text-gray-400 text-sm text-center row-start-1 row-end-1" v-for="weekDayLabel in weekDayLabels">{{ weekDayLabel }}</p>
      <div
          class="flex flex-col gap-1 items-center justify-center w-12 aspect-square rounded-full bg-green-400 text-white"
          :class="{
             'bg-gray-100 text-gray-500': !isDayAvailableForBooking(day),
             'border-2 border-blue-200': isDayIsToday(day)
          }"
          :style="{gridRow: getDayRow(day), gridColumn: getDayColumn(day)}"
          v-for="day in getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth())"
      >
        <p class="text-base text-inherit text-center font-bold leading-none">{{ day }}</p>
        <p v-if="isDayAvailableForBooking(day)" class="text-xs text-inherit text-center leading-none">{{ getDayPrice(day) }}$</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import MaterialIcon from "../icons/MaterialIcon";
import IconButton from "../inputs/buttons/IconButton";
import {getDayCountingFromMonday, getDaysInMonth} from "../../utils/date";

const props = defineProps({
  regularPrice: Number,
  specialPrices: {
    type: Array,
    default() {
      return []
    }
  },
  records: {
    type: Array,
    default() {
      return [];
    }
  },
})

const weekDayLabels = [
  "Пн",
  "Вт",
  "Ср",
  "Чт",
  "Пт",
  "Сб",
  "Вс",
]

const currentDate = ref(new Date());

function getFullDateByDay(day) {
  return new Date(currentDate.value.getFullYear(), currentDate.value.getMonth(), day);
}

function getDayNumber(day) {
  return getDayCountingFromMonday(getFullDateByDay(day))
}

function getDayColumn(day) {
  return getDayNumber(day) + 1;
}

function getDayRow(day) {
  const row = Math.floor((day - getDayNumber(day) + 5) / 7) + 2;
  return row;
}

function isDayAvailableForBooking(day) {
  const nowDate = new Date();
  if (getFullDateByDay(day) < nowDate)
    return false;

  for(const record of props.records) {
    if(record.status !== 'accepted')
      continue;

    if(getFullDateByDay(day) > new Date(record.from) && getFullDateByDay(day) < new Date(record.to))
      return false;
  }

  return true;
}

function isDayIsToday(day) {
  const fullDate = getFullDateByDay(day);
  const nowDate = new Date();
  if (fullDate.getFullYear() == nowDate.getFullYear() && fullDate.getMonth() == nowDate.getMonth() && fullDate.getDate() == nowDate.getDate())
    return true;
  return false;
}

function showNextMonth() {
  currentDate.value = new Date(currentDate.value.setMonth(currentDate.value.getMonth() + 1));
}

function showPreviousMonth() {
  currentDate.value = new Date(currentDate.value.setMonth(currentDate.value.getMonth() - 1));
}

function getDayPrice(day) {
  const fullDate = getFullDateByDay(day);
  for(const specialPricePeriod of props.specialPrices) {
    const fromDate = new Date(specialPricePeriod.from);
    const toDate = new Date(specialPricePeriod.to);
    if(fullDate > fromDate && fullDate < toDate)
      return specialPricePeriod.price;
  }
  return props.regularPrice;
}

const monthAndYearLabel = computed(() => {
  return currentDate.value.toLocaleString("ru-RU", {
    month: "long",
    year: "numeric"
  })
})

</script>

<style scoped>

</style>