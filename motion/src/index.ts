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
  });
}
