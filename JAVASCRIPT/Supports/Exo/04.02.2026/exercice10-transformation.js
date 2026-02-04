

// Objet produit de départ
const produit = {
    nom: "Ordinateur portable",
    prix: 899,
    tva: 0.20,
    stock: 15
};

console.log(" OBJET PRODUIT INITIAL ");
console.log(produit);


console.log("\n  1. CLÉS DE L'OBJET ");
const cles = Object.keys(produit);
console.log("Méthode 1 - Object.keys() :");
console.log(cles);  // ["nom", "prix", "tva", "stock"]

console.log("\nMéthode 2 - Boucle for...in :");
const clesBoucle = [];
for (let cle in produit) {
    clesBoucle.push(cle);
}
console.log(clesBoucle);


console.log("\n 2. VALEURS DE L'OBJET");
const valeurs = Object.values(produit);
console.log("Méthode 1 - Object.values() :");
console.log(valeurs);  // ["Ordinateur portable", 899, 0.2, 15]

console.log("\nMéthode 2 - Boucle for...in :");
const valeursBoucle = [];
for (let cle in produit) {
    valeursBoucle.push(produit[cle]);
}
console.log(valeursBoucle);


console.log("\n 3. PAIRES CLÉ-VALEUR ");

console.log("Méthode 1 - Object.entries() :");
const paires = Object.entries(produit);
console.log(paires);
// [["nom", "Ordinateur portable"], ["prix", 899], ["tva", 0.2], ["stock", 15]]

console.log("\nMéthode 2 - forEach sur entries :");
Object.entries(produit).forEach(([cle, valeur]) => {
    console.log(`${cle}: ${valeur}`);
});

console.log("\nMéthode 3 - for...of sur entries :");
for (const [cle, valeur] of Object.entries(produit)) {
    console.log(`${cle} → ${valeur}`);
}

console.log("\nMéthode 4 - for...in classique :");
for (let cle in produit) {
    console.log(`${cle} = ${produit[cle]}`);
}


console.log("\n 4. CALCUL DU PRIX TTC ");

// Version 1 : Fonction simple
function calculerPrixTTC(produit) {
    return produit.prix * (1 + produit.tva);
}

const prixTTC = calculerPrixTTC(produit);
console.log(`Prix HT : ${produit.prix}€`);
console.log(`TVA : ${(produit.tva * 100)}%`);
console.log(`Prix TTC : ${prixTTC.toFixed(2)}€`);

// Version 2 : Fonction avec détails
function calculerPrixTTCDetaille(produit) {
    const prixHT = produit.prix;
    const montantTVA = prixHT * produit.tva;
    const prixTTC = prixHT + montantTVA;
    
    return {
        prixHT: prixHT,
        montantTVA: montantTVA,
        prixTTC: prixTTC,
        tauxTVA: produit.tva
    };
}

console.log("\nCalcul détaillé :");
const calculDetaille = calculerPrixTTCDetaille(produit);
console.log(`Prix HT : ${calculDetaille.prixHT.toFixed(2)}€`);
console.log(`Montant TVA (${(calculDetaille.tauxTVA * 100)}%) : ${calculDetaille.montantTVA.toFixed(2)}€`);
console.log(`Prix TTC : ${calculDetaille.prixTTC.toFixed(2)}€`);



console.log("\n  5. TRANSFORMATION DES CLÉS ");

// Version 1 : Boucle for...in
function clesMajuscules(obj) {
    const nouvelObjet = {};
    
    for (let cle in obj) {
        nouvelObjet[cle.toUpperCase()] = obj[cle];
    }
    
    return nouvelObjet;
}

const produitMajuscules = clesMajuscules(produit);
console.log("Méthode 1 - Boucle for...in :");
console.log(produitMajuscules);

// Version 2 : Object.keys() avec reduce
function clesMajusculesReduce(obj) {
    return Object.keys(obj).reduce((resultat, cle) => {
        resultat[cle.toUpperCase()] = obj[cle];
        return resultat;
    }, {});
}

console.log("\nMéthode 2 - Object.keys() + reduce :");
console.log(clesMajusculesReduce(produit));

