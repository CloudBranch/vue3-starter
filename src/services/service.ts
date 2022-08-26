import { useFetch } from '@/composables/useFetch'
import config from '@/config/config'

/**
 * Description of the service
 *
 * @param param for the function.
 * @returns the data on success and error on failure
 */
export const getService = async (param: string = 'default') => {
  const { data, error } = await useFetch(`${config.API_BASE_URL}/endpoint?param=${param}`, {
    method: 'POST'
  })

  if (error.value) {
    return error.value
  } else {
    return data.value
  }
}
