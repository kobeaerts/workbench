$(document).ready( function() {
    
    /*
    /*  REPLACE ALL SELECTS TO AN THEMABLE SELECT  */

        Select.init();
    
    /*
    /*  GROUP A QUOTE AND THE NEXT PARAGRAPH  */
    
        $quotes = $('.paragraph--quote');
    
        $quotes.each( function() {
            $next = $(this).next('.paragraph--body');  
            
            if($next.length === 1) {
                var $quoteWrapper = $(this).wrap('<div class="paragraph paragraph--quote-group">').parent();
                console.log($quoteWrapper);
                $quoteWrapper.append($(this));
                $quoteWrapper.append($next);
            } else {
                console.log('last child');
                $(this).removeClass('pull-left pull-right');
            }
        });
    
});

$(window).load( function() {
    
    /*
    /*  PACKERY GRID  */
    
        $('.gallery--grid').packery({
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true
        });
    
    
    /*
    /*  FLICKITY CAROUSEL  */
    
        $('.gallery--carousel').flickity({
            cellAlign: 'center',
            wrapAround: true,
            contain: true,
            setGallerySize: false
        });
    
    
    /*
    /*  REMOVE THE PAGE LOADER  */
    
        var $pageLoader = $('.page-loader');
    
        $pageLoader.fadeOut();
    
});