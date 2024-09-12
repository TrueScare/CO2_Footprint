export default class SidebarHandler {
    sidebar;

    constructor(sidebarSelector) {
        this.sidebar = document.querySelector(sidebarSelector);
        if(!this.sidebar) {
            throw new Error("Sidebar selector missing");
        }

        this.registerEvents();
    }

    getSidebarContent(){
        return this.sidebar.querySelector(".sidebar-content");
    }

    openSidebar(){
        this.getSidebarContent().classList.add("active");
    }

    closeSidebar(){
        this.getSidebarContent().classList.remove("active");
    }

    registerEvents() {
        let openButton = this.sidebar.querySelector(".btn-open");
        openButton.addEventListener("click", function() {
            this.openSidebar();
        }.bind(this));

        let closeButton = this.sidebar.querySelector(".btn-close");
        closeButton.addEventListener("click", function() {
            this.closeSidebar();
        }.bind(this));
    }
}