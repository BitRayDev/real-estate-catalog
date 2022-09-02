import {useRuntimeConfig} from "nuxt/app";

export const useApiAsset = (filename) => {
  if(!filename)
    return undefined;

  const runtimeConfig = useRuntimeConfig();

  return runtimeConfig.public.apiUrl + '/' + filename;
}