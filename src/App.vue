<script setup lang="ts">
//import HelloWorld from './components/HelloWorld.vue'
import LandingBanner from './components/LandingBanner.vue';
import SkillTableRaw from './components/skilltable/SkillTableRaw.vue';
import AboutMe from './components/AboutMe.vue';
import ResumeRaw from './components/resume/ResumeRaw.vue';
</script>

<template>
  <!--
  <div>
    <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
        <a href="https://vuejs.org/" target="_blank">
          <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
      </div>
        <HelloWorld msg="Vite + Vue" />-->
  <div class="cover">
    <LandingBanner></LandingBanner>
  </div>
  <header>
    <!--
      <a href="#about">About Me</a>
    -->
    <a href="#skills">Skills</a>
    <a href="https://github.com/thallosaurus">Github</a>
    <!--
      <a href="#resume">Resume</a>
    -->
  </header>

  <!--

    <div class="page">
      <AboutMe></AboutMe>
    </div>
  -->

  <div class="page">
    <SkillTableRaw></SkillTableRaw>
  </div>
<!--

  <div class="page">
    <ResumeRaw></ResumeRaw>
  </div>
-->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

header {
  position: sticky;
  top: 0;
  background-color: var(--accent);
  min-height: 4em;
  height: 10vh;
  display: flex;
  place-items: center;
  backdrop-filter: blur(10px);

  justify-content: center;
}

header>a {
  margin: 1em;
}

.page {
  min-width: 100vw;
  min-height: 90vh;
}

.page > * {
  margin: 2.5em 10em;
  padding: 2em;
}
</style>
