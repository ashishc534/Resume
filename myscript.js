    window.onload = function(){
    
    setTimeout(function(){document.body.style.opacity="100";},500);

    var $name = $('.name');
    
    var $wrapper_2 = $('.wrapper-2');
    var $wrapper_3 = $('.wrapper-3');
    var $container_1 = $('#container-1');
    var $container_2= $('#container-2');
    var $container_3 = $('#container-3');
    var $container_4 = $('#container-4');
    var $bcake = $('#b-cake');
    var $phasep_1 = $('#phase-panel-1');
    var $music = $('#music');
    var $phasep_2 = $('#phase-panel-2');
    var $trophy = $('#trophy');
    var $phasep_3 = $('#phase-panel-3');
    var $user = $('#user');
    var $phasep_4 = $('#phase-panel-4');
    var $university = $('#university');
    var $phasep_5 = $('#phase-panel-5');
    var $cap = $('#cap');
    var $phasep_6 = $('#phase-panel-6');
    var $glyph_right = $('.glyphicon-arrow-right');
    var $glyph_left = $('.glyphicon-arrow-left');
    var $glyph_down = $('.glyphicon-arrow-down');

    $('#col-2-1').css("opacity","0");
    $('#col-2-2').css("opacity","0");
    $('#col-2-3').css("opacity","0");
    $('#col-2-4').css("opacity","0");
    $('#col-2-5').css("opacity","0");
    $('#col-2-6').css("opacity","0");
    $('#tab-3').css("opacity","0");
    $('#tab-4').css("opacity","0");
    $('#tab-5').css("opacity","0");
    
    
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
    $('.name').hide();
    function printWelcome(){
        
        printstring(s);

        $('.name').delay(1500).fadeIn(800,"swing"); 
        $('.user_image').addClass("animated").addClass("fadeInUp");    
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


        if(top >0 && top < 400)
            curr_link_index = 0;

        else if(top >=400 && top < 1509)
            curr_link_index = 1;

        else if(top >= 1509 && top < 2000)
            curr_link_index = 2;

        else if(top >= 2000 && top < 2300)
            curr_link_index = 3;

        else if(top >= 2300)
            curr_link_index = 4;

        if(top >= 87)
        {
            $container_1.addClass("animated").addClass("fadeInUp");
        }

        if(top >= 394)
        {
            $container_2.addClass("animated").addClass("fadeInUp");
        }
            
        
        if(top >= 657)
            $container_3.addClass("animated").addClass("fadeInUp");
        
        if(top >= 885)
            $container_4.addClass("animated").addClass("fadeInUp");
    
        if(top >= 1500)
        {
            $('#tab-3').addClass("animated").addClass("fadeInUp");
            $('#col-2-1').addClass("animated").addClass("fadeInUp");
            $('#col-2-2').addClass("animated").addClass("fadeInUp");
            $('#col-2-3').addClass("animated").addClass("fadeInUp");
            $('#col-2-4').addClass("animated").addClass("fadeInUp");
            $('#col-2-5').addClass("animated").addClass("fadeInUp");
            $('#col-2-6').addClass("animated").addClass("fadeInUp");
        }
        
        if(top >= 1800)
        {
            $('#tab-4').addClass("animated").addClass("fadeInUp");
            $bcake.addClass("animated").addClass("fadeInUp");
            $phasep_1.addClass("animated").addClass("fadeInUp");
            $music.addClass("animated").addClass("fadeInUp");
            $phasep_2.addClass("animated").addClass("fadeInUp");
            $trophy.addClass("animated").addClass("fadeInUp");
            $phasep_3.addClass("animated").addClass("fadeInUp");

            $user.addClass("animated").addClass("fadeInUp");
            $phasep_4.addClass("animated").addClass("fadeInUp");
            $university.addClass("animated").addClass("fadeInUp");
            $phasep_5.addClass("animated").addClass("fadeInUp");
            $cap.addClass("animated").addClass("fadeInUp");
            $phasep_6.addClass("animated").addClass("fadeInUp");

            $glyph_right.addClass("animated").addClass("fadeInUp");
            $glyph_left.addClass("animated").addClass("fadeInUp");
            $glyph_down.addClass("animated").addClass("fadeInUp");
        }

        if(top >= 2200)
            $('#tab-5').addClass("animated").addClass("fadeInUp");
        
    }); 
        var link_array = ["#tab-1","#tab-2","#tab-3","#tab-4","#tab-5"];
        $('#arrow-up').click(function(e) {
        

                if(curr_link_index > 0)
                {
                    var position = $(link_array[curr_link_index-1]).offset().top;

                    $("body, html").animate({
                        scrollTop: position
                    }, 900, 'swing' );    
                }
       
    }); 
    $('#arrow-down').click(function(e) {

                
                if(curr_link_index < 5)
                {
                    var position = $(link_array[curr_link_index+1]).offset().top;

                    $("body, html").animate({
                        scrollTop: position
                    } , 900, 'swing' );    
                }
                
            
    });     
}