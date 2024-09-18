<script setup>
const props = defineProps({
  content: String,
  filterString: String
});

const markedContent = computed(() => {
  if (props.content) {
    let searchIn = props.content.toLowerCase();
    let position = searchIn.indexOf(props.filterString.toLowerCase());
    if (position >= 0 && props.filterString.length > 0) {
      let exchange = props.content.substring(position, position + props.filterString.length);
      return props.content.replace(exchange, "<mark>" + exchange + "</mark>");
    } else {
      return props.content;
    }
  }
});

</script>
<template>
  <span v-html="markedContent"></span>
</template>