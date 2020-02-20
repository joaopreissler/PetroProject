const box1 = document.getElementById("box-1");
const box2 = document.getElementById("box-2");
const box3 = document.getElementById("box-3");
const box4 = document.getElementById("box-4");
const box5 = document.getElementById("box-5");
const box6 = document.getElementById("box-6");

box1.addEventListener("mouseenter", function( event, box, box, box ) {   
  // alterar para mouse hover
  event.target.style.width = "61%";
  box2.style.width = "19%";
  box3.style.width = "19%";
 
  // reset the mouseover
  setTimeout(function() {
    event.target.style.width = "49%";
    box2.style.width = "25%";
    box3.style.width = "25%";
    
  }, 500);
}, false);

box2.addEventListener("mouseenter", function( event, box, box, box ) {   
  //  alterar para mouse hover
  event.target.style.width = "61%";
  box1.style.width = "19%";
  box3.style.width = "19%";
 
  // reset the mouseover
  setTimeout(function() {
    event.target.style.width = "25%";
    box1.style.width = "49%";
    box3.style.width = "25%";
    
  }, 500);
}, false);

box3.addEventListener("mouseenter", function( event, box, box, box ) {   
  // alterar para mouse hover
  event.target.style.width = "61%";
  box2.style.width = "19%";
  box1.style.width = "19%";
 
  // reset the mouseover
  setTimeout(function() {
    event.target.style.width = "25%";
    box1.style.width = "49%";
    box2.style.width = "25%";
    
  }, 500);
}, false);

box4.addEventListener("mouseenter", function( event, box, box, box ) {   
  //  alterar para mouse hover
  event.target.style.width = "61%";
  box5.style.width = "19%";
  box6.style.width = "19%";
 
  // reset the mouseover
  setTimeout(function() {
    event.target.style.width = "33%";
    box5.style.width = "33%";
    box6.style.width = "33%";
    
  }, 500);
}, false);

box5.addEventListener("mouseenter", function( event, box, box, box ) {   
  //  alterar para mouse hover
  event.target.style.width = "61%";
  box4.style.width = "19%";
  box6.style.width = "19%";
 
  //  reset the mouseover
  setTimeout(function() {
    event.target.style.width = "33%";
    box4.style.width = "33%";
    box6.style.width = "33%";
    
  }, 500);
}, false);

box6.addEventListener("mouseenter", function( event, box, box, box ) {   
  //  alterar para mouse hover
  event.target.style.width = "61%";
  box4.style.width = "19%";
  box5.style.width = "19%";
 
  // reset the mouseover
  setTimeout(function() {
    event.target.style.width = "33%";
    box4.style.width = "33%";
    box5.style.width = "33%";
    
  }, 500);
}, false);

function classToggle() {
  var el = document.querySelector('.icon-cards__content');
  el.classList.toggle('step-animation');
}

document.querySelector('#toggle-animation').addEventListener('click', classToggle);

