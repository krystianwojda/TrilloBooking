<template>
  <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-12">
    <div class="opinion">
      <p class="opinion__text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
      <div class="opinion__user">
        <img src="@/src/user-4.jpg" class="opinion__user-photo" alt="user_image">
        <div class="opinion__user__box">
          <div class="opinion__user__box-name">Jonas Schwarz</div>
          <div class="opinion__user__box-date">Feb 23rd, 2023</div>
        </div>
        <div class="opinion__user__rating">4</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "scss/main";

.opinion {
  margin: 2rem 0 0 0;
  padding: 3rem;
  box-shadow: $color-shadow-light;
  background-color: #fff;
  font-size: 1.6rem;

  @media screen and (max-width: 576px) {
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }

  &__paragraph:not(:last-child) {
    margin-bottom: 2rem;
  }

  &__text {
    margin-bottom: 3.5rem;
  }

  &__user {
    display: flex;
    align-items: center;

    &-photo {
      height: 4.5rem;
      width: 4.5rem;
      border-radius: 50%;
      margin-right: 1.5rem;
    }

    &__box {
      margin-right: auto;
    }

    &__rating {
      font-size: 2.25rem;
      font-weight: 600;
      color: $color-primary;
    }
  }
}
</style>