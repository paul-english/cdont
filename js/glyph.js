$(function() {
  var $glyph = $('#glyph');
  $(window).keyup(function(e) {
    var glyph = String.fromCharCode(e.keyCode)
    $glyph.html(glyph);
    //console.log(socket);
    socket.send(JSON.stringify({id:'glyph', glyph:glyph}));
    $.post('/glyph', {glyph:glyph}, function() {
      //console.log(arguments);
    });
    return false;
  });
});