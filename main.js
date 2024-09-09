import DataFetcher from "./assets/js/DataFetcher.js";
import TableHandler from "./assets/js/TableHandler.js";
import DataHandler from "./assets/js/DataHandler.js";

/* make sure everyhting has loaded correctly */
document.addEventListener('DOMContentLoaded', () => {
    let tableHandler = new TableHandler("#main_table");

    let dataFetcher = new DataFetcher("./assets/data/footprints.csv");
    
    document.addEventListener("DataFoundEvent", (event)=>{
        let data = event.detail;
        let res = dataFetcher.processLines(data);
        let dataHandler = new DataHandler(res)
        tableHandler.buildTable(res);
        res = dataHandler.sortByColumn(1, true)
        tableHandler.buildTable(res)
    })
    dataFetcher.getData();
});