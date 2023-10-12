<template>
  <div class="error">
    <h1 class="error__status">{{ error.statusCode }}</h1>
    <p class="error__information">{{ error.message }}</p>
    <button class="error__button" @click="handleError">Go back</button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/main";

.error {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  align-content: center;
  color: $color-grey-dark-1;
  background-image: linear-gradient($color-primary-light, $color-primary-dark);

  &__status {
    font-size: 10rem;
  }

  &__information {
    font-size: 3rem;
  }

  &__button {
    margin-top: 2rem;
    padding: 1.5rem 4.5rem;
    font-size: 1.8rem;
    color: #fff;
    border: none;
    font-weight: 300;
    text-transform: uppercase;
    border-radius: 100px;
    background-color: $color-grey-dark-1;
    position: relative;
    overflow: hidden;
    transition: all .7s;

    @media screen and (max-width: 767px) {
      padding: 1.5rem 3.5rem;
      font-size: 1.6rem;
    }

    @media screen and (max-width: 569px) {
      padding: 1.5rem 3.5rem;
      font-size: 1.4rem;
    }
  }

  &__button:hover {
    background-color: $color-grey-dark-2;
    transform: scale(1.05);
    cursor: pointer;
  }
}
</style>

<script setup>
const error = useError();
const handleError = () => {
  navigateTo('/');
}
</script>