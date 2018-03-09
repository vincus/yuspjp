jQuery(document).ready(function(){

    /*
    SVGInjector(jQuery('.svg-inject'),{},function (){
        console.log('SVG injected')
    });
    */


    // MENU OPENER
    jQuery('#nav-icon').click(function() {
        jQuery('#mobile-wrapper').toggleClass('opened');
        jQuery('#nav-icon').toggleClass('opened');
    });


    // FLOATUNG MENUS
    jQuery(window).scroll(function() {
        var scroll = jQuery(window).scrollTop();
        var vh = jQuery(window).height();

        if (scroll >= vh) {
            jQuery("#floating-menu").addClass("visible");
        } else {
            jQuery("#floating-menu").removeClass("visible");
        }

        if (scroll >= vh /3) {
            jQuery("#service-menu").addClass("fixed");
        } else {
            jQuery("#service-menu").removeClass("fixed");
        }
    });

    /* PRODUCT MEGA MENU */
    jQuery('li#menu-item-2287, #mega-menu-wrapper').hover(function () {
        MenuOpenCloseErgoTimer(100, function (){
            jQuery('#mega-menu-wrapper').addClass('visible');
        });
    }, function() {
        MenuOpenCloseErgoTimer(200, function (){
            jQuery('#mega-menu-wrapper').removeClass('visible');
        });
    });


    jQuery('li#menu-item-2287').click(function(e) {
        e.preventDefault();
        if(!jQuery('#mega-menu-wrapper').hasClass('visible')){
            jQuery('#mega-menu-wrapper').addClass('visible');
        } else {
            jQuery('#mega-menu-wrapper').removeClass('visible');
        }
    });

    jQuery('#mega-menu-wrapper .product-features .feature').hover(function (item) {
        var index = $('#mega-menu-wrapper .product-features .feature').index(item.target);
        $('.product-details .selected').removeClass("selected");
        $($('.product-details .details')[index]).addClass("selected");
    }, function(item){
        $('.product-details .selected').removeClass("selected");
    });

    /* RESOURCES MEGA MENU */
    jQuery('li#menu-item-2265').hover(function () {
        jQuery('#resources-mega-menu-wrapper').addClass('visible');
    }, function() {
        jQuery('#resources-mega-menu-wrapper').removeClass('visible');
    });

    jQuery('li#menu-item-2265').click(function(e) {
        e.preventDefault();
        if(!jQuery('#resources-mega-menu-wrapper').hasClass('visible')){
          jQuery('#resources-mega-menu-wrapper').addClass('visible');
        } else {
          jQuery('#resources-mega-menu-wrapper').removeClass('visible');
        }
    });



    /*
    jQuery('.one').click(function () {
        jQuery('.floating-wrapper').toggleClass('floated');
    });

    jQuery('.feature-row').click(function () {
        jQuery('.solution').toggleClass('opened');
    });
    */


    /* INDUSTRIRES */
    jQuery('#industries-block li.industry-wrapper').click(function(){
        var tab_id = jQuery(this).attr('id');

        jQuery('#industries-block li.industry-wrapper').removeClass('current');
        jQuery('#selected-industries .selected-industry').removeClass('current');

        jQuery(this).addClass('current');
        jQuery('div[data-tab="' + tab_id + '"]').addClass('current');
        //jQuery("#"+tab_id).addClass('current');

    });


    jQuery('.color-switcher').click(function(){
        jQuery('#industries.body').toggleClass('light');
        jQuery('#industries.body').toggleClass('dark');
        // jQuery('#industries.body').removeClass('dark');
        // jQuery('#industries.body').addClass('light');

    });

    function MenuOpenCloseErgoTimer (dDelay, fActionFunction, node) {
        if (typeof this.delayTimer == "number") {
            clearTimeout (this.delayTimer);
            this.delayTimer = '';
        }
        if (node)
            this.delayTimer     = setTimeout (function() { fActionFunction (node); }, dDelay);
        else
            this.delayTimer     = setTimeout (function() { fActionFunction (); }, dDelay);
    }

});


// TABULATORS //

