/////////////////////////Start Form/////////////////////
//////////////////////Name Validate////////////////
var vailemail , vailname , vailphone; 
var inputName=document.getElementById("name");
var nameRegx= /^[a-z]+$/i;
var errorMsg=document.querySelector(".errorMsgName");
function inputname(e)
{

    
    if(inputName.value.match(nameRegx)&&e.target.value.length>2)
    {
        inputName.style.border="2px solid green";
        errorMsg.style.display="none";
        vailname=true;
    }else
    {
        inputName.style.border="2px solid red";
        errorMsg.style.display="block";
        vailname=false;
    }
   
}
inputName.addEventListener("input",inputname);

//////////////////////Email Validate/////////////////
var inputEmail=document.getElementById("email");
var emailRegx = /^[A-Za-z]+[A-Za-z0-9]+[@]+[A-Za-z]+[.]+[A-Za-z]{2,3}$/;
var errorMsgEmail=document.querySelector(".errorMsgEmail");

function inputemail(e)
{
    
    if(inputEmail.value.match(emailRegx)&&e.target.value.length>5)
    {
        inputEmail.style.border="2px solid green";
        errorMsgEmail.style.display="none";
        vailemail=true;
    }else
    {
        inputEmail.style.border="2px solid red";
        errorMsgEmail.style.display="block";
        vailemail=false;
    }
}
inputEmail.addEventListener("input",inputemail);
///////////////////////Phone Validate/////////////////


var inputPhone=document.getElementById("phone");
var phoneRegx = /^01[0,1,2,5]{1}[0-9]{8}$/;
var errorMsgPhone=document.querySelector(".errorMsgPhone");

function inputphone(e)
{   if(inputPhone.value.match(phoneRegx)&&e.target.value.length>=11)
    
    {
        inputPhone.style.border="2px solid green";
        errorMsgPhone.style.display="none";
        vailphone=true;
    }else
    {
        inputPhone.style.border="2px solid red";
        errorMsgPhone.style.display="block";
        vailphone=false;
    }
}
inputPhone.addEventListener("input",inputphone);
/////////////////////////Send validate/////////////////
var btnSend=document.getElementById("send");

function send(e)
{
    if(vailname==false||vailemail==false||vailphone==false)
    {
        e.preventDefault();
    }
    if(inputEmail.value==''||inputName.value==''||inputPhone.value=='')
    {
        e.preventDefault();
    }
}
btnSend.addEventListener("click",send);
////////////////////////End Form///////////////////////



