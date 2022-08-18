<template>
  <AppButton class="px-0.5 py-0.5 border-none hover:bg-gray-50">
    <MaterialIcon>
      <slot/>
    </MaterialIcon>
  </AppButton>
</template>

<script setup>
import MaterialIcon from "../../icons/MaterialIcon";
import AppButton from "./AppButton";

</script>

<style scoped>

</style>