<template>
  <div class="col-12 col-md-6 col-lg-6 col-xl-6">
    <div class="box-input">
      <label class="input-label" for="">{{ title }}</label>
      <input type="text" class="input-text" :placeholder="placeholder" v-model="state" :name="name" @input="onChange">
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  name: String,
  placeholder: String
})
const emits = defineEmits(['changeInput']);
const state = ref('');
const onChange = () => {
  emits('changeInput', state.value, props.name);
};
</script>

<style lang="scss" scoped>
@import "@/scss/main";

.box-input {
  display: flex;
  flex-direction: column;
  padding: 1rem 0;

  .input-label {
    font-size: 2rem;
    padding-bottom: .5rem;
  }

  .input-text {
    padding: .75rem;
    font-size: 1.5rem;
    border-radius: 15px;
    max-width: 400px;
    border: $border-line;
    box-shadow: $color-shadow-light;
  }
}
</style>