// ==========================================
// EXERCICE 7 : GESTIONNAIRE DE RÉSERVATION RESTAURANT
// ==========================================

function reservationRestaurant() {
    // Demander les informations de base
    let nomClient = prompt("Quel est votre nom ?");
    let jour = prompt("Quel jour souhaitez-vous réserver ? (ex: mardi, mercredi...)").toLowerCase();
    let heure = parseInt(prompt("À quelle heure ? (format 24h, ex: 20)"));
    let nbPersonnes = parseInt(prompt("Pour combien de personnes ?"));
    
    // Vérifier que le restaurant est ouvert ce jour
    if (jour === "dimanche" || jour === "lundi") {
        console.log("❌ Désolé, le restaurant est fermé le dimanche et le lundi");
        return null;
    }
    
    // Vérifier les horaires d'ouverture
    let horairesValides = false;
    let service = "";
    
    if (heure >= 12 && heure <= 14) {
        horairesValides = true;
        service = "Déjeuner";
    } else if (heure >= 19 && heure <= 22) {
        horairesValides = true;
        service = "Dîner";
    }
    
    if (!horairesValides) {
        console.log("❌ Horaires non disponibles. Services : 12h-14h et 19h-22h");
        return null;
    }
    
    // Vérifier la capacité
    if (nbPersonnes > 8) {
        console.log("❌ Désolé, nous acceptons maximum 8 personnes par réservation");
        return null;
    }
    
    // Si plus de 6 personnes, demander confirmation 48h à l'avance
    if (nbPersonnes > 6) {
        let confirmation48h = prompt("Pour plus de 6 personnes, réservation 48h à l'avance. Confirmez-vous ? (oui/non)").toLowerCase();
        if (confirmation48h !== "oui") {
            console.log("❌ Réservation annulée");
            return null;
        }
    }
    
    // Demander les allergies
    let aAllergies = prompt("Avez-vous des allergies ? (oui/non)").toLowerCase();
    let listeAllergies = "";
    
    if (aAllergies === "oui") {
        listeAllergies = prompt("Quelles sont vos allergies ? (séparez par des virgules)");
    }
    
    // Demander les menus pour calculer le prix
    console.log("\n--- Choix des menus ---");
    let prixTotal = 0;
    let detailMenus = "";
    
    for (let i = 1; i <= nbPersonnes; i++) {
        console.log("Personne " + i + "/" + nbPersonnes);
        
        let choixMenu = prompt(
            "Menu pour la personne " + i + " ?\n" +
            "1 - Menu enfant (12€)\n" +
            "2 - Menu standard (25€)\n" +
            "3 - Menu végétarien (22€)\n" +
            "4 - Menu sans gluten (28€)\n" +
            "Tapez 1, 2, 3 ou 4"
        );
        
        let prixMenu = 0;
        let nomMenu = "";
        
        if (choixMenu === "1") {
            prixMenu = 12;
            nomMenu = "Menu enfant";
        } else if (choixMenu === "2") {
            prixMenu = 25;
            nomMenu = "Menu standard";
        } else if (choixMenu === "3") {
            prixMenu = 22;
            nomMenu = "Menu végétarien";
        } else if (choixMenu === "4") {
            prixMenu = 28;
            nomMenu = "Menu sans gluten";
        } else {
            // Par défaut, menu standard
            prixMenu = 25;
            nomMenu = "Menu standard";
        }
        
        prixTotal += prixMenu;
        detailMenus += "Personne " + i + " : " + nomMenu + " (" + prixMenu + "€)\n";
    }
    
    // Générer un numéro de réservation aléatoire entre 1000 et 9999
    let numeroReservation = Math.floor(Math.random() * 9000) + 1000;
    
    // Afficher le récapitulatif complet
    console.log("\n=== RÉCAPITULATIF DE RÉSERVATION ===");
    console.log("Numéro de réservation : #" + numeroReservation);
    console.log("Client : " + nomClient);
    console.log("Jour : " + jour);
    console.log("Heure : " + heure + "h (" + service + ")");
    console.log("Nombre de personnes : " + nbPersonnes);
    
    if (aAllergies === "oui") {
        console.log("⚠️ Allergies signalées : " + listeAllergies);
    }
    
    console.log("\n--- Détail des menus ---");
    console.log(detailMenus);
    console.log("PRIX TOTAL ESTIMÉ : " + prixTotal + "€");
    console.log("====================================");
    
    // Message de confirmation
    if (nbPersonnes > 6) {
        console.log("ℹ️ Grande tablée - Merci de confirmer 48h à l'avance");
    }
    
    console.log("\n✅ Réservation confirmée !");
    console.log("Merci " + nomClient + ", nous vous attendons le " + jour + " à " + heure + "h");
    
    // Retourner toutes les informations
    return {
        numeroReservation: numeroReservation,
        nomClient: nomClient,
        jour: jour,
        heure: heure,
        service: service,
        nbPersonnes: nbPersonnes,
        allergies: aAllergies === "oui" ? listeAllergies : "Aucune",
        detailMenus: detailMenus,
        prixTotal: prixTotal
    };
}

// Utilisation
// let reservation = reservationRestaurant();
// if (reservation) {
//     console.log("Réservation #" + reservation.numeroReservation + " confirmée !");
//     console.log("Total : " + reservation.prixTotal + "€");
// }
