const files = require.context('./modules', false, /\.js/);
// 注入路由
let configRouters = [];
files.keys().forEach((key) => {
  tempRouters = [...tempRouters, ...files(key).default];
});
export default configRouters;
