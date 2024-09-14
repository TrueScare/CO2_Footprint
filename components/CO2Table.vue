<script setup lang="js">

</script>

<template>
  <section class="container" id="co2-table" aria-labelledby="table_headline">
    <h2 id="table_headline">CO₂ Fußabdruck der Länder</h2>
    <span>alle absoluten angaben in Tonnen</span>
    <div class="controls">
      <label>
        <input id="search" class="sidebar_content" type="text" placeholder="Suche...">
      </label>
    </div>
    <div class="table-responsive">

      <table id="main_table" class="caption-top table table-striped table-hover">
        <thead class="table-dark">
        <tr>
          <th scope="col">Position</th>
          <th scope="col">Land</th>
          <th scope="col">1970</th>
          <th scope="col">1990</th>
          <th scope="col">2005</th>
          <th scope="col">2017</th>
          <th scope="col">2020</th>
          <th scope="col">Pro Einwohner (2022)</th>
          <th scope="col">Anteil der Welt in %</th>
          <th scope="col">Veränderung (1990 = 100%)</th>
        </tr>
        </thead>
        <tbody>
        <!--will be filled dynamically-->
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped>

</style>