start = document.getElementsByClassName("start")[0]
startmenu = document.getElementsByClassName("startmenu")[0]

start.addEventListener("click", ()=>{
    if(startmenu.style.bottom == "46px"){
        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom = "46px"
    }
})


edge = document.getElementsByClassName("edge")[0]
edge_task = document.getElementsByClassName("edge_taskbar")[0]
edge_task.addEventListener("click", ()=>{
    div_edge.style.display = "inline"
})
div_edge = document.getElementsByClassName("edgeMenu")[0]
div_store = document.getElementsByClassName("storeMenu")[0]
div_photos = document.getElementsByClassName("photosMenu")[0]
div_vs = document.getElementsByClassName("vsMenu")[0]
edge.addEventListener("click", ()=>{
    div_edge.style.display = "inline"
    startmenu.style.bottom = "-655px"
})

cross = document.getElementsByClassName("cross")[0]
cross.addEventListener("mouseover", ()=>{
    cross.src = "crossHover.PNG"
})
cross.addEventListener("mouseleave", ()=>{
    cross.src = "cross.PNG"
})
cross.addEventListener("click", ()=>{
    div_edge.style.display = "none"
})


cross1 = document.getElementsByClassName("cross")[1]
cross1.addEventListener("mouseover", ()=>{
    cross1.src = "crossHover.PNG"
})
cross1.addEventListener("mouseleave", ()=>{
    cross1.src = "crossvs.PNG"
})
cross1.addEventListener("click", ()=>{
    div_vs.style.display = "none"
})

vs = document.getElementsByClassName("vs")[0]
vs.addEventListener("click", ()=>{
    div_vs.style.display = "inline"
})




store_task = document.getElementsByClassName("store_taskbar")[0]
store_task.addEventListener("click", ()=>{
    div_store.style.display = "inline"
})

cross2 = document.getElementsByClassName("cross")[2]
cross2.addEventListener("mouseover", ()=>{
    cross2.src = "crossHover.PNG"
})
cross2.addEventListener("mouseleave", ()=>{
    cross2.src = "crossstore.PNG"
})
cross2.addEventListener("click", ()=>{
    div_store.style.display = "none"
})

store = document.getElementsByClassName("store")[0]
store.addEventListener("click", ()=>{
    startmenu.style.bottom = "-655px"
    div_store.style.display = "inline"
})


photos_task = document.getElementsByClassName("")[0]
photos_task.addEventListener("click", ()=>{
    div_photos.style.display = "inline"
})

cross3 = document.getElementsByClassName("cross")[3]
cross3.addEventListener("mouseover", ()=>{
    cross3.src = "crossHover.PNG"
})
cross3.addEventListener("mouseleave", ()=>{
    cross3.src = "crossphotos.PNG"
})
cross3.addEventListener("click", ()=>{
    div_photos.style.display = "none"
})

photos = document.getElementsByClassName("photos")[0]
photos.addEventListener("click", ()=>{
    startmenu.style.bottom = "-655px"
    div_photos.style.display = "inline"
})
