import { ref } from 'vue'
// import { useUserStore } from '@/store/user';

export const useFetch = async (url: string, options = {}, headers = {}, authRequired = true) => {
  // const userStore = useUserStore();
  const data = ref()
  const error = ref()

  /* const authHeader = () => {
    const authenticated = authRequired && userStore.user.token ? true : false;

    if (authenticated) {
      return {
        Authorization: userStore.user.token
      };
    }

    return;

    // window.location.replace('https://dev');
  }; */

  try {
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        // ...authHeader(),
        ...headers
      },
      ...options
    })

    const json = await res.json()

    data.value = json
  } catch (_error) {
    error.value = _error
  }

  return { data, error }
}
