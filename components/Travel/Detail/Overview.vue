<template>
  <div class="overview">
    <h1 class="overview__title">hotel las palmas</h1>
    <div class="overview__stars">
      <img class="overview__stars-icon" src="@/src/star.png" alt="star">
      <img class="overview__stars-icon" src="@/src/star.png" alt="star">
      <img class="overview__stars-icon" src="@/src/star.png" alt="star">
      <img class="overview__stars-icon" src="@/src/star.png" alt="star">
      <img class="overview__stars-icon" src="@/src/star.png" alt="star">
    </div>
    <div class="overview__location">
      <img class="overview__location-icon" src="@/src/location.png" alt="Location">
      <span class="overview__location-place">Greece, Zakyntos</span>
    </div>
    <div class="overview__rating">
      <div class="overview__rating-average">4.7</div>
      <div class="overview__rating-count">271 votes</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "scss/main";

.overview {
  display: flex;
  align-items: baseline;
  border-bottom: $border-line;

  &__title {
    text-transform: uppercase;
    font-size: 3rem;
    letter-spacing: 2px;
    padding: 1.75rem 3.5rem;
    font-weight: 300;
    margin: 0;

    @media screen and (max-width: 991px) {
      font-size: 2.5rem;
    }

    @media screen and (max-width: 767px) {
      font-size: 1.75rem;
      padding: 1.5rem 1.75rem;
    }

    @media screen and (max-width: 576px) {
      font-size: 1.5rem;
      padding: 1.5rem 1.25rem;
      letter-spacing: 1px;
    }
  }

  &__stars {
    margin-right: auto;
    display: flex;

    &-icon {
      width: 2.5rem;
      height: 2.5rem;
      margin-right: .75rem;

      @media screen and (max-width: 991px) {
        width: 2rem;
        height: 2rem;
      }

      @media screen and (max-width: 767px) {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: .25rem;
      }

      @media screen and (max-width: 576px) {
        width: 1.25rem;
        height: 1.25rem;
        margin-right: .25rem;
      }
    }
  }

  &__location {
    font-size: 1.2rem;
    display: flex;
    align-items: center;

    @media screen and (max-width: 576px) {
      display: none;
    }

    &-icon {
      margin-right: 1rem;
      width: 3rem;
      height: 3rem;

      @media screen and (max-width: 991px) {
        width: 2rem;
        height: 2rem;
      }
    }
    &-place {
      color: $color-primary;
      text-decoration: underline;
    }
  }

  &__rating {
    background-color: $color-primary;
    color: white;
    margin-left: 3rem;
    padding: 0 2.25rem;
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 767px) {
      margin-left: 1.5rem;
    }

    &-average {
      font-size: 2.25rem;
      font-weight: 300;
      margin-bottom: -3px;

      @media screen and (max-width: 991px) {
        font-size: 1.75rem;
      }
    }

    &-count {
      text-transform: uppercase;
      font-size: 1rem;
    }
  }
}
</style>