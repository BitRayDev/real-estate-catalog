<template>
  <div>
    <div class="flex flex-wrap gap-2 w-full overflow-auto p-2">
      <UploadedObjectPhotoCard v-for="photo in photos" :src="useApiAsset(photo)" @remove="removePhoto(photo)"/>
    </div>
    <label>
      <AppButton @click.native="fileInput.click();">Добавить фото</AppButton>
      <input ref="fileInput" class="hidden" type="file" multiple @change="uploadPhotos"/>
    </label>
  </div>
</template>

<script setup>

import UploadedObjectPhotoCard from "../../../../components/cards/UploadedObjectPhotoCard";
import AppButton from "../../../../components/inputs/buttons/AppButton";
import {useApiFetch} from "../../../../composables/useApiFetch";

const photos = ref([]);
const router = useRouter();
const route = useRoute();
const fileInput = ref(null);

function removePhoto(photo) {
  useApiFetch(`/objects/${route.params.objectId}/photos/`, {
    method: 'DELETE',
    body: {
      photoName: photo
    }
  }).then(() => {
    router.go(0);
  })
}

function uploadPhotos(e) {
  const files = e.target.files;
  const formData = new FormData();
  for (let photo of files)
    formData.append("files", photo);

  useApiFetch('/upload', {
    method: 'POST',
    body: formData
  }).then(photosNames => {
    useApiFetch(`/objects/${route.params.objectId}/photos`, {
      method: 'POST',
      body: {
        filenames: photosNames
      }
    }).then(() => {
      photos.value = [
        ...photos.value,
        ...photosNames
      ]
    })
  })
}

onMounted(async () => {
  photos.value = await useApiFetch(`/objects/${route.params.objectId}/photos`);
})
</script>

<style scoped>

</style>