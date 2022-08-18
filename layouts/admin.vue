<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader/>
    <div class="flex-grow w-2/3 mx-auto">
      <div class="flex gap-2 py-4">
        <SideMenu class="flex-shrink-0" :items="menuItems"/>
        <div class="flex-grow">
          <slot/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SideMenu from "../components/menus/side-menu/SideMenu";
import AppHeader from "../components/AppHeader";

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