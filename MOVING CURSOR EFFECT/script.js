const Canvas = document.createElement("canvas");
const ctx = Canvas.getContext("2d");
    console.log(ctx);
const prentElement = document.getElementById("body");
const append = prentElement.appendChild(Canvas);
Canvas.height = "420";
Canvas.width = "700";
Canvas.style.border = "2px solid black";
Canvas.style.marginLeft = "20rem";
Canvas.style.backgroundColor = "skyblue";

Canvas.addEventListener("mousemove", () =>{
    
})

