<script setup lang="js">


const dataUrl = ref("")
const data = reactive([]);
const properties = reactive([]);
const filteredData = reactive([]);
const contentSelection = reactive([]);
const activeCol = ref(null);
const asc = ref(true);
const filterString = ref("");
const loading = ref(false);

const textProperties = computed(()=>{
  return properties.filter((item) => {
    return !item.isNumber;
  });
});

const uniqueValuesForProperty = computed((property) =>{
  let values = [];
  data.value.forEach((entry) => {
    if(values.indexOf(entry[property]) >= 0) {
      values.push(entry[property]);
    }
  });
  return values;
});


watch(filterString, () => filterByString(filterString.value));
watch(dataUrl, () => refreshTable());

onMounted(() => {
  refreshContentSelect();
});

function refreshContentSelect() {
  contentSelection.value = [];
  queryContent().find().then((res) => {
    res.forEach((source) => {
      contentSelection.value.push({
        title: source.title,
        source: source._stem,
      });
    });
    contentSelection.value.sort((a, b) => a.title.localeCompare(b.title));
  });
}

function refreshTable() {
  loading.value = true;
  queryContent(dataUrl.value).findOne().then((res) => {
    data.value = res.body;
    filteredData.value = data.value;
    properties.value = [];
    if (res.body.length > 0) {
      let entry = res.body[0];
      let propertyNames = Object.getOwnPropertyNames(entry);
      propertyNames.forEach((property) => {
        properties.value.push({
          name: property,
          isNumber: !isNaN(parseFloat(entry[property])),
        });
      });
    }

    filterByString(filterString.value);
    loading.value = false;
  });
}

function sortTable(property, isNumber) {
  if (activeCol.value !== property) {
    asc.value = true;
  } else {
    asc.value = !asc.value;
  }

  activeCol.value = property;

  filteredData.value.sort((a, b) => {
    if (asc.value) {
      if (isNumber) {
        return a[property] - b[property]
      } else {
        return a[property].localeCompare(b[property]);
      }
    } else {
      if (isNumber) {
        return b[property] - a[property];
      } else {
        return -1 * (a[property].localeCompare(b[property]));
      }
    }
  });
}

function filterByString(search) {
  filteredData.value = data.value.filter((row) => {
    return Object.values(row).filter((entry) => {
      return entry.toLowerCase().includes(search.toLowerCase());
    }).length > 0;
  });
}
</script>

<template>
  <section class="container" id="co2-table" aria-labelledby="table_headline">
    <h2 id="table_headline">CO₂ Fußabdruck der Länder</h2>
    <span>alle absoluten angaben in Tonnen</span>
    <div class="controls">
      <label>
        <select id="content_select" v-model="dataUrl">
          <option disabled selected value="">Bitte Datenset auswählen</option>
          <option v-for="content in contentSelection.value" :value="content.source">{{ content.title }}</option>
        </select>
        <select v-for="textProperty in textProperties">
          <option disabled selected value="">Bitte auswählen...</option>
          <option v-for="uniqueValue in uniqueValuesForProperty(textProperty)" :value="uniqueValue">{{uniqueValue}}</option>
        </select>
        <input id="search" class="sidebar_content" type="text" placeholder="Suche..." v-model="filterString">
      </label>
    </div>
    <div class="table-responsive" v-if="dataUrl">
      <table class="caption-top table table-striped table-hover">
        <thead class="table-dark">
        <tr>
          <th scope="col">Position</th>
          <th v-for="property in properties.value" scope="col" @click="sortTable(property.name, property.isNumber)">{{ property.name }}</th>
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