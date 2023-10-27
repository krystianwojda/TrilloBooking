<template>
  <section class="sidebar">
    <nav>
      <div class="sidebar__navigation">
        <h3 class="sidebar__navigation-title">Filters</h3>
        <span @click="showMenu" class="sidebar__navigation-icon">
          <img src="@/src/menu.png" alt="icon-menu">
        </span>
      </div>
      <div class="filter" v-if="isOpen">
        <ul class="sidebar__filters">
          <li class="sidebar__filters__item">
            <div class="sidebar__filters__item__box">
              <label class="sidebar__filters__item-label" for="country" @click="updateModal('country')">Country</label>
              <span class="sidebar__filters__item__box-value">{{ route.params.country || 'All' }}</span>
            </div>
            <select class="sidebar__filters__item-input" id="country" v-model="country">
              <option value="All">All</option>
              <option v-for="country in removeDuplicate(countries)" :key="country">{{ country }}</option>
            </select>
          </li>
          <li class="sidebar__filters__item">
            <div class="sidebar__filters__item__box">
              <label class="sidebar__filters__item-label" for="city" @click="updateModal('city')">City</label>
              <span class="sidebar__filters__item__box-value">{{ route.params.city }}</span>
            </div>
            <select class="sidebar__filters__item-input" id="city" v-model="city">
              <option v-for="city in removeDuplicate(citiesInSelectedCountry)" :key="city">{{ city }}</option>
            </select>
          </li>
        </ul>
        <div class="sidebar__check">
          <button class="sidebar__check-button" @click="onChange(country, city)">Apply</button>
        </div>
      </div>
    </nav>
    <div class="sidebar__business">
      <span class="sidebar__business-title">TrilloBooking</span>
      <img class="sidebar__business-logo" src="@/src/logo.png" alt="Logo">
    </div>
  </section>
</template>

<script setup>
import travels from '@/data/travels.json';

const countries = travels.map(c => c.country);
const cities = travels.map(c => c.city);

const citiesInSelectedCountry = computed(() => {
  if (country.value === 'All') {
    removeDuplicate(cities);
  } else {
    return cities.filter(city => {
      return travels.some(travel => travel.country === country.value && travel.city === city);
    });
  }
});

const removeDuplicate = (data) => {
  return data.filter((value, index) => data.indexOf(value) === index);
};

const isOpen = ref(true);
const country = ref('');
const city = ref('');
const route = useRoute();
const showMenu = () => {
  isOpen.value = !isOpen.value;
}

const modal = ref({
  country: false,
  city: false,
});


const updateModal = key => {
  modal.value[key] = !modal.value[key];
}

const onChange = (country, city) => {
  updateModal('country');
  updateModal('city');
  navigateTo(`/country/${country}/city/${city}`)
};
</script>

<style lang="scss" scoped>
@import "scss/main";

.sidebar {
  background-color: $color-grey-dark-1;
  flex: 0 0 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;

  @media screen and (max-width: 640px) {
    position: fixed;
    z-index: 100;
    width: 100%;
  }

  &__navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 3rem;

    @media screen and (max-width: 640px) {
      padding: 1rem;
    }

    &-title {
      font-size: 2.5rem;

      @media screen and (max-width: 640px) {
        font-size: 2rem;
      }
    }

    &-icon img {
      display: none;
      width: 3rem;
      height: 3rem;
      cursor: pointer;

      @media screen and (max-width: 640px) {
        display: block;
        width: 2.5rem;
        height: 2.5rem;
      }
    }

  }

  &__filters {
    padding: 0 3rem;
    display: block;
    height: 17rem;

    &__item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-size: 1.75rem;
      margin-bottom: 1rem;

      &__box {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      &-label {
        margin: .5rem 0;
      }

      &-input {
        margin-bottom: .5rem;
        border-radius: 7px;
        padding: .25rem 1rem;
      }
    }
  }

  &__check {
    display: flex;
    justify-content: center;
    padding: 2rem 3rem;

    &-button {
      padding: .7rem 5rem;
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

    &-button:hover {
      background-image: linear-gradient(to right, #ff094f, #850237);
      transform: scale(1.05);
    }
  }

  &__business {
    padding: 3rem 3rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 640px) {
      display: none;
    }

    &-title {
      font-size: 1.5rem;
      margin-right: 1rem;
    }

    &-logo {
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  .disabled {
    display: none;
    height: 0;
  }
}
</style>