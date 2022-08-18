<template>
  <div>
    <p v-if="label">{{ label }}</p>
    <div class="flex gap-1 flex-wrap">
      <AppButton v-for="item in options" :class="getItemClass(item)" @click.native="onOptionClick(item)">
        <p class="text-sm">
          {{ item.label }}
        </p>
      </AppButton>
    </div>
  </div>
</template>

<script setup>
import AppButton from "../buttons/AppButton";

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  label: String,
  options: Array,
  modelValue: [Object, Array],
  multiple: Boolean,
})
const selected = ref(props.modelValue ?? (props.multiple ? [] : ''));

function onOptionClick(option) {
  if (props.multiple) {
    if (selected.value.includes(option)) {
      selected.value = selected.value.filter(selectedItem => selectedItem.value !== option.value);
    } else {
      selected.value = [
        ...selected.value,
        option
      ]
    }
  } else {
    if (selected.value === option) {
      selected.value = null
    } else {
      selected.value = option;
    }
  }
  emit('update:modelValue', selected.value);
}

function getItemClass(item) {
  return {
    '!border-blue-400': Array.isArray(selected.value) ? selected.value.includes(item) : selected.value == item,
  }
}
</script>

<style scoped>

</style>