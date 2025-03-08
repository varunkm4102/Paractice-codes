 // Menu functionality
 let close = document.getElementById("Close"); // Ensure ID matches HTML
 let menu = document.getElementById("g-menu");
 let sliderm = document.getElementById("sliderm");

 if (close && menu && sliderm) {
   close.addEventListener("click", () => {
     sliderm.style.zIndex = "1";
     menu.style.zIndex = "1";
   });
   menu.addEventListener("click", () => {
     sliderm.style.zIndex = "-1";
     menu.style.zIndex = "-1";
   });
 } else {
   console.error("One or more menu elements not found.");
 }

 // Details functionality
 let detailClose = document.getElementById("close-detail"); // Ensure ID matches HTML
 let menuDetail = document.querySelectorAll('.all-retail-menu');
 let navDetail = document.getElementById("detail-nav");

 if (detailClose && menuDetail && navDetail) {
   menuDetail[0].addEventListener("click", () => {
     navDetail.style.display = "block";
   });

   detailClose.addEventListener('click', () => {
     navDetail.style.display = "none";
   });
 } else {
   console.error("One or more detail elements not found.");
 }