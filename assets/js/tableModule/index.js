
import DataFetcher from "./DataFetcher.js";
import TableHandler from "./TableHandler.js";
import DataHandler from "./DataHandler.js";
import SortStateMashine from "./SortStateMashine.js";

document.addEventListener('DOMContentLoaded', () => {
    /* setup after page load */
    let dataFetcher = new DataFetcher("./assets/data/footprints.csv");
    let tableHandler = new TableHandler("#main_table");
    let dataHandler = new DataHandler();
    let sortState = new SortStateMashine();
    let search = document.getElementById('search');

    /* setup event chains */
    document.addEventListener("DataFoundEvent", (event) => {
        let res = dataFetcher.processLines(event.detail);
        dataHandler.setData(res);
    });

    document.addEventListener("ChangeData", (event) => {
        tableHandler.buildTable(event.detail);
    });

    search.addEventListener("input", (event) => {
        dataHandler.filterByString(search.value);
        tableHandler.highlightContent(search.value);
    });

    document.addEventListener("SortStateUpdate",(event) => {
        dataHandler.sortByColumn(event.detail.column, event.detail.asc);
        tableHandler.highlightContent(search.value);
    });

    /* set off the chain by fetching the data */
    dataFetcher.getData();
});
