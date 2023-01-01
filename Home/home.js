
////////////////////////////Start Slider///////////////////////////////
var i=1;
var timerid;
var sliderimage=document.getElementById("sliderimage");
function slider()
{
    timerid=setInterval(function(){
        if(i>4) i=1
        document.images[0].src=("./images/"+i+".jpg");
        i++;
    },2000)
   
}
function stopslider()
{
    clearTimeout(timerid); 
}
sliderimage.addEventListener("mouseenter",slider);
sliderimage.addEventListener("mouseleave",stopslider);

var rightarrow=document.getElementById("rightarrow");
function right()
{
    clearTimeout(timerid);
    if(i>4) i=1
    document.images[0].src=("./images/"+i+".jpg");
    i++;
}
rightarrow.addEventListener("click",right);




var leftarrow=document.getElementById("leftarrow");
function left()
{
    clearTimeout(timerid);
    if(i>4) i=1
    document.images[0].src=("./images/"+i+".jpg");
    i++;
}
leftarrow.addEventListener("click",left);

////////////////////////////End Slider///////////////////////////////
////////////////////////////Start top buuton//////////////////////////
mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}


////////////////////////////End top buuton//////////////////////////

///////////////////////////////Start Category///////////////////////
var closesCard=document.getElementById("card1");
function myclothes()
{
  var move=document.getElementById("clothessection").scrollIntoView();

}
closesCard.addEventListener("click",myclothes);
            ////////////////////////////////////
 
var watchesCard=document.getElementById("card2");
function watches() {
  var watchessection = document.getElementById("watchessection");
  watchessection.scrollIntoView();
}
watchesCard.addEventListener("click",watches);
            ////////////////////////////////

var shosesCard=document.getElementById("card3");
function clothes() {
  var shosessection = document.getElementById("shosessection");
  shosessection.scrollIntoView();
}
shosesCard.addEventListener("click",clothes);


///////////////////////////////End Category///////////////////////



///////////////////////////////Start Counter/////////////////////


var  cartCount=document.getElementById("lblCartCount");
var i=1;
function clickme()
{
    cartCount.innerHTML=i;
    ++i;
}

function doubleclick()
{
    cartCount.innerHTML=0;
    i=1;
}
////////////////////////////End Counter///////////////////