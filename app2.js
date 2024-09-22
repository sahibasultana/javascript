let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
};
const drawGame=()=>{
    msg.innerText="Game draw !Try again";
    msg.style.backgroundcolor="#081b31";
}
const showWinner=(userWin,userchoice,compChoice)=>{
    if(userWin){
         userscore++;
         userscorepara.innerText=userscore;
        msg.innerText=`you win! ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="red";
    }
    else{
         compscore++;
         compscorepara.innerText=compscore;
        msg.innerText=`you lost ${compChoice} beats  your ${userchoice}`;
        msg.style.backgroundColor="green";
    }

}
//generate user choice
const playgame=(userchoice)=>{
    console.log("user choice = ",userchoice);
    //generate computer choice
    const compChoice = gencompchoice();
    console.log("comp choice =",compChoice);
    if(userchoice=== compChoice){
        //draw game
        drawGame();
    }
    else{
        let userWin=true;
        if( userchoice==="rock"){
            userWin=compChoice=="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,compChoice,userchoice);
        }

    };
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
           playgame(userchoice);
    });
});