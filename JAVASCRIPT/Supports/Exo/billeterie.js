
// PARTIE A : CALCUL POUR 1 PERSONNE

function calculer1Personne() {
    let age = parseInt(prompt("Quel est votre âge ?"));
    let jour = prompt("Quel jour voulez-vous venir ? (ex: lundi, mardi...)").toLowerCase();
    let heure = parseInt(prompt("À quelle heure ? (format 24h, ex: 14)"));
    let seance3D = prompt("Voulez-vous une séance 3D ? (oui/non)").toLowerCase();
    let seanceIMAX = prompt("Voulez-vous une séance IMAX ? (oui/non)").toLowerCase();
    
    let prix = 0;
    
    // Prix de base selon chaque critère âge
    if (jour === "lundi") {
        prix = 6; // Lundi 
        if (age < 12) {
            prix = 6.50; // Enfant
        } else if (age >= 12 && age <= 25) {
            prix = 8.50; // Étudiant
        } else if (age >= 26 && age <= 59) {
            prix = 12.00; // Adulte
        } else if (age >= 60) {
            prix = 7.50; // Senior
        }
    }
    
    // Réduction matinale (sauf lundi)
    if (heure < 12 && jour !== "lundi") {
        prix -= 2;
    }
    
    // Options supplémentaires
    if (seance3D === "oui") {
        prix += 3;
    }
    
    if (seanceIMAX === "oui") {
        prix += 5;
    }
    
    // Return ici je l'utilise sur plusieurs  valeurs
    return {
        age: age,
        jour: jour,
        heure: heure,
        seance3D: seance3D,
        seanceIMAX: seanceIMAX,
        prixFinal: prix,
        detailBillet: `

=== BILLET - 1 PERSONNE ===
Âge : ${age} ans
Jour : ${jour}
Heure : ${heure}h
3D : ${seance3D === "oui" ? "Oui (+3€)" : "Non"}
IMAX : ${seanceIMAX === "oui" ? "Oui (+5€)" : "Non"}
Prix : ${prix.toFixed(2)} €
===========================`
    };
}

// ==========================================
// PARTIE B : CALCUL POUR PLUSIEURS PERSONNES
// ==========================================
function calculerPlusieursPersonnes() {
    let nbPersonnes = parseInt(prompt("Pour combien de personnes ?"));
    let billets = [];
    let prixTotal = 0;
    
    console.log(`\n📋 Saisie des informations pour ${nbPersonnes} personne(s)\n`);
    
    for (let i = 1; i <= nbPersonnes; i++) {
        console.log(`--- Personne ${i}/${nbPersonnes} ---`);
        
        let age = parseInt(prompt(`[Personne ${i}] Quel est son âge ?`));
        let jour = prompt(`[Personne ${i}] Quel jour ? (ex: lundi, mardi...)`).toLowerCase();
        let heure = parseInt(prompt(`[Personne ${i}] À quelle heure ?`));
        let seance3D = prompt(`[Personne ${i}] Séance 3D ? (oui/non)`).toLowerCase();
        let seanceIMAX = prompt(`[Personne ${i}] Séance IMAX ? (oui/non)`).toLowerCase();
        
        let prix = 0;
        
        // Prix de base
        if (jour === "lundi") {
            prix = 6;
        } else {
            if (age < 12) {
                prix = 6.50;
            } else if (age >= 12 && age <= 25) {
                prix = 8.50;
            } else if (age >= 26 && age <= 59) {
                prix = 12.00;
            } else if (age >= 60) {
                prix = 7.50;
            }
        }
        
        // Réduction matinale
        if (heure < 12 && jour !== "lundi") {
            prix -= 2;
        }
        
        // Options
        if (seance3D === "oui") {
            prix += 3;
        }
        
        if (seanceIMAX === "oui") {
            prix += 5;
        }
        
        // Ajouter au tableau
        billets.push({
            numero: i,
            age: age,
            jour: jour,
            heure: heure,
            prix: prix
        });
        
        prixTotal += prix;
    }
    
    // Complet
    let detailComplet = "\n=== BILLETS - GROUPE ===\n";
    billets.forEach(billet => {
        detailComplet += `Personne ${billet.numero} : ${billet.age} ans - ${billet.prix.toFixed(2)} €\n`;
    });
    detailComplet += `TOTAL : ${prixTotal.toFixed(2)} €\n`;
    detailComplet += "========================\n";
    
    // Ici plusieurs valeurs
    return {
        nbPersonnes: nbPersonnes,
        billets: billets,
        prixTotal: prixTotal,
        detailComplet: detailComplet
    };
}

