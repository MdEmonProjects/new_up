
function getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;

    while(element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return { x: xPosition, y: yPosition };
}
(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        // $(".menu-trigger").on("click", function() {
        //     $(".off-canvas-menu, .off-canvas-overlay").addClass("active");
        //     return false;
        // });

        // $(".close-menu").on("click", function() {
        //     $(".off-canvas-menu, .off-canvas-overlay").removeClass("active");
        // });

        // $(".off-canvas-overlay").on("click", function() {
        //     $(".off-canvas-menu, .off-canvas-overlay").removeClass("active");
        // });

        // function smoothSctollTop() {
        //     $('a').on('click', function (event) {
        //         // var target = $(this.getAttribute('data-scroll'));
        //         var target = $($(this).attr('data-scroll'));
                

        //         // if($(this).hasClass('active')==false){
        //         //     if (target.length) {
        //         //          //event.preventDefault();
        //         //         console.log(target.offset().top);
        //         //         $('.over-area').stop().animate({
        //         //             scrollTop: target.offset().top - 100
        //         //         }, 1000);
        //         //     }
        //         // }

        //         //var target = clickEvent.target;
        //         // while (target && target.id !== 'over-area' && target !== undefined) {
        //         //     target = target.parentNode;
        //         // }
        //         // //if we clicked within the elementBlock container
        //         // if (target && target.id == 'over-area') {
        //         // //log out the offsetTop and offsetLeft
        //         // console.log('offsetTop: ', event.target.offsetTop);
        //         // console.log('offsetLeft: ', event.target.offsetLeft);
        //         // }

        //        // console.log(target.selector);
        //         //console.log(getPosition(target));
        //         var area = document.querySelector(target.selector);
        //         //console.log(getPosition(area));
        //         let obj = getPosition(area)
        //         console.log(typeof(obj.y));
        //         $('.over-area').animate({
        //             scrollTop : obj.y-160                    // Scroll to top of body
        //         }, 1000);
                
                
        //     });
        // }
        // smoothSctollTop();


        // $(document).on("click", ".over-right-nav ul li a", function(){
        //     if($(this).hasClass('active')){
        //         console.log($(this));
        //     }else{
        //         $('.over-right-nav ul li a').removeClass('active');
        //         $(this).addClass("active");
        //     }
           
        // })




        $('.menu-open').click( function (){     
            $('.off-canvas-menu').toggleClass('active');  
            $('.off-canvas-overlay').toggleClass('active');  
            $('.menu-open').toggleClass('toggle');      
        });
    
        $(".close-menu").click(function(){
            $('.off-canvas-menu').removeClass('active'); 
            $(".off-canvas-overlay").removeClass('active'); 
        })
        $(".off-canvas-overlay").click(function(){
            $('.off-canvas-menu').removeClass('active'); 
            $(this).removeClass('active'); 
        })


        
       
              
        $(".slide_one").owlCarousel({
            items:1,
            nav:false,
            dot:true,
            loop:true,
            margin:20,
            autoplay:false,
            autoplayTimeout:3000,
            smartSpeed:1000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                   
                },
                768:{
                    items:1,
                   
                },
                992:{
                    items:2, 
                },
                1200:{
                    items:1,
                   
                }
            }
            
          
        });




    });

    


    jQuery(window).load(function(){

        $('select').niceSelect();
    });


}(jQuery));	