// ==========================================
// EXERCICE 6 : CALCULATEUR DE TARIF PARKING
// ==========================================

function calculerParkingTarif() {
    // Demander les informations
    let heureEntree = parseInt(prompt("Heure d'entrée (format 24h, ex: 14) ?"));
    let heureSortie = parseInt(prompt("Heure de sortie (format 24h, ex: 18) ?"));
    let typeVehicule = prompt("Type de véhicule ? (voiture, moto, camion)").toLowerCase();
    
    // Vérifier que les heures sont valides
    if (heureEntree < 0 || heureEntree > 23 || heureSortie < 0 || heureSortie > 23) {
        console.log("Erreur : Heures invalides");
        return null;
    }
    
    // Calculer la durée
    let duree = 0;
    
    if (heureSortie >= heureEntree) {
        duree = heureSortie - heureEntree;
    } else {
        // Cas où la sortie est le lendemain
        duree = (24 - heureEntree) + heureSortie;
    }
    
    // Déterminer le tarif horaire selon le véhicule
    let tarifHoraire = 0;
    let tarifMaxJournalier = 0;
    
    if (typeVehicule === "moto") {
        tarifHoraire = 2;
        tarifMaxJournalier = 15;
    } else if (typeVehicule === "voiture") {
        tarifHoraire = 3;
        tarifMaxJournalier = 24;
    } else if (typeVehicule === "camion") {
        tarifHoraire = 5;
        tarifMaxJournalier = 40;
    } else {
        console.log("Erreur : Type de véhicule invalide");
        return null;
    }
    
    // Calculer le prix de base
    let prixBase = tarifHoraire * duree;
    
    // Appliquer les réductions selon la durée
    let reduction = 0;
    let messageReduction = "Aucune réduction";
    
    if (duree < 2) {
        reduction = 0;
    } else if (duree >= 2 && duree <= 5) {
        reduction = 0.10; // -10%
        messageReduction = "Réduction 10% (2-5h)";
    } else if (duree > 5) {
        reduction = 0.20; // -20%
        messageReduction = "Réduction 20% (plus de 5h)";
    }
    
    // Appliquer la réduction
    let prixAvecReduction = prixBase * (1 - reduction);
    
    // Vérifier le tarif maximum journalier
    let prixFinal = 0;
    let tarifMaxApplique = false;
    
    if (prixAvecReduction > tarifMaxJournalier) {
        prixFinal = tarifMaxJournalier;
        tarifMaxApplique = true;
    } else {
        prixFinal = prixAvecReduction;
    }
    
    // Afficher le ticket détaillé
    console.log("=== TICKET DE PARKING ===");
    console.log("Véhicule : " + typeVehicule);
    console.log("Entrée : " + heureEntree + "h");
    console.log("Sortie : " + heureSortie + "h");
    console.log("Durée : " + duree + "h");
    console.log("Tarif horaire : " + tarifHoraire + " €/h");
    console.log("Prix de base : " + prixBase.toFixed(2) + " €");
    console.log(messageReduction);
    
    if (reduction > 0) {
        console.log("Prix après réduction : " + prixAvecReduction.toFixed(2) + " €");
    }
    
    if (tarifMaxApplique) {
        console.log("Tarif maximum journalier appliqué : " + tarifMaxJournalier + " €");
    }
    
    console.log("TOTAL À PAYER : " + prixFinal.toFixed(2) + " €");
    console.log("=========================");
    
    // Retourner le résultat
    return {
        typeVehicule: typeVehicule,
        heureEntree: heureEntree,
        heureSortie: heureSortie,
        duree: duree,
        tarifHoraire: tarifHoraire,
        prixBase: prixBase,
        reduction: reduction,
        prixAvecReduction: prixAvecReduction,
        tarifMaxJournalier: tarifMaxJournalier,
        tarifMaxApplique: tarifMaxApplique,
        montantTotal: prixFinal
    };
}

// Utilisation
// let resultat = calculerParkingTarif();
// console.log("Montant à payer : " + resultat.montantTotal.toFixed(2) + " €");
