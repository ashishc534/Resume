$('.name').hide();
    window.onload = function(){
    var $name = $('.name');
    
    var $wrapper_2 = $('.wrapper-2');
    var $wrapper_3 = $('.wrapper-3');
    var $container_1 = $('#container-1');
    var $container_2= $('#container-2');
    var $container_3 = $('#container-3');
    var $container_4 = $('#container-4');
    
    $('#col-2-1').css("opacity","0");
    $('#col-2-2').css("opacity","0");
    $('#col-2-3').css("opacity","0");
    $('#col-2-4').css("opacity","0");
    $('#col-2-5').css("opacity","0");
    $('#col-2-6').css("opacity","0");

    $name.hide();

    var bg1_text = document.querySelector('.border');
    var s = "Hey, I'm";
    var i=0;

    function sleep(millisecons){
        var start = new Date().getTime();

        for(var i=0;i<1e7;i++)
        {
            if(new Date().getTime() - start > millisecons)
                break;
        }
    }

    function printstring(s){
        function printchar(){
            if(i<s.length)
            {
                bg1_text.innerHTML += s[i];
                setTimeout(printchar,200);
                i+=1;
            }
        }
        printchar();

    };

    function printWelcome(){
        printstring(s);
        $('.name').delay(1500).fadeIn(800,"swing");     
    }

    printWelcome();

    var $window = $(window);
    curr_link_index = 0;
        
    window.addEventListener('scroll',function(){
        var top = window.scrollY;
        if(top < 87)
        {
            $('#arrow-up').css("color","white");
            $('#arrow-down').css("color","white");
        }
        
        else
        {
            $('#arrow-up').css("color","#686a6d");
            $('#arrow-down').css("color","#686a6d");   
        }
        if(top >= 87)
        {
            curr_link_index = 0;
            $container_1.addClass("animated").addClass("fadeInUp");
        }

        if(top >= 394)
        {
            curr_link_index = 1;
            $container_2.addClass("animated").addClass("fadeInUp");
        }
            
        
        if(top >= 657)
            $container_3.addClass("animated").addClass("fadeInUp");
        
        if(top >= 885)
            $container_4.addClass("animated").addClass("fadeInUp");
    
        if(top >= 1400)
        {
            curr_link_index = 2;
            $('#col-2-1').addClass("animated").addClass("fadeInUp");
            $('#col-2-2').addClass("animated").addClass("fadeInUp");
            $('#col-2-3').addClass("animated").addClass("fadeInUp");
            $('#col-2-4').addClass("animated").addClass("fadeInUp");
            $('#col-2-5').addClass("animated").addClass("fadeInUp");
            $('#col-2-6').addClass("animated").addClass("fadeInUp");
        }
        
    }); 
    
        $('#arrow-up').click(function(e) {
        var link_array = ["#tab-1","#tab-2","#tab-3"];

        if(curr_link_index != 0)
        {
            var position = $(link_array[curr_link_index - 1]).offset().top;
        
            $("body, html").animate({
                scrollTop: position
            }, 900, 'swing' );
        }
    }); 
    $('#arrow-down').click(function(e) {
        var link_array = ["#tab-1","#tab-2","#tab-3"];

        if(curr_link_index != 2)
        {
            var position = $(link_array[curr_link_index + 1]).offset().top;

            $("body, html").animate({
                scrollTop: position
            } , 900, 'swing' );
        }
    });     
}