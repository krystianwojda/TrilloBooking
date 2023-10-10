<script setup>
useHead({
  link: [
    {
      rel: 'stylesheet',
      href:'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css',
      integrity: 'sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65',
      crossorigin: 'anonymous'
    }
  ]
});
</script>

<template>
  <the-header/>
  <the-hero/>
  <the-footer/>
</template>

<style lang="scss">
@import "scss/main";

html {
  box-sizing: border-box;
  font-size: 62.5%;
}

body {
  background-color: $color-primary;
}
</style>