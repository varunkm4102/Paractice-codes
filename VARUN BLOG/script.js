// let readMore1 = document.getElementById("readMore1");
// let hideElement1 = document.getElementById("blogHide1");
// let showElement1 = document.getElementById("icon-container1");
// let blogContainer = document.getElementsByClassName("blog-container-overlay");
// let hideColor = document.getElementsByClassName("Hide-color");
// let navBar = document.getElementsByClassName("navigation-container"); 

// readMore1.addEventListener("click", () => {
//   hideElement1.style.display = "block";
//   hideElement1.style.boxShadow = "0px 10px 600px #ffff ";
//   hideColor[0].style.overflow = "hidden";
//   navBar[0].style.display = "none";
// });

// showElement1.addEventListener("click", () => {
//   hideElement1.style.display = "none";
//   hideColor[0].style.overflow = "visible";
//   navBar[0].style.display = "flex";
// });

// let readMore2 = document.getElementById("readMore2");
// let hideElement2 = document.getElementById("blogHide2");
// let showElement2 = document.getElementById("icon-container2");

// readMore2.addEventListener("click", () => {
//   hideElement2.style.display = "block";
//   hideElement2.style.boxShadow = "0px 10px 600px #ffff ";
//   hideColor[0].style.overflow = "hidden";
//   navBar[0].style.display = "none";
// });

// showElement1.addEventListener("click", () => {
//   hideElement2.style.display = "none";
//   hideColor[0].style.overflow = "visible";
//   navBar[0].style.display = "flex";
// });


let showMore = document.getElementsByClassName("blog-content2");
showMore.addEventListener("click", ()=>{
  showMore.style.height = "none";
})
