import { defineConfig } from 'umi';
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  // webpack5: {},
  chainWebpack: (config) => {
    config.plugin('monaco-editor-webpack-plugin').use(MonacoWebpackPlugin);
  },
});
