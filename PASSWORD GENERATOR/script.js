const display = document.querySelector(".gen-password");
const generateBtn = document.querySelector(".gen-btn");
const changeBg = document.querySelector(".pass-container");
const copy = document.querySelector(".copy-btn");

const captal = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const small = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const special = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+",".",",","/"];
const num = ["1","2","3","4","5","6","7","8","9","0"];

generateBtn.addEventListener("click", () => {
    let password = "";

    // Add 1 random uppercase letter
    password += captal[Math.floor(Math.random() * captal.length)];

    // Add 4 random lowercase letters
    for (let i = 0; i < 4; i++) {
        password += small[Math.floor(Math.random() * small.length)];
    }

    // Add 1 random special character
    password += special[Math.floor(Math.random() * special.length)];

    // Add 5 random digits
    for (let i = 0; i < 5; i++) {
        password += num[Math.floor(Math.random() * num.length)];
    }

    // Generate random colors
    let color1 = "";
    let color2 = "";
    let color3 = "";

    for (let i = 0; i < 3; i++) {
        color1 += num[Math.floor(Math.random() * num.length)];
    }

    for (let i = 0; i < 3; i++) {
        color2 += num[Math.floor(Math.random() * num.length)];
    }

    for (let i = 0; i < 3; i++) {
        color3 += num[Math.floor(Math.random() * num.length)];
    }

    // Concatenate colors
    const randomColor = `rgb(${color1},${color2},${color3})`;

    // Update the HTML and background color
    display.innerHTML = password;
    changeBg.style.backgroundColor = randomColor;
    console.log(randomColor);
});

copy.addEventListener("click", () =>{
    document.execCommand("copy");
})
