# Todo App

Cette application Todo est un exemple d'application de gestion de tâches réalisée avec notre propre framework. Elle vous permet de créer, modifier et supprimer des tâches.

## Installation

1. Clonez ce dépôt sur votre machine locale.
2. Assurez-vous d'avoir Node.js installé sur votre machine.
3. Exécutez `npm install` pour installer les dépendances.

## Utilisation

1. Exécutez `npm start` pour démarrer l'application.
2. Ouvrez votre navigateur et accédez à `http://localhost:3000` pour voir l'application.

## Fonctionnalités principal

- **Tableau de bord**: L'application présente un tableau de bord avec des informations générales sur l'application.

- **Liste des tâches**: La liste des tâches affiche toutes les tâches disponibles.

- **Ajouter une tâche**: Vous pouvez ajouter une nouvelle tâche en saisissant le titre de la tâche dans le champ de saisie et en cliquant sur le bouton "Ajouter".

- **Modifier une tâche**: Pour modifier une tâche existante, cliquez sur la tâche dans la liste des tâches. Vous pouvez modifier le titre de la tâche et appuyer sur "Entrée" pour enregistrer les modifications.

- **Coche des tâches**: Vous pouvez cocher une tâche pour marquer sa complétion. La case à cocher sera mise à jour en fonction de l'état actuel de la tâche.

- **Supprimer des tâches**: Vous pouvez supprimer une tâche en cliquant sur le bouton "Supprimer" à côté de la tâche dans la liste des tâches.

- **Effacer les tâches terminées**: Vous pouvez effacer toutes les tâches terminées en cliquant sur le bouton "Effacer les tâches terminées".

## Structure du code

- `src/routing/router.js`: Ce fichier contient la classe `Router` qui gère le routage de l'application.

- `src/state/store.js`: Ce fichier contient la classe `Store` qui gère l'état de l'application.

- `src/domUtils.js`: Ce fichier contient des utilitaires DOM pour créer et manipuler des éléments du DOM.

- `index.js`: Ce fichier est le point d'entrée de l'application. Il initialise le routeur, le magasin et les composants de l'application.

## Contribuer

Si vous souhaitez contribuer à l'amélioration de cette application, vous pouvez ouvrir une demande de pull sur le dépôt GitHub.

## Licence

Cette application est sous licence MIT. Vous pouvez consulter le fichier `LICENSE` pour plus d'informations.

N'hésitez pas à explorer le code source de l'application pour une compréhension plus détaillée de son fonctionnement.
