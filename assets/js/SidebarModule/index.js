import SidebarHandler from "./SidebarHandler.js";
import TableOfContentBuilder from "./TableOfContentBuilder.js";

document.addEventListener('DOMContentLoaded', ()=>{
   let sidebarHandler = new SidebarHandler("#navigation");
   let tableOfContentBuilder = new TableOfContentBuilder("#sidebar_content")
});