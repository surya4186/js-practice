let token=0;
let batton=document.getElementById('counter');
let display=document.getElementById('display');
batton.addEventListener('click',function(){
    token=token+1;
    display.innerHTML = token;
    
})