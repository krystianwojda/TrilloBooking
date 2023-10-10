<template>
  <nav class="header__user-nav">
    <div class="header__user-nav__item">
      <span class="header__user-nav__item-title">Login</span>
      <img class="header__user-nav__item-icon" src="@/src/login.png" alt="Login">
    </div>
    <div class="header__user-nav__item">
      <span class="header__user-nav__item-title">Registration</span>
      <img class="header__user-nav__item-icon" src="@/src/new-user.png" alt="Register">
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import "@/scss/main";

.header {
  &__user-nav {
    display: flex;
    align-items: center;
    align-self: stretch;
    height: 7rem;
    color: #777;

    @media screen and (max-width: 576px) {
      height: 5rem;
    }

    & > * {
      padding: 0 2rem;
      cursor: pointer;
      height: 100%;
      display: flex;
      align-items: center;
      position: relative;

      @media screen and (max-width: 576px) {
        height: 5rem;
        padding: 0 .5rem;
      }
    }

    & > *:hover {
      background-color: $color-grey-light-2;
    }

    &__item {
      &-title {
        font-size: 2rem;
        margin-right: 1rem;

        @media screen and (max-width: 576px) {
          font-size: 1.5rem;
          margin-right: .25rem;
        }
      }

      &-icon {
        width: 3rem;
        height: 3rem;

        @media screen and (max-width: 576px) {
          width: 2.25rem;
          height: 2.25rem;
        }
      }
    }
  }
}
</style>