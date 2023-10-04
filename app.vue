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
    <img class="header__logo" src="@/public/logo.png" alt="logo">
    <!--USER NAVIGATION-->
    <nav class="user-nav">
      <div class="user-nav__item">
        <span class="user-nav__item-title">Login</span>
        <img class="user-nav__item-icon" src="@/public/login.png" alt="Login">
      </div>
      <div class="user-nav__item">
        <span class="user-nav__item-title">Register</span>
        <img class="user-nav__item-icon" src="@/public/new-user.png" alt="Register">
      </div>
    </nav>
    <!--USER NAVIGATION-->
  </header>
  <!--HEADER-->
</template>

<style lang="scss">
@import "scss/main";

html {
  box-sizing: border-box;
  font-size: 62.5%;
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
</style>