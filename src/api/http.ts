import { createFetch, type BeforeFetchContext } from '@vueuse/core'

export const useMyFetch = createFetch({
  options: {
    async beforeFetch({ options }: BeforeFetchContext) {
      // console.log('beforeFetch', options);
      return { options }
    }
    // timeout: 15 * 1000,
  }
})
