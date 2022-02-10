export class PageComponent {
    constructor() {
        this.attachTo = (parent, position = "afterbegin") => {
            parent.insertAdjacentElement(position, this.element);
        };
        this.element = document.createElement("ul");
        this.element.setAttribute("class", "page");
        this.element.textContent = "this is page component";
    }
}
