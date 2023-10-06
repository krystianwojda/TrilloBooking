<template>
  <div class="header__search-bar">
    <input type="text" class="header__search-bar__input" placeholder="Search your travel">
    <button class="header__search-bar__button">Search</button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/main";

.header {
  &__search-bar {
    flex: 0 0 40%;
    display: flex;
    font-size: 1.8rem;
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
}
</style>