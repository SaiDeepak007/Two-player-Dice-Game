var Random_Number1= Math.floor(Math.random()*6)+1;
//this gets a random number between 1 to 6
var Random_dice_image1="dice" + Random_Number1 + ".png";
//it points to img src address; i.e from dice1.png-dice6.png
var Random_src1="images/"+Random_dice_image1;
//to directly manipulate the source address

var img1=document.querySelectorAll("img")[0];
//[0] points to first attribute
img1.setAttribute("src",Random_src1);
//completed for first player image now repeat for 2nd player 
var Random_Number2= Math.floor(Math.random()*6)+1;
var Random_dice_image2="dice" + Random_Number2 + ".png";
var Random_src2="images/"+Random_dice_image2;

var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",Random_src2);

//query selector always points to first occurence of the element
if(Random_Number1 > Random_Number2)
{
document.querySelector("h1").innerHTML = "️⚽️Player 1 wins!";
}
else if(Random_Number1 < Random_Number2)
{
    document.querySelector("h1").innerHTML = "🏀Player 2 wins!";
}
else
{
    document.querySelector("h1").innerHTML = "🏏Draw!";
}
