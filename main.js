$(document).ready(function() {
    $('#addTarefa').click(function(e) {
      e.preventDefault();
      var tarefa = $('#tarefa').val();
      if (tarefa) {
        $('#listaTarefas').append('<li>' + tarefa + '</li>');
        $('#tarefa').val('');
      }
    });
    $(document).on('click', '#listaTarefas li', function() {
      $(this).toggleClass('completed');
    });
  });
  