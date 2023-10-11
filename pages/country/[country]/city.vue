<template>
  <the-header/>
  <div class="content">
    <the-sidebar/>
    <div class="container">
      <NuxtPage/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  padding-top: 7rem;

  @media screen and (max-width: 640px) {
    flex-direction: column;
  }

  @media screen and (max-width: 576px) {
    padding-top: 5rem;
  }
}
</style>

<script setup>
const route = useRoute();

useHead({
  title: `TrilloBooking in ${route.params.country}`
});
</script>