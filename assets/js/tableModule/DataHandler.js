export default class DataHandler {
    setData(data) {
        this.data = data;
        this.filteredData = JSON.parse(JSON.stringify(data));
        this.onUpdate(this.data);
    }

    sortByColumn(column, asc = true) {
        switch (column) {
            case 0: {
                if (asc) {
                    this.filteredData.sort((a, b) => a[column].localeCompare(b[column]));
                } else {
                    this.filteredData.sort((a, b) => -1 * (a[column].localeCompare(b[column])));
                }
            }
                break;
            default: {
                if (asc) {
                    this.filteredData.sort((a, b) => a[column] - b[column]);
                } else {
                    this.filteredData.sort((a, b) => b[column] - a[column]);
                }
            }
                break;

        }
        this.onUpdate(this.filteredData);
    }

    filterByString(search) {
        let filteredData = this.data.filter((row) => {
            //see if the array inside the column filters a result. if so the length should be greater than 0
            return row.filter((entry) => {
                return entry.toLowerCase().includes(search.toLowerCase());
            }).length > 0;
        });
        
        this.filteredData = filteredData;
        this.onUpdate(filteredData);
    }

    onUpdate(data) {
        document.dispatchEvent(new CustomEvent("ChangeData", { detail: data }));
    }
}