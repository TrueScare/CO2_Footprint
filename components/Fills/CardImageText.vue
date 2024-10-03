<script setup lang="js">

const props = defineProps({
  src: String,
  alt: String,
  title: String,
  imageRight: {
    type: Boolean,
    default: false,
    required: false
  }
});

const id = useId();

const rowAlign = computed(() => {
  if (props.imageRight) {
    return "flex-md-row-reverse image-right";
  } else {
    return "flex-md-row image-left";
  }
});

const imageClasses = computed(() => {
  if (props.imageRight) {
    return "rounded-end";
  }

  return "rounded-start";
});
</script>

<template>
  <article class="card align-items-lg-center overflow-hidden"
           :class="rowAlign"
           :aria-labelledby="id">
    <div class="col-12 col-md-3 image-container"
    :style="'background-image: url('+ props.src +');'">

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
<style scoped lang="scss">
.card-image-top {
  max-height: 300px;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.image-container {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 300px;
  align-self: stretch;
}
</style>