export const RECIPE_ENDPOINT = import.meta.env.MODE === 'production'
  ? import.meta.env.VITE_API_URL
  : import.meta.env.VITE_DEV_API_URL