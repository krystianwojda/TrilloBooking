<script setup>
useHead({
  link: [
    {
      rel: 'stylesheet',
      href:'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css',
      integrity: 'sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65',
      crossorigin: 'anonymous'
    }
  ]
});
</script>

<template>
  <!--HEADER-->
  <header class="header">
    <img class="header__logo" src="@/src/logo.png" alt="logo">
    <!--SEARCH BAR -->
    <div class="header__search-bar">
      <input type="text" class="header__search-bar__input" placeholder="Search your travel">
      <button class="header__search-bar__button">Search</button>
    </div>
    <!--SEARCH BAR END -->
    <!--USER NAVIGATION-->
    <nav class="user-nav">
      <div class="user-nav__item">
        <span class="user-nav__item-title">Login</span>
        <img class="user-nav__item-icon" src="@/src/login.png" alt="Login">
      </div>
      <div class="user-nav__item">
        <span class="user-nav__item-title">Registration</span>
        <img class="user-nav__item-icon" src="@/src/new-user.png" alt="Register">
      </div>
    </nav>
    <!--USER NAVIGATION END-->
  </header>
  <!--HEADER END-->
  <!--HOME-->
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
  <!--HOME END-->
</template>

<style lang="scss">
@import "scss/main";

html {
  box-sizing: border-box;
  font-size: 62.5%;
}

body {
  background-color: $color-primary;
}

.header {
  font-size: 1.4rem;
  height: 7rem;
  background-color: #fff;
  border-bottom: 1px solid $color-grey-light-2;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__logo {
    height: 3.25rem;
    margin-left: 2rem;
  }

  &__search-bar {
    flex: 0 0 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 1024px) {
      flex: 0 0 50%;
    }

    &__input {
      font-family: inherit;
      font-size: inherit;
      color: inherit;
      background-color: $color-grey-light-2;
      border: 1px solid $color-grey-light-4;
      padding: .7rem 2rem;
      width: 100%;
      border-radius: 100px;
      transition: all .7s;
      margin-right: 2rem;

      &:focus {
        outline: none;
        background-color: $color-grey-light-3;
        transform: scale(1.03);
      }

      &::-webkit-input-placeholder {
        font-weight: 100;
        color: $color-grey-dark-3;
      }
    }

    &__button {
      padding: .7rem 3rem;
      font-size: inherit;
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

  .user-nav {
    display: flex;
    align-items: center;
    align-self: stretch;
    height: 7rem;
    color: #777;

    & > * {
      padding: 0 2rem;
      cursor: pointer;
      height: 100%;
      display: flex;
      align-items: center;
      position: relative;
    }

    & > *:hover {
      background-color: $color-grey-light-2;
    }

    &__item-title {
      font-size: 1.8rem;
      margin-right: 1rem;
    }

    &__item-icon {
      width: 3rem;
      height: 3rem;
    }
  }

}

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