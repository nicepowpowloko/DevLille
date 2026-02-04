

// Système complet de réservation de voyages
const agenceVoyages = {
    nom: "Voyages Évasion",
    
    //  1. GESTION DES VOLS 
    vols: [
        { numero: "AF001", destination: "Paris", date: "2026-03-15", prix: 150, placesDisponibles: 180, placesTotal: 180 },
        { numero: "BA202", destination: "Londres", date: "2026-03-20", prix: 120, placesDisponibles: 150, placesTotal: 150 },
        { numero: "LH303", destination: "Berlin", date: "2026-03-18", prix: 180, placesDisponibles: 200, placesTotal: 200 },
        { numero: "IB404", destination: "Madrid", date: "2026-03-22", prix: 140, placesDisponibles: 160, placesTotal: 160 },
        { numero: "KL505", destination: "Amsterdam", date: "2026-03-25", prix: 100, placesDisponibles: 140, placesTotal: 140 }
    ],
    
    // Méthode pour rechercher des vols
    rechercherVols(destination = null, dateDebut = null, prixMax = null) {
        console.log("\n RECHERCHE DE VOLS \n");
        
        let resultats = [...this.vols];
        
        // Filtrer par destination
        if (destination) {
            resultats = resultats.filter(v => 
                v.destination.toLowerCase().includes(destination.toLowerCase())
            );
        }
        
        // Filtrer par date
        if (dateDebut) {
            resultats = resultats.filter(v => v.date >= dateDebut);
        }
        
        // Filtrer par prix maximum
        if (prixMax) {
            resultats = resultats.filter(v => v.prix <= prixMax);
        }
        
        // Filtrer les vols avec places disponibles
        resultats = resultats.filter(v => v.placesDisponibles > 0);
        
        if (resultats.length === 0) {
            console.log(" Aucun vol trouvé avec ces critères");
            return [];
        }
        
        console.log(`${resultats.length} vol(s) trouvé(s) :\n`);
        resultats.forEach(vol => {
            console.log(` Vol ${vol.numero} → ${vol.destination}`);
            console.log(`   Date : ${vol.date}`);
            console.log(`   Prix : ${vol.prix}€`);
            console.log(`   Places disponibles : ${vol.placesDisponibles}/${vol.placesTotal}`);
            console.log("");
        });
        
        return resultats;
    },
    
    // Méthode pour réserver un vol
    reserverVol(numeroVol, nombrePlaces = 1) {
        const vol = this.vols.find(v => v.numero === numeroVol);
        
        if (!vol) {
            console.log(" Vol non trouvé");
            return false;
        }
        
        if (vol.placesDisponibles < nombrePlaces) {
            console.log(` Places insuffisantes (${vol.placesDisponibles} disponibles)`);
            return false;
        }
        
        vol.placesDisponibles -= nombrePlaces;
        console.log(` ${nombrePlaces} place(s) réservée(s) sur le vol ${numeroVol}`);
        return true;
    },
    
    //  2. GESTION DES HÔTELS
    hotels: [
        { 
            id: 1, 
            nom: "Hôtel Royal", 
            ville: "Paris", 
            etoiles: 5, 
            prixParNuit: 200,
            chambres: [
                { type: "Simple", disponible: 10, prixNuit: 150 },
                { type: "Double", disponible: 15, prixNuit: 200 },
                { type: "Suite", disponible: 5, prixNuit: 350 }
            ]
        },
        { 
            id: 2, 
            nom: "London Plaza", 
            ville: "Londres", 
            etoiles: 4, 
            prixParNuit: 150,
            chambres: [
                { type: "Simple", disponible: 20, prixNuit: 120 },
                { type: "Double", disponible: 25, prixNuit: 150 },
                { type: "Suite", disponible: 8, prixNuit: 280 }
            ]
        },
        { 
            id: 3, 
            nom: "Berlin Central", 
            ville: "Berlin", 
            etoiles: 4, 
            prixParNuit: 130,
            chambres: [
                { type: "Simple", disponible: 15, prixNuit: 100 },
                { type: "Double", disponible: 20, prixNuit: 130 },
                { type: "Suite", disponible: 6, prixNuit: 250 }
            ]
        }
    ],
    
    // Méthode pour rechercher des hôtels
    rechercherHotels(ville = null, etoilesMin = null, prixMaxNuit = null) {
        console.log("\n  RECHERCHE D'HÔTELS \n");
        
        let resultats = [...this.hotels];
        
        // Filtrer par ville
        if (ville) {
            resultats = resultats.filter(h => 
                h.ville.toLowerCase().includes(ville.toLowerCase())
            );
        }
        
        // Filtrer par nombre d'étoiles minimum
        if (etoilesMin) {
            resultats = resultats.filter(h => h.etoiles >= etoilesMin);
        }
        
        // Filtrer par prix maximum
        if (prixMaxNuit) {
            resultats = resultats.filter(h => h.prixParNuit <= prixMaxNuit);
        }
        
        if (resultats.length === 0) {
            console.log(" Aucun hôtel trouvé avec ces critères");
            return [];
        }
        
        console.log(`${resultats.length} hôtel(s) trouvé(s) :\n`);
        resultats.forEach(hotel => {
            console.log(` ${hotel.nom} - ${hotel.ville}`);
            console.log(`  ${"".repeat(hotel.etoiles)}`);
            console.log(`  À partir de ${hotel.prixParNuit}€/nuit`);
            console.log(`  Types de chambres :`);
            hotel.chambres.forEach(chambre => {
                console.log(`      - ${chambre.type} : ${chambre.prixNuit}€/nuit (${chambre.disponible} disponibles)`);
            });
            console.log("");
        });
        
        return resultats;
    },
    
    // Méthode pour réserver un hôtel
    reserverHotel(hotelId, typeChambre, nombreNuits) {
        const hotel = this.hotels.find(h => h.id === hotelId);
        
        if (!hotel) {
            console.log(" Hôtel non trouvé");
            return false;
        }
        
        const chambre = hotel.chambres.find(c => c.type === typeChambre);
        
        if (!chambre) {
            console.log(" Type de chambre non disponible");
            return false;
        }
        
        if (chambre.disponible === 0) {
            console.log(" Plus de chambres disponibles pour ce type");
            return false;
        }
        
        chambre.disponible--;
        const prixTotal = chambre.prixNuit * nombreNuits;
        
        console.log(` Chambre ${typeChambre} réservée au ${hotel.nom}`);
        console.log(`   ${nombreNuits} nuit(s) × ${chambre.prixNuit}€ = ${prixTotal}€`);
        
        return { hotel: hotel.nom, chambre: typeChambre, nuits: nombreNuits, prix: prixTotal };
    },
    
    //  3. GESTION DES CLIENTS
    clients: [],
    prochainIdClient: 1,
    
    // Méthode pour créer un profil client
    creerClient(nom, prenom, email, telephone) {
        const nouveauClient = {
            id: this.prochainIdClient++,
            nom: nom,
            prenom: prenom,
            email: email,
            telephone: telephone,
            pointsFidelite: 0,
            historique: []
        };
        
        this.clients.push(nouveauClient);
        console.log(`\n Client créé : ${prenom} ${nom}`);
        console.log(`   ID : ${nouveauClient.id}`);
        console.log(`   Email : ${email}`);
        
        return nouveauClient.id;
    },
    
    // Méthode pour trouver un client
    trouverClient(clientId) {
        return this.clients.find(c => c.id === clientId);
    },
    
    // Méthode pour ajouter des points de fidélité
    ajouterPointsFidelite(clientId, montant) {
        const client = this.trouverClient(clientId);
        
        if (!client) {
            console.log(" Client non trouvé");
            return false;
        }
        
        // 1 point par euro dépensé
        const points = Math.floor(montant);
        client.pointsFidelite += points;
        
        console.log(` +${points} points de fidélité (Total : ${client.pointsFidelite})`);
        return true;
    },
    
    // Méthode pour afficher le profil client
    afficherProfilClient(clientId) {
        const client = this.trouverClient(clientId);
        
        if (!client) {
            console.log(" Client non trouvé");
            return;
        }
        
        console.log("\n  PROFIL CLIENT ");
        console.log(`Nom : ${client.prenom} ${client.nom}`);
        console.log(`Email : ${client.email}`);
        console.log(`Téléphone : ${client.telephone}`);
        console.log(`Points fidélité : ${client.pointsFidelite} `);
        console.log(`Nombre de réservations : ${client.historique.length}`);
        
        if (client.historique.length > 0) {
            console.log("\nHistorique des réservations :");
            client.historique.forEach((reservation, index) => {
                console.log(`\n ${index + 1}. Réservation #${reservation.numero}`);
                console.log(`   Date : ${reservation.date}`);
                console.log(`   Statut : ${reservation.statut}`);
                console.log(`   Montant : ${reservation.montantTotal.toFixed(2)}€`);
            });
        }
    },
    
    //  4. GESTION DES RÉSERVATIONS 
    reservations: [],
    prochainNumeroReservation: 1001,
    
    // Méthode pour créer une réservation complète
    creerReservationComplete(clientId, numeroVol, nombrePersonnes, hotelId, typeChambre, nombreNuits) {
        const client = this.trouverClient(clientId);
        
        if (!client) {
            console.log(" Client non trouvé");
            return null;
        }
        
        console.log(`\n  CRÉATION DE RÉSERVATION `);
        console.log(`Client : ${client.prenom} ${client.nom}\n`);
        
        // Réserver le vol
        const vol = this.vols.find(v => v.numero === numeroVol);
        if (!vol || !this.reserverVol(numeroVol, nombrePersonnes)) {
            console.log(" Impossible de réserver le vol");
            return null;
        }
        
        // Réserver l'hôtel
        const hotel = this.reserverHotel(hotelId, typeChambre, nombreNuits);
        if (!hotel) {
            // Annuler la réservation du vol
            vol.placesDisponibles += nombrePersonnes;
            console.log(" Impossible de réserver l'hôtel");
            return null;
        }
        
        // Calculer le prix total
        const prixVol = vol.prix * nombrePersonnes;
        const prixHotel = hotel.prix;
        let montantTotal = prixVol + prixHotel;
        
        // Appliquer la réduction fidélité
        const reduction = this.calculerReductionFidelite(client.pointsFidelite);
        const montantReduction = montantTotal * (reduction / 100);
        montantTotal -= montantReduction;
        
        // Créer la réservation
        const nouvelleReservation = {
            numero: this.prochainNumeroReservation++,
            clientId: clientId,
            date: new Date().toLocaleString('fr-FR'),
            vol: {
                numero: vol.numero,
                destination: vol.destination,
                date: vol.date,
                nombrePersonnes: nombrePersonnes,
                prixTotal: prixVol
            },
            hotel: {
                nom: hotel.hotel,
                chambre: hotel.chambre,
                nuits: hotel.nuits,
                prixTotal: hotel.prix
            },
            montantBrut: prixVol + prixHotel,
            reductionFidelite: reduction,
            montantReduction: montantReduction,
            montantTotal: montantTotal,
            statut: "confirmée"
        };
        
        this.reservations.push(nouvelleReservation);
        client.historique.push(nouvelleReservation);
        
        // Ajouter des points de fidélité
        this.ajouterPointsFidelite(clientId, montantTotal);
        
        // Afficher le récapitulatif
        this.afficherRecapitulatifReservation(nouvelleReservation.numero);
        
        return nouvelleReservation.numero;
    },
    
    // Méthode pour calculer la réduction fidélité
    calculerReductionFidelite(points) {
        if (points >= 1000) return 15;      // 15% de réduction
        if (points >= 500) return 10;       // 10% de réduction
        if (points >= 200) return 5;        // 5% de réduction
        return 0;                            // Pas de réduction
    },
    
    // Méthode pour afficher le récapitulatif d'une réservation
    afficherRecapitulatifReservation(numeroReservation) {
        const reservation = this.reservations.find(r => r.numero === numeroReservation);
        
        if (!reservation) {
            console.log(" Réservation non trouvée");
            return;
        }
        
        const client = this.trouverClient(reservation.clientId);
        
        console.log("\n" + "".repeat(70));
        console.log(` RÉCAPITULATIF DE RÉSERVATION #${reservation.numero}`);
        console.log("".repeat(70));
        console.log(`Client : ${client.prenom} ${client.nom}`);
        console.log(`Date de réservation : ${reservation.date}`);
        console.log(`Statut : ${reservation.statut.toUpperCase()}`);
        console.log("".repeat(70));
        
        console.log("\n VOL");
        console.log(`   Numéro : ${reservation.vol.numero}`);
        console.log(`   Destination : ${reservation.vol.destination}`);
        console.log(`   Date : ${reservation.vol.date}`);
        console.log(`   Passagers : ${reservation.vol.nombrePersonnes}`);
        console.log(`   Prix : ${reservation.vol.prixTotal.toFixed(2)}€`);
        
        console.log("\n HÔTEL");
        console.log(`   Nom : ${reservation.hotel.nom}`);
        console.log(`   Chambre : ${reservation.hotel.chambre}`);
        console.log(`   Nuits : ${reservation.hotel.nuits}`);
        console.log(`   Prix : ${reservation.hotel.prixTotal.toFixed(2)}€`);
        
        console.log("\n TARIFICATION");
        console.log(`   Sous-total : ${reservation.montantBrut.toFixed(2)}€`);
        
        if (reservation.reductionFidelite > 0) {
            console.log(`   Réduction fidélité (${reservation.reductionFidelite}%) : -${reservation.montantReduction.toFixed(2)}€`);
        }
        
        console.log("   " + "".repeat(50));
        console.log(`   TOTAL : ${reservation.montantTotal.toFixed(2)}€`);
        console.log("".repeat(70) + "\n");
    },
    
    // Méthode pour annuler une réservation
    annulerReservation(numeroReservation) {
        const reservation = this.reservations.find(r => r.numero === numeroReservation);
        
        if (!reservation) {
            console.log(" Réservation non trouvée");
            return false;
        }
        
        if (reservation.statut === "annulée") {
            console.log("Cette réservation est déjà annulée");
            return false;
        }
        
        // Remettre les places du vol
        const vol = this.vols.find(v => v.numero === reservation.vol.numero);
        if (vol) {
            vol.placesDisponibles += reservation.vol.nombrePersonnes;
        }
        
        // Remettre la chambre d'hôtel
        const hotel = this.hotels.find(h => h.nom === reservation.hotel.nom);
        if (hotel) {
            const chambre = hotel.chambres.find(c => c.type === reservation.hotel.chambre);
            if (chambre) {
                chambre.disponible++;
            }
        }
        
        reservation.statut = "annulée";
        console.log(` Réservation #${numeroReservation} annulée`);
        
        return true;
    },
    
    //  5. STATISTIQUES 
    
    // Méthode pour trouver les destinations les plus populaires
    destinationsPopulaires() {
        const compteur = {};
        
        this.reservations
            .filter(r => r.statut === "confirmée")
            .forEach(reservation => {
                const dest = reservation.vol.destination;
                compteur[dest] = (compteur[dest] || 0) + 1;
            });
        
        const top = Object.entries(compteur)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5);
        
        console.log("\n DESTINATIONS LES PLUS POPULAIRES \n");
        
        if (top.length === 0) {
            console.log("Aucune donnée disponible");
        } else {
            top.forEach(([destination, nombre], index) => {
                console.log(`${index + 1}. ${destination} : ${nombre} réservation(s)`);
            });
        }
    },
    
    // Méthode pour calculer le revenu total
    revenuTotal() {
        const total = this.reservations
            .filter(r => r.statut === "confirmée")
            .reduce((somme, r) => somme + r.montantTotal, 0);
        
        console.log(`\n Revenu total : ${total.toFixed(2)}€`);
        return total;
    },
    
    // Méthode pour calculer le taux d'occupation des vols
    tauxOccupationVols() {
        console.log("\n TAUX D'OCCUPATION DES VOLS \n");
        
        this.vols.forEach(vol => {
            const placesOccupees = vol.placesTotal - vol.placesDisponibles;
            const taux = (placesOccupees / vol.placesTotal) * 100;
            
            console.log(`Vol ${vol.numero} → ${vol.destination}`);
            console.log(`   Occupées : ${placesOccupees}/${vol.placesTotal} (${taux.toFixed(1)}%)`);
        });
    },
    
    // Méthode pour afficher toutes les statistiques
    afficherStatistiques() {
        console.log("\n STATISTIQUES AGENCE");
        
        const totalReservations = this.reservations.length;
        const confirmees = this.reservations.filter(r => r.statut === "confirmée").length;
        const annulees = this.reservations.filter(r => r.statut === "annulée").length;
        
        console.log(`\nRéservations totales : ${totalReservations}`);
        console.log(`Confirmées : ${confirmees}`);
        console.log(`Annulées : ${annulees}`);
        console.log(`Nombre de clients : ${this.clients.length}`);
        
        this.destinationsPopulaires();
        this.revenuTotal();
        this.tauxOccupationVols();
    }
};


console.log(" TEST DU SYSTÈME DE RÉSERVATION \n");

// Créer des clients
console.log("Création de clients");
const client1 = agenceVoyages.creerClient("Dupont", "Marie", "marie.dupont@email.fr", "0601020304");
const client2 = agenceVoyages.creerClient("Martin", "Lucas", "lucas.martin@email.fr", "0605060708");

// Rechercher des vols
agenceVoyages.rechercherVols("Paris");

// Rechercher des hôtels
agenceVoyages.rechercherHotels("Paris", 4);

// Créer une réservation complète
console.log("\n Création de réservation");
agenceVoyages.creerReservationComplete(client1, "AF001", 2, 1, "Double", 3);

// Ajouter des points pour tester la réduction
agenceVoyages.clients[0].pointsFidelite = 500;

// Créer une deuxième réservation
agenceVoyages.creerReservationComplete(client1, "BA202", 1, 2, "Suite", 2);

// Créer une réservation pour le client 2
agenceVoyages.creerReservationComplete(client2, "LH303", 2, 3, "Double", 4);

// Afficher le profil d'un client
agenceVoyages.afficherProfilClient(client1);

// Afficher les statistiques
agenceVoyages.afficherStatistiques();

console.log("\n Système de réservation opérationnel !");
