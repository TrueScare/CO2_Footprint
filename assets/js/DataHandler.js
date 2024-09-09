export default class DataHandler {

    constructor(data) {
        this.data = data;
    }

    sortByColumn(column, asc = true) {
        switch(column) {
            case 0: {
                if (asc) {
                    this.data.sort((a, b) => a[column].localeCompare(b[column]));
                } else {
                    this.data.sort((a, b) => -1 * (a[column].localeCompare(b[column])));
                }
            }
                break;
            default: {
                if (asc) {
                    this.data.sort((a, b) => a[column] - b[column]);
                } else {
                    this.data.sort((a, b) => a[column] + b[column]);
                }
            }
                break;

        }
        return this.data;
    }
}