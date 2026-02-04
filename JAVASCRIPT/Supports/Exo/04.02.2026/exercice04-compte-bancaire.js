

// Création de l'objet compte bancaire
const compteBancaire = {
    titulaire: "Marie Dubois",
    solde: 1000,
    
    // Méthode pour déposer de l'argent
    deposer(montant) {
        this.solde += montant;
        console.log(` Dépôt de ${montant}€. Nouveau solde : ${this.solde}€`);
    },
    
    // Méthode pour retirer de l'argent
    retirer(montant) {
        this.solde -= montant;
        console.log(` Retrait de ${montant}€. Nouveau solde : ${this.solde}€`);
    },
    
    // Méthode pour afficher le solde
    afficherSolde() {
        console.log(` Solde actuel : ${this.solde}€`);
    }
};

// Tests des fonctionnalités
console.log(" GESTION DU COMPTE BANCAIRE \n");

console.log(`Titulaire du compte : ${compteBancaire.titulaire}`);
console.log(`Solde initial : ${compteBancaire.solde}€\n`);

// Déposer 500€
compteBancaire.deposer(500);

// Retirer 300€
compteBancaire.retirer(300);

// Afficher le solde final
console.log("\n SOLDE FINAL ");
compteBancaire.afficherSolde();

// Effectuer plusieurs opérations
console.log("\n AUTRES OPÉRATIONS ");
compteBancaire.deposer(200);
compteBancaire.deposer(150);
compteBancaire.retirer(100);
compteBancaire.afficherSolde();

/*
 * EXPLICATIONS :
 
 * 1. this.solde fait référence à la propriété "solde" de l'objet
 * 2. "+=" additionne le montant au solde actuel
 * 3. "-=" soustrait le montant du solde actuel
 * 4. Les méthodes peuvent modifier les propriétés de l'objet
 * 
 * AMÉLIORATIONS POSSIBLES :

 * - Vérifier que le montant est positif
 * - Vérifier qu'il y a assez d'argent pour le retrait
 * - Ajouter un historique des transactions
 */
