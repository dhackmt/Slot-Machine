let start=document.getElementById("start");
let restart=document.getElementById("restart");
let count=1;
let GameOver=false;

start.addEventListener("click",spin);
restart.addEventListener("click",restartGame);

const images=["/images/apple.png","/images/banana.png","/images/cherry.png","/images/dragon.png","/images/kiwi.png","/images/mango.png","/images/orange.png"];

function getRandomImage()
{
    let randomIndex=Math.floor(Math.random()*7);
    let randomImage=images[randomIndex];
    console.log(randomImage);
    return randomImage;
}

function spin()
{

    let slot1=document.getElementById("slot1");
    slot1Image=getRandomImage();
    slot1.src=slot1Image;

    let slot2=document.getElementById("slot2");
    slot2Image=getRandomImage();
    slot2.src=slot2Image;

    let slot3=document.getElementById("slot3");
    slot3Image=getRandomImage();
    slot3.src=slot3Image;

    checkLuck(slot1,slot2,slot3);
}

function checkLuck(slot1,slot2,slot3)
{
    if(slot1.src===slot2.src && slot2.src===slot3.src)
    {
        document.getElementById("msg").innerHTML=`Jackpot! You won Jackpot in ${count} times`;
        count++;
        start.disabled=true;
        restart.disabled=false;
        GameOver=true;
       
    }
    else if(slot1.src===slot2.src || slot2.src===slot3.src || slot1.src===slot3.src  )
    {
        document.getElementById("msg").innerHTML="Almost There!";
        count++;
    }
    else{
        document.getElementById("msg").innerHTML="Oops Try Again!";
        count++;

    }
}

function restartGame(){
    GameOver=false;
    start.disabled=false;
    restart.disabled=true;
    count=1;
}