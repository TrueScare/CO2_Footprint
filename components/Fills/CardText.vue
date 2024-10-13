<script setup lang="js">
const props = defineProps({
  title: String,
  borderless: {
    type: Boolean,
    default: false,
    required: false
  }
});

const id = useId();

const borderClass = computed(() => {
  if (props.borderless) {
    return "border-0"
  }
});
</script>

<template>
  <article class="card align-items-lg-center overflow-hidden my-5"
           :class="[borderClass]"
           :aria-labelledby="id"
  >
    <div class="col-12">
      <div class="card-body">
        <h3 class="card-title" :id="id">{{ props.title }}</h3>
        <div class="text-body">
          <slot/>
        </div>
      </div>
    </div>
  </article>
</template>