// ==========================================
// PARTIE C : CALCUL AVEC CARTE FIDÉLITÉ
// ==========================================
function calculerAvecCarteFidelite() {
    let nbPersonnes = parseInt(prompt("Pour combien de personnes ?"));
    let carteFidelite = prompt("Avez-vous une carte fidélité ? (oui/non)").toLowerCase();
    
    let billets = [];
    let prixTotal = 0;
    
    for (let i = 1; i <= nbPersonnes; i++) {
        let age = parseInt(prompt(`[Personne ${i}] Âge ?`));
        let jour = prompt(`[Personne ${i}] Jour ?`).toLowerCase();
        let heure = parseInt(prompt(`[Personne ${i}] Heure ?`));
        let seance3D = prompt(`[Personne ${i}] 3D ? (oui/non)`).toLowerCase();
        let seanceIMAX = prompt(`[Personne ${i}] IMAX ? (oui/non)`).toLowerCase();
        
        let prix = 0;
        
        if (jour === "lundi") {
            prix = 6;
        } else {
            if (age < 12) prix = 6.50;
            else if (age >= 12 && age <= 25) prix = 8.50;
            else if (age >= 26 && age <= 59) prix = 12.00;
            else if (age >= 60) prix = 7.50;
        }
        
        if (heure < 12 && jour !== "lundi") prix -= 2;
        if (seance3D === "oui") prix += 3;
        if (seanceIMAX === "oui") prix += 5;
        
        billets.push({ numero: i, age: age, prix: prix });
        prixTotal += prix;
    }
    
    let prixAvantReduction = prixTotal;
    let reduction = 0;
    let messageReduction = "";
    
    // Réductions selon le montant total
    if (carteFidelite === "oui") {
        if (prixTotal > 0 && prixTotal < 9) {
            reduction = 0.05;
            messageReduction = "5% de réduction (carte fidélité)";
        } else if (prixTotal >= 9 && prixTotal < 30) {
            reduction = 0.10;
            messageReduction = "10% de réduction (carte fidélité)";
        } else if (prixTotal >= 30 && prixTotal < 50) {
            reduction = 0.15;
            messageReduction = "15% de réduction (carte fidélité)";
        } else if (prixTotal >= 50) {
            reduction = 0.20;
            messageReduction = "20% de réduction (carte fidélité)";
        }
        
        prixTotal = prixTotal * (1 - reduction);
    }
    
    // Détail complet
    let detailComplet = "\n=== BILLETS AVEC CARTE FIDÉLITÉ ===\n";
    billets.forEach(billet => {
        detailComplet += `Personne ${billet.numero} : ${billet.age} ans - ${billet.prix.toFixed(2)} €\n`;
    });
    detailComplet += `Sous-total : ${prixAvantReduction.toFixed(2)} €\n`;
    
    if (carteFidelite === "oui" && reduction > 0) {
        detailComplet += `${messageReduction}\n`;
        detailComplet += `Réduction : -${(prixAvantReduction * reduction).toFixed(2)} €\n`;
    }
    
    detailComplet += `TOTAL FINAL : ${prixTotal.toFixed(2)} €\n`;
    detailComplet += "===================================\n";
    
    // Return plusieurs valeurs
    return {
        nbPersonnes: nbPersonnes,
        carteFidelite: carteFidelite,
        billets: billets,
        prixAvantReduction: prixAvantReduction,
        reduction: reduction,
        messageReduction: messageReduction,
        prixFinal: prixTotal,
        detailComplet: detailComplet
    };
}