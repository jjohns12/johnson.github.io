var i=0;//startpoint
var images=[];
var time=3000;

//imagelist

images [0]='wedding.jpg';
images [1]='canvas.jpg';
images[2]='wife1.jpg';
images [3]='wife2.jpg';
images[4]='aaa.jpg';
images[5]='bjj.jpg';
images[6]='bball.jpg';
images[7]='bjjteam.jpg';

//change images

function changeImg (){
document.slide.src=images [i];
if (i < images.length -1)  {
    i++;
} else {i=0;
}

setTimeout("changeImg()", time);}

window.onload=changeImg;

function emailConfirm() {
    alert("Thank You for your reaching out to me, I will get back to you as soon as possible");
}

function addText() {
    var input = document.getElementById('something');
    input.value = input.value + 'URGENT PLEASE READ';
}