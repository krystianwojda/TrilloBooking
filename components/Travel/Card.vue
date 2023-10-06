<template>
  <div class="col-12 col-sm-12 col-md-6 col-lg-4">
    <div class="card">
      <img class="card__image" src="https://welcometozante.com/wp-content/uploads/2020/11/Zante-citt%C3%A0-1.jpg" alt="">
      <div class="card__information">
        <div class="card__information__title">
          <span class="card__information__title-place">Hotel Las Palmas</span>
          <div class="card__information__title__description">
            <span class="card__information__title__description-country">Greece,</span>
            <span class="card__information__title__description-city">Zakyntos</span>
          </div>
        </div>
        <div class="card__information__price">$150</div>
      </div>
      <div class="card__description">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
      </div>
      <div class="card__button">
        <button class="card__btn">show detail</button>
      </div>
    </div>
  </div>
</template>

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

  &__image {
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
        font-size: 2rem;
        font-weight: 600;
      }

      &__description {
        font-weight: 500;

        &-country {
          font-size: 1.6rem;
          margin-right: .5rem;
        }

        &-city {
          font-size: 1.5rem;
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
<script setup lang="ts">
</script>