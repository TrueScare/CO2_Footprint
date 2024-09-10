import SortStateMashine from "./SortStateMashine.js";

export default class TableHandler {
    /* fields */
    table;
    sortStateMashine = new SortStateMashine();
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

        table.querySelectorAll('th').forEach((headline, index) => {
            // skip the first column as it is generated dynamically on each refresh
            if (index - 1 >= 0) {
                headline.addEventListener('click', (event) => {
                    this.sortStateMashine.changeColumn(index - 1);
                    this.sortStateMashine.triggerAsc();
                });
            }
        });
    }

    buildTable(data) {
        this.clearTableBody();
        data.forEach((value, index) => {
            this.appendEntry(value, index + 1);
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
            let cell = row.insertCell(row.cells.length);
            cell.innerHTML = option;
        });
        return row;
    }

    clearTableBody() {
        let tbody = this.table.querySelector("tbody");
        if (tbody) {
            this.table.removeChild(tbody);
            this.table.appendChild(document.createElement('tbody'));
        }
    }

    highlightContent(search) {
        let tableBody = this.table.querySelector('tbody');
        let rows = tableBody.rows;

        for (let i = 0; i < rows.length; i++) {
            let cells = rows[i].cells;
            for (let j = 1; j < cells.length; j++) {
                let searchIn = cells[j].innerHTML.toLowerCase();
                let position = searchIn.indexOf(search.toLowerCase());
                console.log(position);
                if (position >= 0) {
                    let exchange = cells[j].innerHTML.substring(position, position+search.length);
                    console.log(exchange, position, search.length);
                    cells[j].innerHTML = cells[j].innerHTML.replace(exchange, "<mark>" + exchange + "</mark>");
                }
            }
        }
    }
}