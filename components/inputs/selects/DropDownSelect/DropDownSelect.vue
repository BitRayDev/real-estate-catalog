<template>
  <div>
    <p class="text-sm">{{label}}</p>
    <div class="relative">
      <div class="flex items-center gap-2 justify-between px-3 py-1 border border-black/20 rounded-2xl">
        <p class="text-sm">{{ selectedLabel }}</p>
        <IconButton class="text-xl" @click.native="isExpanded = !isExpanded">
          expand_more
        </IconButton>
      </div>
      <div class="absolute flex flex-col gap-2 top-10 px-4 py-1 border border-black/5 rounded-2xl bg-white" v-show="isExpanded">
        <DropDownSelectOption
            v-for="(option, index) in options"
            :key="index"
            :checkbox-visible="multiple"
            :label="option.label"
            :icon="option.icon"
            :model-value="isOptionChecked(option)"
            @click.native="onOptionClick(option)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import MaterialIcon from "../../../icons/MaterialIcon";
import AppButton from "../../buttons/AppButton";
import IconButton from "../../buttons/IconButton";
import DropDownSelectOption from "./DropDownSelectOption";

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  label: String,
  options: Array,
  modelValue: [String, Array],
  multiple: Boolean,
})

const selected = ref(props.modelValue ?? (props.multiple ? [] : ''));
watch(() => props.modelValue, (newValue) => selected.value = newValue);

const isExpanded = ref(false);

function onOptionClick(option) {
  if (props.multiple) {
    if (selected.value.includes(option.value)) {
      selected.value = selected.value.filter(selectedOption => selectedOption.value !== option.value);
    } else {
      selected.value = [
        ...selected.value,
        option.value
      ]
    }
  } else {
    if (selected.value === option.value) {
      selected.value = null
    } else {
      selected.value = option.value;
    }
    isExpanded.value = false;
  }
  emit('update:modelValue', selected.value);
}

function isOptionChecked(option) {
  const result = Array.isArray(selected.value) ? selected.value.includes(option.value) : selected.value == option.value;
  return result;
}

const selectedLabel = computed(() => {
  if (Array.isArray(selected.value)) {
    if (selected.value.length === 1) {
      return props.options.find((option) => option.value === selected.value[0].value)?.label;
    } else if (selected.value.length > 1) {
      return `${selected.value.length} выбрано`
    }
  } else {
    if (selected.value) {
      return props.options.find((option) => option.value === selected.value)?.label
    }
  }

  return 'Не выбрано'
})
</script>

<style scoped>

</style>