

// Création de l'objet voiture avec toutes ses propriétés
const voiture = {
    marque: "Peugeot",
    modele: "308",
    annee: 2022,
    kilometrage: 15000,
    reservoir: 50,  // en litres
    
    // Méthode pour rouler
    rouler(km) {
        // Ajouter les kilomètres parcourus
        this.kilometrage += km;
        
        // Calculer le carburant consommé (1 litre pour 15 km)
        const carburantConsomme = km / 15;
        this.reservoir -= carburantConsomme;
        
        // Afficher un message avec les nouvelles valeurs
        console.log(` Vous avez roulé ${km} km`);
        console.log(`   Kilométrage : ${this.kilometrage} km`);
        console.log(`   Carburant restant : ${this.reservoir.toFixed(2)} L`);
    },
    
    // Méthode pour faire le plein
    faireLePlein() {
        this.reservoir = 50;
        console.log("⛽ Plein effectué ! Réservoir : 50 L");
    },
    
    // Méthode pour afficher toutes les informations
    afficherInfos() {
        console.log("\n INFORMATIONS DE LA VOITURE ");
        console.log(`   Véhicule : ${this.marque} ${this.modele}`);
        console.log(`   Année : ${this.annee}`);
        console.log(`   Kilométrage : ${this.kilometrage} km`);
        console.log(`   Carburant : ${this.reservoir.toFixed(2)} L`);
        console.log("\n");
    }
};

// Tests des fonctionnalités
console.log(" TEST DE LA GESTION VOITURE \n");

// Afficher les infos initiales
voiture.afficherInfos();

// Rouler 300 km
console.log("Action : Rouler 300 km");
voiture.rouler(300);

// Afficher les infos après le trajet
voiture.afficherInfos();

// Faire le plein
voiture.faireLePlein();

// Rouler 450 km
console.log("Action : Rouler 450 km");
voiture.rouler(450);

// Afficher les infos finales
voiture.afficherInfos();

// Vérifier si on peut encore rouler
if (voiture.reservoir < 5) {
    console.log(" ATTENTION : Niveau de carburant faible !");
} else {
    console.log(` Il reste ${voiture.reservoir.toFixed(2)} L de carburant`);
}

/*
 * EXPLICATIONS :
 
 * 1. La consommation est calculée : km ÷ 15 (15 km par litre)
 * 2. toFixed(2) arrondit à 2 décimales pour l'affichage
 * 3. On modifie plusieurs propriétés dans une seule méthode
 * 4. faireLePlein() remet simplement le réservoir à 50L
 * 
 * CALCULS :
 
 * 300 km ÷ 15 = 20 L consommés
 * 50 L - 20 L = 30 L restants
 * Après plein : 50 L
 * 450 km ÷ 15 = 30 L consommés
 * 50 L - 30 L = 20 L restants
 * 
 * AMÉLIORATIONS POSSIBLES :
 
 * - Vérifier qu'il y a assez de carburant avant de rouler
 * - Ajouter un historique des trajets
 * - Gérer l'usure (vidange, pneus, etc.)
 * - Calculer les coûts (carburant, entretien)
 */
