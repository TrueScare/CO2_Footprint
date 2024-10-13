<script setup lang="js">

const props = defineProps({
  src: String,
  alt: String,
  title: String,
  imageRight: {
    type: Boolean,
    default: false,
    required: false
  },
  borderless: {
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

const borderClass = computed(() => {
  if (props.borderless) {
    return "border-0"
  }
});
</script>

<template>
  <article class="card align-items-md-center overflow-hidden my-5"
           :class="[rowAlign, borderClass]"
           :aria-labelledby="id">
    <div class="col-12 col-md-4 image-container"
         :class="{rounded:props.borderless}"
         :style="'background-image: url('+ props.src +');'"
    >
    </div>
    <div class="col-12 col-md-8">
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