<template>
  <div class="flex flex-col gap-2 h-fit px-4 py-2 border border-black/5 shadow-md shadow-black/5 rounded-2xl">
    <DropDownSelect class="w-fit" label="Сортировка" :options="sortOptions" v-model="filterValues.sort"/>
    <component v-for="filter in filters" :is="filter.component" v-bind="filter.props" v-model="filterValues[filter.name]" />
    <AppButton class="mt-4" @click="applyFilter">Поиск</AppButton>
  </div>
</template>

<script setup>
import AppButton from "../inputs/buttons/AppButton";
import DropDownSelect from "../inputs/selects/DropDownSelect/DropDownSelect";

const router = useRouter();
const route = useRoute();

const props = defineProps({
  filters: Array,
  sortOptions: Array,
})
const filterValues = ref({});

onMounted(() => {
  for(let name in route.query) {
    filterValues.value[name] = JSON.parse(route.query[name]);
  }
})

async function applyFilter() {
  const queryObject = {};
  for(let name in filterValues.value) {
    queryObject[name] = JSON.stringify(filterValues.value[name]);
  }

  await router.push({
    path: route.path,
    query: queryObject,
  })
  router.go(0);
}
</script>

<style scoped>

</style>