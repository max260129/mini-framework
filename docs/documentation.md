# Documentation du Framework mini-framework
## Introduction

Le Framework MonFramework est un framework JavaScript développé pour abstraire le DOM, gérer l'état de l'application, gérer les événements et fournir un système de routage. Ce framework vise à faciliter le développement d'applications Web en fournissant une structure et des fonctionnalités de base.

## Fonctionnalités

Le framework MonFramework implémente les fonctionnalités suivantes :

1. **Abstraction du DOM** : Le framework fournit une abstraction du DOM pour simplifier la création et la manipulation d'éléments du DOM. La fonction createElement permet de créer facilement des éléments avec des attributs et des enfants.

2. **Système de routage** : Le framework comprend un système de routage qui synchronise l'état de l'application avec l'URL. Il permet de définir des routes et des actions à effectuer lorsque l'URL change.

3. **Gestion de l'état** : Le framework fournit un objet Store pour gérer l'état de l'application. Il permet de lire et de modifier l'état global de l'application de manière centralisée.

4. **Gestion des événements** : Le framework offre une fonctionnalité de gestion des événements qui permet d'ajouter des écouteurs d'événements aux éléments du DOM de manière simplifiée.

## Utilisation du Framework mini-framework

Pour commencer à utiliser le framework mini-framework, vous pouvez suivre les étapes suivantes :

1. **Installation** : Clonez le projet depuis le dépôt GitHub du framework MonFramework et incluez les fichiers JavaScript dans votre projet.

2. **Importation** : Importez les fonctionnalités nécessaires dans votre fichier JavaScript principal.
```
import { createElement, Router, Store } from 'mini-framework';
```

3. **Création d'éléments du DOM** : Utilisez la fonction createElement pour créer des éléments du DOM de manière simple et concise.
```
const myElement = createElement('div', { class: 'my-class' }, [
    'Contenu de l\'élément',
    createElement('button', { events: { click: handleClick } }, 'Cliquez ici')
]);

function handleClick() {
    // Gestionnaire d'événement pour le bouton
}
```

4. **Définition des routes** : Utilisez l'objet Router pour définir des routes et des actions à effectuer lorsque l'URL change.
```
Router.addRoute('/', handleHome);
Router.addRoute('/page', handlePage);

function handleHome() {
    // Action à effectuer lorsque l'URL est '/'
}

function handlePage() {
    // Action à effectuer lorsque l'URL est '/page'
}
```
5. **Gestion de l'état de l'application** : Utilisez l'objet Store pour gérer l'état global de votre application.
```
Store.setState({ counter: 0 });

function incrementCounter() {
    const currentState = Store.getState();
    Store.setState({ counter: currentState.counter + 1 });
}
```

## Exemples de projet TodoMVC

Le projet [Todo-app](https://zone01normandie.org/git/max92/mini-framework/src/branch/master/docs/todo-app.md) est un exemple de projet créé en utilisant le framework mini-framework. Vous pouvez trouver des exemples complets de projet TodoM