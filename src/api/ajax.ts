/**
 * @author: yates
 * @description: 封装HTTP请求
 */
import axios from 'axios';
axios.defaults.baseURL = process.env.API_URL;

export interface ResponseData {
  code: number;
  data: any | any[];
  message: string;
}

// 添加请求时拦截器
axios.interceptors.request.use((config: object) => {
  return config;
}, (error: object) => {
  return Promise.reject(error);
});

// 添加响应时的拦截器
axios.interceptors.response.use((response: any) => {
  return response.data;
}, (error: object) => {
  return Promise.reject(error);
});

/**
 * GET 请求
 * @Author   Yates
 * @DateTime 2020-06-29
 * @param    {[type]}   url    请求的 url
 * @param    {[type]}   params 请求传递的参数
 * @param    {[type]}   config 请求额外的配置信息
 */
function GET(url: string, params: object, config: any) {
  return new Promise((resolve, reject) => {
    axios.get(url, { ...params, ...config}).then((res: any) => {
      resolve(res.data);
    }).catch((err: any) => {
      reject(err);
    });
  });
}

/**
 * POST 请求
 * @Author   Yates
 * @DateTime 2020-06-29
 * @param    {[type]}   url    请求的 url
 * @param    {[type]}   data   请求传递的参数
 * @param    {[type]}   config 请求额外的配置信息
 */
function POST(url: string, data: object, config: any) {
  return new Promise((resolve, reject) => {
    const defaultConfig = {
      transformRequest: [
        function(requestData: object, headers: any) {
          headers['Content-Type'] = 'application/json';
          return JSON.stringify(requestData);
        }
      ]
    };
    axios.post(url, data, (config || defaultConfig)).then((res: any) => {
      resolve(res.data);
    }).catch((err: any) => {
      reject(err);
    });
  });
}

/**
 * PUT 请求
 * @Author   Yates
 * @DateTime 2020-06-29
 * @param    {[type]}   url    请求的 url
 * @param    {[type]}   data   请求传递的参数
 * @param    {[type]}   config 请求额外的配置信息
 */
function PUT(url: string, data: object, config: any) {
  return new Promise((resolve, reject) => {
    const defaultConfig = {
      transformRequest: [
        function(requestData: object, headers: any) {
          headers['Content-Type'] = 'application/json';
          return JSON.stringify(requestData);
        }
      ]
    };
    axios.put(url, data, (config || defaultConfig)).then((res: any) => {
      resolve(res.data);
    }).catch((err: any) => {
      reject(err);
    });
  });
}

/**
 * PATCH 请求
 * @Author   Yates
 * @DateTime 2020-06-29
 * @param    {[type]}   url    请求的 url
 * @param    {[type]}   data   请求传递的参数
 * @param    {[type]}   config 请求额外的配置信息
 */
function PATCH(url: string, data: object, config: any) {
  return new Promise((resolve, reject) => {
    const defaultConfig = {
      transformRequest: [
        function(requestData: object, headers: any) {
          headers['Content-Type'] = 'application/json';
          return JSON.stringify(requestData);
        }
      ]
    };
    axios.patch(url, data, (config || defaultConfig)).then((res: any) => {
      resolve(res.data);
    }).catch((err: any) => {
      reject(err);
    });
  });
}

/**
 * DELETE 请求
 * @Author   Yates
 * @DateTime 2020-06-29
 * @param    {[type]}   url    请求的 url
 * @param    {[type]}   data   请求传递的参数
 * @param    {[type]}   config 请求额外的配置信息
 */
function DELETE (url: string, config: object) {
  return new Promise(function(resolve, reject) {
    axios.delete(url, config).then(function(res: any) {
      resolve(res.data);
    }).catch(function(err: any) {
      reject(err);
    });
  });
}

export default {
  GET,
  POST,
  PUT,
  PATCH,
  DELETE
};
