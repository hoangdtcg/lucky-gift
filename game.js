$(document).ready(function () {
    $('img').click(function(){
        $(".overlay").show();
        $(".gift-content").hide();
        $(".modal-footer").hide();
        setTimeout(function () {
            $("#open-anim").hide();
            $(".gift-content").show();
            $(".modal-footer").show();
        },3000)
    })

    $('#confirm-gift').click(function(){
        window.location.reload();
    });

})