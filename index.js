import { Router } from './src/routing/router.js';
import { Store } from './src/state/store.js';
import { createElement } from './src/domUtils.js';

// Code d'initialisation de votre application
// Par exemple, vous pouvez créer des éléments du DOM, configurer le routage,
// initialiser le magasin (store), etc.

// Exemple de code d'initialisation du routeur
const router = new Router();

// Exemple de rendu d'un composant principal pour la route '/'
router.addRoute('/', () => {
    const mainComponent = createElement('div', { id: 'main-component' }, [
        createElement('h2', null, 'Welcome to the App'),
        createElement('p', null, 'This is the main component of the application.')
    ]);

    appContainer.innerHTML = '';
    appContainer.appendChild(mainComponent);
});

// Exemple de rendu du tableau de bord de l'application pour la route '/dashboard'
router.addRoute('/dashboard', () => {
    const dashboardComponent = createElement('div', { id: 'dashboard-component' }, [
        createElement('h2', null, 'Dashboard'),
        createElement('p', null, 'This is the dashboard of the application.')
    ]);

    appContainer.innerHTML = '';
    appContainer.appendChild(dashboardComponent);
});

// Exemple de mise à jour de l'état du magasin
store.setState({ 
    tasks: [
        { id: 1, title: 'Task 1', completed: false },
        { id: 2, title: 'Task 2', completed: true },
        { id: 3, title: 'Task 3', completed: false }
    ]
});

// Exemple de rendu de la liste des tâches à partir de l'état du magasin
function renderTaskList() {
    const tasks = store.getState().tasks;
    const taskList = createElement('ul', { id: 'task-list' }, []);

    tasks.forEach(task => {
        const taskItem = createElement('li', null, [
            createElement('input', { type: 'checkbox', checked: task.completed }),
            createElement('span', null, task.title)
        ]);

        taskList.appendChild(taskItem);
    });

    appContainer.innerHTML = '';
    appContainer.appendChild(taskList);
}

// Exemple de gestionnaire d'événement pour le bouton d'ajout de tâche
function handleAddTask() {
    const newTaskInput = document.getElementById('new-task-input');
    const newTaskTitle = newTaskInput.value;
  
    // Ajouter le code pour créer une nouvelle tâche dans l'état du magasin
    // et appeler renderTaskList() pour mettre à jour l'affichage
    // ...
  
    // Réinitialiser l'input de la nouvelle tâche
    newTaskInput.value = '';
  }
  
  // Exemple d'ajout d'un événement de clic sur le bouton d'ajout de tâche
  const appContainer = createElement('div', { id: 'app' }, []);
  
  // Ajout du conteneur de l'application au DOM
  document.body.appendChild(appContainer);
  
  // Sélection du bouton dans le formulaire
  const addTaskButton = document.getElementById('add-task-button');
  addTaskButton.addEventListener('click', handleAddTask);
  
  // Exemple de mise à jour de l'affichage en fonction de l'état du magasin
  function updateView() {
    renderTaskList();
    // Ajouter d'autres mises à jour d'affichage en fonction de l'état du magasin
  }

// Appel initial pour mettre à jour l'affichage
updateView();
