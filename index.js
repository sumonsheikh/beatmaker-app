window.addEventListener("load",()=>{
    const sounds=document.querySelectorAll(".sound");
    const pads=document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");

    const colors=[
        "#60d394",
        "#e043e0",
        "#41d3ec",
        "#e0f331",
        "#f0aa2a",
        "#eb5427",

    ];
    pads.forEach((pad,index)=>{
        pad.addEventListener("click", function(){
            sounds[index].currentTime=0;
            sounds[index].play();
            createBuble(index);
        });
    });

    const createBuble=index =>{
        //create bubble
        const bubble=document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor= colors[index];
        bubble.style.animation=`jumb 1s ease`;
        bubble.addEventListener("animationend",function(){
            visual.removeChild(this);
        });
        
    }

});
