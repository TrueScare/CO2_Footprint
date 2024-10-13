<script setup lang="js">
const props = defineProps({
  src: String,
  ariaLabel: String
});
</script>

<template>
  <section class="filler"
           :style="{backgroundImage: 'url('+ props.src +')'}"
           :aria-label="props.ariaLabel"
  >
    <slot/>
  </section>
</template>

<style scoped>
.filler {
  display:flex;
  justify-content: center;
  align-items: center;

  min-height: 300px;
  width: 100%;
  background-size: cover;
  background-position: center;
}
</style>