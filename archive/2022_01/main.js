$(document).ready(function(){

  // Click to expand
  $('.collapsible-title').click(function() { 
    var title = $(this).attr('id');
    var content = "#" + title + "-content";
    $(content).toggle(); 
  });
  // $('#other-classes-title').on("click",function(){
  //   $('#other-classes-content').toggle();
  // });
  // $('#chem-classes-title').on("click",function(){
  //   $('#chem-classes-content').toggle();
  // });
  // $('#mse-classes-title').on("click",function(){
  //   $('#mse-classes-content').toggle();
  // });
  // $('#mae-classes-title').on("click",function(){
  //   $('#mae-classes-content').toggle();
  // });


  // $sections incleudes all of the container divs that relate to menu items.
  var $sections = $('.page');
  var $psubsections = $('.projects-section');
  var $esubsections = $('.education-section');
  // The user scrolls
  $(window).scroll(function(){
    
    // currentScroll is the number of pixels the window has been scrolled
    var currentScroll = $(this).scrollTop();
    
    // $currentSection is somewhere to place the section we must be looking at
    var $currentSection;
    
    // We check the position of each of the divs compared to the windows scroll positon
    $sections.each(function(){
      // divPosition is the position down the page in px of the current section we are testing      
      var divPosition = $(this).offset().top;
      
      // If the divPosition is less the the currentScroll position the div we are testing has moved above the window edge.
      // the -1 is so that it includes the div 1px before the div leave the top of the window.
      // if( divPosition - 1 < currentScroll ){
      var windowheight = $(window).height();
      if( divPosition - 45 < currentScroll ){
        // We have either read the section or are currently reading the section so we'll call it our current section
        $currentSection = $(this);
        // If the next div has also been read or we are currently reading it we will overwrite this value again. This will leave us with the LAST div that passed.
      }
      // This is the bit of code that uses the currentSection as its source of ID
      var id = $currentSection.attr('id');
      var plinks = document.getElementsByClassName('sidebar-projects-links');      
      $(plinks).find("a").removeClass('sub-active');
      $('a').removeClass('active');
      $(plinks).find(".vertical-line").removeClass('sub-active');
      $("[href='#"+id+"']").addClass('active');
      if (id == "Projects") {
        $(plinks).find(".vertical-line").addClass('sub-active');
        var $currentSubsection
        $psubsections.each(function(){
          var divPos = $(this).offset().top;
          // var windowheight = $(window).height();
          if(divPos - 15 < currentScroll ) {
            // We have either read the section or are currently reading the section so we'll call it our current section
            $currentSubsection = $(this);
            // If the next div has also been read or we are currently reading it we will overwrite this value again. This will leave us with the LAST div that passed.
          }
          if ($currentSubsection) {
            var subid = $currentSubsection.attr('id');
            $('a').removeClass('sub-active');
            $("[href='#"+subid+"']").addClass('sub-active');
            // var plinks = document.getElementsByClassName('sidebar-projects-links');      $(plinks).find("a").removeClass('sub-active');
            // $(plinks).find("a").addClass('sub-active');
          }
        })
      }
      var elinks = document.getElementsByClassName('sidebar-education-links');      
      $(elinks).find("a").removeClass('sub-active');
      $('a').removeClass('active');
      $(elinks).find(".vertical-line").removeClass('sub-active');
      $("[href='#"+id+"']").addClass('active');
      if (id == "Education") {
        $(elinks).find(".vertical-line").addClass('sub-active');
        var $currentSubsection
        $esubsections.each(function(){
          var divPos = $(this).offset().top;
          // var windowheight = $(window).height();
          if(divPos - 20 < currentScroll ) {
            // We have either read the section or are currently reading the section so we'll call it our current section
            $currentSubsection = $(this);
            // If the next div has also been read or we are currently reading it we will overwrite this value again. This will leave us with the LAST div that passed.
          }
          if ($currentSubsection) {
            var subid = $currentSubsection.attr('id');
            $('a').removeClass('sub-active');
            $("[href='#"+subid+"']").addClass('sub-active');
            // var plinks = document.getElementsByClassName('sidebar-projects-links');      $(plinks).find("a").removeClass('sub-active');
            // $(plinks).find("a").addClass('sub-active');
          }
        })
      }
      
    })

    

  });

});