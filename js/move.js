
let constrain = 2000;
let mouseOverContainer = document.getElementById("ex1");
let ex1Layer = document.getElementById("ex1-layer");

let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

ex1Layer.onmousedown = dragMouseDown;

function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

function closeDragElement() {
  // stop moving when mouse button is released:
 document.onmouseup = null;
 document.onmousemove = null;
}

function transforms(x, y, el) {
  let box = el.getBoundingClientRect();
  let calcX = -(y - box.y - (box.height / 2)) / constrain;
  let calcY = (x - box.x - (box.width / 2)) / constrain;
  

  return "perspective(50px) "
    + "   rotateX("+ calcX +"deg) "
    + "   rotateY("+ calcY +"deg) ";
};

 function transformElement(el, xyEl) {
  el.style.transform  = transforms.apply(null, xyEl);
}

mouseOverContainer.onmousemove = function(e) {
  let xy = [e.clientX, e.clientY];
  let position = xy.concat([ex1Layer]);

  window.requestAnimationFrame(function(){
    transformElement(ex1Layer, position);
  });
};

//B. SMOOTH MOVE TO TOP BUTTON ****************
//1. action scroll to top for the button
function moveTop(){
  window.scrollTo({top: 0, behavior: "smooth"});
}

//2.set visibility of nút moveToTop. class activea thêm vào trong sass
const toTop = document.getElementById("moveToTop");
window.addEventListener("scroll", ()=>{
  if (window.pageYOffset >100){
    toTop.classList.add("activea");
  }else{
    toTop.classList.remove("activea");
  }
})