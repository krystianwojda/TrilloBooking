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
            <travel-add-textarea v-for="textarea in inputsTextArea" :title="textarea.title" :name="textarea.name" :placeholder="textarea.placeholder" :maxLength="textarea.maxLength" @change-input="onChangeInput"/>
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
    addCategory: '', /* zrobione */
    shortDescription: '', /* zrobione */
    description: '', /* zrobione */
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
];
const inputsTextArea = [
  {
    id: 7,
    title: 'Short description (max length: 250)',
    name: 'shortDescription',
    placeholder: 'Some short description on card',
    maxLength: 250
  },
  {
    id: 8,
    title: 'Description',
    name: 'description',
    placeholder: 'Full description to the detail page',
    maxLength: 99999
  }
];

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

  @media screen and (max-width: 576px) {
    text-align: center;
    margin-top: 8rem;
    font-size: 3rem;
  }
}

.box {
  margin: 3rem 0;
  background-color: white;
  border-radius: 15px;
  box-shadow: $color-shadow-dark;
  padding: 3rem;

  @media screen and (max-width: 576px) {
    padding: 0;
  }
}
</style>