let turn ='X';
let isgameover=false;

const changeTurn = ()=>{
    return turn === "X" ? "O" : "X"
}

const checkWin =()=>{
    let boxfill=document.getElementsByClassName('boxfill');
    let wins=[
        [0,1,2,1,5,0],
        [3,4,5,1,15,0],
        [6,7,8,1,25,0],
        [0,3,6,-10,15,90],
        [1,4,7,0,15,90],
        [2,5,8,10,15,90],
        [0,4,8,0,15,45],
        [2,4,6,0,15,135]
    ]
    wins.forEach(e=>{
        if((boxfill[e[0]].innerText === boxfill[e[1]].innerText ) && (boxfill[e[2]].innerText === boxfill[e[1]].innerText) && (boxfill[e[0]].innerText !== "")){
            document.querySelector('.info').innerText =boxfill[e[0]].innerText + " Won";
            isgameover = true;
            document.querySelector('.gif').style.width ="10rem";
            document.querySelector('.line').style.width ="30vw";
            document.querySelector('.line').style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
}

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>{
    let boxfill=element.querySelector('.boxfill');
    element.addEventListener('click',()=>{
        if(boxfill.innerText === ''){
            boxfill.innerText = turn;
            turn=changeTurn();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

reset.addEventListener('click',()=>{
    let boxfill=document.querySelectorAll('.boxfill');
    Array.from(boxfill).forEach(element => {
        element.innerText="";
    })
    turn="X";
    isgameover=false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.gif').style.width ="0px";
    document.querySelector('.line').style.width ="0vw";
})