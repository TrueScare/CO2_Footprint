import DataFetcher from "./assets/js/DataFetcher.js";
import TableHandler from "./assets/js/TableHandler.js";
import DataHandler from "./assets/js/DataHandler.js";

let dataFetcher = new DataFetcher("./assets/data/footprints.csv");
let tableHandler = new TableHandler("#main_table");
let dataHandler = new DataHandler();

/* setup */
document.addEventListener('DOMContentLoaded', () => {    
    document.addEventListener("DataFoundEvent", (event)=>{
        let data = event.detail;
        let res = dataFetcher.processLines(data);
        dataHandler.setData(res);
        res = dataHandler.sortByColumn(0);
        tableHandler.buildTable(res);
    })
    dataFetcher.getData();

    
    /* sorting events */
    let search = document.getElementById('search');
    search.onchange((event) => {
        let res = dataHandler.filterByString(search.value);
        tableHandler.buildTable(res);
    });
});
