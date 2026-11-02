<script setup>
import { withBase } from 'vitepress'
defineProps({ slug: { type: String, required: true } })
</script>
<template>
 <div class="version-comparison">
  <a v-for="version in ['a','b']" :key="version" :href="withBase('/samples/'+slug+'/'+version+'.html')">
   <strong>Version {{ version.toUpperCase() }} <span aria-hidden="true">↗</span></strong>
   <img :src="withBase('/samples/'+slug+'/preview-'+version+'.jpg')" :alt="'Screenshot of the working '+slug+' version '+version.toUpperCase()+'. Open to try it.'" width="1512" height="861" loading="lazy">
   <span>Open the working version</span>
  </a>
 </div>
</template>
