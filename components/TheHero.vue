<template>
  <section class="hero">
    <div class="hero__text-box">
      <h2 class="hero__text-box__subtitle">Starting from 400$ only</h2>
      <h1 class="hero__text-box__title">Choose your dream trip</h1>
      <span class="hero__text-box__objective">Greece, Croatia, Spain, Brazil</span>
      <div class="hero__button">
        <button class="btn">Show offer</button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/scss/main";

.hero {
  height: 80vh;
  width: 100%;
  background-image: linear-gradient(to right, rgba($color-primary, 0.05), rgba($color-primary-dark, 0.35)), url(@/src/hero.jpg);
  background-size: cover;
  background-position: top;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);

  @media screen and (max-width: 767px) {
    height: 65vh;
  }

  @media screen and (max-width: 569px) {
    height: 50vh;
  }

  &__text-box {
    color: #fff;
    text-align: center;

    &__subtitle {
      text-transform: uppercase;
      font-size: 3.2rem;

      @media screen and (max-width: 767px) {
        font-size: 2.4rem;
      }

      @media screen and (max-width: 569px) {
        font-size: 2rem;
      }

      @media screen and (max-width: 468px) {
        font-size: 1.8rem;
      }
    }

    &__title {
      text-transform: uppercase;
      font-size: 5.6rem;

      @media screen and (max-width: 767px) {
        font-size: 4.2rem;
      }

      @media screen and (max-width: 569px) {
        font-size: 3.2rem;
      }

      @media screen and (max-width: 468px) {
        font-size: 2.4rem;
      }
    }

    &__objective {
      font-size: 2.2rem;

      @media screen and (max-width: 767px) {
        font-size: 1.8rem;
      }

      @media screen and (max-width: 569px) {
        font-size: 1.6rem;
      }
    }
  }

  &__button {
    margin-top: 3rem;

    .btn {
      padding: 1.5rem 4.5rem;
      font-size: 1.8rem;
      color: #fff;
      border: none;
      font-weight: 300;
      text-transform: uppercase;
      border-radius: 100px;
      background-image: linear-gradient(to right, $color-primary-light, $color-primary-dark);
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

    .btn:hover {
      background-image: linear-gradient(to right, #ff094f, #850237);
      transform: scale(1.05);
    }
  }
}
</style>