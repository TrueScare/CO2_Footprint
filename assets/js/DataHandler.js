export default class DataHandler {
    setData(data){
        this.data=data;
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

    filterByString(search){
        return this.data.filter((data) => {
            return false;
            //see if the array inside the column filters a result. if so the length should be greater than 0
            return data.filter(search).length > 0
        })
    }
}