<template>
  <div>
    <div class="py-2">
      <div class="flex items-center sm:items-start flex-col sm:flex-row gap-4">
        <ColumnFilterContainer class="w-full sm:w-96" :filters="filters" :sort-options="sortOptions"/>
        <div class="flex flex-shrink-0 flex-col gap-2 w-full sm:w-1/2 md:w-2/3">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            <NuxtLink v-for="object in objects" :to="`/objects/${object.estate_object_id}`">
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
import RangeField from "../components/inputs/text/RangeField";
import ColumnFilterContainer from "../components/filter-containers/ColumnFilterContainer";
import {useApiFetch} from "../composables/useApiFetch";
import TextField from "../components/inputs/text/TextField";

const route = useRoute();

const objects = ref([]);

const filters = [
  {
    component: ButtonSelect,
    name: "type_of_deal",
    props: {
      options: [
        {
          label: "Суточная аренда",
          value: "daily"
        },
        {
          label: "Постоянная аренда",
          value: "monthly"
        },
        {
          label: "Покупка",
          value: "sell"
        },
      ],
      multiple: true,
    },
  },
  {
    component: TextField,
    name: "city",
    props: {
      label: "Город"
    }
  },
  {
    component: TextField,
    name: "street",
    props: {
      label: "Улица"
    }
  },
  {
    component: TextField,
    name: "house_number",
    props: {
      label: "Дом"
    }
  },
  {
    component: RangeField,
    name: "price",
    props: {
      label: "Цена"
    }
  },
  {
    component: RangeField,
    name: "rooms_amount",
    props: {
      label: "Количество комнат"
    }
  },
  {
    component: RangeField,
    name: "area",
    props: {
      label: "Площадь"
    }
  },
]

const sortOptions = [
  {
    label: "По цене по возрастанию",
    value: "price/ASC",
  },
  {
    label: "По цене по убыванию",
    value: "price/DESC",
  },
]
const sortSelectedOption = ref(sortOptions[0].value);

onMounted(async () => {
  objects.value = await useApiFetch('/objects/', { params: route.query });
})
</script>

<style scoped>

</style>