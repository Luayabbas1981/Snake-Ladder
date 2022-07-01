const main = document.createElement("main");
document.body.appendChild(main);
const sectionOne = document.createElement("section");
sectionOne.classList.add("sectionOne");
const sectionTwo = document.createElement("section");
sectionTwo.classList.add("sectionTwo");
main.append(sectionOne, sectionTwo);
const clickButton = document.createElement("button");
const diceImage = document.createElement("img");
clickButton.classList.add("clickbutton");
clickButton.textContent = "Click to thrwo the dice";
const dice = document.createElement("div");
dice.classList.add("dice");
const firstPlayerInfo = document.createElement("div");
firstPlayerInfo.classList.add("firstPlayerInfo");
const secondPlayerInfo = document.createElement("div");
secondPlayerInfo.classList.add("secondPlayerInfo");
const dice2 = document.createElement("div");
dice2.classList.add("dice");
const diceImage2 = document.createElement("img");
const tryAgain = document.createElement("button");
tryAgain.classList.add("tryagain");
tryAgain.textContent = "Try again";
const gameOver = document.createElement("div")
gameOver.classList.add("gameover")


sectionOne.append(
  clickButton,
  dice,
  firstPlayerInfo,
  dice2,
  secondPlayerInfo,
  tryAgain,
  gameOver
);
const arrwos = document.createElement("div");
arrwos.setAttribute("id", "arrows");
sectionTwo.appendChild(arrwos);
function circlesCreator() {
  for (i = 1; i <= 58; i++) {
    const circle = document.createElement("div");
    circle.classList.add("circle", `circle${i}`);
    circle.textContent = `${i}`;
    sectionTwo.appendChild(circle);
  }
}
circlesCreator();

function laddersCreator() {
  for (i = 0; i < 7; i++) {
    const ladder = document.createElement("div");
    ladder.classList.add("ladder", `ladder${i + 1}`);
    ladder.innerHTML = `🪜`;
    sectionTwo.appendChild(ladder);
  }
}
laddersCreator();

function stonesCreator() {
  for (i = 0; i < 2; i++) {
    const stone = document.createElement("div");
    stone.classList.add(`circle${0}`);
    stone.setAttribute("id", `stone${i + 1}`);
    stone.setAttribute("data-num", 0);
    sectionTwo.appendChild(stone);
  }
}
stonesCreator();

function getRandomNum() {
  let randomNum = Math.floor(Math.random() * 6) + 1;
  return randomNum;
}
function arrowsCreator() {
  for (i = 1; i <= 22; i++) {
    const arrow = document.createElement("div");

    arrow.classList.add("arrow", `arrow${i}`);
    arrow.innerHTML = `<i class="fa-solid fa-angles-right "></i> <i class="fa-solid fa-angles-right "></i>`;
    arrwos.appendChild(arrow);
  }
}
arrowsCreator();



let newPosition1 = 0;

