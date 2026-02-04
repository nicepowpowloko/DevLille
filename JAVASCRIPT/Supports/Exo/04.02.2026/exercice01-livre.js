

// Création de l'objet livre avec toutes les propriétés demandées
const livre = {
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    annee: 1943,
    pages: 96
};

// Afficher le titre du livre
console.log("Titre du livre :", livre.titre);
// Résultat : "Titre du livre : Le Petit Prince"

// Afficher l'auteur du livre
console.log("Auteur :", livre.auteur);
// Résultat : "Auteur : Antoine de Saint-Exupéry"

// Afficher toutes les propriétés de l'objet
console.log("\nToutes les propriétés de l'objet livre :");
console.log(livre);
// Résultat : { titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", annee: 1943, pages: 96 }

// Autre façon d'afficher toutes les propriétés
console.log("\nAffichage détaillé :");
for (let propriete in livre) {
    console.log(`${propriete}: ${livre[propriete]}`);
}

/*
 * EXPLICATIONS :
 
 1. On crée un objet littéral avec la syntaxe { clé: valeur }
  2. Chaque propriété est séparée par une virgule
  3. On accède aux propriétés avec la notation pointée : livre.titre
  4. console.log(livre) affiche tout l'objet
 */
