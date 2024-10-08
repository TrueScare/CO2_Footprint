<template>
  <NuxtLayout>
    <main>
      <NuxtPage/>
    </main>
  </NuxtLayout>
</template>

<script setup lang="js">
useHead({
  title: "Steps to Green",
  author: "Liam Mefus",
  keywords: "co2, footprint, iu internationale hochschule, web development"
});

import('~/assets/styles/main.css');
onMounted(() => {
  let rtlIdentifier = new RTLIdentifier();
  let locale = new Intl.Locale(navigator.language);
  if (rtlIdentifier.isRTL(locale.baseName)) {
    document.body.classList.toggle("isRTL");
  }
});

</script>

<style scoped lang="scss">
main {
  overflow-x: hidden;
}
</style>
