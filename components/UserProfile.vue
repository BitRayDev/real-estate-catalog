<template>
  <div class="flex flex-col sm:flex-row flex-shrink-0 gap-2 p-4 border border-black/5 shadow-md shadow-black/5 rounded-2xl">
    <div class="flex items-center flex-col gap-2">
      <Avatar :src="useApiAsset(user.avatar_url)" :editable="avatarUploadable" @upload="emit('avatar-uploaded', $event)"/>
      <slot name="buttons"/>
    </div>
    <div class="flex-grow">
      <h2 class="text-2xl">{{ user.full_name }}</h2>
      <PropertyList :items="properties">
        <template #item.value="{ item }">
          <EditableText :value="item.value" v-if="item.isEditable" @editConfirm="onPropertyEdited(item, $event)"/>
          <div class="flex items-center gap-1" v-else>
            <p>{{ item.value }}</p>
          </div>
        </template>
      </PropertyList>
    </div>
  </div>
</template>

<script setup>
import PropertyList from "./data-views/property-list/PropertyList";
import Avatar from "./avatars/Avatar";
import EditableText from "./inputs/text/EditableText";
import AppButton from "./inputs/buttons/AppButton";

const emit = defineEmits(['property-edited']);
const props = defineProps({
  user: Object,
  properties: Array,
  avatarUploadable: Boolean
})

function onPropertyEdited(property, value) {
  emit('property-edited', property, value)
}
</script>

<style scoped>

</style>