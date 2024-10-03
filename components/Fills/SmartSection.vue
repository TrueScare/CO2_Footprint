<script setup lang=js>
const props = defineProps({
  title: String,
  id: {
    type: String,
    required: false
  },
  fullwidth: {
    type: Boolean,
    required: false,
    default: false
  }
});

const sectionId = computed(() => {
  if (props.id) {
    return props.id;
  }
  return useId()
});
const titleId = computed(() => {
  let id = useId();
  if (props.id) {
    id = props.id;
  }
  return id + "_headline";
});

</script>
<template>
  <section :class="{container: !fullwidth}" :id="sectionId" :aria-labelledby="titleId">
    <h2 :id="titleId"><slot name="title"/></h2>
    <div class="section-body">
      <slot name="default"/>
    </div>
  </section>
</template>
<style scoped>
section {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>