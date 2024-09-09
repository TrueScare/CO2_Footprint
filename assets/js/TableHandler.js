export default class TableHandler {
    /* fields */
    table;

    /**
     * Takes the string and pareses it into a query selector. Sets the objects table to the given output
     * 
     * @param {string} identificator 
     */
    constructor(identificator) {
        console.debug("Trying to initialize TableHandler.")
        let table = document.querySelector(identificator);
        
        if(table){
            this.table = table;
            console.debug("TableHandler initialized.")
        } else {
            throw new Error("TableHandler couldn't be initialized!");
        }
    }

    /* functions */
    appendEntry(options){
        let row = this.table.insertRow(this.table.rows.length);
        options.forEach(option => {
            let cell = row.insertCell(row.cells.length)
            cell.innerHTML = option
        });
        return row
    }
}