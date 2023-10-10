<template>
  <header class="header">
    <HeaderTheBusiness/>
    <HeaderTheUserNavigation/>
  </header>
</template>

<style lang="scss">
@import "@/scss/main";

.header {
  height: 7rem;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid $color-grey-light-2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 1;

  @media screen and (max-width: 576px) {
    height: 5rem;
  }
}
</style>