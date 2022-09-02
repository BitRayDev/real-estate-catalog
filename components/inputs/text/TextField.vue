<template>
  <div class="text-sm">
    <p>{{ label }}</p>
    <div class="flex gap-2 items-center px-3 py-1 border border-black/20 rounded-2xl">
      <MaterialIcon v-if="icon">{{ icon }}</MaterialIcon>
      <input
          class="block w-full appearance-none text-inherit outline-none bg-inherit"
          :value="inputValue"
          @change="onInput"
          v-bind="$attrs"
      />
      <MaterialIcon v-if="appendIcon">{{ appendIcon }}</MaterialIcon>
    </div>
  </div>
</template>

<script setup>
import MaterialIcon from "../../icons/MaterialIcon";

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  label: String,
  modelValue: [String, Number],
  icon: String,
  appendIcon: String,
})

const inputValue = ref(props.modelValue)
watch(() => props.modelValue, (newValue) => inputValue.value = newValue)

function onInput(e) {
  inputValue.value = e.target.value;
  emit('update:modelValue', inputValue.value);
}
</script>

<style scoped>

</style>