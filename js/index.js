/// <reference types="../@types/jquery" />


/////     home

$('.fa-bars').on('click', function(){

    $('.fa-bars').animate({left:'20%'}, 1000)
    $('.menu').show(1000)

})

$('.fa-xmark').on('click', function(){

    $('.fa-bars').animate({left:'2%'}, 1000)
    $('.menu').hide(1000)
})


//////  section two


// $('.top').on('click', function(e){
//     $('.bottom').slideToggle(1000)
// })

// $('.top').on('click', function(){
//     let index = $(this).index()
//     let topp = $('.top').x(index)
//     let Body = $(`.top:x(${index}).bottom`)

//     $('.bottom').slideUp()
//     Body.slideDown()

// })

$('.top').on("click", function(e){
    $('.bottom').not($(e.target).next()).slideUp(500);
    $(e.target).next().slideToggle(500);
});






var countDownDate = new Date("July 30, 2024 15:37:25").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("day").innerHTML = days + " D " ;
    document.getElementById("hour").innerHTML = hours + " H " ;
    document.getElementById("min").innerHTML = minutes + " M " ;
    document.getElementById("sec").innerHTML = seconds + " S " ;


    if (distance < 0) {
        clearInterval(x);
        document.getElementById("day").innerHTML = "EXPIRED";
        }

    }, 1000);






let char = document.getElementById("char")
let txt = document.getElementById("txt-area")
const max = 100;

$('#txt-area').on('input', function(){
    const remain = max - txt.value.length;
    char.textContent = `${remain} `
})

// txt.addEventListener('input', function(){
//     const remain = max - txt.value.length;
//         console.log(remain)
        
// })