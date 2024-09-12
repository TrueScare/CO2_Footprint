export default class TableOfContentBuilder {
    constructor(selector) {
        this.sidebarContent = document.querySelector(selector);
        if (!this.sidebarContent) {
            throw new Error("Sidebar selector missing");
        }

        let sections = document.querySelectorAll("section");

        sections.forEach((section) => {
            // this should be an id to another element!
            let labelledby = section.getAttribute("aria-labelledby");
            let labelElement = section.querySelector("#"+labelledby);
            let textContent = labelElement.textContent
            let listElement = document.createElement("li");
            let anchorElement = document.createElement("a");
            anchorElement.setAttribute("href", "#"+section.getAttribute("id"));
            anchorElement.textContent = textContent;
            listElement.appendChild(anchorElement);

            this.sidebarContent.appendChild(listElement);
        });
    }
}