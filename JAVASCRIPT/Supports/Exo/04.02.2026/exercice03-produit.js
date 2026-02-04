

// Création de l'objet produit initial
const produit = {
    nom: "Ordinateur portable",
    prix: 899,
    enStock: true
};

console.log("Objet produit initial :");
console.log(produit);

// Ajouter une propriété "marque"
produit.marque = "Dell";
console.log("\nAprès ajout de la marque :");
console.log(produit);

// Modifier le prix
produit.prix = 799;
console.log("\nAprès modification du prix :");
console.log(produit);

// Ajouter une propriété "quantite"
produit.quantite = 5;
console.log("\nAprès ajout de la quantité :");
console.log(produit);

// Afficher l'objet complet final
console.log("\nOBJET PRODUIT FINAL");
console.log(produit);

// Affichage formaté de toutes les propriétés
console.log("\nDÉTAILS DU PRODUIT");
console.log(`Nom : ${produit.nom}`);
console.log(`Marque : ${produit.marque}`);
console.log(`Prix : ${produit.prix}€`);
console.log(`En stock : ${produit.enStock ? "Oui" : "Non"}`);
console.log(`Quantité : ${produit.quantite}`);

/*
 * EXPLICATIONS :

 * 1. Pour AJOUTER une propriété : objet.nouvellePropriete = valeur
 * 2. Pour MODIFIER une propriété : objet.propriete = nouvelleValeur
 * 3. On peut aussi utiliser la notation entre crochets : objet["propriete"]
 * 4. Les propriétés peuvent être ajoutées à tout moment après la création
 * 
 * AUTRES FAÇONS D'AJOUTER/MODIFIER :

 * produit["marque"] = "Dell";        // Notation entre crochets
 * Object.assign(produit, { marque: "Dell" });  // Avec Object.assign
 */
