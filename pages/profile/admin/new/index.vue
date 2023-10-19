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
            <div class="col-12 col-md-6 col-lg-6 col-xl-6">
              <travel-add-select title="Star *" :options="stars" name="What a stars hotel" @change-input="onChangeInput"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const stars = [1, 2, 3, 4, 5];
const info = useState('adInfo', () => {
  return {
    name: '',
    country: '',
    city: '',
    star: '',
    price: '',
    addCategory: '',
    shortDescription: '',
    description: '',
    important: '',
    images: null
  };
});

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