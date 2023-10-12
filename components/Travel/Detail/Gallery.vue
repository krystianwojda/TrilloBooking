<template>
  <div class="gallery">
    <figure class="gallery__item">
      <img class="gallery__item-photo" :src="images[0]" alt="photo">
    </figure>
    <figure class="gallery__item">
      <img class="gallery__item-photo" :src="images[1]" alt="photo">
    </figure>
    <figure class="gallery__item">
      <img class="gallery__item-photo" :src="images[2]" alt="photo">
    </figure>
  </div>
</template>

<script setup>
const props = defineProps({
  images: Object
});
</script>

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
      min-height: 470px;
      display: block;
    }
  }
}
</style>