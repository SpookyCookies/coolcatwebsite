window.onload = function epicshit() {
var result = Math.floor(Math.random() * 101);
if(result === 0){
    location.href = 'new_url';
}else if  (result > 0 && result <= 20){
  document.getElementById('AlwaysTip').innerText = "Tip: Did you know that there is a special temperature in order to cremate you, that's right! depending on how much fat you have you will have to be cremated at a certain temperature in order to remove the threat of a grease fire."
}else if (result > 20 && result <= 40 ){
    document.getElementById('AlwaysTip').innerText = "Tip: J IBUF ZPV"
}else if (result > 40 && result <= 60){
    document.getElementById('AlwaysTip').innerText = "Tip: UVQR NKXKPI C NKHG QH TGITGVU"
}else if (result > 60 && result <= 80){
    document.getElementById('AlwaysTip').innerText = "Tip: EPPER TPIEWI EHH HIXEMPW"
}else if (result > 80 && result <= 100){
    document.getElementById('AlwaysTip').innerText = "Tip: NKRRU RUHYZKX"
  
}else{
    console.log('What?')
}
}

