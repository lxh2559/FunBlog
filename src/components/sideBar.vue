<template>
  <el-menu :default-active="sideMenu[topState][0].key" @select="select">
    <template v-for="(item, index) in sideMenu[topState]" :key="index">
      <el-menu-item v-if="item.key" :key="item.key" :index="item.key">{{item.name}}</el-menu-item>
      <el-sub-menu v-else :key="item.name" :index="item.name">
        <template #title>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item v-for="subItem in item.children" :key="subItem.key" :index="subItem.key">{{subItem.name}}</el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script setup>
import {sideMenu} from "../config/file";
import {onBeforeMount, watch} from "vue";

const props = defineProps(['topState']);

const emit = defineEmits(['sideChange', 'init']);

function select(index) {
  emit('sideChange', index);
}

onBeforeMount(() => {
  emit('init', sideMenu[props.topState][0].key);
})

watch(() => props.topState, (key) => {
  emit('sideChange', sideMenu[key][0].key);
})
</script>