<template>
  <the-header/>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="title">Create new Travel</h1>
      </div>
      <div class="col-12">
        <div class="box">
          <div class="row">
            <travel-add-input v-for="input in inputsText" :key="input.id" :title="input.title" :name="input.name" :placeholder="input.placeholder"  @change-input="onChangeInput"/>
            <travel-add-select v-for="select in inputsSelect" :title="select.title" :options="select.options" :name="select.name" @change-input="onChangeInput"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const stars = [1, 2, 3, 4, 5];
const category = ['popular', 'normal']
const info = useState('adInfo', () => {
  return {
    name: '', /* zrobione */
    country: '', /* zrobione */
    city: '', /* zrobione */
    star: '', /* zrobione */
    price: '',
    addCategory: '',
    shortDescription: '',
    description: '',
    important: '',  /* zrobione */
    images: null
  };
});
const inputsText = [
  {
    id: 1,
    title: 'Name travel',
    name: 'name',
    placeholder: 'Enter the name of the trip'
  },
  {
    id: 2,
    title: 'Country',
    name: 'country',
    placeholder: 'Enter the country of the trip'
  },
  {
    id: 3,
    title: 'City',
    name: 'city',
    placeholder: 'Enter the city of the trip'
  },
  {
    id: 4,
    title: 'Important information',
    name: 'important',
    placeholder: 'Enter important information'
  }
];
const inputsSelect = [
  {
    id: 5,
    title: 'What a stars hotel',
    name: 'star',
    options: stars
  },
  {
    id: 6,
    title: 'Choose category',
    name: 'addCategory',
    options: category
  }
]

const onChangeInput = (data, name) => {
  info.value[name] = data;
};
</script>

<style lang="scss" scoped>
@import "@/scss/main";

.title {
  text-align: right;
  margin-top: 10rem;
  font-size: 4rem;
  color: white;
}

.box {
  margin-top: 3rem;
  background-color: white;
  border-radius: 15px;
  box-shadow: $color-shadow-dark;
  padding: 3rem;
}
</style>