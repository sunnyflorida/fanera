 $(document).ready(function(){ 
    $(".list_nav").hide();
    $(".btn_catalog").on('click', function(){
      $(this).parent().children('div').toggle(); 
      $(this).children('span').children('img').toggleClass('caret_upside_down');
    });

    $(".additional_products_row_2").hide();
    $(".items2").on('click', function(){
        $(".additional_products_row_1").hide();
        $('.additional_products_row_2').show(); 
        $('.nav-tabs li:first-child').removeClass('active');
        $('.nav-tabs li:last-child').addClass('active');
        event.preventDefault();
    });
    $(".items1").on('click', function(){
        $(".additional_products_row_2").hide();
        $('.additional_products_row_1').show(); 
        $('.nav-tabs li:last-child').removeClass('active');
        $('.nav-tabs li:first-child').addClass('active');
        event.preventDefault();
    });

    $('.product_option_image').on('click',function(){
      var src = $(this).children('img').attr('src');
      $(".product_item_big_wrapper").children('img').attr('src',src);   
      }
  ); 

// MAP
    var var_map;
    var var_location = new google.maps.LatLng(53.933348, 27.455258);
     function map_init() {      
      
            var var_mapoptions = {
              center: var_location,
              zoom: 14,
              mapTypeId: google.maps.MapTypeId.ROADMAP,
              mapTypeControl: false,
              panControl:false,
              rotateControl:false,
              streetViewControl: false,
            };
            var_map = new google.maps.Map(document.getElementById("map-container"),
                var_mapoptions);
      
          var contentString = 
        '<div id="mapInfo">'+
        '<p><strong>Peggy Guggenheim Collection</strong><br><br>'+
        'Dorsoduro, 701-704<br>' +
        '30123<br>Venezia<br>'+
        'P: (+39) 041 240 5411</p>'+
        '<a href="http://www.guggenheim.org/venice" target="_blank">Plan your visit</a>'+
        '</div>';
 
          var var_infowindow = new google.maps.InfoWindow({
            content: contentString
          });
          
          var var_marker = new google.maps.Marker({
            position: var_location,
            map: var_map,
            title:"Click for information about the Guggenheim museum in Venice",
                  maxWidth: 200,
                  maxHeight: 200
          });
 
          google.maps.event.addListener(var_marker, 'click', function() {
             var_infowindow.open(var_map,var_marker);
          });
      }
 
          google.maps.event.addDomListener(window, 'load', map_init);
      
      //start of modal google map
      $('#mapmodals').on('shown.bs.modal', function () {
          google.maps.event.trigger(var_map, "resize");
          var_map.setCenter(var_location);
      });
});


$(document).ready(function() {
  $("a.fancy_picture").fancybox({           
    fitToView: false, // avoids scaling the image to fit in the viewport
    beforeShow: function () {
        // set size to (fancybox) img
        $(".fancybox-image").css({
            "width": 700,
            "height": 500
        });
        // set size for parent container
        this.width = 700;
        this.height = 500;}        
    });
  $("a.fancy_doc").fancybox({           
    fitToView: false, // avoids scaling the image to fit in the viewport
    beforeShow: function () {
        // set size to (fancybox) img
        $(".fancybox-image").css({
            "width": 400,
            "height": 600
        });
        // set size for parent container
        this.width = 400;
        this.height = 600;}        
    });
  
});
