const hour=document.getElementById('hr');
const minute=document.getElementById('min');
const second=document.getElementById('sec');

setInterval( ()=>{

    let date= new Date();
    let hr=date.getHours() * 30;
    let min=date.getMinutes() * 6;
    let sec=date.getSeconds() * 6;

    hour.style.transform =`rotateZ(${(hr)+(date.getMinutes()/2)}deg)`;
    minute.style.transform =`rotateZ(${min}deg)`;
    second.style.transform =`rotateZ(${sec}deg)`;

});

 //for hour hand: 
    //in 12 hr --> 360 deg
    //in 1 hr --> 30 deg
    // in n hr --> 30 x n deg
    //but we add a m/2 to hours because - we want the hour hand to move 1/2 deg at each min, otherwise a jump of 30 deg at at every hour would not look smooth, to make rotation smooth we add min/2- as in 60 min--> 30 deg rotation happens, so in 1 min ---> 1/2 dg rotation happens
    //so formula is hr + min/2

    //for minute hand:
    //in 60 mins -- > 360 deg
    //in 1 m ---> 6 deg
    //so n mins --> 6 x n deg

    //for secand hand
    // in 60 sec --> 360deg
    //so in n secs -- > 6 x n deg