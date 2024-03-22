let boxes=document.querySelectorAll(".box");
let winnn=document.querySelector(".winner");
let body=document.querySelector("body");
let circle=document.querySelector(".hello");
let t =document.querySelector(".try");
let tr =document.querySelector(".tr");
const winp=[[0,1,2],[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];

let turn0=true;
boxes.forEach((box)=>{
box.addEventListener("click",()=>{
if(turn0){
box.innerText="O";
turn0=false;
}
else{ 
     box.innerText="X";
turn0=true;
}
box.disabled=true;
 check();
});
});
let answer=(a)=>{
    winnn.innerText=` Congratulations,winner is ${a}`;

}


const check=()=>{
for(let pattern of winp){
let pos1=boxes[pattern[0]].innerText;
let pos2=boxes[pattern[1]].innerText;
let pos3=boxes[pattern[2]].innerText;

if(pos1!="" && pos2!=""&& pos3!=""){
    if(pos1===pos2&&pos2===pos3){
        let p=pos1;
        t.setAttribute("class","circle");
        tr.setAttribute("class","two");

        body.style.backgroundColor="orange";
console.log("winner",pos1);

for( let box of boxes){

    box.disabled=true; 
}

answer(p);


    }

}
}



};





