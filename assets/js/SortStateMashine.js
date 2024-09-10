export default class SortStateMashine {
    column = 0;
    asc = null;

    changeColumn(column) {
        if (column !== this.column){
            this.resetAsc();
        }
        this.column = column;
    }

    triggerAsc() {
        if (this.asc === null) {
            this.asc = true;
        } else {
            this.asc = !this.asc;
        }
        this.onUpdate();
    }

    resetAsc(){
        this.asc = null;
    }

    onUpdate() {
        document.dispatchEvent(new CustomEvent("SortStateUpdate", { detail: this }));
    }
}