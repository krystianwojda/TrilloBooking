<template>
  <div class="gallery">
    <figure class="gallery__item">
      <img class="gallery__item-photo" src="@/src/hotel-1.jpg" alt="photo">
    </figure>
    <figure class="gallery__item">
      <img class="gallery__item-photo" src="@/src/hotel-2.jpg" alt="photo">
    </figure>
    <figure class="gallery__item">
      <img class="gallery__item-photo" src="@/src/hotel-3.jpg" alt="photo">
    </figure>
  </div>
</template>

<style lang="scss" scoped>
@import "scss/main";

.gallery {
  display: flex;

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }

  figure {
    margin: 0;
  }

  &__item {
    &-photo {
      width: 100%;
      display: block;
    }
  }
}
</style>