class activator {
    constructor(container) {
        this.container = container;
        this.activator = container.querySelector(".activator");
        this.answer = container.querySelector(".answer");
        this.icon = container.querySelector(".q-icon");
    }
    init() {
        this.activator.addEventListener("click", () => {
            this.icon.classList.toggle("rotate-180");
            this.answer.classList.toggle("hidden");
        });
    }
}

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
    const instance = new activator(question);
    instance.init();
});