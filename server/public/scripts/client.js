$(document).ready(onReady);

function onReady() {
  $('#addTask').on('click', submitTask);
  showTasks();
}

// PUT tasks
function completeTask() {

}

// DELETE tasks
function deleteTask() {

}

// GET tasks
function showTasks() {
  $.ajax({
    type: 'GET',
    url: '/list'
  }).then(function (response) {
    console.log(response);
    // append to DOM
  }).catch(function (error) {
    console.log('error in GET', error);
  });
}

// POST tasks
function submitTask() {
  let thisTask = {
    task: $('#taskIn').val()
  }
  $.ajax({
    type: 'POST',
    url: '/list',
    data: thisTask
  }).then(function (response) {
    console.log('Response from server:', response);
    showTasks();
  }).catch(function (error) {
    console.log('Error in POST', error)
    alert('unable to add to list at this time');
  });
}
