canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_image = new Image();
	img_image.onload = uploadimg; 
	img_image.src = img_image;  
}

function uploadimg() {

	ctx.drawImage(img_image, img_x, img_y, img_width, img_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		keyPressed= e.keyCode;
		console.log(keyPressed);
		{
			alphabetkey();
		document.getElementById("d1").innerHTML="You pressed alphabet key";
		console.log(alphabetkey);
		}
	
		{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}

function alphabetkey()
{
	img_image= "Alpkey.png";
	add();

}
function numberkey()
{
	img_image= "numkey.png";
}
function arrowkey()
{
	img_image= "Arrkey.png";
}
function specialkey()
{
	img_image= "spkey.png"
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}