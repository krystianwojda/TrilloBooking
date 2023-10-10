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
  <the-header/>
  <section class="hotel-view">
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
    <div class="overview">
      <h1 class="overview__title">hotel las palmas</h1>
      <div class="overview__stars">
        <img class="overview__stars-icon" src="@/src/star.png" alt="star">
        <img class="overview__stars-icon" src="@/src/star.png" alt="star">
        <img class="overview__stars-icon" src="@/src/star.png" alt="star">
        <img class="overview__stars-icon" src="@/src/star.png" alt="star">
        <img class="overview__stars-icon" src="@/src/star.png" alt="star">
      </div>
      <div class="overview__location">
        <img class="overview__location-icon" src="@/src/location.png" alt="Location">
        <span class="overview__location-place">Greece, Zakyntos</span>
      </div>
      <div class="overview__rating">
        <div class="overview__rating-average">4.7</div>
        <div class="overview__rating-count">271 votes</div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-xl-7">
          <div class="row">
            <div class="col-12">
              <div class="description">
                <div class="description__price">
                  <div class="description__price-title">Actual price</div>
                  <div class="description__price-count">$150 <span>per night</span></div>
                </div>
                <p class="description__paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                <ul class="description__list">
                  <li class="description__list-item">Close to the beach</li>
                  <li class="description__list-item">Breakfat included</li>
                  <li class="description__list-item">Free airport transport</li>
                  <li class="description__list-item">Wi-fi in rooms</li>
                  <li class="description__list-item">Pets allowed</li>
                  <li class="description__list-item">Free drinks</li>
                  <li class="description__list-item">Air conditiong and heating</li>
                  <li class="description__list-item">We speak all languages</li>
                </ul>
                <div class="description__cta">
                  <button class="description__cta__button">book now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12 col-xl-4">
          <div class="row">
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
            <div class="button">
              <button class="button__btn">Show all</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <the-footer/>
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

.hotel-view {
  background-color: $color-grey-light-1;
  color: $color-grey-dark-2;

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

  .overview {
    display: flex;
    align-items: baseline;
    border-bottom: $border-line;

    &__title {
      text-transform: uppercase;
      font-size: 3rem;
      letter-spacing: 2px;
      padding: 1.75rem 3.5rem;
      font-weight: 300;
      margin: 0;

      @media screen and (max-width: 991px) {
        font-size: 2.5rem;
      }

      @media screen and (max-width: 767px) {
        font-size: 1.75rem;
        padding: 1.5rem 1.75rem;
      }

      @media screen and (max-width: 576px) {
        font-size: 1.5rem;
        padding: 1.5rem 1.25rem;
        letter-spacing: 1px;
      }
    }

    &__stars {
      margin-right: auto;
      display: flex;

      &-icon {
        width: 2.5rem;
        height: 2.5rem;
        margin-right: .75rem;

        @media screen and (max-width: 991px) {
          width: 2rem;
          height: 2rem;
        }

        @media screen and (max-width: 767px) {
          width: 1.5rem;
          height: 1.5rem;
          margin-right: .25rem;
        }

        @media screen and (max-width: 576px) {
          width: 1.25rem;
          height: 1.25rem;
          margin-right: .25rem;
        }
      }
    }

    &__location {
      font-size: 1.2rem;
      display: flex;
      align-items: center;

      @media screen and (max-width: 576px) {
        display: none;
      }

      &-icon {
        margin-right: 1rem;
        width: 3rem;
        height: 3rem;

        @media screen and (max-width: 991px) {
          width: 2rem;
          height: 2rem;
        }
      }
      &-place {
        color: $color-primary;
        text-decoration: underline;
      }
    }

    &__rating {
      background-color: $color-primary;
      color: white;
      margin-left: 3rem;
      padding: 0 2.25rem;
      align-self: stretch;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      @media screen and (max-width: 767px) {
        margin-left: 1.5rem;
      }

      &-average {
        font-size: 2.25rem;
        font-weight: 300;
        margin-bottom: -3px;

        @media screen and (max-width: 991px) {
          font-size: 1.75rem;
        }
      }

      &-count {
        text-transform: uppercase;
        font-size: 1rem;
      }
    }
  }

  .description, .opinion {
    margin: 2rem 0 0 0;
    padding: 3rem;
    box-shadow: $color-shadow-light;
    background-color: #fff;
    font-size: 1.6rem;

    @media screen and (max-width: 576px) {
      font-size: 1.4rem;
    }

    &__paragraph:not(:last-child) {
      margin-bottom: 2rem;
    }

    &__list {
      margin: 3rem 0;
      padding: 3rem 0;
      border-top: $border-line-light;
      border-bottom: $border-line-light;
      display: flex;
      flex-wrap: wrap;

      &-item {
        list-style: none;
        flex: 0 0 50%;
        margin-bottom: .7rem;
        display: flex;
        align-items: center;
      }

      &-item::before {
        margin-right: .75rem;
        content: '';
        display: inline-block;
        height: 1.5rem;
        width: 1.5rem;
        background-image: url("@/src/right-arrow.png");
        background-position: center;
      }
    }

    &__price {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;

      &-title {
        font-size: 2rem;
        font-weight: 600;

        @media screen and (max-width: 576px) {
          font-size: 1.75rem;
        }
      }
      &-count {
        font-size: 3.5rem;
        color: $color-primary;
        font-weight: 600;

        @media screen and (max-width: 576px) {
          font-size: 2.75rem;
        }

        span {
          font-size: 1.75rem;
          font-weight: 300;
          margin-left: .25rem;

          @media screen and (max-width: 576px) {
            font-size: 1.5rem;
          }
        }
      }
    }

    &__cta {
      padding: 4rem 0;
      display: flex;
      justify-content: center;

      &__button {
        padding: 1.25rem 4rem;
        font-size: 1.75rem;
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

  .button {
    display: flex;
    justify-content: center;
    margin: 4rem 0;

    @media screen and (max-width: 576px) {
      display: none;
    }

    &__btn {
      color: #eb2f64;
      border: none;
      font-size: 1.5rem;
      padding-bottom: 2px;
      display: inline-block;
      background-color: transparent;
      cursor: pointer;
      transition: all .2s;
    }

    &__btn:hover {
      transform: scale(1.05);
    }
  }
}
</style>