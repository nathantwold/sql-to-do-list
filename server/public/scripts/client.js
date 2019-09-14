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
    let el = $('#taskList');
    el.empty();
    for (i = 0; i < response.length; i++) {
      el.append(`
        <li class="newTask">${response[i].task}
        <button class="completeBtn">√</button>
        <button class="deleteBtn">X</button>
        </li>
      `)
    }
  }).catch(function (error) {
    console.log('error in GET', error);
  });
}

// POST tasks
function submitTask() {
  $('#taskIn').val();
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
  $('#taskIn').val('');
}
