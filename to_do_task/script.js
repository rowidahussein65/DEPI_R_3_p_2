    var todoList = document.getElementById("todo-list");
    var doneList = document.getElementById("done-list");
    var todoCount = document.getElementById("todo-count");
    var doneCount = document.getElementById("done-count");

    var addBtn = document.getElementById("addBtn");
    var taskInput = document.getElementById("new-task");

    var todos = [];

    addBtn.onclick = addTask;

    function addTask() {
      var taskText = taskInput.value.trim();
      if (taskText === "") {
        alert("Please enter a valid todo title.");
        return;
      }

      var newTodo = {
        id: new Date().getTime(),
        title: taskText,
        done: false
      };

      todos.push(newTodo);
      renderTodos();
      taskInput.value = "";
    }

    function deleteTask(id) {
      for (var i = 0; i < todos.length; i++) {
        if (todos[i].id === id) {
          todos.splice(i, 1);
          break;
        }
      }
      renderTodos();
    }

    function markAsDone(id) {
      for (var i = 0; i < todos.length; i++) {
        if (todos[i].id === id) {
          todos[i].done = true;
          break;
        }
      }
      renderTodos();
    }

    function renderTodos() {
      todoList.innerHTML = "";
      doneList.innerHTML = "";

      var todoCounter = 0;
      var doneCounter = 0;

      for (var i = 0; i < todos.length; i++) {
        var todo = todos[i];

        var li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";

        var span = document.createElement("span");
        span.textContent = todo.title;

        var btns = document.createElement("div");
        btns.className = "btn-group btn-group-sm";

        var del = document.createElement("button");
        del.className = "btn btn-outline-danger";
        del.innerHTML = '<i class="fas fa-trash-alt"></i>';
        del.onclick = (function(id) {
          return function() {
            deleteTask(id);
          };
        })(todo.id);
        btns.appendChild(del);

        if (todo.done) {
          span.style.textDecoration = "line-through";
          li.appendChild(span);
          li.appendChild(btns);
          doneList.appendChild(li);
          doneCounter++;
        } else {
          var check = document.createElement("button");
          check.className = "btn btn-outline-success";
          check.innerHTML = '<i class="fas fa-check"></i>';
          check.onclick = (function(id) {
            return function() {
              markAsDone(id);
            };
          })(todo.id);
          btns.appendChild(check);

          li.appendChild(span);
          li.appendChild(btns);
          todoList.appendChild(li);
          todoCounter++;
        }
      }

      todoCount.textContent = todoCounter;
      doneCount.textContent = doneCounter;
    }

    renderTodos();
