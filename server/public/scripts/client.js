$(document).ready(onReady);

function onReady(){
  $('#addTask').on('click', submitTask);
}

// POST tasks
function submitTask(){
  let thisTask = {
    task: $('#taskIn').val()
  }
  $.ajax({
    type: 'POST',
    url: '/list',
    data: thisTask
    }).then(function(response) {
      console.log('Response from server:', response);
      renderTasks();
    }).catch(function(error) {
      console.log('Error in POST', error)
      alert('unable to add to list at this time');
    });

}

// GET tasks
function renderTasks(){

}

// PUT tasks
function completeTask(){

}

// DELETE tasks
function deleteTask(){

}