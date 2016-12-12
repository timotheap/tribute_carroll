$(window).resize(function(){
    var w = window.innerWidth;
    if(w < 755){
       $('img').removeClass('img-responsive');
       $('img').addClass('small-image');
    } else if(w >= 755){
        $('img').removeClass('small-image');
        $('img').addClass('img-responsive');
    }
    
});