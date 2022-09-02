<template>
  <div class="flex justify-center items-center fixed left-0 top-0 w-screen h-screen">
    <div class="absolute left-0 top-0 w-full h-full bg-black/50"/>
    <div class="flex flex-col gap-4 p-3 rounded-2xl bg-white relative z-10">
      <slot name="header">
        <h2 class="text-center">{{ title }}</h2>
      </slot>
      <slot name="content">
        <p>{{ text }}</p>
      </slot>
      <div class="flex gap-2">
        <slot name="buttons">
          <AppButton @click.native="emit('cancel')">Отмена</AppButton>
          <AppButton @click.native="emit('submit')">Ок</AppButton>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppButton from "../inputs/buttons/AppButton";

const emit = defineEmits(['submit', 'cancel']);
const props = defineProps({
  title: String,
  text: String,
})
</script>

<style scoped>

</style>