import { PageComponent } from "./components/page/page.js";
import { ImageComponent } from "./components/page/items/image.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent("image title", "https://picsum.photos/200/300");
        image.attachTo(appRoot, "beforeend");
    }
}
new App(document.querySelector(".document"));
