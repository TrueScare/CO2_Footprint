import DataHandler from "./assets/js/DataHandler.js";
import TableHandler from "./assets/js/TableHandler.js";

/* make sure everyhting has loaded correctly */
document.addEventListener('DOMContentLoaded', () => {
    let tableHandler = new TableHandler("#main_table");

    let dataHandler = new DataHandler("./assets/data/footprints.csv");
    
    document.addEventListener("DataFoundEvent", (event)=>{
        let data = event.detail

        res = dataHandler.processLines(data)
        console.log(res)

    })
    dataHandler.getData()
});