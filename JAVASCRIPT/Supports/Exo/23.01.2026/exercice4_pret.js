

function calculerPret() {
    // Demander les informations
    let capital = parseFloat(prompt("Montant du prêt souhaité (en €) ?"));
    let dureeAnnees = parseInt(prompt("Durée du prêt (en années) ?"));
    let tauxAnnuel = parseFloat(prompt("Taux d'intérêt annuel (en %) ?"));
    
    // Convertir en valeurs mensuelles
    let nbMois = dureeAnnees * 12;
    let tauxMensuel = tauxAnnuel / 100 / 12;
    
    // Calculer la mensualité avec la formule du prêt
    let mensualite = (capital * tauxMensuel) / (1 - Math.pow(1 + tauxMensuel, -nbMois));
    
    // Calculer le coût total et les intérêts
    let coutTotal = mensualite * nbMois;
    let totalInterets = coutTotal - capital;
    
    // Afficher les informations générales
    console.log(" SIMULATION DE PRÊT");
    console.log("Capital emprunté : " + capital.toFixed(2) + " €");
    console.log("Durée : " + dureeAnnees + " ans (" + nbMois + " mois)");
    console.log("Taux annuel : " + tauxAnnuel + " %");
    console.log("Mensualité : " + mensualite.toFixed(2) + " €");
    console.log("Coût total du crédit : " + coutTotal.toFixed(2) + " €");
    console.log("Total des intérêts : " + totalInterets.toFixed(2) + " €");
    console.log("\n");
    
    // Tableau d'amortissement pour les 12 premiers mois
    console.log("TABLEAU D'AMORTISSEMENT (12 PREMIERS MOIS)");
    console.log("Mois | Mensualité | Intérêts | Capital | Restant dû");
    console.log("");
    
    let capitalRestant = capital;
    
    for (let mois = 1; mois <= 12; mois++) {
        // Calculer la part d'intérêts
        let partInterets = capitalRestant * tauxMensuel;
        
        // Calculer la part de capital
        let partCapital = mensualite - partInterets;
        
        // Calculer le capital restant
        capitalRestant = capitalRestant - partCapital;
        
        // Afficher la ligne
        console.log(
            mois + " | " + 
            mensualite.toFixed(2) + " € | " + 
            partInterets.toFixed(2) + " € | " + 
            partCapital.toFixed(2) + " € | " + 
            capitalRestant.toFixed(2) + " €"
        );
    }
    
    console.log("\n");
    
    // Retourner toutes les informations
    return {
        capital: capital,
        dureeAnnees: dureeAnnees,
        tauxAnnuel: tauxAnnuel,
        mensualite: mensualite,
        coutTotal: coutTotal,
        totalInterets: totalInterets
    };
}

// Utilisation
// let resultat = calculerPret();
// console.log("Votre mensualité sera de " + resultat.mensualite.toFixed(2) + " €");
