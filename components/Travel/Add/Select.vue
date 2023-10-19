<template>
  <div class="box-input">
    <label class="input-label">{{ name }}</label>
    <select class="input-select" :name="name" v-model="state">
      <option v-for="option in options" :key="option.id" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  name: String,
  options: Array
});
const emits = defineEmits(['changeInput']);
const state = ref('');

const onChange = () => {
  emits('changeInput', state.value, props.name)
};
</script>

<style lang="scss" scoped>
@import "@/scss/main";

.box-input {
  display: flex;
  flex-direction: column;

  .input-label {
    font-size: 2rem;
    padding-bottom: 1rem;
  }

  .input-select {
    padding: .75rem;
    font-size: 1.5rem;
    border-radius: 15px;
    max-width: 400px;
    border: $border-line;
    box-shadow: $color-shadow-light;
  }
}
</style>