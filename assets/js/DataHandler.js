export default class DataHandler {   
    /* fields */
    url;
    constructor(url) {
        this.url = url
    }

    /* function */
    getData() {
        fetch(this.url).then((res)=> {
            return res.text()
        }).then(function(data){
            document.dispatchEvent(new CustomEvent("DataFoundEvent",{detail: data}))
        });
    }

    processLines(string){
        let res = [[]];
        
        string.split('\n').forEach((data) => {
            res.push(data.split(";"))
        });
        return res;
    }
}