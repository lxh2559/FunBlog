<template><doc_index v-if="select === 'doc_index'"></doc_index><doc_uni_app_index v-if="select === 'doc_uni_app_index'"></doc_uni_app_index><doc_vue_index v-if="select === 'doc_vue_index'"></doc_vue_index><note_basis_index v-if="select === 'note_basis_index'"></note_basis_index><note_index v-if="select === 'note_index'"></note_index><note_network_index v-if="select === 'note_network_index'"></note_network_index></template>
<script setup>
import doc_index from '../../static/blog/doc/index.md';
import doc_uni_app_index from '../../static/blog/doc/uni-app/index.md';
import doc_vue_index from '../../static/blog/doc/vue/index.md';
import note_basis_index from '../../static/blog/note/basis/index.md';
import note_index from '../../static/blog/note/index.md';
import note_network_index from '../../static/blog/note/network/index.md';

import {defineProps} from "vue";
const props = defineProps(['select']);
</script>