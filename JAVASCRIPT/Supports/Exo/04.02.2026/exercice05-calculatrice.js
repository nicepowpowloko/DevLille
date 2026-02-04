

// Création de l'objet calculatrice avec toutes les opérations
const calculatrice = {
    // Méthode pour l'addition
    additionner(a, b) {
        return a + b;
    },
    
    // Méthode pour la soustraction
    soustraire(a, b) {
        return a - b;
    },
    
    // Méthode pour la multiplication
    multiplier(a, b) {
        return a * b;
    },
    
    // Méthode pour la division
    diviser(a, b) {
        if (b === 0) {
            return "Erreur : division par zéro impossible";
        }
        return a / b;
    }
};

// Tests de toutes les méthodes
console.log(" TESTS DE LA CALCULATRICE \n");

// Test addition
console.log("Addition :");
console.log(`10 + 5 = ${calculatrice.additionner(10, 5)}`);
console.log(`25 + 17 = ${calculatrice.additionner(25, 17)}`);

// Test soustraction
console.log("\nSoustraction :");
console.log(`10 - 5 = ${calculatrice.soustraire(10, 5)}`);
console.log(`30 - 12 = ${calculatrice.soustraire(30, 12)}`);

// Test multiplication
console.log("\nMultiplication :");
console.log(`10 × 5 = ${calculatrice.multiplier(10, 5)}`);
console.log(`7 × 8 = ${calculatrice.multiplier(7, 8)}`);

// Test division
console.log("\nDivision :");
console.log(`10 ÷ 5 = ${calculatrice.diviser(10, 5)}`);
console.log(`20 ÷ 4 = ${calculatrice.diviser(20, 4)}`);
console.log(`10 ÷ 0 = ${calculatrice.diviser(10, 0)}`);

// Calcul plus complexe
console.log("\n CALCULS COMPOSÉS ");
const resultat1 = calculatrice.additionner(10, 5);
const resultat2 = calculatrice.multiplier(resultat1, 2);
console.log(`(10 + 5) × 2 = ${resultat2}`);

const resultat3 = calculatrice.diviser(100, 4);
const resultat4 = calculatrice.soustraire(resultat3, 10);
console.log(`(100 ÷ 4) - 10 = ${resultat4}`);

/*
 * EXPLICATIONS :
 
 * 1. Chaque méthode prend deux paramètres (a et b)
 * 2. Les méthodes retournent le résultat avec "return"
 * 3. On vérifie la division par zéro pour éviter les erreurs
 * 4. On peut enchaîner les calculs en stockant les résultats
 * 
 * AMÉLIORATIONS POSSIBLES :
 
 * - Ajouter la puissance : puissance(a, b) => a ** b
 * - Ajouter la racine carrée : racine(a) => Math.sqrt(a)
 * - Ajouter le modulo : modulo(a, b) => a % b
 * - Gérer les erreurs de type (vérifier que a et b sont des nombres)
 */
