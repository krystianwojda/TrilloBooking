<template>
  <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
    <div class="card">
      <div class="card__box">
        <img class="card__box-image" :src="travel.images[0]" alt="">
        <img v-if="route.params.country" class="card__box-favorite" :src="favored ? heartFilled : heartOutline" alt="icon-heart" @click="emit('favorItem', travel.id)">
      </div>
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
        <button class="card__btn" @click="navigateTo(`/city/${travel.name}-${travel.id}`)">show detail</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import heartFilled from '/src/heartFilled.png';
import heartOutline from '/src/heartOutline.png';

const props = defineProps({
  travel: Object,
  favored: Boolean
});

const route = useRoute();

const emit = defineEmits(['favorItem']);
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

  &__box {
    display: flex;

    &-image {
      width: 100%;
      height: 25rem;
      border-radius: 13px 13px 0 0;
    }

    &-favorite {
      position: absolute;
      right: 1rem;
      top: 1rem;
      width: 3rem;
      height: 3rem;
    }
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

    button {
      padding: .7rem 3rem;
      font-size: 1.5rem;
      color: #fff;
      border: none;
      font-weight: 300;
      text-transform: uppercase;
      border-radius: 100px;
      background-image: linear-gradient(to right, $color-primary-light, $color-primary-dark);
      position: relative;
      transition: all .7s;
    }

    button:hover {
      background-image: linear-gradient(to right, #ff094f, #850237);
      transform: scale(1.05);
      box-shadow: $color-shadow-light;
    }
  }
}

.card:hover {
  transform: scale(1.02);
}
</style>