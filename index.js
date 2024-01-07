var scr = document.getElementById("score");
var hscr = document.getElementById("high");
var bu = document.getElementById("buble");
var rang;
var sc = 0;
var hi = 0;
var d = 0;
rand(); //random function call for random charater in bubble
function rand() {
  char = String.fromCharCode(Math.trunc(Math.random() * (122 - 97 + 1)) + 97);
  rang = Math.trunc(Math.random() * (85 - 1 + 1)) + 1;
  bu.innerText = char;
  bu.style = "margin-left:" + rang + "%";
}
//key up event check chararater equal random charater
window.addEventListener("keyup", (event) => {
  if (d == 1) {
    //timer complet check
    bu.classList.remove("ani");
    return 0;
  }
  if (event.key == char) {
    bu = document.getElementById("buble");
    bu.innerText = "";
    sc++;
    scr.innerText = sc;

    setTimeout(() => {
      //remove and add animation class
      bu.classList.remove("ani");
      setTimeout(() => {
        bu.classList.add("ani");
        rand();
      }, 100);
    }, 100);
  }
});

//for makeing qwert keybord
ar = [
  113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 97, 115, 100, 102, 103, 104,
  106, 107, 108, 122, 120, 99, 118, 98, 110, 109,
];
var key = document.getElementById("keybord");
//create key board
for (i = 0; i < ar.length; i++) {
  if (i == 10 || i == 19) {
    key.append(document.createElement("br"));
  }
  var but = document.createElement("button");
  but.style = "margin:2px;padding:5px;font-size:20px";
  but.setAttribute("onclick", "value1('" + String.fromCharCode(ar[i]) + "')");
  but.innerText = String.fromCharCode(ar[i]);
  key.append(but);
}
//check value is equal random character
function value1(a) {
  if (d == 1) {
    bu.classList.remove("ani");
    return 0;
  }
  if (a == char) {
    bu = document.getElementById("buble");
    bu.innerText = "";
    sc++;

    scr.innerText = sc;
    setTimeout(() => {
      bu[0].classList.remove("ani");
      setTimeout(() => {
        bu[0].classList.add("ani");
        rand();
      }, 10);
    }, 10);
  }
}
//one minute timer for game
startTimer(60);
function startTimer(seconds) {
  const timer = document.getElementById("timer");
  let tim = setInterval(() => {
    if (seconds == -1) {
      d = 1;
      clearInterval(tim);
      if (hi < sc) hi = sc;
      hscr.innerText = hi;
      seconds = 1;
      var ch = confirm("do you retry \n your score is =" + sc); //comfirm message for play again
      if (ch == true) {
        //reset score game start
        clearInterval(tim);
        d = 0;
        sc = 0;
        scr.innerText = sc;
        bu.classList.add("ani");
        rand();
        startTimer(60);
      } else {
        //game stop
        d = 1;
        bu.classList.remove("ani");
      }
    } else {
      timer.innerText = `${Math.floor(seconds / 60)}:${(seconds % 60)
        .toString()
        .padStart(2, "0")}`;
    }
    seconds--;
  }, 1000);
}
