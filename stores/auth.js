import {defineStore} from "pinia";
import {useRouter} from "nuxt/app";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    _isAuthorized: false,
    _isAdmin: true,
  }),
  getters: {
    isAuthorized: (state) => state._isAuthorized,
    isAdmin: (state) => state._isAdmin,
  },
  actions: {
    logIn() {
      const router = useRouter();

      this._isAuthorized = true;
      router.push("/cabinet/");
    },
    logOut() {
      const router = useRouter();

      this._isAuthorized = false;
      router.push("/");
    }
  },
})