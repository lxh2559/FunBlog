const { defineConfig } = require('@vue/cli-service');
const requireContext = require('require-context');
const fs = require('fs');
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');

const files = requireContext('../../static/blog', true, /\.md$/);
let str1 = ''; // template语句
let str2 = ''; // import语句
files.keys().forEach(item => {
  let str = item.split('.md').toString().replace(/\\|-/g, '_').slice(0, -1);
  console.log(str);
  str1 += `<${str} v-if="select === '${str}'"></${str}>\n`;
  str2 += `import ${str} from '../../static/blog/${item.replace(/\\/g, '/')}';\n`;
});
let code = `<template>
${str1}</template>
<script setup>
${str2}
import {defineProps} from "vue";
const props = defineProps(['select']);
</script>`;
fs.writeFileSync('./src/components/markdownToVue.vue', code);

module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint校验
  lintOnSave: false,
  // 将markdown文件转换为vue文件
  chainWebpack: (config) => {
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })
  },
  // 导入element-plus
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      })
    ]
  },
})
