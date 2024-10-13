<script setup lang="js">
/* region fields */
const dataUrl = ref("")
const data = ref([]);
const properties = ref([]);
const filteredData = ref([]);
const filterProperties = ref({});
const contentSelection = ref([]);
const activeCol = ref({
  element: null,
  property: null
});
const asc = ref(true);
const filterString = ref("");
const loading = ref(false);
const textProperties = computed(() => {
  if (properties && properties.value && properties.value.length >= 0) {
    return properties.value.filter((item) => {
      return !item.isNumber;
    });
  }
});
/* endregion fields */
/* region reactive */
watch(filterString, () => filter(filterString.value));
watch(dataUrl, () => refreshTable());

onMounted(() => {
  refreshContentSelect();
});
/* endregion reactive */
/* region functions */
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
  if (dataUrl.value) {
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
  } else {
    data.value = [];
  }
}

function sortTable(property, isNumber, event) {
  if (activeCol.value.property !== property) {
    asc.value = true;
  } else {
    asc.value = !asc.value;
  }

  if (activeCol.value.element) {
    activeCol.value.element.classList.remove("active");
    activeCol.value.element.classList.remove("sort-desc");
    activeCol.value.element.classList.remove("sort-asc");
  }

  activeCol.value = {
    element: event.target,
    property: property
  };

  activeCol.value.element.classList.add("active");
  if (asc.value) {
    activeCol.value.element.classList.remove("sort-desc");
    activeCol.value.element.classList.add("sort-asc");
  } else {
    activeCol.value.element.classList.add("sort-desc");
    activeCol.value.element.classList.remove("sort-asc");
  }

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
        if (filterProperties.value[property] && row[property] !== filterProperties.value[property]) {
          hasProperty = false;
        }
      });
    }
    return hasSearch && hasProperty;
  });
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

/* endregion */
</script>

<template>

  <span class="text-muted">alle absoluten angaben in Tonnen</span>
  <div class="controls mt-5 bg-primary-subtle p-3">
    <div class="input-group">
      <label>
        Datenset
        <select id="content_select"
                v-model="dataUrl"
                class="form-control" @change="resetFilter()">
          <option selected value="">Bitte Datenset auswählen</option>
          <option v-for="content in contentSelection"
                  :value="content.source">
            {{ content.title }}
          </option>
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
    <div class="input-group"
         v-if="data.length > 0"
    >
      <label v-for="textProperty in textProperties">
        {{ textProperty.name }}
        <select v-model="filterProperties[textProperty.name]"
                @change="filter()"
                class="form-control">
          <option selected :value="filterProperties['']">
            Bitte auswählen...
          </option>
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
        <th v-for="property in properties"
            scope="col"
            @click="sortTable(property.name, property.isNumber, $event)"
        >
          {{ property.name }}
          <div class="indicators d-flex flex-wrap">
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="16"
                 height="16"
                 fill="currentColor"
                 class="bi bi-triangle-fill arr-up"
                 viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                    d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767z"/>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg"
                 width="16"
                 height="16"
                 fill="currentColor"
                 class="bi bi-triangle-fill arr-down"
                 viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                    d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767z"/>
            </svg>
          </div>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-if="loading">Ergebnisse werden geladen...</tr>
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
th {
  .indicators {
    pointer-events: none;
  }

  &.sort-asc {
    .arr-down {
      display: none;
    }
  }

  &.sort-desc {
    .arr-up {
      display: none;
    }
  }

  .arr-down {
    transform: rotate(180deg);
  }
}
</style>