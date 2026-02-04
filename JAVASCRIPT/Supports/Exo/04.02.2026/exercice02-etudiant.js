

// Création de l'objet étudiant avec ses propriétés et une méthode
const etudiant = {
    nom: "Martin",
    prenom: "Lucas",
    age: 22,
    formation: "DWWM",
    
    // Méthode pour se présenter
    // On utilise "this" pour accéder aux propriétés de l'objet
    sePresenter() {
        return `Je m'appelle ${this.prenom} ${this.nom}, j'ai ${this.age} ans et je suis en formation ${this.formation}`;
    }
};

// Appeler la méthode et afficher le résultat
console.log(etudiant.sePresenter());
// Résultat : "Je m'appelle Lucas Martin, j'ai 22 ans et je suis en formation DWWM"

// On peut aussi stocker le résultat dans une variable
const presentation = etudiant.sePresenter();
console.log("\nPrésentation stockée :");
console.log(presentation);

// Afficher les propriétés individuellement
console.log("\nInformations de l'étudiant :");
console.log(`Nom complet : ${etudiant.prenom} ${etudiant.nom}`);
console.log(`Âge : ${etudiant.age} ans`);
console.log(`Formation : ${etudiant.formation}`);

/*
 * EXPLICATIONS :
 * 1. "this" fait référence à l'objet lui-même (etudiant)
 * 2. On utilise les template literals (backticks) pour créer la phrase
 * 3. Syntaxe moderne pour les méthodes : sePresenter() { ... }
 * 4. On peut aussi écrire : sePresenter: function() { ... }
 */
