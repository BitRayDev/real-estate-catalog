import {useAuthStore} from "~/stores/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();

  if (!authStore.isAuthorized && to.fullPath.match(/^\/cabinet\/.*$/g) && !to.meta.noAuthRequired) {
    return navigateTo('/cabinet/signin')
  }
})