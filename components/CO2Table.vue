<script setup lang="js">

const props = defineProps({
  dataUrl: String,
});

const data = reactive([]);
const properties = reactive([]);
const filteredData = reactive([]);
const activeCol = ref(null);
const asc = ref(true);
const filterString = ref("");
const id = useId();
const loading = ref(false);

watch(filterString, () => filterByString(filterString.value));

onMounted(() => {
  refresh();
});

function refresh() {
  loading.value = true;
  queryContent('countries').findOne().then((res) => {
    data.value = res.body;
    filteredData.value = data.value;
    if (res.body.length > 0) {
      let entry = res.body[0];
      properties.value = Object.getOwnPropertyNames(entry);
    }

    // filterByString(filterString.value);
    loading.value = false;
  });
}

function sortTable(property) {
  if (activeCol.value !== property) {
    asc.value = true;
  } else {
    asc.value = !asc.value;
  }

  activeCol.value = property;

  filteredData.value.sort((a, b) => {
    if (asc.value) {
      if (!isNaN(parseFloat(a[property]))
          && !isNaN(parseFloat(b[property]))
      ) {
        return a[property] - b[property]
      } else {
        return a[property].localeCompare(b[property]);
      }
    } else {
      if (!isNaN(parseFloat(a[property]))
          && !isNaN(parseFloat(b[property]))
      ) {
        return b[property] - a[property];
      } else {
        return -1 * (a[property].localeCompare(b[property]));
      }
    }
  });
}

function filterByString(search) {
  filteredData.value = data.value.filter((row)=>{
      return Object.values(row).filter((entry)=>{
        return entry.toLowerCase().includes(search.toLowerCase());
      }). length > 0;
  });
}


</script>

<template>
  <section class="container" id="co2-table" aria-labelledby="table_headline">
    <h2 id="table_headline">CO₂ Fußabdruck der Länder</h2>
    <span>alle absoluten angaben in Tonnen</span>
    <div class="controls">
      <label>
        <input id="search" class="sidebar_content" type="text" placeholder="Suche..." v-model="filterString">
      </label>
    </div>
    <div class="table-responsive">
      <table class="caption-top table table-striped table-hover" :id="id">
        <thead class="table-dark">
        <tr>
          <th scope="col">Position</th>
          <th v-for="property in properties.value" scope="col" @click="sortTable(property)">{{ property }}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-if="loading">Lädt...</tr>
        <tr v-for="(row,index) in filteredData.value">
          <td>{{ index + 1 }}</td>
          <td v-for="col in row">
            <MarkedText :content="col" :filter-string="filterString"/>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped>

</style>