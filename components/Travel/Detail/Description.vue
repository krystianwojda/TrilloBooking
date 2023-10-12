<template>
  <div class="col-12">
    <div class="description">
      <div class="description__price">
        <div class="description__price-title">Actual price</div>
        <div class="description__price-count">${{ travel.price }} <span>per night</span></div>
      </div>
      <p class="description__paragraph">{{ travel.description }}</p>
      <ul class="description__list">
        <li class="description__list-item" v-for="important in importants" :key="important">{{ important }}</li>
      </ul>
      <div class="description__cta">
        <button class="description__cta__button">book now</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  travel: Object,
  importants: Array
});
</script>

<style lang="scss" scoped>
@import "scss/main";
.description {
  margin: 2rem 0 2rem 0;
  padding: 3rem;
  box-shadow: $color-shadow-light;
  background-color: #fff;
  font-size: 1.6rem;

  @media screen and (max-width: 576px) {
    font-size: 1.4rem;
  }

  &__paragraph:not(:last-child) {
    margin-bottom: 2rem;
  }

  &__list {
    margin: 3rem 0;
    padding: 3rem 0;
    border-top: $border-line-light;
    border-bottom: $border-line-light;
    display: flex;
    flex-wrap: wrap;

    &-item {
      list-style: none;
      flex: 0 0 50%;
      margin-bottom: .7rem;
      display: flex;
      align-items: center;
    }

    &-item::before {
      margin-right: .75rem;
      content: '';
      display: inline-block;
      height: 1.5rem;
      width: 1.5rem;
      background-image: url("@/src/right-arrow.png");
      background-position: center;
    }
  }

  &__price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    &-title {
      font-size: 2rem;
      font-weight: 600;

      @media screen and (max-width: 576px) {
        font-size: 1.75rem;
      }
    }
    &-count {
      font-size: 3.5rem;
      color: $color-primary;
      font-weight: 600;

      @media screen and (max-width: 576px) {
        font-size: 2.75rem;
      }

      span {
        font-size: 1.75rem;
        font-weight: 300;
        margin-left: .25rem;

        @media screen and (max-width: 576px) {
          font-size: 1.5rem;
        }
      }
    }
  }

  &__cta {
    padding: 4rem 0;
    display: flex;
    justify-content: center;

    &__button {
      padding: 1.25rem 4rem;
      font-size: 1.75rem;
      color: #fff;
      border: none;
      font-weight: 300;
      text-transform: uppercase;
      border-radius: 100px;
      background-image: linear-gradient(to right, $color-primary-light, $color-primary-dark);
      position: relative;
      transition: all .7s;
    }

    &__button:hover {
      background-image: linear-gradient(to right, #ff094f, #850237);
      transform: scale(1.05);
    }
  }

  &__text {
    margin-bottom: 3.5rem;
  }

  &__user {
    display: flex;
    align-items: center;

    &-photo {
      height: 4.5rem;
      width: 4.5rem;
      border-radius: 50%;
      margin-right: 1.5rem;
    }

    &__box {
      margin-right: auto;
    }

    &__rating {
      font-size: 2.25rem;
      font-weight: 600;
      color: $color-primary;
    }
  }
}
</style>