<template>
  <the-header/>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="title">All travels</h1>
        <div class="cards">
          <div class="row">
            <travel-listing-card v-for="travel in data" :key="travel.id" :travel="travel"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import travel from '~/data/travels.json';

const data = travel;
</script>

<style lang="scss" scoped>
@import "@/scss/main";

.title {
  color: white;
  padding-top: 10rem;
  text-align: right;
  font-size: 4rem;

  @media screen and (max-width: 562px) {
    padding-top: 7rem;
  }

  @media screen and (max-width: 991px) {
    text-align: center;
  }
}

.cards {
  margin: 2rem 2rem;
}
</style>