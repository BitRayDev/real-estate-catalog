import {defineStore} from "pinia";
import {useRouter} from "nuxt/app";
import {useApiFetch} from "~/composables/useApiFetch";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),
  getters: {
    getUser: (state) => state.user,
    isAuthorized: (state) => Boolean(state.user),
    isAdmin: (state) => Boolean(state.user.is_active_admin)
  },
  actions: {
    async refreshUser() {
      this.user = await useApiFetch('/auth/user');
    },
    logIn(login, password) {
      const router = useRouter();

      useApiFetch('/auth/login', {
        method: 'POST',
        body: {
          login: login,
          password: password,
        }
      }).then((res) => {
        this.refreshUser();
        router.push('/cabinet/');
      })
    },
    logOut() {
      const router = useRouter();

      useApiFetch('/auth/user', {
        method: 'DELETE',
      }).then((res) => {
        this.refreshUser();
        router.push('/');
      })
    }
  },
})