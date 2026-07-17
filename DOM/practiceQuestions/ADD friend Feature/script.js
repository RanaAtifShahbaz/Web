var isStatus=document.querySelector("h5")
var addFriend=document.querySelector("#add")
addFriend.addEventListener("click",()=>{
    isStatus.innerHTML="Friends"
    isStatus.style.color="green"
})
var remove=document.querySelector("#remove")
remove.addEventListener("click",()=>{
    isStatus.innerHTML="Stranger"
    isStatus.style.color="red"
})