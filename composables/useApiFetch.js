import {$fetch} from 'ohmyfetch'
import {useRuntimeConfig} from "nuxt/app";

let apiFetch;
export const useApiFetch = (path, options) => {
  const runtimeConfig = useRuntimeConfig();
  if(!apiFetch) {
    apiFetch = $fetch.create({
      baseURL: runtimeConfig.public.apiUrl,
      credentials: 'include',
    })
  }

  return apiFetch(path, options);
}