export const useApi = async<T = any> (
    request: FetchRequest,
    options?: FetchOptions<'json'>
  ) => {
    return await _useApi<IApiBase<T>>(request, options);
  };
  ————————————————
  
                              版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。
                          
  原文链接：https://blog.csdn.net/u011313034/article/details/131111963