jQuery(document).ready(function () {

    jQuery('#industries-block li.industry-wrapper').click(function(){
        var tab_id = jQuery(this).attr('data-tab');

        jQuery('#industries-block li.industry-wrapper').removeClass('current');
        jQuery('.selected-industry').removeClass('current');

        jQuery(this).addClass('current');
        jQuery(tab_id).addClass('current');
        // jQuery("#"+tab_id).addClass('current');
    });

});


jQuery(document).ready(function() {

    // TABULATORS - PLACEMENTS
    //-----------------------------

    /*
     jQuery('ul.tabs li').click(function(){
     var tab_id = jQuery(this).attr('data-tab');

     jQuery('ul.tabs li').removeClass('current');
     jQuery('.tab-content').removeClass('current');

     jQuery(this).addClass('current');
     jQuery("#"+tab_id).addClass('current');

     jQuery('.tab-page').removeClass('selected');
     jQuery('#'+tab_id).addClass('selected');

     });
     */

    /*
     jQuery('ul.tabs li.tab-link').click(function(){
     var tab_id = jQuery(this).attr('data-tab');

     jQuery('ul.tabs li.tab-link').removeClass('current');
     jQuery('.tab-content').removeClass('current');

     jQuery(this).addClass('current');
     jQuery("#"+tab_id).addClass('current');
     });
     */

    /*
     jQuery('ul.tabs li').click(function(){
     var tab_id = jQuery(this).attr('data-tab');

     jQuery('ul.tabs li.tab').removeClass('current');
     jQuery('.tab-content').addClass('current');

     jQuery(this).addClass('current');
     jQuery("#"+tab_id).addClass('current');
     });
     */

    function switchDesktop() {
        if (jQuery(window).width() > 740) {
            jQuery('ul.tabs li').click(function(){
                // var tab_id = jQuery(this).attr('data-tab');
                var tab_id = "#" + jQuery(this).attr('data-tab');

                jQuery('ul.tabs li').removeClass('current');
                jQuery('.tab-content').removeClass('show');

                jQuery(this).addClass('current');
                jQuery('.tab-content' + tab_id).addClass('show');
            });
        }
    }

    function switchMobile() {
        if (jQuery(window).width() < 710) {
            curr = jQuery('.tab-content.show');
            curr_link = jQuery('ul.tabs li.current');
            curr_link.after(curr);

            jQuery('ul.tabs li').click(function(){
                // var tab_id = jQuery(this).attr('data-tab');
                var tab_id = "#" + jQuery(this).attr('data-tab');

                jQuery('ul.tabs li').removeClass('current');
                jQuery('.tab-content').removeClass('show');

                jQuery(this).addClass('current');
                jQuery(this).after(jQuery('.tab-content' + tab_id).addClass('show'));
            });
        }
    }

    switchDesktop();
    switchMobile();

    jQuery(window).resize(function () {

        jQuery('ul.tabs li').off('click');
        switchDesktop();
        switchMobile();

    });


    // VERTICAL TABULATOR CLASSES
    //-----------------------------
    jQuery("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        jQuery(this).siblings('a.active').removeClass("active");
        jQuery(this).addClass("active");
        var index = jQuery(this).index();
        jQuery("div.bhoechie-tab > div.bhoechie-tab-content").removeClass("active");
        jQuery("div.bhoechie-tab > div.bhoechie-tab-content").eq(index).addClass("active");
    });


    // DROPDOWN
    //-----------------------------

    /**
     * Attach toggle event to all dropdown comboboxes
     */
    window.dropdowns = {};

    jQuery('body').on("click", ".form-dropdown", function (event){
        jQuery( this ).find('ul').toggleClass('opened');
        event.stopPropagation();
    });

    jQuery('body').on("click", ".form-dropdown-options li", function(event){
        var $li = jQuery( this );
        var $ul = $li.parent('.form-dropdown-options');

        $li.siblings().removeClass("selected");
        $li.addClass("selected");
        $ul.parent('.form-dropdown').data('value', $li.html());
        $ul.siblings('.selected-value').html($li.html());
    })

    jQuery("body").click
    (
        function(e)
        {
            if(e.target.className !== "form-dropdown")
            {
                jQuery(".form-dropdown-options").removeClass('opened');
                jQuery('.form-dropdown').removeClass('opened');
            }
        }
    );
});
