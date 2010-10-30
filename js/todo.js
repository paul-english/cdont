$(function() {
  document.todos.todo.focus();

  $('form').submit(function() {
    $.post($('form')[0].action, $('form').serialize(), function(data, status, xhr) {
      if (data === 'ok') {
        var list_item = '<li>' + 
                          '<input type="checkbox" />' + 
                          '<label class="inline">' +
                            $('input[name=todo]').val() +
                          '</label>' + 
                         '</li>';
        $('#todos').prepend(list_item);
      }
    });
    return false;
  });

});