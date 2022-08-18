<template>
  <label>
    <input type="checkbox" :checked="isChecked" @change="onChange"/>
  </label>
</template>

<script setup>
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: Boolean,
})
const isChecked = ref(props.modelValue);

watch(() => props.modelValue, (newModelValue, oldModelValue) => {
  isChecked.value = newModelValue;
})

function onChange(e) {
  isChecked.value = e.target.checked;
  emit('update:modelValue', isChecked.value);
}

</script>

<style scoped>

</style>