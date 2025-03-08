const showColor = document.getElementById("showColor");
const Btn = document.getElementById("btn");
const bgColor = document.getElementById("bgColor");
const copy = document.getElementById("copy");
showColor.innerHTML = "rgb(178, 95, 95)";

Btn.addEventListener("click", () => {
  let numbers1 = Math.floor(Math.random() * 20 * 2 * 5);
  let numbers2 = Math.floor(Math.random() * 19 * 6 * 2);
  let numbers3 = Math.floor(Math.random() * 18 * 5 * 3);

  let color = `rgb(${numbers1}, ${numbers2}, ${numbers3})`;
  console.log(color);   
  showColor.innerHTML = color;
  bgColor.style.backgroundColor = color;
  showColor.style.color = color;
  Btn.style.backgroundColor = color;
  Btn.style.borderColor = color;
});

copy.addEventListener("click", () =>{

})
