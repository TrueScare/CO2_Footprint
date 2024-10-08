<script setup>
const props = defineProps({
  right: {
    type: Boolean,
    default: false
  },
  bottom: {
    type: Boolean,
    default: false
  },
  green: {
    type: Boolean,
    default: false
  }
});

const imgSrc = computed(() => {
  let path = "/decorations/steps_";
  if (props.green) {
    path += "green"
  } else {
    path += "white"
  }
  return path + ".png";
});
</script>

<template>
  <div class="decoration decorations-steps"
       :class="{position_left: !right, position_right: right, position_top: !bottom, position_bottom: bottom}"
  >
    <img :src="imgSrc" alt="Bilder zur Dekoration"/>
  </div>
</template>

<style scoped lang="scss">
$padding: 20px;

.decorations-steps {
  position: relative;
  height: 150px;
  min-width: 150px;
  margin-top: 30px;
  margin-bottom: 30px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    &.position_ {
      &bottom {
        top: calc(100% + $padding);
      }

      &top {
        bottom: calc(100% + $padding);
      }

      &left {
        right: calc(100% + $padding);
      }

      &right {
        left: calc(100% + $padding);
      }
    }
  }
}
</style>