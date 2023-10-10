<template>
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
</template>

<style lang="scss" scoped>
@import "@/scss/main";

.footer {
  background-color: $color-grey-dark-1;
  padding: 8rem 0;
  color: #fff;

  @media screen and (max-width: 576px) {
    padding: 3rem 0;
  }

  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 576px) {
      flex-direction: column;
    }

    &-img {
      @media screen and (max-width: 576px) {
        width: 7rem;
        height: 7rem;
      }
    }
  }

  &__name {
    font-size: 4rem;
    margin-left: 2rem;

    @media screen and (max-width: 576px) {
      font-size: 3rem;
    }
  }

  &__copyright {
    padding-top: 8rem;
    font-size: 1.4rem;

    @media screen and (max-width: 576px) {
      padding: 3rem 0;
      font-size: 1.2rem;
    }

    p {
      border-top: $border-line;
      padding-top: 2rem;
    }
  }

  &__navigation {
    padding-top: 8rem;
    font-size: 1.6rem;


    @media screen and (max-width: 576px) {
      padding: 3rem 0;
      font-size: 1.4rem;
    }

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