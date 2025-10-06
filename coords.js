const targetX = document.getElementById("x");
const targetY = document.getElementById("y");


function mouseClickPosition(event) {

  targetX.innerText = "X coord: " + event.pageX;
  targetY.innerText = "Y coord: " + event.pageY;
}


addEventListener("click", mouseClickPosition);

//probably useless