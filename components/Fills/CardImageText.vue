<script setup lang="js">
const props = defineProps({
  src: String,
  alt: String,
  title: String
});

const id = useId();
</script>

<template>
  <article class="card flex-md-row align-items-lg-center" :aria-labelledby="id">
    <div class="col-12 col-md-3">
      <img class="card-image-top rounded" :src="props.src" :alt="props.alt"/>
    </div>
    <div class="col-12 col-md-9">
      <div class="card-body">
        <h3 class="card-title" :id="id">{{ props.title }}</h3>
        <div class="text-body">
          <slot/>
        </div>
      </div>
    </div>
  </article>
</template>
<style scoped>
.card-image-top {
  max-height: 300px;
  width: 100%;
  object-fit: cover;
  object-position: center;

  border-bottom-right-radius: 0 !important;

  @media screen and (max-width: 767.999px){
    border-bottom-left-radius: 0 !important;
  }
  @media screen and (min-width: 768px){
    border-top-right-radius: 0 !important;
  }
}
</style>