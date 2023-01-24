const message=document.getElementById("input");
message.addEventListener("keydown",function(event){
    if(event.key=="Enter")
    getmessage();
})
function getmessage(){
    let lastmessage=document.getElementById("finalmessage");
    lastmessage.innerHTML=message.value;
    message.value="";

}