function firstPlayer(callback) {
  
  clickButton.addEventListener("click", function () {
  
    const randomNum = getRandomNum();

    sectionTwo.children[66].classList.replace(
      `circle${newPosition1}`,
      `circle${randomNum + newPosition1}`
    );
    newPosition1 += randomNum;
    let oldPosition = newPosition1 - randomNum;
    firstPlayerInfo.innerHTML = `<span class="span1">You</span> Old Position <span class="span4">${oldPosition}</span> <i class="fa-solid fa-angles-right fa-fade"></i> New Position <span class="span5">${newPosition1}</span> `;
  
    if (newPosition1 == 21 && oldPosition > 2) {
      sectionTwo.children[66].classList.replace(`circle${21}`, `circle${2}`);
     
      newPosition1 = 2;
    }
    if (newPosition1 == 2 && oldPosition < 2) {
      sectionTwo.children[66].classList.replace(`circle${2}`, `circle${21}`);
      newPosition1 = 21;
    }
    if (newPosition1 == 9 && oldPosition < 9) {
      sectionTwo.children[66].classList.replace(`circle${9}`, `circle${15}`);
      newPosition1 = 15;
    }
    if (newPosition1 == 15 && oldPosition > 9) {
      sectionTwo.children[66].classList.replace(`circle${15}`, `circle${9}`);
      newPosition1 = 9;
    }
    if (newPosition1 == 12 && oldPosition < 12) {
      sectionTwo.children[66].classList.replace(`circle${12}`, `circle${34}`);
      newPosition1 = 34;
    }
    if (newPosition1 == 34 && oldPosition > 12) {
      sectionTwo.children[66].classList.replace(`circle${34}`, `circle${12}`);
      newPosition1 = 12;
    }
    if (newPosition1 == 17 && oldPosition < 17) {
      sectionTwo.children[66].classList.replace(`circle${17}`, `circle${28}`);
      newPosition1 = 28;
    }
    if (newPosition1 == 28 && oldPosition > 17) {
      sectionTwo.children[66].classList.replace(`circle${28}`, `circle${17}`);
      newPosition1 = 17;
    }
    if (newPosition1 == 25 && oldPosition < 25) {
      sectionTwo.children[66].classList.replace(`circle${25}`, `circle${43}`);
      newPosition1 = 43;
    }
    if (newPosition1 == 43 && oldPosition > 25) {
      sectionTwo.children[66].classList.replace(`circle${43}`, `circle${25}`);
      newPosition1 = 25;
    }
    if (newPosition1 == 23 && oldPosition < 23) {
      sectionTwo.children[66].classList.replace(`circle${23}`, `circle${45}`);
      newPosition1 = 45;
    }
    if (newPosition1 == 45 && oldPosition > 23) {
      sectionTwo.children[66].classList.replace(`circle${45}`, `circle${23}`);
      newPosition1 = 23;
    }
    if (newPosition1 == 35 && oldPosition < 35) {
      sectionTwo.children[66].classList.replace(`circle${35}`, `circle${56}`);
      newPosition1 = 56;
    }
    if (newPosition1 == 56 && oldPosition > 35) {
      sectionTwo.children[66].classList.replace(`circle${56}`, `circle${35}`);
      newPosition1 = 35;
    }
    if (oldPosition == 53 && randomNum == 6) {
      sectionTwo.children[66].className = "";
      sectionTwo.children[66].classList.add(`circle${53}`);
      newPosition1 = 53;
    }
    if (oldPosition == 54 && randomNum >= 5) {
      sectionTwo.children[66].className = "";
      sectionTwo.children[66].classList.add(`circle${54}`);
      newPosition1 = 54;
    }
    if (oldPosition == 55 && randomNum >= 4) {
      sectionTwo.children[66].className = "";
      sectionTwo.children[66].classList.add(`circle${55}`);
      newPosition1 = 55;
    }
    if (oldPosition == 56 && randomNum >= 3) {
      sectionTwo.children[66].className = "";
      sectionTwo.children[66].classList.add(`circle${56}`);
      newPosition1 = 56;
    }
    if (oldPosition == 57 && randomNum >= 2) {
      sectionTwo.children[66].className = "";
      sectionTwo.children[66].classList.add(`circle${57}`);
      newPosition1 = 57;
    }
    if (  (sectionTwo.children[66].classList.contains(`circle${58}`))){
      clickButton.style.display="none"
      gameOver.textContent="Game over, Great you won"
      newPosition1=59
     }
    const src = `./images/${randomNum}.png`;
    diceImage.setAttribute("src", src);
    dice.innerHTML = "";
    dice.appendChild(diceImage);

    callback();
    
   
  });
}
firstPlayer(secondPlayer); 

let newPosition2 = 0;

