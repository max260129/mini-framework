import { Router } from './src/routing/router.js';
import { Store } from './src/state/store.js';
import { createElement } from './src/domUtils.js';

const router = new Router();
const store = new Store();

const appContainer = createElement('div', { id: 'app' }, []);
document.body.appendChild(appContainer);

router.addRoute('/dashboard', () => {
  const dashboardComponent = createElement('div', { id: 'dashboard-component' }, [
    createElement('h2', null, 'Dashboard'),
    createElement('p', null, 'This is the dashboard of the application.')
  ]);

  appContainer.innerHTML = '';
  appContainer.appendChild(dashboardComponent);
});

// Initialisation des tâches
store.setState({
  tasks: []
});

function handleTaskToggle(taskId) {
  const tasks = store.getState().tasks;

  const updatedTasks = tasks.map(task => {
    if (task.id === taskId) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });

  store.setState({ tasks: updatedTasks });

  renderTaskList();
}

function renderTaskList() {
  const tasks = store.getState().tasks;
  appContainer.innerHTML = '';

  if (tasks.length === 0) {
    const emptyMessage = createElement('p', null, 'No tasks found.');
    appContainer.appendChild(emptyMessage);
  } else {
    const taskList = createElement('ul', { id: 'task-list' }, []);

    tasks.forEach(task => {
      const taskItem = createElement('li', null, [
        createElement('input', { type: 'checkbox', checked: task.completed }),
        createElement('span', null, task.title)
      ]);

      // Ajoutez un gestionnaire d'événements pour la case à cocher
      taskItem.querySelector('input').addEventListener('change', () => {
        handleTaskToggle(task.id);
      });

      // Mettre à jour la propriété "checked" de la case à cocher en fonction de l'état actuel de la tâche
      taskItem.querySelector('input').checked = task.completed;

      taskList.appendChild(taskItem);
    });

    const clearCompletedButton = document.getElementById('clear-completed-button');

    if (!clearCompletedButton) {
      const newClearCompletedButton = createElement('button', { id: 'clear-completed-button' }, 'Clear Completed');
      newClearCompletedButton.addEventListener('click', handleClearCompleted);
      appContainer.appendChild(newClearCompletedButton);
      renderTaskList(); // Ajout de cette ligne pour mettre à jour l'affichage
    }

    appContainer.appendChild(taskList);
  }
}

function handleAddTask(event) {
  event.preventDefault();

  const newTaskInput = document.getElementById('new-task-input');
  const newTaskTitle = newTaskInput.value;

  if (newTaskTitle.trim() !== '') {
    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      completed: false
    };

    const tasks = store.getState().tasks;
    const updatedTasks = [...tasks, newTask];
    store.setState({ tasks: updatedTasks });

    renderTaskList();

    newTaskInput.value = '';
  }
}

function handleClearCompleted() {
  const tasks = store.getState().tasks;

  const incompleteTasks = tasks.filter(task => !task.completed);

  store.setState({ tasks: incompleteTasks });

  console.log(tasks)

  renderTaskList();
}


const addTaskButton = document.getElementById('add-task-button');
addTaskButton.addEventListener('click', handleAddTask);

const clearCompletedButton = document.getElementById('clear-completed-button');
clearCompletedButton.addEventListener('click', handleClearCompleted);

renderTaskList();
