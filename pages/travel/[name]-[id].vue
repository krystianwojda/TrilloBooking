<template>
  <section class="hotel-view">
    <the-header/>
    <travel-detail-gallery  :images="travel.images"/>
    <travel-detail-overview :travel="travel"/>
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-xl-7">
          <div class="row">
            <travel-detail-description :travel="travel" :importants="travel.important"/>
          </div>
        </div>
        <div class="col-lg-12 col-xl-4">
          <div class="row">
            <travel-detail-opinion/>
            <travel-detail-opinion/>
            <travel-detail-opinion/>
            <travel-detail-opinion/>
            <div class="button">
              <button class="button__btn">Show all</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <the-footer/>
  </section>
</template>

<script setup>
import useFetchTravel from "~/composables/useFetchTravel";

const route = useRoute();

useHead({
  title: route.params.name
});

const { data: travel } = await useFetchTravel(route.params.id);
</script>

<style lang="scss" scoped>
@import "@/scss/main";

.hotel-view {
  background-color: $color-grey-light-1;
  color: $color-grey-dark-2;

  .button {
    display: flex;
    justify-content: center;
    margin: 4rem 0;

    @media screen and (max-width: 576px) {
      display: none;
    }

    &__btn {
      color: #eb2f64;
      border: none;
      font-size: 1.5rem;
      padding-bottom: 2px;
      display: inline-block;
      background-color: transparent;
      cursor: pointer;
      transition: all .2s;
    }

    &__btn:hover {
      transform: scale(1.05);
    }
  }
}
</style>