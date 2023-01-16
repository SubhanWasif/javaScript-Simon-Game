


const colors = ['g','r','y','b','g','r','y','b','g','r','y','b'];
const start = document.querySelector("#start");
const stopbtn = document.querySelector("#stop");
computerclor = new Array();
const falseattempt = false;
playercolor = new Array();
const button = document.querySelectorAll("#buttons")
const lose = false;
let flash;
flash = 0;
let flash2;
flash2 = 0

function creatcolor(list){
    const color = colors[Math.floor(Math.random()*colors.length)];
    list.push(color);
    return list;
}



function falsetry(){
    console.log('false');
    start.textContent = 'Try Again'
    computerclor = []  
}




    document.querySelector("#green").addEventListener("click",()=>{
        if (computerclor[flash2] === 'g'){
            console.log("true");
            flash2++;
            console.log(flash2,computerclor.length-1);

            if (flash2 === computerclor.length){
                flash2 = 0;
                play();
            }
        }
        else{
         falsetry()
        }
    });
    document.querySelector("#red").addEventListener("click",()=>{
        if (computerclor[flash2] === 'r'){
            console.log("true");
            flash2++;

            if (flash2 === computerclor.length){
                flash2 = 0;
                play();
            }
        }
        else{
         
            falsetry()

        }
    });
    document.querySelector("#yellow").addEventListener("click",()=>{
        if (computerclor[flash2] === 'y'){
            console.log("true");
            flash2++;

            if (flash2 === computerclor.length){
                flash2 = 0;
                play();
            }
        }
        else{
            falsetry()


        }
    });
    document.querySelector("#blue").addEventListener("click",()=>{
        if (computerclor[flash2] === 'b'){
            console.log("true");
            flash2++;

            if (flash2 === computerclor.length){
                flash2 = 0;
                play();
            }
        }
        else{
            falsetry()

        }
    });
    document.querySelector("#green").removeEventListener("click", null);
    document.querySelector("#red").removeEventListener("click", null);
    document.querySelector("#yellow").removeEventListener("click", null);
    document.querySelector("#blue").removeEventListener("click", null);



start.addEventListener("click",play);
function play(){

    start.textContent = "Stop!"
    computerclor = creatcolor(computerclor);
    console.log(computerclor);
    intervalId = setInterval(ShowColor, 800);

    
}


function ShowColor(){
    if (flash>computerclor.length){
        CancelInterval();
        clearInterval(intervalId);
        console.log("players turn!");  
        flash = 0;

    }
    else{
        CancelInterval();
        setTimeout(()=>{
            if (computerclor[flash]==='g') green();
            else if (computerclor[flash]==='r') red();
            else if (computerclor[flash]==='y') yellow();
            else if (computerclor[flash]==='b') blue();
            flash++;
        },400) 
        };

    }



function red(){
    document.querySelector(`[abc="r"]`).style.background = 'darkred';
}
function green(){
    document.querySelector(`[abc="g"]`).style.background = 'darkgreen';
}
function yellow(){
    document.querySelector(`[abc="y"]`).style.background = '#8B8000';
}
function blue(){
    document.querySelector(`[abc="b"]`).style.background = 'darkblue';
}


function CancelInterval(){
    
    document.querySelector(`[abc="g"]`).style.background = 'green';
    document.querySelector(`[abc="r"]`).style.background = 'red';
    document.querySelector(`[abc="y"]`).style.background = 'yellow';
    document.querySelector(`[abc="b"]`).style.background = 'blue';


}
