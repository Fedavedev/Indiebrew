$(".hamburger_icon").click(function() {
    $("nav").removeClass("display-none")
    $("nav").toggleClass("display")

})

$("nav").click(function() {
    $("nav").addClass("display-none")
})