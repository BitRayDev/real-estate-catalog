<template>
  <div>
    <ObjectEditForm :photos="photos" @submit="onFormSubmit" @upload:photos="uploadPhotos" @remove:photo="removePhoto"/>
  </div>
</template>

<script setup>
import ObjectEditForm from "../../../components/forms/ObjectEditForm";
import {useApiFetch} from "../../../composables/useApiFetch";

const router = useRouter();
const photos = ref([]);

function removePhoto(photo) {
  photos.value = photos.value.filter(photoInArray => photoInArray !== photo)
}

function uploadPhotos(uploadedPhotos) {
  const formData = new FormData();
  for (let photo of uploadedPhotos)
    formData.append("files", photo);

  useApiFetch('/upload', {
    method: 'POST',
    body: formData
  }).then(photosNames => {
    photos.value = [
        ...photos.value,
        ...photosNames
    ]
  })
}

function onFormSubmit(form) {
  useApiFetch('/auth/user/objects', {
    method: 'POST',
    body: {
      ...form,
      photos: photos.value
    }
  }).then((res) => {
    router.push('/cabinet/objects/');
  })
}
</script>

<style scoped>

</style>