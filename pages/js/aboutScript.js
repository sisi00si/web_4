// Array to store tasks
var tasks = [];

// Add a new task
function addTask(task) {
    tasks.push({
        task: task,
        completed: false
    });
}

// Delete a task by its index
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Toggle the completion status of a task by its index
function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Render tasks in the task list
function renderTasks() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach(function (task, index) {
        var listItem = document.createElement("li");
        listItem.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">${task.task}</span>
            <button class="completeButton" onclick="toggleComplete(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
            <button class="deleteButton" onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(listItem);
    });
}

// Example usage of the functions
addTask("Subscribe to our social media.");
addTask("Like and comment our Instagram posts.");
addTask("Post a picture of yourself on your account.");
addTask("Use the hashtag #aituMerch.");
addTask("Tag astana_it_university.");

// Initial rendering of tasks
renderTasks();

// Handle adding a new task from user input
function handleAddTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        addTask(taskText);
        renderTasks();
        taskInput.value = "";
    }
}

// Event listener for the "Add" button
var addTaskButton = document.getElementById("addTaskButton");
addTaskButton.addEventListener("click", handleAddTask);


document.addEventListener("DOMContentLoaded", function() {
  // Get the elements
  const welcomeHeading = document.getElementById('welcome');
  const missionHeading = document.getElementById('mission');
  const sustainabilityHeading = document.getElementById('sustainability');
  const eventsHeading = document.getElementById('events');
  const merchRaffleHeading = document.getElementById('MerchRaffle');
  const taskInputContainer = document.getElementById('taskInputContainer');
  const taskList = document.getElementById('taskList');

  // Animation for headings
  const headings = [welcomeHeading, missionHeading, sustainabilityHeading, eventsHeading, merchRaffleHeading];
  headings.forEach(heading => {
    heading.addEventListener('mouseover', function() {
      gsap.to(heading, { rotation: 360, duration: 1, ease: 'power1.out' });
    });

    heading.addEventListener('mouseout', function() {
      gsap.to(heading, { rotation: 0, duration: 1, ease: 'power1.out' });
    });
  });

  // Animation for task input and list
  taskInputContainer.addEventListener('mouseover', function() {
    gsap.to(taskInputContainer, { backgroundColor: '#ffcc00', duration: 0.5 });
  });

  taskInputContainer.addEventListener('mouseout', function() {
    gsap.to(taskInputContainer, { backgroundColor: '#ffffff', duration: 0.5 });
  });

  taskInputContainer.addEventListener('click', function() {
    gsap.fromTo(taskInputContainer, { x: -10 }, { x: 10, repeat: 5, yoyo: true, duration: 0.1 });
  });

  // Add task to the list
  document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput').value;
    if (taskInput.trim() !== '') {
      const listItem = document.createElement('li');
      listItem.textContent = taskInput;
      taskList.appendChild(listItem);
      document.getElementById('taskInput').value = '';
      gsap.from(listItem, { opacity: 0, y: -20, duration: 0.5, ease: 'power1.out' });
    }
  });
});

