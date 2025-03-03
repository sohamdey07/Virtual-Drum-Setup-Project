const btn=document.querySelectorAll(".drum");

let drumNo=btn.length;

// checking for mouse click
for(let i=0;i<drumNo;i++)
{
    btn[i].addEventListener("click",function()
        {
            var buttonHTML=this.innerHTML;
            makeSound(buttonHTML);
            buttonAnimation(buttonHTML);
        }
    );
}

// checking for keyboard press
document.addEventListener("keypress",(event)=>
{
    makeSound(event.key);
    buttonAnimation(event.key);
})

// logic for different drum sounds
function makeSound(buutonPress)
{
    switch (buutonPress) {
        case "w":
            var tom1=new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2=new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3=new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4=new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let snare=new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            let crash=new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            let kickBass=new Audio("./sounds/kick-bass.mp3");
            kickBass.play();
            break;
    
        default:
            console.log(buttonHTML)
            break;
    }
}


function buttonAnimation(currentBtn)
{
    let activeBtn=document.querySelector(`.${currentBtn}`);
    activeBtn.classList.add("pressed");

    setTimeout(()=>{
        activeBtn.classList.remove("pressed");
    },200);
}