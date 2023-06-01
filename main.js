function changeme() {
  document.getElementsByClassName("changeText")[0].innerHTML =
    "Welcome to Elevation Academy";
}

var count = true;
function changeme2() {
  if (count) {
    document.getElementsByClassName("changeText")[1].style.color = "red";
    document
      .getElementsByClassName("changeText")[1]
      .setAttribute("id", "heading");
      count = false;
  } else {
    document.getElementsByClassName("changeText")[1].style.color = "black";
    document
      .getElementsByClassName("changeText")[1]
      .removeAttribute("id");
      count = true
  }
}

var fc = true;
function changeflex(){
    if(fc){
        document.getElementsByClassName("main")[0].style.flexDirection = "column";
        fc = false
    }
    else{
        fc = true
        document.getElementsByClassName("main")[0].style.flexDirection = "row";
}
}

function updateTime(){
  var d = new Date();
  var zone = "";
  var time = document.getElementsByClassName("time")[0];
  var h=d.getHours(), m=d.getMinutes(), s=d.getSeconds();
  if(h>12){
    h = h - 12;
    zone = "PM";
  }
  else if(h==0){
    h = 12;
    zone = "AM";
  }
  else{
    zone = "AM";
  }
  time.textContent = `${h} : ${m} : ${s} ${zone}`;
}
setInterval(updateTime, 1000);