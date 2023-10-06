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
    <nav class="header__user-nav">
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
  <!--HERO-->
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
  <!--HERO END-->
  <!--POPULAR TRAVEL -->
  <section class="popular-travel">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3 class="popular-travel__title">the best offers</h3>
          <div class="row">
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
              <div class="card">
                <img class="card__image" src="https://welcometozante.com/wp-content/uploads/2020/11/Zante-citt%C3%A0-1.jpg">
                <div class="card__information">
                  <div class="card__information__title">
                    <span class="card__information__title-place">Hotel Las Palmas</span>
                    <div class="card__information__title__description">
                      <span class="card__information__title__description-country">Greece,</span>
                      <span class="card__information__title__description-city">Zakyntos</span>
                    </div>
                  </div>
                  <div class="card__information__price">$150</div>
                </div>
                <div class="card__description">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </div>
                <div class="card__button">
                  <button class="card__btn">show detail</button>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
              <div class="card">
                <img class="card__image" src="https://welcometozante.com/wp-content/uploads/2020/11/Zante-citt%C3%A0-1.jpg">
                <div class="card__information">
                  <div class="card__information__title">
                    <span class="card__information__title-place">Hotel Las Palmas</span>
                    <div class="card__information__title__description">
                      <span class="card__information__title__description-country">Greece,</span>
                      <span class="card__information__title__description-city">Zakyntos</span>
                    </div>
                  </div>
                  <div class="card__information__price">$150</div>
                </div>
                <div class="card__description">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </div>
                <div class="card__button">
                  <button class="card__btn">show detail</button>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
              <div class="card">
                <img class="card__image" src="https://welcometozante.com/wp-content/uploads/2020/11/Zante-citt%C3%A0-1.jpg">
                <div class="card__information">
                  <div class="card__information__title">
                    <span class="card__information__title-place">Hotel Las Palmas</span>
                    <div class="card__information__title__description">
                      <span class="card__information__title__description-country">Greece,</span>
                      <span class="card__information__title__description-city">Zakyntos</span>
                    </div>
                  </div>
                  <div class="card__information__price">$150</div>
                </div>
                <div class="card__description">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </div>
                <div class="card__button">
                  <button class="card__btn">show detail</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--POPULAR TRAVEL END -->
  <!--FOOTER-->
  <footer class="footer">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-12">
          <div class="footer__logo">
            <img class="footer__logo-img" src='@/src/logo.png' alt="Logo">
            <span class="footer__name">TrilloBooking</span>
          </div>
        </div>
        <div class="col-12 col-md-5">
          <div class="footer__navigation">
            <ul class="footer__navigation__list">
              <li class="footer__navigation__list-item">company</li>
              <li class="footer__navigation__list-item">contact us</li>
              <li class="footer__navigation__list-item">carrers</li>
              <li class="footer__navigation__list-item">privacy policy</li>
              <li class="footer__navigation__list-item">terms</li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-5">
          <div class="footer__copyright">
            <p>Build by <a class="footer__link" href="https://www.facebook.com/krystian.wojda.9/" target="_blank">KRYSTIAN WOJDA</a> Frontend Developer/Web Developer. Copyright © by Krystian Wojda. Designe this website created by Jonas Schmedtmann and Krystian Wojda.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!--FOOTER END-->
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

  &__user-nav {
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

.popular-travel {
  padding: 3rem 0;

  &__title {
    text-transform: uppercase;
    font-size: 2.2rem;
    color: #fff;
    margin-bottom: 1rem;
  }

  .card {
    min-height: 52rem;
    background-color: #fff;
    box-shadow: $color-shadow-dark;
    border-radius: 15px;
    margin: 2rem 0;
    border: none;
    transition: all .7s;

    &__image {
      width: 100%;
      height: 25rem;
      border-radius: 13px 13px 0 0;
    }

    &__information {
      display: flex;
      justify-content: space-between;
      margin: 1rem 1.5rem;
      border-bottom: $border-line;

      &__title {
        display: flex;
        flex-direction: column;

        &-place {
          text-transform: uppercase;
          font-size: 2rem;
          font-weight: 600;
        }

        &__description {
          font-weight: 500;

          &-country {
            font-size: 1.6rem;
            margin-right: .5rem;
          }

          &-city {
            font-size: 1.5rem;
          }
        }
      }

      &__price {
        font-size: 4rem;
        font-weight: 600;
        color: $color-primary;
      }
    }

    &__description {
      margin: 0 1.5rem 1rem 1.5rem;
      font-size: 1.4rem;
    }

    &__button {
      display: flex;
      justify-content: center;
      margin-bottom: 2rem;

      button {
        padding: .7rem 3rem;
        font-size: 1.5rem;
        color: #fff;
        border: none;
        font-weight: 300;
        text-transform: uppercase;
        border-radius: 100px;
        background-image: linear-gradient(to right, $color-primary-light, $color-primary-dark);
        position: relative;
        transition: all .7s;
      }

      button:hover {
        background-image: linear-gradient(to right, #ff094f, #850237);
        transform: scale(1.05);
        box-shadow: $color-shadow-light;
      }
    }
  }

  .card:hover {
    transform: scale(1.02);
  }
}

.footer {
  background-color: $color-grey-dark-1;
  padding: 8rem 0;
  color: #fff;

  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;

    &-img {}
  }

  &__name {
    font-size: 4rem;
    margin-left: 2rem;
  }

  &__copyright {
    padding-top: 8rem;
    font-size: 1.4rem;

    p {
      border-top: $border-line;
      padding-top: 2rem;
    }
  }

  &__navigation {
    padding-top: 8rem;
    font-size: 1.6rem;

    &__list {
      list-style: none;
      display: flex;
      border-top: $border-line;
      padding: 2rem 0 0 0;
      text-transform: uppercase;

      @media screen and (max-width: 1400px) {
        flex-wrap: wrap;
      }

      &-item:not(:last-child) {
        margin-right: 2rem;
      }

      &-item:hover {
        color: $color-primary;
        cursor: pointer;
      }
    }
  }

  &__link {
    color: $color-primary;
    text-decoration: none;
    position: relative;
    transition: all .7s;
  }

  &__link:hover {
    color: $color-primary-light;
  }
}
</style>