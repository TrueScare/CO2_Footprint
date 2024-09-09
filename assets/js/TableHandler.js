export default class TableHandler {
    /* fields */
    table;

    /**
     * Takes the string and pareses it into a query selector. Sets the objects table to the given output
     *
     * @param {string} identificator
     */
    constructor(identificator) {
        let table = document.querySelector(identificator);
        if (table) {
            this.table = table;
        } else {
            throw new Error("TableHandler couldn't be initialized!");
        }
    }

    buildTable(data) {
        this.clearTableBody();
        data.forEach((value, index) => {
            this.appendEntry(value,index+1)
        })
    }

    /* functions */
    appendEntry(options, index) {
        console.log()
        let tableBody = this.table.querySelector('tbody');
        let row = tableBody.insertRow(tableBody.rows.length);
        let indexCell = row.insertCell(0);
        indexCell.innerHTML = index;

        options.forEach((option) => {
            let cell = row.insertCell(row.cells.length)
            cell.innerHTML = option
        });
        return row
    }

    clearTableBody() {
        let tbody = this.table.querySelector("tbody");
        if (tbody) {
            this.table.removeChild(tbody);
            this.table.appendChild(document.createElement('tbody'));
        }
    }
}