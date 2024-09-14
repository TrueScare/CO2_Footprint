<script setup lang="js">

const props = defineProps({
  dataUrl: String,
});

const data = reactive([]);
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
  fetch(props.dataUrl).then((res) => {
    return res.text();
  }).then((res) => {
    data.value = processLines(res);
    filteredData.value = data.value;

    filterByString(filterString.value);
    sortTable(activeCol.value);
    loading.value = false;
  });
}

function processLines(string) {
  let res = [];

  string.split("\n").forEach((row) => {
    if (row !== "") {
      res.push(row.split(";"));
    }
  });

  return res;
}

function sortTable(column) {
  if (activeCol.value !== column) {
    asc.value = true;
  } else {
    asc.value = !asc.value;
  }
  activeCol.value = column;

  switch (column) {
    case 0: {
      if (asc.value) {
        filteredData.value.sort((a, b) => a[column].localeCompare(b[column]));
      } else {
        filteredData.value.sort((a, b) => -1 * (a[column].localeCompare(b[column])));
      }
    }
      break;
    default: {
      if (asc.value) {
        filteredData.value.sort((a, b) => a[column] - b[column]);
      } else {
        filteredData.value.sort((a, b) => b[column] - a[column]);
      }
    }
      break;
  }
}

function filterByString(search) {
  filteredData.value = data.value.filter((row) => {
    //see if the array inside the column filters a result. if so the length should be greater than 0
    return row.filter((entry) => {
      return entry.toLowerCase().includes(search.toLowerCase());
    }).length > 0;
  });
}

function highlightContent(search) {
  let table = document.getElementById(id);
  let tableBody = table.querySelector('tbody');
  let rows = tableBody.rows;
  if (search.length <= 0) {
    return;
  }
  for (let i = 0; i < rows.length; i++) {
    let cells = rows[i].cells;
    for (let j = 1; j < cells.length; j++) {
      let searchIn = cells[j].innerHTML.toLowerCase();
      let position = searchIn.indexOf(search.toLowerCase());
      if (position >= 0) {
        let exchange = cells[j].innerHTML.substring(position, position + search.length);
        cells[j].innerHTML = cells[j].innerHTML.replace(exchange, "<mark>" + exchange + "</mark>");
      }
    }
  }
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
          <th scope="col" @click="sortTable(0)">Land</th>
          <th scope="col" @click="sortTable(1)">1970</th>
          <th scope="col" @click="sortTable(2)">1990</th>
          <th scope="col" @click="sortTable(3)">2005</th>
          <th scope="col" @click="sortTable(4)">2017</th>
          <th scope="col" @click="sortTable(5)">2020</th>
          <th scope="col" @click="sortTable(6)">Pro Einwohner (2022)</th>
          <th scope="col" @click="sortTable(7)">Anteil der Welt in %</th>
          <th scope="col" @click="sortTable(8)">Veränderung (1990 = 100%)</th>
        </tr>
        </thead>
        <tbody>
        <tr v-if="loading">Lädt...</tr>
        <tr v-for="(row,index) in filteredData.value">
          <td>{{ index + 1 }}</td>
          <td v-for="col in row">
            {{ col }}
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped>

</style>