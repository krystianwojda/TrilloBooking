<template>
  <div class="cards">
    <div class="row">
      <travel-card v-for="travel in travels" :key="travel.id" :travel="travel" @favorItem="handleFavorite" :favored="travel.id in favorite"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/main";

.cards {
  margin: 2rem 2rem;

  @media screen and (max-width: 640px) {
    margin: 7rem 2rem;
  }
}
</style>
<script setup>
const props = defineProps({
  travels: Array
})
const favorite = useLocalStorage("favorite", {});
const handleFavorite = (id) => {
  if (id in favorite.value) {
    delete favorite.value[id];
  } else {
    favorite.value = {
      ...favorite.value,
      [id]: true
    }
  }
}
</script>