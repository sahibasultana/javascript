let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turno=true;//player x,player 0
let count=0;//for draw
//array of array
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    turno=true;
    enableboxes();
    msgcontainer.classList.add("hide");

};
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turno) { // player o
            box.innerText = "o";
            box.style.color="#b0413e";
            turno = false;
        } else {
            box.innerText = "x";
            box.style.color="green";
            turno = true;
        }
        box.disabled = true;
        count++;
        let iswinner=checkWinner();
        if(count===9&&!iswinner){
            gamedraw();
        }
    });
});
const gamedraw=()=>{
    msg.innerText=`game was a draw`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText = `Congratulations! The winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
            if(pos1Val===pos2Val&&pos2Val===pos3Val)
                {
                showWinner(pos1Val);
            }
        }
    }

};
newgamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);