<script setup lang="js">

const dataUrl = ref("")
const data = ref([]);
const properties = ref([]);
const filteredData = ref([]);
const filterProperties = ref({});
const contentSelection = ref([]);
const activeCol = ref(null);
const asc = ref(true);
const filterString = ref("");
const loading = ref(false);

watch(filterString, () => filter(filterString.value));
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

    filter(filterString.value);
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

function filter(search = null) {
  filteredData.value = data.value.filter((row) => {
    let hasSearch = Object.values(row).filter((entry) => {
      return search !== null ? entry.toLowerCase().includes(search.toLowerCase()) : true;
    }).length > 0;

    let hasProperty = true;
    let properties = Object.getOwnPropertyNames(filterProperties.value);

    if (properties.length > 0) {
      properties.forEach((property) => {
        if (filterProperties.value[property] !== "" && row[property] !== filterProperties.value[property]) {
          hasProperty = false;
        }
      });
    }
    return hasSearch && hasProperty;
  });
}

function textProperties() {
  if (properties && properties.value && properties.value.length >= 0) {
    return properties.value.filter((item) => {
      return !item.isNumber;
    });
  }
}

function uniqueValuesForProperty(property) {
  let values = [];
  data.value.forEach((entry) => {
    if (values.indexOf(entry[property]) < 0) {
      values.push(entry[property]);
    }
  });
  return values;
}

function resetFilter() {
  filterProperties.value = {};
}
</script>

<template>

  <span class="text-muted">alle absoluten angaben in Tonnen</span>
  <div class="controls">
    <div class="input-group">
      <label>
        Datenset
        <select id="content_select"
                v-model="dataUrl"
                class="form-control" @change="resetFilter()">
          <option disabled selected value="">Bitte Datenset auswählen</option>
          <option v-for="content in contentSelection" :value="content.source">{{ content.title }}</option>
        </select>
      </label>

      <label v-if="data.length > 0">
        Inhaltssuche
        <input id="search"
               class="form-control"
               type="text"
               placeholder="Suche..."
               v-model="filterString">
      </label>
    </div>
    <div class="input-group">
      <label v-for="textProperty in textProperties()">
        {{ textProperty.name }}
        <select v-model="filterProperties[textProperty.name]"
                @change="filter()"
                class="form-control">
          <option selected value="">Bitte auswählen...</option>
          <option
              v-for="uniqueValue in uniqueValuesForProperty(textProperty.name)"
              :value="uniqueValue"
              class="form-control">
            {{ uniqueValue }}
          </option>
        </select>
      </label>
    </div>
  </div>
  <div class="table-responsive" v-if="dataUrl">
    <table class="caption-top table table-striped table-hover">
      <thead class="table-dark">
      <tr>
        <th scope="col">Position</th>
        <th v-for="property in properties" scope="col" @click="sortTable(property.name, property.isNumber)">
          {{ property.name }}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-if="loading"></tr>
      <tr v-if="!loading && filteredData.length <= 0">Leider keine Ergebnisse vorhanden.</tr>
      <tr v-for="(row,index) in filteredData">
        <td>{{ index + 1 }}</td>
        <td v-for="col in row">
          <MarkedText :content="col" :filter-string="filterString"/>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.controls {
  margin: 30px 0
}
</style>