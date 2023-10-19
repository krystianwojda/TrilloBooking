<template>
  <div class="col-12 col-md-6 col-lg-6 col-xl-6">
    <div class="box-input">
      <label class="input-label" :for="image">Choose image</label>
      <input type="file" name="image" class="input-file" accept="image/*" @change="onImageUpload" multiple>
      <div class="image-preview">
        <img :src="image.preview" class="img-fluid" :alt="image.preview">
      </div>
    </div>
  </div>
</template>

<script setup>
const image = useState('carImage', () => {
  return {
    preview: null,
    image: null
  }
});
const emits = defineEmits(['changeInput']);
const onImageUpload = (event) => {
  const input = event.target;
  if (input.files) {
    const reader = new FileReader();
    reader.onload = (e) => {
      image.value.preview = e.target.result;
    };
    image.value.image = input.files[0];
    reader.readAsDataURL(input.files[0]);
    emits('changeInput', input.files[0], 'image');
  }
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

  .input-file {
    padding: .75rem;
    font-size: 1.5rem;
    border-radius: 15px;
    border: $border-line;
    box-shadow: $color-shadow-light;
  }
}
</style>