<template>
  <div class="text-sm">
    <p>{{ label }}</p>
    <textarea
        class="block w-full h-24 px-3 py-1 border border-black/20 rounded-2xl appearance-none text-inherit outline-none bg-inherit resize-none"
        :value="inputValue"
        @change="onInput"
        v-bind="$attrs"
    />
  </div>
</template>

<script setup>
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  label: String,
  modelValue: String,
})

const inputValue = ref(props.modelValue)

function onInput(e) {
  inputValue.value = e.target.value;
  emit('update:modelValue', inputValue.value);
}
</script>

<style scoped>

</style>