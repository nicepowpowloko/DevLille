const menuButton = document.getElementById("menu-button");
const menuItems = document.getElementById("menu-items");

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("active");
    menuItems.classList.toggle("active");
});

//    const menuButton = document.getElementById("menu-button"); : Cette ligne de code récupère l'élément HTML avec l'ID "menu-button" et le stocke dans la variable menuButton. Cet élément correspond au bouton du menu.

//const menuItems = document.getElementById("menu-items"); : Cette ligne de code récupère l'élément HTML avec l'ID "menu-items" et le stocke dans la variable menuItems. Cet élément correspond à la liste des éléments du menu.

//menuButton.addEventListener("click", () => { ... }); : Cette ligne de code ajoute un écouteur d'événements (event listener) au bouton du menu. Cet écouteur est déclenché lorsqu'un clic est détecté sur le bouton.

//À l'intérieur de la fonction callback () => { ... }, vous avez deux actions qui sont exécutées lors du clic sur le bouton :

//menuButton.classList.toggle("active"); : Cette ligne de code ajoute ou supprime la classe CSS "active" à l'élément menuButton. La classe "active" est utilisée pour effectuer une rotation sur le bouton et lui donner l'apparence d'un X (ou d'un signe de fermeture) lorsque le menu est ouvert.

// menuItems.classList.toggle("active"); : Cette ligne de code ajoute ou supprime la classe CSS "active" à l'élément menuItems. La classe "active" est utilisée pour afficher ou masquer les éléments du menu. Lorsqu'elle est ajoutée, les éléments du menu s'affichent en forme de cercle, et lorsqu'elle est supprimée, le menu est réduit et les éléments sont masqués.

//En résumé, ce code JavaScript permet de basculer les classes "active" sur le bouton et les éléments du menu lorsque le bouton est cliqué, ce qui déclenche l'animation d'ouverture et de fermeture du menu circulaire.