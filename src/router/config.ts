const files = require.context('./modules', false, /\.js/);
// 注入路由
let configRouters: any[] = [];
files.keys().forEach((key) => {
  configRouters = [...configRouters, ...files(key).default];
});
export default configRouters;
