function showOptions() {
  document.querySelector(".profile-container").style.display = "block";
}

function hideOption() {
  document.querySelector(".profile-container").style.display = "none";
}

function showElement() {
  document.querySelector(".more-hover-element").style.display = "block";
  let edge = document.querySelector(".zZ3yfL._2uV9Et"); // Updated selector
  edge.style.transform = "rotate(450deg)";
}

function hideElement() {
  document.querySelector(".more-hover-element").style.display = "none";
  let edge = document.querySelector(".zZ3yfL._2uV9Et"); // Updated selector
  edge.style.transform = "rotate(270deg)";
}

// fasion hover worrk code

const fasion = document.getElementById("fasionpro");
const hoverShow = document.getElementById("hovershowpro");

fasion.addEventListener("mouseover", () => {
  hoverShow.style.display = "block";
  hoverShow.addEventListener("mouseover", () => {
    hoverShow.style.display = "block";
  });
});

fasion.addEventListener("mouseout", () => {
  hoverShow.style.display = "none";
  hoverShow.addEventListener("mouseout", () => {
    hoverShow.style.display = "none";
  });
});

// fasion means top wear styliing code
const mensTop = document.querySelector(".mens-top");
const mensTopProduct = document.getElementById("men-top-wear");

mensTopProduct.addEventListener("mouseover", () => {
  mensTop.style.display = "block";
  mensTop.addEventListener("mouseover", () => {
    mensTop.style.display = "block";
  });
  mensTopProduct.addEventListener("mouseout", () => {
    mensTop.style.display = "none";
  });
});

// fasion mens bottom wear styling code
const mensBottom = document.getElementById("men-bottom-wear");
const menBottomProduct = document.querySelector(".mens-bottom");

mensBottom.addEventListener("mouseover", () => {
  menBottomProduct.style.display = "block";
  menBottomProduct.addEventListener("mouseover", () => {
    menBottomProduct.style.display = "block";
  });
  menBottomProduct.addEventListener("mouseout", () => {
    menBottomProduct.style.display = "none";
  });
  mensBottom.addEventListener("mouseout", () =>{
    menBottomProduct.style.display = "none";
  })
});

// fasion Woman ethnic code 
const womanEthnic = document.getElementById("women-ethnic-wear");
const womanEthnicProduct = document.querySelector(".women-ethnic");

womanEthnic.addEventListener("mouseover", () => {
  womanEthnicProduct.style.display = "block";
  womanEthnicProduct.addEventListener("mouseover", () => {
    womanEthnicProduct.style.display = "block";
  });
  womanEthnicProduct.addEventListener("mouseout", () => {
    womanEthnicProduct.style.display = "none";
  });
});

// fasion woman western code
const womenWestern =  document.getElementById("women-western");
const womenWesternProduct =document.querySelector(".women-western");

womenWestern.addEventListener("mouseover", () => {
  womenWesternProduct.style.display = "block";
  womenWesternProduct.addEventListener("mouseover", () => {
    womenWesternProduct.style.display = "block";
  });
  womenWesternProduct.addEventListener("mouseout", () => {
    womenWesternProduct.style.display = "none";
  });
});

// fasion men footwear code here

const MenFootwear = document.getElementById("men-footwear");
const MenFootwearProduct = document.querySelector(".men-Footwear");

MenFootwear.addEventListener("mouseover", () => {
  MenFootwearProduct.style.display = "block";
  MenFootwearProduct.addEventListener("mouseover", () => {
    MenFootwearProduct.style.display = "block";
  });
  MenFootwearProduct.addEventListener("mouseout", () => {
    MenFootwearProduct.style.display = "none";
  });
});

// fasion women footwear code here

const womenFootwear = document.getElementById("women-footwear");
const wowenFootwearProduct = document.querySelector(".women-Footwear");

womenFootwear.addEventListener("mouseover", () => {
  wowenFootwearProduct.style.display = "block";
  wowenFootwearProduct.addEventListener("mouseover", () => {
    wowenFootwearProduct.style.display = "block";
  });
  wowenFootwearProduct.addEventListener("mouseout", () => {
    wowenFootwearProduct.style.display = "none";
  });
});

// fasion accesories code here
const accesories = document.getElementById("watch");
const accesoriesProduct = document.querySelector(".accessories");

accesories.addEventListener("mouseover", () => {
  accesoriesProduct.style.display = "block";
  accesoriesProduct.addEventListener("mouseover", () => {
    accesoriesProduct.style.display = "block";
  });
  accesoriesProduct.addEventListener("mouseout", () => {
    accesoriesProduct.style.display = "none";
  });
});

// fasion bags and laggage code here
const Bag = document.getElementById("bags");
const BagProduct = document.querySelector(".bag-laggages");

Bag.addEventListener("mouseover", () => {
  BagProduct.style.display = "block";
  BagProduct.addEventListener("mouseover", () => {
    BagProduct.style.display = "block";
  });
  BagProduct.addEventListener("mouseout", () => {
    BagProduct.style.display = "none";
  });
});

// fasion kid coode here
const Kid = document.getElementById("kids");
const kidProduct = document.querySelector(".kid");

Kid.addEventListener("mouseover", () => {
  kidProduct.style.display = "block";
  kidProduct.addEventListener("mouseover", () => {
    kidProduct.style.display = "block";
  });
  kidProduct.addEventListener("mouseout", () => {
    kidProduct.style.display = "none";
  });
});

// fasion essetials coode here
const essential = document.getElementById("essentials");
const essentialProduct  = document.querySelector(".essentials");

essential.addEventListener("mouseover", () => {
  essentialProduct.style.display = "block";
  essentialProduct.addEventListener("mouseover", () => {
    essentialProduct.style.display = "block";
  });
  essentialProduct.addEventListener("mouseout", () => {
    essentialProduct.style.display = "none";
  });
});

// fasion winter code here
const winter = document.getElementById("winter");
const winterProduct  = document.querySelector(".winter");

essential.addEventListener("mouseover", () => {
  essentialProduct.style.display = "block";
  essentialProduct.addEventListener("mouseover", () => {
    essentialProduct.style.display = "block";
  });
  essentialProduct.addEventListener("mouseout", () => {
    essentialProduct.style.display = "none";
  });
});