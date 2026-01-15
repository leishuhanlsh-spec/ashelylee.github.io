const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/线条小狗.gif") {
    myImage.setAttribute("src", "images/线条小狗.webp");
  } else {
    myImage.setAttribute("src", "images/线条小狗.gif");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `The puppy welcomes you, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `The puppy welcomes you, ${storedName}`;
}

myButton.onclick = function () {
  setUserName();
};
