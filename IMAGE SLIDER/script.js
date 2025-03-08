let incre = 0; // Initialize the increment variable outside of the event listener

const Next = document.querySelector(".next");
const Pre = document.querySelector(".pre");

Next.addEventListener("click", () => {
    incre += 51; // Increment the value by 51 pixels
    const Img = document.getElementsByTagName("img");

    for (let i = 0; i < Img.length; i++) {
        Img[i].style.transform = `translateX(-${incre}rem)`;
    }
});

Pre.addEventListener("click", () => {
    incre -= 51; // Increment the value by 51 pixels
    const Img = document.getElementsByTagName("img");

    for (let i = 0; i < Img.length; i++) {
        Img[i].style.transform = `translateX(${incre}rem)`;
    }
});