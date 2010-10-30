$(function() {

  $('#grid').click(function() {
    $('body').toggleGrid();
  });

  animateFlashMessages();

});

var socket = new io.Socket('firstleft.net', {port:8001}); 

socket.connect();

socket.on('connect', function(){ 
  //socket.send('hi!'); 
  //console.log('connected')
}); 

socket.on('message', function(message) { 
  //console.log(message);
  var message = JSON.parse(message);
  //console.log(message);
  if(message.id === 'glyph') {
    $('#glyph').html(message.glyph);
  }
});

socket.on('disconnect', function(){
  setTimeout(function() {
    window.location = window.location;
  }, 2000);
});

$.fn.toggleSlide = function() {

  if (this.hasClass('hide')) {
    this.slideDown().removeClass('hide');
  } else {
    this.slideUp().addClass('hide');
  }

};

$.fn.toggleGrid = function() {

  if ($('.grid').length > 0) {

    $('.grid').remove();

  } else {

    $('body').prepend('<div class="grid"></div>');
    $('.grid').css('height', document.body.scrollHeight);
    site.flash('info', 'Try resizing your window a few times to test the grid.');

  }

};

var site = {};

site.flash = function(type, msg) {

  $('#messages').append('<ul class="hide ' + type + '"><li>' + msg + '<li></ul>');
  animateFlashMessages();

};

function animateFlashMessages() {
  $('#messages ul').each(function() {
    var $this = $(this);
    $this.slideDown();
    setTimeout(function() {
      $this.slideUp();
      $this.remove();
    }, 3000);
  });
};

// Google async tracking
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-15463710-1']);
_gaq.push(['_trackPageview']);
(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
