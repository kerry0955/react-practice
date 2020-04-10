import { Plugin } from 'D:/Daily-practice/React_Demo/my-app/node_modules/@umijs/runtime/dist/index.js';

const plugin = new Plugin({
  validKeys: ['patchRoutes','rootContainer','render','onRouteChange','dva','getInitialState','locale','locale','request',],
});
plugin.register({
  apply: require('D:/Daily-practice/React_Demo/my-app/node_modules/umi-plugin-antd-icon-config/lib/app.js'),
  path: 'D:/Daily-practice/React_Demo/my-app/node_modules/umi-plugin-antd-icon-config/lib/app.js',
});
plugin.register({
  apply: require('D:/Daily-practice/React_Demo/my-app/src/.umi/plugin-dva/runtime.tsx'),
  path: 'D:/Daily-practice/React_Demo/my-app/src/.umi/plugin-dva/runtime.tsx',
});
plugin.register({
  apply: require('../plugin-initial-state/runtime'),
  path: '../plugin-initial-state/runtime',
});
plugin.register({
  apply: require('D:/Daily-practice/React_Demo/my-app/src/.umi/plugin-locale/runtime.tsx'),
  path: 'D:/Daily-practice/React_Demo/my-app/src/.umi/plugin-locale/runtime.tsx',
});
plugin.register({
  apply: require('../plugin-model/runtime'),
  path: '../plugin-model/runtime',
});

export { plugin };
