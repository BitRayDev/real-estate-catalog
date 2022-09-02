<template>
  <NuxtLayout name="default">
    <div class="flex gap-2">
      <SideMenu class="flex-shrink-0" :items="menuItems"/>
      <div class="flex-grow">
        <slot/>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import SideMenu from "../components/menus/side-menu/SideMenu";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

const menuItems = [
  {
    label: "Пользователи",
    to: "/admin/",
  },
  {
    label: "Объекты",
    to: "/admin/objects",
  },
]
</script>

<style scoped>

</style>