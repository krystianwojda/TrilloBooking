<script setup>
useHead({
  link: [
    {
      rel: 'stylesheet',
      href:'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css',
      integrity: 'sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65',
      crossorigin: 'anonymous'
    }
  ],
  meta: [
    {
      name: 'referrer',
      content: 'no-referrer'
    }
  ]
});
</script>

<template>
  <NuxtPage/>
</template>

<style lang="scss">
@import "scss/main";
</style>