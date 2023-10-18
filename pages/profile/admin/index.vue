<template>
  <the-header/>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="title">Admin Page</h1>
        <div class="cards">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
              <div class="card">
                <div class="card__img">
                  <img src="@/src/add-product.png" alt="add new product">
                </div>
                <div class="card__description">
                  <p>Add a new trip</p>
                </div>
                <div class="card__button">
                  <button>Add new product</button>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
              <div class="card">
                <div class="card__img">
                  <img src="@/src/traveling.png" alt="All travels">
                </div>
                <div class="card__description">
                  <p>
                    Search and manage all your trips</p>
                </div>
                <div class="card__button">
                  <NuxtLink to="/profile/admin/travels">
                    <button>All travels</button>
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
              <div class="card">
                <div class="card__img">
                  <img src="@/src/group.png" alt="all users">
                </div>
                <div class="card__description">
                  <p>View all registered users</p>
                </div>
                <div class="card__button">
                  <NuxtLink to="/profile/admin/travels">
                    <button>All users</button>
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
              <div class="card">
                <div class="card__img">
                  <img src="@/src/order.png" alt="orders">
                </div>
                <div class="card__description">
                  <p>View all purchased travels</p>
                </div>
                <div class="card__button">
                  <NuxtLink to="/profile/admin/orders">
                    <button>All orders</button>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import travel from '~/data/travels.json';

const data = travel;
</script>

<style lang="scss" scoped>
@import "@/scss/main";

.title {
  color: white;
  padding-top: 10rem;
  text-align: right;
  font-size: 4rem;

  @media screen and (max-width: 562px) {
    padding-top: 7rem;
  }

  @media screen and (max-width: 991px) {
    text-align: center;
  }
}

.cards {
  margin: 2rem 2rem;

  .card {
    min-height: 40rem;
    background-color: #fff;
    box-shadow: $color-shadow-dark;
    border-radius: 15px;
    border: none;
    transition: all .7s;
    margin-bottom: 2rem;
    min-width: 300px;

    &__img {
      display: flex;
      justify-content: center;
      margin: 3rem 0 2rem 0;

      img {
        width: 18rem;
        height: 18rem;
        text-align: center;
      }
    }

    &__description {
      margin: 2rem 1rem;
      font-size: 1.8rem;
      text-align: center;
    }

    &__button {
      display: flex;
      justify-content: center;

      button {
        margin-left: 2rem;
        padding: 1rem 3.5rem;
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

      button:hover {
        background-image: linear-gradient(to right, #ff094f, #850237);
        transform: scale(1.05);
        box-shadow: $color-shadow-light;
      }
    }
  }
}
</style>