<script setup lang="js">
const isActive = ref(false);
const contents = ref([]);
onMounted(() => {
  let sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    // this should be an id to another element!
    let labelledby = section.getAttribute("aria-labelledby");
    let labelElement = section.querySelector("#" + labelledby);

    contents.value.push({
      ref: "#" + section.getAttribute("id"),
      text: labelElement.textContent
    });
  });
});


function onOpen() {
  isActive.value = true;
}

function onClose() {
  isActive.value = false;
}

function toTop(){
  window.scrollTo(0,0);
}

function toBottom(){
  window.scrollTo(document.body.scrollHeight,0);
}
</script>

<template>
  <aside id="navigation" class="position-fixed sidebar h-100">
    <div class="btn btn-open bg-primary text-white" @click.prevent="onOpen">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list"
           viewBox="0 0 16 16">
        <path fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
      </svg>
    </div>

    <div class="card sidebar-content rounded-0 position-absolute bg-primary text-white h-100"
         :class="{active: isActive}">
      <div class="card-body w-100">
        <div class="btn btn-close position-absolute" @click.prevent="onClose"></div>
        <!--Navigation-->
        <nav class="navbar">
          <h5 class="text-white">Unsere Inhalte:</h5>
          <hr class="w-100">
          <ul class="navbar-nav" ref="sidebar_content">
            <li>
              <button class="btn btn-link p-0" @click.prevent="toTop()">Zurück nach oben</button>
            </li>
            <li v-for="content in contents">
              <a :href="content.ref">{{ content.text }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </aside>
</template>

<style scoped>

</style>