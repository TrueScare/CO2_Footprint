<script setup lang="js">
</script>

<template>
  <header>
    <!--insert logo here-->
    <div class="container">
      <div class="navbar navbar-light">
        <div class="navbar-brand">
          <NuxtLink to="/">
            <img alt="Logo" src="/iuwebsitelogo.png">
          </NuxtLink>
        </div>


        <h1>Steps to Green</h1>
      </div>
    </div>
    <nav class="nav navbar navbar-expand bg-primary">
      <div class="container">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NuxtLink to="/about" class="nav-link text-white">Über uns</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/faq" class="nav-link text-white">FAQ</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>

</style>