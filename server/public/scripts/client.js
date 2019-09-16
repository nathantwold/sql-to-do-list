$(document).ready(onReady);

function onReady() {
  $('#addTask').on('click', submitTask);
  $('#taskList').on('click', '.deleteBtn', deleteTask);
  $('#taskList').on('click', '.completeBtn', completeTask);
  showTasks();
}

// PUT tasks
function completeTask() {
  let taskId = $(this).parent().data('id');
  $.ajax({
    type: 'PUT',
    url: `/list/complete/${taskId}`,
    data: {
      complete: '1'
    }
  }).then(function (response) {
    showTasks();
  }).catch(function (error) {
    alert('can not complete at this time');
  })
}

// DELETE tasks
function deleteTask() {
  let taskId = $(this).parent().data('id');
  $.ajax({
    type: 'DELETE',
    url: `/list/${taskId}`
  }).then(function (response) {
    showTasks();
  }).catch(function (error) {
    alert('unable to delete at this time');
  })
}

// GET tasks
function showTasks() {
  $.ajax({
    type: 'GET',
    url: '/list'
  }).then(function (response) {
    // append to DOM
    let el = $('#taskList');
    el.empty();
    response.forEach(function(item){
      if (item.complete == '1') {
        el.append(`
        <li data-id="${item.id}"class="completedTask">${item.task}
          <button class="completeBtn">√</button>
          <button class="deleteBtn">X</button>
        </li>
      `)
      } else {
        el.append(`
        <li data-id="${item.id}" class="newTask">${item.task}
          <button class="completeBtn">√</button>
          <button class="deleteBtn">X</button>
        </li>
      `)
      }
    })
  }).catch(function (error) {
    alert('unable to show tasks at this time');
  });
}

// POST tasks
function submitTask() {
  let thisTask = {
    task: $('#taskIn').val()
  }
  if (thisTask.task == '') {
    alert('enter a task');
    return false;
  } else {
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
}
