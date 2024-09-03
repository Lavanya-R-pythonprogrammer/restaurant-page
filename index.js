let slides =document.querySelectorAll(".silder")
console.log(slides)
let count =0;
slides.forEach(function(slide, index){
    slide.style.left=`${index*100}%`;
})

function slider(){
    slides.forEach(function(curvel){
        curvel.style.transform = `translatex(-${count * 100}%)`
        console.log(curvel)
    })
}

setInterval(function(){
    count++;
    if(count==slides.length){
        count=0
    }

    slider();

},2000)



function placed(event){
        alert("order placed succesfully. Provide Address when our delivery person call you")
}