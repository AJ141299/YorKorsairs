class dropdownActivator {
    constructor(container) {
        this.container = container;
        this.dropdownActivator = container.querySelector(".dropdown-activator");
        this.menu = container.querySelector(".dropdown-menu");
        this.icon = container.querySelector(".dropdown-icon");
    }
    init() {
        this.dropdownActivator.addEventListener("click", () => {
            this.icon.classList.toggle("rotate-180");
            this.menu.classList.toggle("scale-0");
            this.menu.classList.toggle("scale-100");
            this.menu.classList.toggle("-translate-y-5");
        });
    }
}

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
    const instance = new dropdownActivator(dropdown);
    instance.init();
});