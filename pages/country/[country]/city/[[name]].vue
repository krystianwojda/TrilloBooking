<template>
  <div>
    <travel-cards :travels="travels"/>
  </div>
</template>

<script setup>
import useFetchTravels from "~/composables/useFetchTravels";

const route = useRoute();
const { data: travels, refresh} = await useFetchTravels(route.params.country, {
  city: route.params.city
});

watch(
    () => route.query,
    () => {
      window.location.reload(true)
    }
);
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  padding-top: 7rem;

  @media screen and (max-width: 640px) {
    flex-direction: column;
  }

  @media screen and (max-width: 576px) {
    padding-top: 5rem;
  }
}
</style>