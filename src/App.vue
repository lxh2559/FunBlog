<template>
  <el-container>
    <el-header>
      <top-bar @topChange="topChange" @init="topChange"/>
    </el-header>
    <el-container>
      <el-aside class="fb-sideBar">
        <side-bar :topState="topState" @sideChange="sideChange" @init="sideChange"/>
      </el-aside>
      <el-main>
        <markdown-to-vue :select="sideState"></markdown-to-vue>
      </el-main>
    </el-container>
  </el-container>

</template>

<script setup>
import topBar from "./components/topBar";
import sideBar from "./components/sideBar";
import MarkdownToVue from "./components/markdownToVue";
import {ref} from "vue";

const topState = ref('');

const sideState = ref('');

function topChange(key) {
  topState.value = key;
}

function sideChange(key) {
  sideState.value = key;
}
</script>

<style>
.fb-sideBar {
  width: 200px;
}
</style>
