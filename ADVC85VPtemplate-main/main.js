canvas=document.getElementById("canvass")
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_width = 100;
img_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
	bckimg_imgTag = new Image(); //defining a variable with a new image
    bckimg_imgTag.onload = uploadimg; // setting a function, onloading this variable
    bckimg_imgTag.src = img_image; // load image
    
    
	carimg_imgTag = new Image(); //defining a variable with a new image
    carimg_imgTag.onload = uploadimg; // setting a function, onloading this variable
    carimg_imgTag.src = img_image; // load image
}

function uploadBackround() {
	ctx.drawImage(background_image, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_image, img_x, img_y, img_width, img_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}
function up()
{
	if(greencar_y >=0)
	{
		greencar_y = greencar_y - 10;
		
		 uploadBackground();
		 uploadgreencar();
	}
}
function down()
{
	if(greencar_y <=500)
	{
		greencar_y = greencar_y+ 10;
		
		uploadBackground();
		 uploadgreencar();
	}
}
function left()
{
	if(greencar_x >= 0)
	{
		greencar_x = greencar_x - 10;
		
		uploadBackground();
		 uploadgreencar();
	}
}
function right()
{
	if(greencar_x <= 700)
	{
		greencar_x = greencar_x + 10;
		
		uploadBackground();
		uploadgreencar();
   }
}
	