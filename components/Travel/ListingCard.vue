<template>
  <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
    <div class="card">
        <img class="card-image" :src="travel.images[0]" alt="">
      <div class="card__information">
        <div class="card__information__title">
          <span class="card__information__title-place">{{ travel.name }}</span>
          <div class="card__information__title__description">
            <span class="card__information__title__description-country">{{ travel.country }},</span>
            <span class="card__information__title__description-city">{{ travel.city }}</span>
          </div>
        </div>
        <div class="card__information__price">${{ travel.price }}</div>
      </div>
      <div class="card__description">
        <p>{{ travel.shortDescription }}</p>
      </div>
      <div class="card__button">
        <button class="card__button-view">View</button>
        <button class="card__button-delete">Delete</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  travel: Object
})
</script>

<style lang="scss" scoped>
@import "@/scss/main";

.card {
  min-height: 52rem;
  background-color: #fff;
  box-shadow: $color-shadow-dark;
  border-radius: 15px;
  border: none;
  transition: all .7s;
  margin-bottom: 2rem;
  max-width: 425px;
  min-width: 300px;


  &-image {
    width: 100%;
    height: 25rem;
    border-radius: 13px 13px 0 0;
  }

  &__information {
    display: flex;
    justify-content: space-between;
    margin: 1rem 1.5rem;
    border-bottom: $border-line;

    &__title {
      display: flex;
      flex-direction: column;

      &-place {
        text-transform: uppercase;
        font-size: 1.75rem;
        font-weight: 600;
      }

      &__description {
        font-weight: 500;

        &-country {
          font-size: 1.25rem;
          margin-right: .5rem;
        }

        &-city {
          font-size: 1.25rem;
        }
      }
    }

    &__price {
      font-size: 4rem;
      font-weight: 600;
      color: $color-primary;
    }
  }

  &__description {
    margin: 0 1.5rem 1rem 1.5rem;
    font-size: 1.4rem;
  }

  &__button {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;

    &-view {
      margin-right: 2rem;
      padding: .7rem 3rem;
      font-size: 1.5rem;
      color: #fff;
      border: none;
      font-weight: 300;
      text-transform: uppercase;
      border-radius: 100px;
      background-color: #0d6efd;
      position: relative;
      transition: all .7s;
    }

    &-view:hover {
      background-color: #0853c2;
      transform: scale(1.05);
      box-shadow: $color-shadow-light;
    }

    &-delete {
      margin-left: 2rem;
      padding: .7rem 3rem;
      font-size: 1.5rem;
      color: #fff;
      border: none;
      font-weight: 300;
      text-transform: uppercase;
      border-radius: 100px;
      background-color: #dc3545;
      position: relative;
      transition: all .7s;
    }

    &-delete:hover {
      background-color: #b51b2a;
      transform: scale(1.05);
      box-shadow: $color-shadow-light;
    }
  }
}
</style>