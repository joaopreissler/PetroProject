<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
    @import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro);
@import url(https://fonts.googleapis.com/css?family=Teko:700);
.snip1563 {
  background-color: #fff;
  color: #ffffff;
  display: inline-block;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  margin: 10px 5px;
  max-width: 315px;
  min-width: 230px;
  overflow: hidden;
  position: relative;
  text-align: right;
  width: 100%;
}

.snip1563 *,
.snip1563 *:before,
.snip1563 *:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.45s ease;
  transition: all 0.45s ease;
}

.snip1563 img {
  backface-visibility: hidden;
  max-width: 100%;
  vertical-align: top;
}

.snip1563:before,
.snip1563:after {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  content: '';
  background-color: #b81212;
  opacity: 0.5;
  -webkit-transition: all 0.45s ease;
  transition: all 0.45s ease;
}

.snip1563:before {
  -webkit-transform: skew(30deg) translateX(80%);
  transform: skew(30deg) translateX(80%);
}

.snip1563:after {
  -webkit-transform: skew(-30deg) translateX(70%);
  transform: skew(-30deg) translateX(70%);
}

.snip1563 figcaption {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 1;
  bottom: 0;
  padding: 20px 20px 20px 40%;
}

.snip1563 figcaption:before,
.snip1563 figcaption:after {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #b81212;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  content: '';
  opacity: 0.5;
  z-index: -1;
}

.snip1563 figcaption:before {
  -webkit-transform: skew(30deg) translateX(100%);
  transform: skew(30deg) translateX(100%);
}

.snip1563 figcaption:after {
  -webkit-transform: skew(-30deg) translateX(90%);
  transform: skew(-30deg) translateX(90%);
}

.snip1563 h3,
.snip1563 p {
  margin: 0;
  opacity: 0;
  letter-spacing: 1px;
}

.snip1563 h3 {
  font-family: 'Teko', sans-serif;
  font-size: 36px;
  font-weight: 700;
  line-height: 1em;
  text-transform: uppercase;
}

.snip1563 p {
  font-size: 0.9em;
}

.snip1563 a {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.snip1563:hover h3,
.snip1563.hover h3,
.snip1563:hover p,
.snip1563.hover p {
  -webkit-transform: translateY(0);
  transform: translateY(0);
  opacity: 0.9;
}

.snip1563:hover:before,
.snip1563.hover:before {
  -webkit-transform: skew(30deg) translateX(30%);
  transform: skew(30deg) translateX(30%);
  -webkit-transition-delay: 0.05s;
  transition-delay: 0.05s;
}

.snip1563:hover:after,
.snip1563.hover:after {
  -webkit-transform: skew(-30deg) translateX(20%);
  transform: skew(-30deg) translateX(20%);
}

.snip1563:hover figcaption:before,
.snip1563.hover figcaption:before {
  -webkit-transform: skew(30deg) translateX(50%);
  transform: skew(30deg) translateX(50%);
  -webkit-transition-delay: 0.15s;
  transition-delay: 0.15s;
}

.snip1563:hover figcaption:after,
.snip1563.hover figcaption:after {
  -webkit-transform: skew(-30deg) translateX(40%);
  transform: skew(-30deg) translateX(40%);
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
}


/* Demo purposes only */

body {
  background-color: #212121;
  text-align: center;
}
    </style>
</head>
<body>
    
<figure class="snip1563">
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample110.jpg" alt="sample110" />
  <figcaption>
    <h3>Samuel Serif</h3>
    <p>The only skills I have the patience to learn are those that have no real application in life.</p>
  </figcaption>
  <a href="#"></a>
</figure>

</body>
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);
</html>