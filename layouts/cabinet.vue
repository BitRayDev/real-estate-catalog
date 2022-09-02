<template>
  <NuxtLayout name="default">
    <div class="flex flex-col md:flex-row gap-2">
      <SideMenu class="flex-shrink-0 !flex-row md:!flex-col" :items="menuItems"/>
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
    label: "Профиль",
    icon: "person",
    to: "/cabinet/",
  },
  {
    label: "Мои объекты",
    icon: "house",
    to: "/cabinet/objects",
  },
]
</script>

<style scoped>

</style>