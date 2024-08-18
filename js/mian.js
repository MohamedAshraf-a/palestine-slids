

var imgs =Array.from( document.querySelectorAll("img"));

var lightBoxContainer = document.querySelector("#lightBoxContainer");
var selcetedImgSrc;
var lightBox = document.querySelector("#lightBox");

var closeButton = document.querySelector("#close");
var nextElement = document.querySelector("#nextElement");
var perviousElement = document.querySelector("#perviousElement");

var index;

for (var i = 0; i < imgs.length; i++){
    imgs[i].addEventListener("click", function(event){
        selcetedImgSrc=event.target.getAttribute("src");

        lightBox.style.backgroundImage =`url(${selcetedImgSrc}`;
       
        lightBoxContainer.classList.replace("d-none","d-flex"); 
        index = imgs.indexOf(event.target);
        
        
        
    });
}


closeButton.addEventListener("click",closingBox );



nextElement.addEventListener("click",showNextElement);

perviousElement.addEventListener("click",showPerviousElement);

document.addEventListener("keyup",function(event){

    if (lightBoxContainer.classList.contains("d-flex")){
        switch(event.key)
{
case"Escape":
closingBox()
 break;

case"ArrowRight":
showNextElement()
break;
case"ArrowLeft":
showPerviousElement();
break;
default:
    break;

}


    }
    
});


lightBoxContainer.addEventListener("click",function(event){
        if (event.target!=lightBox &&  event.target!=nextElement && event.target!=perviousElement)
        {
            closingBox();

        }
});




function closingBox(){
    lightBoxContainer.classList.replace("d-flex","d-none"); 


}




function showNextElement(){
    index+=1;
    if(index>=imgs.length){
        index=0;
    }
selcetedImgSrc=imgs[index].getAttribute("src")
lightBox.style.backgroundImage =`url(${selcetedImgSrc}`;



}
function showPerviousElement(){
    index-=1;
    if(index<0){
        index=imgs.length-1;
    }
selcetedImgSrc=imgs[index].getAttribute("src")
lightBox.style.backgroundImage =`url(${selcetedImgSrc}`;



}