function secondPlayer() {
 
    clickButton.innerHTML = `<span class="span3"> Wait... </span>`;
 
  const randomNum = getRandomNum();
  setTimeout(() => {
    sectionTwo.children[67].classList.replace(
      `circle${newPosition2}`,
      `circle${randomNum + newPosition2}`
    );
   
    newPosition2 += randomNum;
    let oldPosition = newPosition2 - randomNum;
    clickButton.textContent = "Click to thrwo the dice";
    secondPlayerInfo.innerHTML = `<span class="span2">pl.2</span> Old Position <span class="span4">${oldPosition}</span>  <i class="fa-solid fa-angles-right fa-fade"></i> New Position <span class="span5">${newPosition2}</span> `;
    if (newPosition2 == 21 && oldPosition > 2) {
      sectionTwo.children[67].classList.replace(`circle${21}`, `circle${2}`);
      newPosition2 = 2;
    }
    if (newPosition2 == 2 && oldPosition < 2) {
      sectionTwo.children[67].classList.replace(`circle${2}`, `circle${21}`);
      newPosition2 = 21;
    }
    if (newPosition2 == 9 && oldPosition < 9) {
      sectionTwo.children[67].classList.replace(`circle${9}`, `circle${15}`);
      newPosition2 = 15;
    }
    if (newPosition2 == 15 && oldPosition > 9) {
      sectionTwo.children[67].classList.replace(`circle${15}`, `circle${9}`);
      newPosition2 = 9;
    }
    if (newPosition2 == 12 && oldPosition < 12) {
      sectionTwo.children[67].classList.replace(`circle${12}`, `circle${34}`);
      newPosition2 = 34;
    }
    if (newPosition2 == 34 && oldPosition > 12) {
      sectionTwo.children[67].classList.replace(`circle${34}`, `circle${12}`);
      newPosition2 = 12;
    }
    if (newPosition2 == 17 && oldPosition < 17) {
      sectionTwo.children[67].classList.replace(`circle${17}`, `circle${28}`);
      newPosition2 = 28;
    }
    if (newPosition2 == 28 && oldPosition > 17) {
      sectionTwo.children[67].classList.replace(`circle${28}`, `circle${17}`);
      newPosition2 = 17;
    }
    if (newPosition2 == 25 && oldPosition < 25) {
      sectionTwo.children[67].classList.replace(`circle${25}`, `circle${43}`);
      newPosition2 = 43;
    }
    if (newPosition2 == 43 && oldPosition > 25) {
      sectionTwo.children[67].classList.replace(`circle${43}`, `circle${25}`);
      newPosition2 = 25;
    }
    if (newPosition2 == 23 && oldPosition < 23) {
      sectionTwo.children[67].classList.replace(`circle${23}`, `circle${45}`);
      newPosition2 = 45;
    }
    if (newPosition2 == 45 && oldPosition > 23) {
      sectionTwo.children[67].classList.replace(`circle${45}`, `circle${23}`);
      newPosition2 = 23;
    }
    if (newPosition2 == 35 && oldPosition < 35) {
      sectionTwo.children[67].classList.replace(`circle${35}`, `circle${56}`);
      newPosition2 = 56;
    }
    if (newPosition2 == 56 && oldPosition > 35) {
      sectionTwo.children[67].classList.replace(`circle${56}`, `circle${35}`);
      newPosition2 = 35;
    }
    if (oldPosition == 53 && randomNum == 6) {
      sectionTwo.children[67].className = "";
      sectionTwo.children[67].classList.add(`circle${53}`);
      newPosition2 = 53;
    }
    if (oldPosition == 54 && randomNum >= 5) {
      sectionTwo.children[67].className = "";
      sectionTwo.children[67].classList.add(`circle${54}`);
      newPosition2 = 54;
    }
    if (oldPosition == 55 && randomNum >= 4) {
      sectionTwo.children[67].className = "";
      sectionTwo.children[67].classList.add(`circle${55}`);
      newPosition2 = 55;
    }
    if (oldPosition == 56 && randomNum >= 3) {
      sectionTwo.children[67].className = "";
      sectionTwo.children[67].classList.add(`circle${56}`);
      newPosition2 = 56;
    }
    if (oldPosition == 57 && randomNum >= 2) {
      sectionTwo.children[67].className = "";
      sectionTwo.children[67].classList.add(`circle${57}`);
      newPosition2 = 57;
    }
    const src = `./images/${randomNum + 6}.png`;
    diceImage2.setAttribute("src", src);
    dice2.innerHTML = "";
    dice2.appendChild(diceImage2);
  }, 1000);
  if (  (sectionTwo.children[67].classList.contains(`circle${58}`))){
    clickButton.style.display="none"
    gameOver.textContent="Game over, sorry you losed"
   }
}
tryAgain.addEventListener("click", () => window.location.reload(true));
getComputedStyle(sectionTwo.children[6]).getPropertyValue("left");

let newArray = [
  ...[2, 21],
  ...[9, 15],
  ...[12, 34],
  ...[17, 28],
  ...[23, 45],
  ...[25, 43],
  ...[35, 56],
];
