var carousel = $(".carouselS"),
    currdeg  = 0;

$(".nextS").on("click", { d: "n" }, rotate);
$(".prevS").on("click", { d: "p" }, rotate);

function rotate(e){
  if(e.data.d=="n"){
    currdeg = currdeg - 120;
  }
  if(e.data.d=="p"){
    currdeg = currdeg + 120;
  }
  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
}