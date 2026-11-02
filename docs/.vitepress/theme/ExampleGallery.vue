<script setup>
import { withBase } from 'vitepress'
const examples = [
 ['campus-cotton', 'Campus Cotton', 'T-shirt store', 'An everyday student shopper. Clear price and fit.'],
 ['studio-white', 'Studio White', 'T-shirt store', 'A workday wardrobe. Product facts and restrained branding.'],
 ['room-ready', 'Room Ready', 'Group business', 'A furniture-assembly request with a clear next step.'],
 ['study-slot', 'Study Slot', 'Group business', 'A tutoring request that distinguishes preference from booking.'],
 ['maya-chen', 'Maya Chen', 'Portfolio', 'Projects first, with a specific individual contribution.'],
 ['jordan-rivera', 'Jordan Rivera', 'Portfolio', 'Evidence first, showing decisions and verification.']
]
</script>
<template>
 <div class="example-gallery">
  <a v-for="x in examples" :key="x[0]" :href="withBase('/examples/submissions/'+x[0]+'.html')" class="example-card">
   <img :src="withBase('/samples/'+x[0]+'/concept.jpg')" :alt="x[1] + ' — AI-generated classroom concept image'" width="1536" height="1024" loading="lazy">
   <div><span>{{ x[2] }}</span><strong>{{ x[1] }}</strong><p>{{ x[3] }}</p><small>Completed work + rubric feedback →</small></div>
  </a>
 </div>
</template>
