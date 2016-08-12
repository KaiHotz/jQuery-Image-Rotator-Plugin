/**
* Query Image Rotator v1.0.0
* 
* Very configuralable Image Rotator plugin with preview on Next and Prev button.
* Simply set your Image folder and an Array of your images in the config options. 
* [Image Rotator](https://github.com/SpecialKcl/jQuery-Image-Rotator-Plugin)
* 
* by Kai Hotz AKA [SpecialKcl](https://github.com/SpecialKcl) 
* 
* Useage:
* 
* jQuery(document).ready(function($)
* {
*    $('#yourcontainer').ageGate({
*         'speed'       : 500,        //Speed of animation
*         'imageFolder': 'images',    // Image Folder
*         'images'     : ['img1.jpg','img2.jpg','img3.jpg','img4.jpg'], // Array of Images
*         'prevButton' : 'Previous',  // Prev Button Text
*         'nextButton' : 'Next',      // Next Button Text
*    });
* });
*/

(function($){
    $.fn.imageRotator = function(settings){

        var that = this,
            config = {
            'speed'      : 500,
            'imageFolder': 'images',
            'images'     : ['img1.jpg','img2.jpg','img3.jpg','img4.jpg'],
            'prevButton' : 'Previous',
            'nextButton' : 'Next',
        };
        if (settings){$.extend(config, settings);}
 
        // Build the container and html structure

        that.setHtml = function(){

            var structure   = '<div id="photoShowSlider">';
                structure  += '<div id="photoShow"></div>';
                structure  += '<div id="photoShowButtons">';
                structure  += '<button id="prevbtn" class="rotatebutton" data-value="true">'+config.prevButton+'</button>';
                structure  += '<button id="nextbtn" class="rotatebutton" data-value="false">'+config.nextButton+'</button>';
                structure  += '</div></div>';

            return structure;

        }

        that.setButtonBgImage = function(nextimg, previmg){

            $("#nextbtn").css('background-image', nextimg.css('background-image'));

            $("#prevbtn").css('background-image', previmg.css('background-image'));

        }

        that.changeImage = function(prevOrNext) {
    
            var oCurPhoto = $('#photoShow div.current');
            var oNxtPhoto = prevOrNext ? oCurPhoto.prev() : oCurPhoto.next();
            if (oNxtPhoto.length == 0) {
                oNxtPhoto = prevOrNext ? $('#photoShow div:last') : $('#photoShow div:first');
            }

            oCurPhoto.removeClass('current').addClass('previous');

            oNxtPhoto.css({ opacity: 0.0 }).addClass('current').animate({ opacity: 1.0 }, config.speed,
                function() {
                    oCurPhoto.removeClass('previous');
                });

            var nextimg = $('#photoShow div.current').next();
            if(nextimg.length == 0){
                nextimg = $('#photoShow div:first');
            }

            var previmg = $('#photoShow div.current').prev();
            if(previmg.length == 0){
                previmg = $('#photoShow div:last');
            }

            that.setButtonBgImage(nextimg, previmg);

        }

        that.button = function(){
           $(document).on('click', '.rotatebutton', function(event) {
               event.preventDefault();

               var value = $(this).data('value');

               that.changeImage(value);
           });
        }

        that.init = function(){
            console.log('init');
            that.append(that.setHtml());

            $images=config.images;
            $i=0;
            $.each($images, function() {
                $image = 'images/'+$images[$i++];
                $url = 'style="background-image:url('+$image+')"';
                $("#photoShow").append('<div '+$url+'></div>');              
            });
            
            $('#photoShow div:first').addClass('current');

             var nextimg = $('#photoShow div.current').next(),
                 previmg = $('#photoShow div.current').prev();

                 if(previmg.length == 0){
                    previmg = $('#photoShow div:last');
                }

            that.setButtonBgImage(nextimg, previmg);

            that.button();
        }

        that.init();

        return that;
    };
})(jQuery);


