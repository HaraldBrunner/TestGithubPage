const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/GitHubLogo.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
});

function setUserName() {
    if (!localStorage.getItem("name")) {
        queryUserName();
    } else {
        const storedName = localStorage.getItem("name");
        myHeading.textContent = `Mozilla is cool, ${storedName}`;
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
setUserName();

function queryUserName() {
    let theName = prompt("enter your name,");
    localStorage.setItem("name", theName);
    setUserName();
}

myButton.addEventListener("click", () => {
  queryUserName();
});




// Store a reference to the <h1> in a variable
//const myHeading = document.querySelector("h1");

// Update the text content of the <h1>
//myHeading.textContent = "Hello world!";