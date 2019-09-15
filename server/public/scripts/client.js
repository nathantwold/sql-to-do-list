$(document).ready(onReady);

function onReady() {
  $('#addTask').on('click', submitTask);
  showTasks();
}

// PUT tasks
function completeTask() {
  console.log('in completeTask');

}

// DELETE tasks
function deleteTask() {
  let taskId = $(this).parent().data('id');
  $.ajax({
    type: 'DELETE',
    url: `/list/${taskId}`
  }).then(function(response){
    console.log(response);
    showTasks();
  }).catch(function(error){
    alert('unable to delete at this time');
  })
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
      if (response[i].complete == '1') {
        el.append(`
        <li data-id="${response[i].id}"class="completedTask">${response[i].task}
        <button class="completeBtn">√</button>
        <button class="deleteBtn">X</button>
        </li>
      `)
      } else {
        el.append(`
        <li data-id="${response[i].id}" class="newTask">${response[i].task}
        <button class="completeBtn">√</button>
        <button class="deleteBtn">X</button>
        </li>
      `)
      }
    }
    $('.deleteBtn').on('click', deleteTask);
    $('.completeBtn').on('click', completeTask);
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
    showTasks();
  }).catch(function (error) {
    alert('unable to add to list at this time');
  });
  $('#taskIn').val('');
}
