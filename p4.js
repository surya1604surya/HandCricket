let  sixaud= new Audio("sixaud.mp3");
let tossaud = new Audio("tossaud.mp3");
let fouraud = new Audio("fouraud.mp3");
let hitaud = new Audio("hit.mp3");
let outaud=new Audio("outaud.mp3");
let startingtheme=new Audio("startingtheme.mp3");
// startingtheme.play();
window.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("bg-music");
    audio.volume = 0.5; // Adjust volume (0.0 to 1.0)
    
    // Ensure music plays when user interacts
    document.body.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
        }
    });
});
b1.addEventListener('click',()=>{
    tossaud.play();
    document.querySelectorAll('.startmenu')[0].style.display = 'flex';

})
let k=0;
// let h=document.getElementsByClassName('heads');
// let t=document.getElementsByClassName('tails');
heads.addEventListener('click',()=>{
    k=1;
})
tails.addEventListener('click',()=>{
    k=2;
})
let won=0;
tossbtn.addEventListener('click',()=>{
    document.querySelectorAll('.startmenu')[0].style.display = 'none';
    b1.style.display = 'none';
    res.style.display='flex';
    let i=Math.random();
    // document.querySelectorAll('.startmenu')[0].style.display = 
    if(i<0.5){
        hd.style.display='flex';
        if(k==1){
            resultwon.innerText="YOU WON";
            win()
        }
        else{
            resultwon.innerText="YOU LOST";
            loss();
        }
    }
    else{
        td.style.display='flex';
        if(k==2){
            resultlost.innerText="YOU WON";
            win();
        }
        else{
            resultlost.innerText="YOU LOST";
            loss();
        }
    }
})
let order=0
function win(){
    wonn.style.display='flex';
    bat.addEventListener('click',()=>{
        lostt.style.display='none';
        order=1;
        gaming();
        // batting();
        // bowling();
    })
    ball.addEventListener('click',()=>{
        lostt.style.display='none';
        order=2;
        gaming();
        // bowling();
        // batting();
    })
}
async function loss(){
    let lo=Math.random()
    lostt.style.display='flex';
    if(lo<0.8){
        lostt.innerText="OPPONENT CHOSE TO BOWL";
        await new Promise(resolve => setTimeout(resolve, 2000));
    lostt.style.display='none';
    order=1;
    gaming();
        // batting();
        // bowling();
    }
    else{
        lostt.innerText="OPPONENT CHOSE TO BAT";
        await new Promise(resolve => setTimeout(resolve, 5000));
        lostt.style.display='none';
        order=2;
        gaming();
        // bowling();
        // batting();
    }
}
let ps=0;
let cs=0;
let pw=0;
let cw=0;
let computerscore=0;
let playerscore=0;
async function gaming(){
    b11.style.display = 'flex';
    b11.addEventListener('click',async ()=>{
    res.style.display='none';
    b11.style.display='none';
    wonn.style.display='none';
    lostt.style.display='none';
    sb.style.display='flex';
    plasc.innerText="PLAYER RUNS:0";
    comsc.innerText="COMPUTER RUNS:0";
    // gam.style.display='f?lex';
    if(order==1){
        await batting();
        await bowling();
    }else{
        await bowling();
        await batting();
    }
    btn100.style.display='none';
    tab1.style.display='none';
    checkstatus(order,playerscore,computerscore);
})
}
async function bowling(){
    // sb.innerText
    // infooo.style.display='flex';
    let rb=0;
    document.getElementById('tab1').style.display = 'flex';
    r11.innerText="YOU BOWL";
    r12.innerText="COMPUTER BAT";
    infooo.innerText="YOU ARE BOWLING";
    btn100.style.display='inline';
    for(let i=1;i<=6;i++){
        let cmprun=cmprandomruns();
        let xy = await waitForUserInput();
        r21.innerText=xy;
        r22.innerText=cmprun;
        if(xy==cmprun){
            await imgent(0);
            computerscore=rb;
            return;
        }else{
            rb+=cmprun;
            computerscore=rb;
            await imgent(cmprun);
            console.log(rb);
            comsc.innerText="COMPUTER RUNS:"+(""+rb);
        }
        if(order==1){
            console.log(playerscore,rb);
            await checkwining(order,rb,playerscore);
        }
    }return;
    // console.log("op");
}
async function batting(){
    // infooo.style.display='flex';
    document.getElementById('tab1').style.display = 'flex';
    r11.innerText="YOU BAT";
    r12.innerText="COMPUTER BOWL";
    infooo.innerText="YOU ARE BATTING";
    btn100.style.display='inline';
    let rb=0;
    for(let i=1;i<=6;i++){
        let cmprun=cmprandomruns(),yruns=0;
        // yruns=youbtn();
        let xy = await waitForUserInput();
        r21.innerText=xy;
        r22.innerText=cmprun;
        if(xy==cmprun){
            await imgent(0);
            await new Promise(resolve=>setTimeout(resolve,2000));
            playerscore=rb;
            return;
        }else{
            rb+=xy;
            playerscore=rb;
            await imgent(xy);
            console.log(rb);
            plasc.innerText="PLAYER RUNS:"+(""+rb);
        }
        if(order==2){
            await new Promise(resolve=>setTimeout(resolve,7000));
            await checkwining(order,computerscore,rb);
        }
    }return;
    // console.log("opqqqqq");
    // res.style.display='none';
}
async function checkstatus(ord,p,c){
    await new Promise(resolve=>setTimeout(resolve,5000));
    btn100.style.display='none';
    tab1.style.display='none';
    // y11.style.display='none';
    sb.style.display='none';
    celebrations.style.display = "flex";
    if(p==c){
        celebrations.innerText="DRAW";
    }else if(p>c){
        celebrations.innerText="PLAYER WON";
    }else{
        celebrations.innerText="COMPUTER WON";
    }
    await new Promise(resolve => setTimeout(resolve, 50000));
    celebrations.style.display="none";
    btnreset.style.display='flex';
}

