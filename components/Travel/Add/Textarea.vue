<template>
  <div class="col-12 col-md-6 col-lg-6 col-xl-6">
    <div class="box-input">
      <label class="input-label" :for="name">{{ title }}</label>
      <textarea class="input-textarea" :maxlength="maxLength" :placeholder="placeholder" v-model="state" :name="name" @input="onChange"></textarea>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  name: String,
  placeholder: String,
  maxLength: Number
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
  padding: 1rem 2rem;

  .input-label {
    font-size: 2rem;
    padding-bottom: .5rem;
  }

  .input-textarea {
    min-height: 20rem;
    padding: .75rem;
    font-size: 1.5rem;
    border-radius: 15px;
    border: $border-line;
    box-shadow: $color-shadow-light;
  }
}
</style>