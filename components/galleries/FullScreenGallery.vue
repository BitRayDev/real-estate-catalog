<template>
  <div class="fixed left-0 top-0 h-screen w-screen z-20">
    <div class="absolute left-0 top-0 h-screen w-screen bg-black/75" @click="close"/>
    <IconButton class="absolute right-8 top-8 z-20 text-3xl text-white hover:bg-white/20" @click.native="close">
      close
    </IconButton>
    <div class="flex justify-between items-center gap-2 xl:gap-12 w-full h-screen relative z-10 box-border px-2 xl:px-12">
      <IconButton class="flex-shrink-0 text-3xl text-white hover:bg-white/20" @click.native="showPrevious">
        arrow_back
      </IconButton>
      <div class="flex-shrink h-5/6">
        <img class="max-h-full aspect-auto" :src="images[activeImageIndex]"/>
      </div>
      <IconButton class="flex-shrink-0 text-3xl text-white hover:bg-white/20" @click.native="showNext">
        arrow_forward
      </IconButton>
    </div>
  </div>
</template>

<script setup>
import MaterialIcon from "../icons/MaterialIcon";
import AppButton from "../inputs/buttons/AppButton";
import IconButton from "../inputs/buttons/IconButton";

const emit = defineEmits(['close'])
const props = defineProps({
  images: {
    type: Array,
    default() {
      return []
    }
  },
  initialActiveIndex: {
    type: Number,
    default: 0
  },
})

const activeImageIndex = ref(props.initialActiveIndex);

function showNext() {
  if (activeImageIndex.value + 1 >= props.images.length) {
    activeImageIndex.value = 0;
  } else {
    activeImageIndex.value = activeImageIndex.value + 1;
  }
}

function showPrevious() {
  if (activeImageIndex.value - 1 < 0) {
    activeImageIndex.value = props.images.length - 1;
  } else {
    activeImageIndex.value = activeImageIndex.value - 1;
  }
}

function close() {
  emit('close');
}
</script>

<style scoped>

</style>