async function checkwining(ord,x,y){
    if(x>y){
        btn100.style.display='none';
        tab1.style.display='none';
        sb.style.display='none';
        // Show the specific element by ID
        const id1234=document.getElementById("jkkk");
        id1234.style.display="block";
        // celebrations.style.display = "block";
        if(order==1){
            celebrations.innerText="COMPUTER WON";
        }else{
            celebrations.innerText="PLAYER WON";
        }
        btnreset.style.display='flex';
        await new Promise(resolve => setTimeout(resolve, 500));
        btn100.style.display='none';
        tab1.style.display='none';
        sb.style.display='none';
    }
}

function waitForUserInput() {
    return new Promise(resolve => {
        s1.addEventListener('click', function() { resolve(1); });
        s2.addEventListener('click', function() { resolve(2); });
        s3.addEventListener('click', function() { resolve(3); });
        s4.addEventListener('click', function() { resolve(4); });
        s6.addEventListener('click', function() { resolve(6); });
    });
}
function cmprandomruns(){
    let qi=Math.random()*6;
    if(qi<=1){
        return 1;
    }else if(qi<=2){
        return 2;
    }else if(qi<=3){
        return 3;
    }else if(qi<=4){
        return 4;
    }else{
        return 6;
    }
}
async function imgent(in1) {
    let selectedImage;
    let ti=2500;
    switch (in1) {
      case 0:
        selectedImage = outu;
        ti=3000;
        outaud.play();
        break;
      case 1:
        selectedImage = i1;
        hitaud.play();
        break;
      case 2:
        selectedImage = i2;
        hitaud.play();
        break;
      case 3:
        selectedImage = i3;
        hitaud.play();
        break;
      case 4:
        selectedImage = i4;
        fouraud.play();
        ti=4000;
        break;
      default:
        selectedImage = i6;
        sixaud.play();
        ti=6000;
        break;
    }
  
    // Show the selected image
    btn100.style.display='none';
    tab1.style.display='none';
    selectedImage.style.display='flex';
    await sleep(ti);
    selectedImage.style.display='none';
    btn100.style.display='flex';
    tab1.style.display='flex';
    // Remove blur from the background
    document.body.style.filter = "none";
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
reset.addEventListener('click',()=>{
    location.reload();
})
