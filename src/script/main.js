$(".hamburger_icon").click(function() {
    $("nav").toggle(function(){
        $("nav").fadeIn(3000)
    })
})

$("nav").click(function() {
    $("nav").hide(function(){
        $("nav").fadeOut(2000)
    })
})