<template>
  <div class="header__business">
    <img class="header__logo" src="@/src/logo.png" alt="logo">
    <span class="header__name">TrilloBooking</span>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/main";

.header {
  &__business {
    display: flex;
    align-items: center;
  }

  &__logo {
    height: 3.25rem;
    margin: 0 1rem 0 2rem;
  }

  &__name {
    color: $color-primary;
    font-size: 2.4rem;
  }
}
</style>