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

  // Mettre à jour le compteur
  updateItemCount();
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

      // Ajoutez un gestionnaire d'événements pour le double-clic
      taskItem.addEventListener('dblclick', () => {
        handleTaskDoubleClick(task.id);
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

    const showActiveButton = document.getElementById('active-button');
    showActiveButton.addEventListener('click', handleShowActiveTasks);

    const showAllButton = document.getElementById('all-button');
    showAllButton.addEventListener('click', handleShowAllTasks);

    const showCompletedButton = document.getElementById('completed-button');
    showCompletedButton.addEventListener('click', handleShowCompletedTasks);

    appContainer.appendChild(taskList);
  }
}


function handleShowCompletedTasks() {
  const tasks = store.getState().tasks;

  const completedTasks = tasks.filter(task => task.completed);

  appContainer.innerHTML = '';

  if (completedTasks.length === 0) {
    const emptyMessage = createElement('p', null, 'No completed tasks found.');
    appContainer.appendChild(emptyMessage);
  } else {
    const taskList = createElement('ul', { id: 'task-list' }, []);

    completedTasks.forEach(task => {
      const taskItem = createElement('li', null, [
        createElement('input', { type: 'checkbox', checked: task.completed }),
        createElement('span', null, task.title)
      ]);

      // Ajoutez un gestionnaire d'événements pour la case à cocher
      taskItem.querySelector('input').addEventListener('change', () => {
        handleTaskToggle(task.id);
      });

      taskList.appendChild(taskItem);
    });

    const clearCompletedButton = document.getElementById('clear-completed-button');

    if (!clearCompletedButton) {
      const newClearCompletedButton = createElement('button', { id: 'clear-completed-button' }, 'Clear Completed');
      newClearCompletedButton.addEventListener('click', handleClearCompleted);
      appContainer.appendChild(newClearCompletedButton);
    } else {
      clearCompletedButton.addEventListener('click', handleClearCompleted);
    }

    // Mettre à jour l'URL en ajoutant '/completed'
    window.history.pushState(null, null, '/todo-app/completed');

    appContainer.appendChild(taskList);
  }
}

function handleShowAllTasks() {
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
      const checkbox = taskItem.querySelector('input');
      checkbox.addEventListener('change', () => {
        handleTaskToggle(task.id);
      });

      // Vérifiez si la tâche est complétée et cochez la case appropriée
      checkbox.checked = task.completed;

      taskList.appendChild(taskItem);
    });

    const clearCompletedButton = document.getElementById('clear-completed-button');

    if (!clearCompletedButton) {
      const newClearCompletedButton = createElement('button', { id: 'clear-completed-button' }, 'Clear Completed');
      newClearCompletedButton.addEventListener('click', handleClearCompleted);
      appContainer.appendChild(newClearCompletedButton);
    } else {
      clearCompletedButton.addEventListener('click', handleClearCompleted);
    }

    // Mettre à jour l'URL pour afficher toutes les tâches (supprimer '/active' et '/completed')
    window.history.pushState(null, null, '/todo-app');

    appContainer.appendChild(taskList);
  }
}

function handleShowActiveTasks() {
  const tasks = store.getState().tasks;

  const activeTasks = tasks.filter(task => !task.completed);

  appContainer.innerHTML = '';

  if (activeTasks.length === 0) {
    const emptyMessage = createElement('p', null, 'No active tasks found.');
    appContainer.appendChild(emptyMessage);
  } else {
    const taskList = createElement('ul', { id: 'task-list' }, []);

    activeTasks.forEach(task => {
      const taskItem = createElement('li', null, [
        createElement('input', { type: 'checkbox', completed: false }),
        createElement('span', null, task.title)
      ]);

      // Ajoutez un gestionnaire d'événements pour la case à cocher
      taskItem.querySelector('input').addEventListener('change', () => {
        handleTaskToggle(task.id);
      });

      taskList.appendChild(taskItem);
    });

    const clearCompletedButton = document.getElementById('clear-completed-button');

    if (!clearCompletedButton) {
      const newClearCompletedButton = createElement('button', { id: 'clear-completed-button' }, 'Clear Completed');
      newClearCompletedButton.addEventListener('click', handleClearCompleted);
      appContainer.appendChild(newClearCompletedButton);
    } else {
      clearCompletedButton.addEventListener('click', handleClearCompleted);
    }

    // Mettre à jour l'URL en ajoutant '/active'
    window.history.pushState(null, null, '/todo-app/active');

    appContainer.appendChild(taskList);
  }
}

function handleTaskDoubleClick(taskId) {
  const tasks = store.getState().tasks;

  const updatedTasks = tasks.map(task => {
    if (task.id === taskId) {
      const newTitle = prompt('Enter the new task title:', task.title);
      return { ...task, title: newTitle };
    }
    return task;
  });

  store.setState({ tasks: updatedTasks });

  renderTaskList();
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

  // Mettre à jour le compteur
  updateItemCount();
}

function updateItemCount() {
  const tasks = store.getState().tasks;
  const incompleteTasks = tasks.filter(task => !task.completed);
  const itemCount = incompleteTasks.length;
  const itemCountElement = document.getElementById('item-count');
  itemCountElement.textContent = `${itemCount} item${itemCount !== 1 ? 's' : ''} left`;
}

function handleClearCompleted() {
  const tasks = store.getState().tasks;

  const incompleteTasks = tasks.filter(task => !task.completed);

  store.setState({ tasks: incompleteTasks });

  renderTaskList();

  // Mettre à jour le compteur
  updateItemCount();
}

const addTaskButton = document.getElementById('add-task-button');
addTaskButton.addEventListener('click', handleAddTask);

const clearCompletedButton = document.getElementById('clear-completed-button');
clearCompletedButton.addEventListener('click', handleClearCompleted);

renderTaskList();
