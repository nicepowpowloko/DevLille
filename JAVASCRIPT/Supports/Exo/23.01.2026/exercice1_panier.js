

function gererPanier() {
    // Demander le nombre d'articles
    let nbArticles = parseInt(prompt("Combien d'articles voulez-vous acheter ?"));
    
    let totalPanier = 0;
    let detailPanier = " PANIER \n";
    
   
    for (let i = 1; i <= nbArticles; i++) {
        console.log("--- Article " + i + " ---");
        
       
        let nomProduit = prompt("Nom du produit " + i + " ?");
        let prixUnitaire = parseFloat(prompt("Prix unitaire ?"));
        let quantite = parseInt(prompt("Quantité ?"));
        
        // sous total
        let sousTotal = prixUnitaire * quantite;
        
        // Ajouter au total général
        totalPanier += sousTotal;
        
        // Ajouter au détail
        detailPanier += nomProduit + " x" + quantite + " = " + sousTotal.toFixed(2) + " €\n";
    }
    
    // Calculer les frais de livraison
    let fraisLivraison = 0;
    
    if (totalPanier < 50) {
        fraisLivraison = 7;
    } else if (totalPanier >= 50 && totalPanier < 100) {
        fraisLivraison = 4;
    } else {
        fraisLivraison = 0; // Livraison gratuite
    }
    
    // Calculer le total final
    let totalFinal = totalPanier + fraisLivraison;
    
    // Afficher le récapitulatif
    detailPanier += "\n";
    detailPanier += "Sous-total : " + totalPanier.toFixed(2) + " €\n";
    detailPanier += "Frais de livraison : " + fraisLivraison.toFixed(2) + " €\n";
    detailPanier += "TOTAL TTC : " + totalFinal.toFixed(2) + " €\n";
    detailPanier += "\n";
    
    console.log(detailPanier);
    
    // Retourner le résultat
    return {
        totalPanier: totalPanier,
        fraisLivraison: fraisLivraison,
        totalFinal: totalFinal,
        detail: detailPanier
    };
}

// Utilisation
// let resultat = gererPanier();
// console.log("Total à payer : " + resultat.totalFinal + " €");
