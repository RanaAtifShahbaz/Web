var isStatus=document.querySelector("h5")
var btn=document.querySelector("#add")
let flag=0;
btn.addEventListener("click",()=>{
    if(flag==0){
    isStatus.innerHTML="Friends"
    isStatus.style.color="green"
    btn.innerHTML="Remove"
    flag=1;

              
}
else{
    isStatus.innerHTML="Stranger"
    isStatus.style.color="red"
    btn.innerHTML="Add Friend"

    flag=0;
}

})
// var remove=document.querySelector("#remove")
// remove.addEventListener("click",()=>{
//     isStatus.innerHTML="Stranger"
//     isStatus.style.color="red"
// })