<script setup lang="js">
const props = defineProps({
  src: String,
  alt: String,
});
</script>

<template>
  <div class="filler">
    <img :src="props.src" :alt="props.alt">
  </div>
</template>

<style scoped>
.filler img {
  height: 300px;
  width: 100%;
  object-fit: cover;
  object-position: top;
}
</style>