

//slideShow

var i=0; //start point

var images= [];

var times= 3000;

//List of images

images[0]="https://images.unsplash.com/photo-1521020773588-3b28297b1e70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
images[1]="https://images.unsplash.com/photo-1523871762770-87bda6d9ab58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
images[2]="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80";

//function that will display images

function changeImg(){
    document.slide.src= images[i];
    if(i < images.length -1){
        i++;
    }else{
        i=0;
    }
    setTimeout("changeImg()", times);
}

window.onload= changeImg;

/*display TEXT4-box1*/ 

var displayText= document.getElementById("text4-section1");
//Line-through

let elem= document.getElementById("text3-box3");
elem.addEventListener("mouseover",function(){
   
  elem.style.textDecorationLine="line-through";
  displayText.style.visibility="visible";
});

elem.addEventListener("mouseout", function(){
    elem.style.textDecorationLine="none";
    displayText.style.visibility="hidden";
});

//Mouseover image 

var els= document.getElementsByClassName("section3-image");

for(let i=0; i < els.length; i++){
    els[i].addEventListener("mouseover", myFunction);
}
  function myFunction(){
      els[0].src="https://images.unsplash.com/photo-1512729343400-4fcf83a18f72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
      els[1].src="";
  }