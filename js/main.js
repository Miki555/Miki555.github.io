$(function(){

  // waypointanimation
    $('.event').waypoint(function(direction){
      let activePoint = $(this.element);
      if (direction === 'down') {
        activePoint.addClass('eventOn');
      // } else {
      //   activePoint.removeClass('eventOn');
      }
    },{offset : '75%'});

  //言語切り替え
  var en=$('.en'),
      ja=$('.ja'),
      btn_ja=$('.lang_ja'),
      btn_en=$('.lang_en');

  en.hide();
  btn_ja.css('color','#c5b482');

  btn_en.on('click',function(){
    ja.hide();
    en.show();
    btn_ja.css('color','#f6f6f6');
    btn_en.css('color','#c5b482');
  });
  btn_ja.on('click',function(){
    en.hide();
    ja.show();
    btn_en.css('color','#f6f6f6');
    btn_ja.css('color','#c5b482');
  });

  $(function(){
    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });

});












