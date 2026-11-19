<script setup lang="ts">
defineProps<{ section: '005' | '007' }>()

const projects = ['T-shirt store', 'Personal portfolio', 'Group business']
const stages = ['Research', 'Plan', 'Build', 'Improve', 'Final assessment']

const sections = {
  '005': {
    course: 70710,
    assignments: [
      [769124, 769126, 769128, 769130, 769167],
      [769132, 769155, 769156, 769157, 769169],
      [769125, 769127, 769129, 769131, 769168],
    ],
  },
  '007': {
    course: 70711,
    assignments: [
      [769113, 769115, 769117, 769119, 769161],
      [769121, 769135, 769136, 769137, 769163],
      [769114, 769116, 769118, 769120, 769162],
    ],
  },
}
</script>

<template>
  <nav class="canvas-checkpoints" aria-label="Canvas assignments by project">
    <section v-for="(project, projectIndex) in projects" :key="project">
      <h3>{{ project }}</h3>
      <ul>
        <li v-for="(stage, stageIndex) in stages" :key="stage">
          <a
            :href="`https://njit.instructure.com/courses/${sections[section].course}/assignments/${sections[section].assignments[projectIndex][stageIndex]}`"
            :aria-label="`${project} ${stage}`"
          >{{ stage }}</a>
        </li>
      </ul>
    </section>
  </nav>
</template>

<style scoped>
.canvas-checkpoints {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin: 16px 0 24px;
}

.canvas-checkpoints section {
  min-width: 0;
  padding: 14px 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
}

.canvas-checkpoints h3 {
  margin: 0;
  font-size: 1rem;
}

.canvas-checkpoints ul {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 14px;
  margin: 6px 0 0;
  padding: 0;
  list-style: none;
}

.canvas-checkpoints li {
  margin: 0;
}

.canvas-checkpoints a {
  display: inline-flex;
  align-items: center;
  min-height: 36px;
}

@media (max-width: 650px) {
  .canvas-checkpoints {
    grid-template-columns: 1fr;
  }
}
</style>
