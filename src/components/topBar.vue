<template>
  <el-menu mode="horizontal" :default-active="topMenu[0].key" @select="select">
    <el-menu-item v-for="item in topMenu" :key="item.key" :index="item.key">{{item.name}}</el-menu-item>
  </el-menu>
</template>

<script setup>
import {topMenu} from "../config/file";
import {onBeforeMount} from "vue";

const emit = defineEmits(['topChange', 'init']);

function select(index) {
  emit('topChange', index);
}

onBeforeMount(() => {
  emit('init', topMenu[0].key);
})
</script>