<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Header from './components/Header.vue'
import Main from './components/Main.vue'
</script>

<template>
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;700&family=Inter&display=swap" rel="stylesheet">
  <Header/>
  <Main/>
</template>

<style>
html {
  font-size: 14px;
}

body {
  background: #0A192F;
  line-height: 1.625;
  margin: 0;
  padding: 0;
  font-family: 'Fira code', sans-serif;
}

img {
  max-width: 100%;
  height: auto;
}

a {
    color: inherit;
    text-decoration: none;
    transition: color .3s;
}

@media only screen and (min-width: 750px) {
    html {
        font-size: 13px;
    }
}
</style>
