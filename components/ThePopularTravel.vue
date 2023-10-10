<template>
  <section class="popular-travel">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3 class="popular-travel__title">the best offers</h3>
          <div class="row">
            <travel-card/>
            <travel-card/>
            <travel-card/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/scss/main";

.popular-travel {
  padding: 8rem 0;

  @media screen and (max-width: 576px) {
    padding: 3rem 0;
  }

  &__title {
    text-transform: uppercase;
    font-size: 3rem;
    color: #fff;
    margin-bottom: 2rem;

    @media screen and (max-width: 576px) {
      font-size: 2.25rem;
      margin-bottom: 1.5rem;
    }
  }

  .card:hover {
    transform: scale(1.02);
  }
}
</style>