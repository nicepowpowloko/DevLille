

// Création de l'objet panier
const panier = {
    articles: [],  // Tableau d'objets (chaque article : {nom, prix, quantite})
    
    // Méthode pour ajouter un article
    ajouterArticle(nom, prix, quantite = 1) {
        // Vérifier si l'article existe déjà dans le panier
        const articleExistant = this.articles.find(a => a.nom === nom);
        
        if (articleExistant) {
            // Si l'article existe, on augmente juste la quantité
            articleExistant.quantite += quantite;
            console.log(` ${quantite} ${nom} ajouté(s). Quantité totale : ${articleExistant.quantite}`);
        } else {
            // Sinon, on ajoute un nouvel article
            this.articles.push({ nom, prix, quantite });
            console.log(` ${quantite} ${nom} ajouté(s) au panier`);
        }
    },
    
    // Méthode pour retirer un article complètement
    retirerArticle(nom) {
        const index = this.articles.findIndex(a => a.nom === nom);
        
        if (index !== -1) {
            const article = this.articles.splice(index, 1)[0];
            console.log(` ${article.nom} retiré du panier`);
        } else {
            console.log(" Article non trouvé dans le panier");
        }
    },
    
    // Méthode pour calculer le total du panier
    calculerTotal() {
        return this.articles.reduce((total, article) => {
            return total + (article.prix * article.quantite);
        }, 0);
    },
    
    // Méthode pour afficher le panier
    afficherPanier() {
        console.log("\n" + "".repeat(70));
        console.log(" PANIER D'ACHAT");
        console.log("".repeat(70));
        
        if (this.articles.length === 0) {
            console.log("Le panier est vide ");
        } else {
            // Afficher chaque article
            this.articles.forEach((article, index) => {
                const sousTotal = article.prix * article.quantite;
                console.log(`${index + 1}. ${article.nom}`);
                console.log(`   Prix unitaire : ${article.prix.toFixed(2)}€`);
                console.log(`   Quantité : ${article.quantite}`);
                console.log(`   Sous-total : ${sousTotal.toFixed(2)}€`);
                console.log("".repeat(70));
            });
            
            // Afficher le total
            console.log(`\n TOTAL : ${this.calculerTotal().toFixed(2)}€`);
        }
        
        console.log("".repeat(70) + "\n");
    },
    
    // Méthode pour vider le panier
    viderPanier() {
        this.articles = [];
        console.log(" Panier vidé");
    },
    
    // Méthode pour modifier la quantité d'un article
    modifierQuantite(nom, nouvelleQuantite) {
        const article = this.articles.find(a => a.nom === nom);
        
        if (article) {
            if (nouvelleQuantite > 0) {
                article.quantite = nouvelleQuantite;
                console.log(` Quantité de ${nom} modifiée : ${nouvelleQuantite}`);
            } else {
                this.retirerArticle(nom);
            }
        } else {
            console.log(" Article non trouvé");
        }
    },
    
    // Méthode pour obtenir le nombre total d'articles
    obtenirNombreArticles() {
        return this.articles.reduce((total, article) => total + article.quantite, 0);
    },
    
    // Méthode pour rechercher un article
    rechercherArticle(nom) {
        const article = this.articles.find(a => a.nom.toLowerCase().includes(nom.toLowerCase()));
        
        if (article) {
            console.log(`\n Article trouvé :`);
            console.log(`   ${article.nom} - ${article.prix}€ x ${article.quantite}`);
            console.log(`   Sous-total : ${(article.prix * article.quantite).toFixed(2)}€`);
        } else {
            console.log(` Article "${nom}" non trouvé`);
        }
    },
    
    // Méthode pour appliquer une réduction
    appliquerReduction(pourcentage) {
        if (pourcentage > 0 && pourcentage <= 100) {
            const totalAvant = this.calculerTotal();
            const reduction = (totalAvant * pourcentage) / 100;
            const totalApres = totalAvant - reduction;
            
            console.log(`\n Réduction de ${pourcentage}% appliquée !`);
            console.log(`   Total avant : ${totalAvant.toFixed(2)}€`);
            console.log(`   Réduction : -${reduction.toFixed(2)}€`);
            console.log(`   Total après : ${totalApres.toFixed(2)}€`);
            
            return totalApres;
        } else {
            console.log(" Pourcentage invalide");
            return this.calculerTotal();
        }
    }
};

// Tests du panier d'achat
console.log("TEST DU PANIER D'ACHAT\n");

// Ajouter des articles
console.log(" Ajout d'articles :");
panier.ajouterArticle("Pommes", 2.50, 3);
panier.ajouterArticle("Pain", 1.20, 2);
panier.ajouterArticle("Lait", 0.95, 1);
panier.ajouterArticle("Fromage", 4.80, 1);
panier.ajouterArticle("Œufs", 3.50, 2);

// Ajouter des pommes supplémentaires (doit augmenter la quantité)
console.log("\n Ajout de pommes supplémentaires :");
panier.ajouterArticle("Pommes", 2.50, 2);

// Afficher le panier
panier.afficherPanier();

// Afficher le nombre total d'articles
console.log(` Nombre total d'articles : ${panier.obtenirNombreArticles()}`);

// Rechercher un article
panier.rechercherArticle("Lait");

// Modifier la quantité d'un article
console.log("\n Modification de quantité :");
panier.modifierQuantite("Pain", 4);

// Afficher le panier mis à jour
panier.afficherPanier();

// Retirer un article
console.log(" Retrait d'article :");
panier.retirerArticle("Fromage");

// Afficher le panier après retrait
panier.afficherPanier();

// Appliquer une réduction
panier.appliquerReduction(10);

// Simulation d'un achat complet
console.log("\n SIMULATION D'ACHAT COMPLET ");
const panierTest = {
    ...panier,
    articles: []
};

panierTest.articles = [];
panierTest.ajouterArticle("Ordinateur", 899, 1);
panierTest.ajouterArticle("Souris", 25, 2);
panierTest.ajouterArticle("Clavier", 45, 1);
panierTest.afficherPanier();
panierTest.appliquerReduction(15);

/*
 * EXPLICATIONS :
 
 * 1. find() recherche le premier élément qui correspond
 * 2. findIndex() trouve l'index de l'élément
 * 3. splice() supprime un élément du tableau
 * 4. reduce() calcule la somme de tous les sous-totaux
 * 5. push() ajoute un nouvel article
 * 
 * STRUCTURE D'UN ARTICLE :
 
 * {
 *   nom: "Pommes",
 *   prix: 2.50,
 *   quantite: 3
 * }
 * 
 * CALCULS :
 
 * Sous-total = prix × quantite
 * Total = somme de tous les sous-totaux
 * Réduction = total × (pourcentage / 100)
 * 
 * FONCTIONNALITÉS IMPLÉMENTÉES :
 
 *  Ajouter des articles
 *  Gérer automatiquement les quantités si article existe
 *  Retirer des articles
 *  Modifier les quantités
 *  Calculer le total
 *  Afficher le panier formaté
 *  Vider le panier
 *  Rechercher un article
 *  Appliquer des réductions
 *  Compter le nombre d'articles
 * 
 * AMÉLIORATIONS POSSIBLES :
 
 * - Gérer des codes promo
 * - Ajouter des frais de livraison
 * - Gérer le stock disponible
 * - Sauvegarder le panier (localStorage)
 * - Calculer la TVA
 * - Historique des achats
 * - Liste de favoris
 */