// Version 3 : Object.entries() avec fromEntries
function clesMajusculesFromEntries(obj) {
    return Object.fromEntries(
        Object.entries(obj).map(([cle, valeur]) => [cle.toUpperCase(), valeur])
    );
}

console.log("\nMéthode 3 - Object.entries() + fromEntries :");
console.log(clesMajusculesFromEntries(produit));


console.log("\n TRANSFORMATIONS BONUS ");

// Fonction pour doubler toutes les valeurs numériques
function doublerValeursNumeriques(obj) {
    const nouvelObjet = {};
    
    for (let cle in obj) {
        if (typeof obj[cle] === 'number') {
            nouvelObjet[cle] = obj[cle] * 2;
        } else {
            nouvelObjet[cle] = obj[cle];
        }
    }
    
    return nouvelObjet;
}

console.log("Valeurs numériques doublées :");
console.log(doublerValeursNumeriques(produit));

// Fonction pour filtrer les propriétés numériques
function extraireProprietesNumeriques(obj) {
    const resultat = {};
    
    for (let cle in obj) {
        if (typeof obj[cle] === 'number') {
            resultat[cle] = obj[cle];
        }
    }
    
    return resultat;
}

console.log("\nPropriétés numériques uniquement :");
console.log(extraireProprietesNumeriques(produit));

// Fonction pour convertir un objet en tableau de chaînes
function objetVersTableau(obj) {
    return Object.entries(obj).map(([cle, valeur]) => `${cle}: ${valeur}`);
}

console.log("\nObjet converti en tableau :");
console.log(objetVersTableau(produit));

// Fonction pour compter les propriétés par type
function compterProprietes(obj) {
    const compteur = {};
    
    for (let cle in obj) {
        const type = typeof obj[cle];
        compteur[type] = (compteur[type] || 0) + 1;
    }
    
    return compteur;
}

console.log("\nNombre de propriétés par type :");
console.log(compterProprietes(produit));

// Fonction pour créer une copie profonde d'un objet
function copierObjet(obj) {
    return JSON.parse(JSON.stringify(obj));
}

const copieProduit = copierObjet(produit);
copieProduit.prix = 1000;

console.log("\nObjet original vs copie :");
console.log("Original :", produit.prix);
console.log("Copie :", copieProduit.prix);

/*
 * EXPLICATIONS :
 
 * 
 * MÉTHODES OBJECT :
 
 * - Object.keys(obj) : retourne un tableau des clés
 * - Object.values(obj) : retourne un tableau des valeurs
 * - Object.entries(obj) : retourne un tableau de paires [clé, valeur]
 * - Object.fromEntries(arr) : crée un objet depuis un tableau de paires
 * 
 * BOUCLES :

 * - for...in : parcourt les clés d'un objet
 * - for...of : parcourt les valeurs d'un itérable (tableau, Map, Set)
 * - forEach : méthode des tableaux pour parcourir chaque élément
 * 
 * TRANSFORMATIONS :

 * - map() : transforme chaque élément d'un tableau
 * - reduce() : réduit un tableau à une seule valeur
 * - filter() : filtre les éléments d'un tableau
 * 
 * DESTRUCTURATION :
 
 * const [cle, valeur] = ["nom", "Ordinateur"]
 * Permet d'extraire directement les valeurs d'un tableau
 * 
 * SPREAD OPERATOR (...) :

 * { ...objet } crée une copie superficielle de l'objet
 * 
 * MÉTHODES DE CHAÎNES :
 
 * - toUpperCase() : convertit en majuscules
 * - toLowerCase() : convertit en minuscules
 * 
 * TYPEOF :

 * typeof valeur retourne le type de la valeur
 * Types possibles : "string", "number", "boolean", "object", "function", "undefined"
 * 
 * AMÉLIORATIONS POSSIBLES :
 
 * - Gérer les objets imbriqués
 * - Valider les données avant transformation
 * - Gérer les cas d'erreur
 * - Ajouter des options de configuration
 * - Créer des fonctions composables
 */
