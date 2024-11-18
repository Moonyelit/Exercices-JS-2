# Exercices JavaScript - Partie 2

**IMPORTANT**
Toutes les ressources aux exercices seront fourni quand cela sera nécessaire.  
Pour la sécurité de votre code, à chaque formulaire verifiez que ce qui est saisi correspond à ce qui est attendu.

## Exercice 1
Dans le fichier HTML fourni, changer l'image au survol de celle-ci par la deuxième.

## Exercice 2
Dans le fichier HTML fourni, afficher une boite de dialogue avec le message : *"Merci de votre participation"* quand le champ de saisie perd le focus.

## Exercice 3
Dans le fichier HTML fourni, afficher une boite de dialogue avec la valeur du champ dès que l'on appuie sur le clavier.

## Exercice 4
Dans le fichier HTML fourni, faire que le bouton RAZ efface les données des champs du formulaire.

## Exercice 5
Dans le fichier HTML fourni, faire comme dans l'exercice 1 mais avec 5 images.  
**Bonus** Ne faire qu'une seule fonction JavaScript pour cet exercice.

## Exercice 6
Dans le fichier HTML fourni, faire comme dans l'exercice 5 mais remettre l'image d'origine dès que la souris ne survol plus l'image.  
**Bonus** Ne faire que deux fonctions JavaScript pour cet exercice.









// Sélectionne toutes les images
let images = document.querySelectorAll('img');

// Fonction pour changer l'image au survol
function changeImage() {
    images.forEach(image => {
        // Stocke l'URL d'origine et l'URL de remplacement
        const originalSrc = image.src;
        const hoverSrc = originalSrc.replace('.jpg', '_2.jpg');

        // Écoute l'événement "mouseover" pour remplacer l'image
        image.addEventListener('mouseover', () => {
            image.src = hoverSrc;
        });

        // Écoute l'événement "mouseout" pour revenir à l'image d'origine
        image.addEventListener('mouseout', () => {
            image.src = originalSrc;
        });
    });
}

// Appelle la fonction
changeImage();

console.log(images);



