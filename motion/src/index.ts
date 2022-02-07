type content = {
  id: number;
  type: "img" | "vid" | "note" | "task";
  title: string;
  info: string;
};
interface contents {
  nextId: number;
  datas: content[];
  createContent(type: string, title: string, info: string): void;
  renderContent(): void;
  deleteContent(id: number): void;
}

class Icontents implements contents {
  nextId: number = 0;
  datas: content[] = [];
  constructor() {}

  createContent(
    type: "img" | "vid" | "note" | "task",
    title: string,
    info: string
  ): void {
    const tmp: content = {
      id: this.nextId,
      title,
      type,
      info,
    };
    this.datas.push(tmp);
    this.nextId++;
  }

  renderContent(): void {
    const main: HTMLElement = document.getElementById("main") as HTMLElement;
    main.innerHTML = "";
    this.datas.map((data) => {
      const newContent: HTMLElement = document.createElement("div");
      newContent.className = "content_box";
      const xbtn: HTMLElement = document.createElement("button");
      xbtn.className = "close cnt";
      xbtn.innerText = "X";
      xbtn.addEventListener("click", () => {
        this.deleteContent(data.id);
        this.renderContent();
      });
      if (data.type === "img") {
        const img: HTMLElement = document.createElement("img");
        img.setAttribute("src", `${data.info}`);
        const title: HTMLElement = document.createElement("h1");
        title.innerText = data.title;
        title.className = "cotent_title";
        title.style.color = "yellow";
        newContent.append(img, title, xbtn);
      }
      main.append(newContent);
    });
  }

  deleteContent(id: number): void {
    const newDatas = this.datas.filter((data) => {
      return data.id !== id;
    });
    this.datas = newDatas;
  }
}

const Contents = new Icontents();

const makeAppDark = (): void => {
  const app: HTMLElement | null = document.getElementById("app");
  (app as HTMLElement).style.filter = "brightness(30%)";
};
const makeAppBright = (): void => {
  const app: HTMLElement | null = document.getElementById("app");
  (app as HTMLElement).style.filter = "none";
};
const renderModal = (id: string): void => {
  const modals = document.getElementsByClassName("modal");
  for (let i = 0; i < 4; i++) {
    if (modals[i].id === `${id}_modal`) {
      const target: HTMLElement = document.getElementById(
        `${id}_modal`
      ) as HTMLElement;
      target.style.display = "block";
    } else {
      const target: HTMLElement | null = document.getElementById(modals[i].id);
      (target as HTMLElement).style.display = "none";
    }
  }
};
const closeModal = (): void => {
  const modals: HTMLCollectionOf<Element> =
    document.getElementsByClassName("modal");
  for (let j = 0; j < 4; j++) {
    (modals[j] as HTMLElement).style.display = "none";
  }
};

const menu: HTMLCollectionOf<Element> =
  document.getElementsByClassName("menu_btn");
const cls: HTMLCollectionOf<Element> = document.getElementsByClassName("close");
const add: HTMLCollectionOf<Element> = document.getElementsByClassName("add");
for (let i = 0; i < 4; i++) {
  const targetType: content["type"] = menu[i].id as content["type"];
  menu[i].addEventListener("click", (e: Event) => {
    makeAppDark();
    const id: string = (e.target as Element).id;
    renderModal(id);
  });

  cls[i].addEventListener("click", (e: Event) => {
    e.preventDefault();
    makeAppBright();
    closeModal();
  });

  add[i].addEventListener("click", (e: Event) => {
    e.preventDefault();
    const form = document.querySelector(`#${targetType}_modal > form`);
    const inputs = (form as Element).getElementsByTagName("input");
    const title: string = inputs[0].value;
    const info: string = inputs[1].value;
    Contents.createContent(targetType, title, info);
    inputs[0].value = "";
    inputs[1].value = "";
    makeAppBright();
    closeModal();
    Contents.renderContent();
  });
}
