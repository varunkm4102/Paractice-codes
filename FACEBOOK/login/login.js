// Name and Password from the register-form
var Name = document.getElementById("name");
var pw = document.getElementById("pw");

// storing input from register-form
function store() {
  let test = Name.value;
  localStorage.setItem("name", test);
  localStorage.setItem("pw", pw.value);
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {
  // stored data from the register-form
  var storedName = localStorage.getItem("name");
  var storedPw = localStorage.getItem("pw");

  // entered data from the login-form
  var userName = document.getElementById("userName").value;
  var userPw = document.getElementById("userPw").value;

  // check if stored data from register-form is equal to data from login form
  if (!userName || !userPw) {
    alert("Please enter your name and password");
  } else if (userName === storedName && userPw === storedPw) {
    alert("You are logged in.");
  } else {
    alert("Error: Incorrect username or password");
  }
}

let createBtn = document.getElementById("create-f");
let closeBtn = document.getElementById("close-btn");
let signCon = document.getElementById("sign-con");
let mainCon = document.getElementById("main-con");
let logCon = document.getElementById("log-con");

createBtn.addEventListener("click", () => {
  signCon.style.display = "block";
  mainCon.style.backgroundColor = "#777575";
  logCon.style.backgroundColor = "#777575";
});
closeBtn.addEventListener("click", () => {
  signCon.style.display = "none";
  mainCon.style.backgroundColor = "#e0e2e575";
  logCon.style.backgroundColor = "#fff";
});
