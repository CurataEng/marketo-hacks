  var MARKETO_DOMAIN = "app-sjf.marketo.com";
  var MARKETO_ID = "304-HVN-808";
  var MARKETO_FORM_ID = 1169;
  var MARKETO_POP_UP_WAIT = 30;

  var POP_UP_EBOOK_COVER = "http://www.curata.com/images/ebook-cover.png"; // Size: 218 x 154
  var POP_UP_HEADLINE = "Join over 50,000 of your peers!";
  var POP_UP_DESCRIPTION = "Get weekly content marketing news and best practices right in your Inbox and Curata's exclusive eBook free!";
  var POP_UP_FORM_HEADLINE = "Sign Up Now";
  var POP_UP_FORM_SUBHEADLINE = "Newsletter and Free eBook";
  var POP_UP_RIGHT_BACKGROUND_COLOR = "#0e75ec"; // Find a color code at colorpicker.com

  $(document).ready(function(){
   $("#pop_up_ebook_cover").attr('src', POP_UP_EBOOK_COVER);
   $("#pop_up_headline").html(POP_UP_HEADLINE);
   $("#pop_up_description").html(POP_UP_DESCRIPTION);
   $("#pop_up_form_headline").html(POP_UP_FORM_HEADLINE);
   $("#pop_up_form_subheadline").html(POP_UP_FORM_SUBHEADLINE);
   $("#inline_content").css("background", POP_UP_RIGHT_BACKGROUND_COLOR);
   $("#inline_content").html($("#inline_content").html() + '<form id="mktoForm_'+MARKETO_FORM_ID+'"></form>');

    MktoForms2.loadForm("https://"+MARKETO_DOMAIN, MARKETO_ID, MARKETO_FORM_ID, 
      function(form){
        form.onSuccess(function(values, followUpUrl){
          $(this.formElem).find('.mktoButton').html('✔ Success');
          setTimeout(function() {
            $.colorbox.close();
          }, 2500);
          return false;
        });
      }
    );
    var $window = $(window);
    var popupShown = false;
    var scrollTimeout;

    function scrollWatcher() {
      // After 30 seconds of not scrolling show the popup.
      scrollTimeout = setTimeout(function(){
        $window.one('scroll', function(){
          showPopup();
        });
        console.log("Watching for scroll");
      }, MARKETO_POP_UP_WAIT*1000); //30 seconds
    }

    if(! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      $("body").on('mouseleave', function() { showPopup(); });
      $window.blur(function() { showPopup(); });
      $window.on('scroll', function(){
        clearTimeout(scrollTimeout);
        // After the user has stopped scrolling trigger the scrollWatcher
        scrollWatcher();
      });
    }


    function showPopup() {
      if(popupShown) {
        return;
      }
      popupShown = true;
      
      if($.cookie('blog-signup-popup') === "true") {
        return;
      }
    
      $.cookie('blog-signup-popup', 'true', {expires: 15});
      $.colorbox({inline:true, width:"500px", height:"200px", href:"#inline_content"});
    }
  });
