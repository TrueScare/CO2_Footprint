<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="js">
  import('~/assets/styles/main.css');
  let rtlIdentifier = new RTLIdentifier();
  //let locale = new Intl.Locale(navigator.language);
  /*if(rtlIdentifier.isRTL(locale.baseName)){
    document.body.classList.toggle("isRTL");
  }*/
</script>
