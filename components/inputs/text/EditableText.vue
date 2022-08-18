<template>
  <div class="flex items-center gap-1">
    <TextField v-if="isEditing" :placeholder="value" v-model="editFieldValue"/>
    <p v-else>{{ value }}</p>
    <IconButton class="text-blue-700" @click.native="onIconButtonClick">
      {{ isEditing ? "done" : "edit" }}
    </IconButton>
  </div>
</template>

<script setup>
import IconButton from "../buttons/IconButton";
import TextField from "./TextField";

const emit = defineEmits(['editBegin', 'editConfirm'])
const props = defineProps({
  value: String,
})

const isEditing = ref(false)
const editFieldValue = ref("");

function onIconButtonClick() {
  isEditing.value = !isEditing.value;
  if (isEditing.value) {
    editFieldValue.value = props.value;
    emit('editBegin');
  } else {
    emit('editConfirm', editFieldValue.value);
  }
}
</script>

<style scoped>

</style>