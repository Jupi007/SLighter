class Slighter {
    sliderContainer: HTMLElement;
    currentSlide: number;

    constructor(sliderContainer: HTMLElement, interval: number) {
        this.sliderContainer = sliderContainer;
        this.currentSlide = 0;
        this.sliderContainer.children[this.currentSlide].classList.add("current");

        if (this.sliderContainer.children.length > 1) setInterval(() => this.changeSlide(), interval);
    }

    changeSlide(): void {
        this.sliderContainer.children[this.previousSlide].classList.remove("previous");
        this.sliderContainer.children[this.currentSlide].classList.replace("current", "previous");
        this.sliderContainer.children[this.nextSlide].classList.add("current");
        this.currentSlide = this.nextSlide;

    }

    get previousSlide(): number {
        if (this.currentSlide === 0) {
            return this.sliderContainer.children.length - 1;
        }

        return this.currentSlide - 1;
    }

    get nextSlide(): number {
        if (this.currentSlide < this.sliderContainer.children.length - 1) {
            return this.currentSlide + 1;
        }

        return 0;
    }
}
