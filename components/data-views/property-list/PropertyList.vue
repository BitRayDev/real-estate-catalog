<template>
  <div class="flex flex-col gap-2">
    <PropertyListItem v-for="item in items" :label="item.label" :value="item.value">
      <template #label>
        <slot name="item.label" :item="item"/>
      </template>
      <template #value>
        <slot name="item.value" :item="item"/>
      </template>
    </PropertyListItem>
  </div>
</template>

<script setup>
import PropertyListItem from "./PropertyListItem";

const props = defineProps({
  items: {
    type: Array,
    default() {
      return []
    }
  }
})
</script>

<style scoped>

</style>