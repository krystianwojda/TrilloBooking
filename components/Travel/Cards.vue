<template>
  <div class="cards">
    <div class="row">
      <travel-card v-for="travel in data" :key="travel.id" :travel="travel"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/main";

.cards {
  margin: 2rem 2rem;

  @media screen and (max-width: 640px) {
    margin: 7rem 2rem;
  }
}
</style>
<script setup>
import travels from '@/data/travels.json';

const data = travels;
</script>