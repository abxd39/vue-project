/**
 * 接口返回基本数据类型
 * <T>泛型是通过接口返回的
 */
export interface IApiBase<T> {
  code: number
  msg: string
  data: T
}

export const useApi = async <T = any>(request: FetchRequest, options?: FetchOptions<'json'>) => {
  return await _useApi<IApiBase<T>>(request, options)
}

/**
 * 注册接口
 * @param options code:验证码，phone:手机号
 */

export const register = async (options: { code: string; phone: string }) => {
  return await useApi<null>('/api/user/v1/register', {
    method: 'post',
    body: { code: options.code, phone: options.phone }
  })
}
