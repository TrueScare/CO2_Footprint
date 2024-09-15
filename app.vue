<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup lang="js">
useHead({
  title: "Steps to Green"
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
