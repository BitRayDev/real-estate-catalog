import {useAuthStore} from "~/stores/auth";
import {useApiFetch} from "~/composables/useApiFetch";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuthStore();
  await authStore.refreshUser();

  if (
    (!authStore.isAuthorized && (to.fullPath.match(/^\/cabinet.*$/g) || to.fullPath.match(/^\/admin.*$/g))
      || (!authStore.isAdmin && to.fullPath.match(/^\/admin.*$/g))
    )
    && !to.meta.noAuthRequired) {
    return navigateTo('/cabinet/signin')
  }
})