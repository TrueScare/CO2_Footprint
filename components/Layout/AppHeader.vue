<script setup lang="js">
</script>

<template>
  <header>
    <!--insert logo here-->
    <div class="container">
      <div class="navbar navbar-light">
        <div class="navbar-brand">
          <NuxtLink to="/">
            <img alt="Logo" src="/iuwebsitelogo_white.png">
          </NuxtLink>
        </div>


        <div class="text-white h1">Steps to Green</div>
      </div>
    </div>
    <nav class="nav navbar navbar-expand bg-primary">
      <div class="container">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link text-white">
              <svg style="margin-top: -5px"
                   xmlns="http://www.w3.org/2000/svg"
                   width="16"
                   height="16"
                   fill="currentColor"
                   class="bi bi-house-door-fill"
                   viewBox="0 0 16 16">
                <path
                    d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
              </svg>
              Home
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/about" class="nav-link text-white">Über uns</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  background-image: url("/img/himmel_wiese.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
}
</style>