function getById(id){
 const element=document.getElementById(id);
 return element;  
}

// heart-icon-increase


const heartIcons=document.getElementsByClassName("heart-icon")
for(const heartIcon of heartIcons){
    heartIcon.addEventListener('click',function(){
    const heartAmount=getById('heart-count').innerText
    const heartTotalAmount=Number(heartAmount) + 1;
    getById('heart-count').innerText=heartTotalAmount;
})
}


// call button
let isBlocked=false;
getById('card-sec').addEventListener('click',function(e){
    
    if(e.target.className.includes('call-btn')){
        if (isBlocked){return;}
        const callBtn = e.target;
    const serviceName=callBtn.parentNode.parentNode.children[1].innerText
    const serviceNumber=callBtn.parentNode.parentNode.children[3].innerText
    const coin=getById('coin-count').innerText
    const callFee=20;
    const finalCoin=Number(coin)-callFee

    alert(`${serviceName}  \n ${serviceNumber} `)

    const historyDiv = getById('history-id')
    const newHistory = document.createElement("div")
    newHistory.innerHTML =`
        <div class="bg-slate-200  rounded-xl p-4 mt-3">
            <h2 class="text-sm font-bold">${serviceName} </h2>
            <p>${serviceNumber}</p>
        </div>

    `
    historyDiv.append(newHistory )
   
    getById('coin-count').innerText=finalCoin
    if(finalCoin < callFee)
    {
         
        alert('Insufficient coin.Please recharge & try later')
        isBlocked = true;
        return;
       
    }
    
    }
        
})

// clear button
getById('clear-btn').addEventListener('click',function(){
    const historyDiv=getById('history-id')
    historyDiv.innerHTML=""
})


// const callBtns=document.getElementsByClassName("call-btn")
// for(const callBtn of callBtns){
//     callBtn.addEventListener('click',function(){
//     console.log(' call btn clicked')
// })
// }

// const copyBtns=document.getElementsByClassName("copy-btn")
// for(const copyBtn of copyBtns){
//     copyBtn.addEventListener('click',function(){
//     console.log(' copy btn clicked')
// })
// }
