
// Création d'une fonction pour créer un élément du DOM
function createElement(tag, attrs, children) {
    // Création de l'élément
    const element = document.createElement(tag);

    // Ajout des attributs
    if(attrs) {
        Object.keys(attrs).forEach((attr) => {
            element.setAttribute(attr, attrs[attr]);
        });
    }

    // Ajout des enfants
    if(children) {
        children.forEach((child) => {
            if(typeof child === 'string') {
                // Si l'enfant est une chaîne, il est ajouté comme texte
                element.textContent = child;
            } else {
                // Sinon, on suppose que l'enfant est un élément du DOM et on l'ajoute
                element.appendChild(child);
            }
        });
    }

    // Renvoi de l'élément
    return element;
}

// Ajout d'un élément à un parent
function appendChild(parent, child) {
    parent.appendChild(child);
}

// Suppression d'un élément
function removeElement(element) {
    element.parentNode.removeChild(element);
}

// Modification d'un attribut d'un élément
function setAttribute(element, attr, value) {
    element.setAttribute(attr, value);
}

// Obtention d'un élément par son id
function getElementById(id) {
    return document.getElementById(id);
}

// Exportation des fonctions
export { createElement, appendChild, removeElement, setAttribute, getElementById };
