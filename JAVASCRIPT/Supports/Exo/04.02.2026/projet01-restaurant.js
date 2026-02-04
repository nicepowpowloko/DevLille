

// Système complet de gestion de restaurant
const restaurant = {
    nom: "Le Gourmet Lillois",
    
    //  1. GESTION DU MENU
    menu: {
        entrees: [
            { id: 1, nom: "Salade César", prix: 8.50, disponible: true, description: "Laitue, poulet, parmesan, croûtons" },
            { id: 2, nom: "Soupe à l'oignon", prix: 7.00, disponible: true, description: "Gratinée au fromage" }
        ],
        plats: [
            { id: 3, nom: "Steak frites", prix: 18.00, disponible: true, description: "Pièce de bœuf 250g, frites maison" },
            { id: 4, nom: "Saumon grillé", prix: 22.00, disponible: true, description: "Avec légumes de saison" },
            { id: 5, nom: "Risotto champignons", prix: 16.50, disponible: false, description: "Riz arborio, cèpes" }
        ],
        desserts: [
            { id: 6, nom: "Tarte au citron", prix: 6.50, disponible: true, description: "Meringuée maison" },
            { id: 7, nom: "Fondant chocolat", prix: 7.00, disponible: true, description: "Cœur coulant" }
        ],
        boissons: [
            { id: 8, nom: "Eau minérale", prix: 3.00, disponible: true, description: "50cl" },
            { id: 9, nom: "Vin rouge", prix: 5.50, disponible: true, description: "Verre 15cl" },
            { id: 10, nom: "Café", prix: 2.50, disponible: true, description: "Expresso" }
        ]
    },
    
    // Méthode pour ajouter un plat au menu
    ajouterPlat(categorie, plat) {
        const categories = ["entrees", "plats", "desserts", "boissons"];
        
        if (!categories.includes(categorie)) {
            console.log(" Catégorie invalide. Choisir : entrees, plats, desserts, boissons");
            return false;
        }
        
        // Générer un ID unique
        const tousLesPlats = [...this.menu.entrees, ...this.menu.plats, ...this.menu.desserts, ...this.menu.boissons];
        const maxId = Math.max(...tousLesPlats.map(p => p.id), 0);
        
        plat.id = maxId + 1;
        plat.disponible = plat.disponible !== undefined ? plat.disponible : true;
        
        this.menu[categorie].push(plat);
        console.log(` "${plat.nom}" ajouté à la catégorie ${categorie}`);
        return true;
    },
    
    // Méthode pour supprimer un plat
    supprimerPlat(idPlat) {
        for (let categorie in this.menu) {
            const index = this.menu[categorie].findIndex(p => p.id === idPlat);
            if (index !== -1) {
                const plat = this.menu[categorie].splice(index, 1)[0];
                console.log(` "${plat.nom}" supprimé du menu`);
                return true;
            }
        }
        console.log(" Plat non trouvé");
        return false;
    },
    
    // Méthode pour changer la disponibilité d'un plat
    changerDisponibilite(idPlat, disponible) {
        for (let categorie in this.menu) {
            const plat = this.menu[categorie].find(p => p.id === idPlat);
            if (plat) {
                plat.disponible = disponible;
                console.log(` "${plat.nom}" est maintenant ${disponible ? "disponible" : "indisponible"}`);
                return true;
            }
        }
        console.log(" Plat non trouvé");
        return false;
    },
    
    // Méthode pour afficher le menu
    afficherMenu() {
        console.log(`\n MENU ${this.nom.toUpperCase()} \n`);
        
        const categories = {
            entrees: " ENTRÉES",
            plats: " PLATS",
            desserts: " DESSERTS",
            boissons: " BOISSONS"
        };
        
        for (let [categorie, titre] of Object.entries(categories)) {
            console.log(titre);
            console.log("".repeat(50));
            
            this.menu[categorie].forEach(item => {
                const statut = item.disponible ? "" : "";
                console.log(`${statut} ${item.id}. ${item.nom} - ${item.prix.toFixed(2)}€`);
                console.log(`   ${item.description}`);
            });
            console.log("");
        }
    },
    
    //  2. GESTION DES TABLES
    tables: [
        { numero: 1, capacite: 2, statut: "libre", commandeId: null },
        { numero: 2, capacite: 4, statut: "libre", commandeId: null },
        { numero: 3, capacite: 4, statut: "libre", commandeId: null },
        { numero: 4, capacite: 6, statut: "libre", commandeId: null },
        { numero: 5, capacite: 2, statut: "libre", commandeId: null }
    ],
    
    // Méthode pour réserver une table
    reserverTable(numeroTable, nombrePersonnes) {
        const table = this.tables.find(t => t.numero === numeroTable);
        
        if (!table) {
            console.log(" Table non trouvée");
            return false;
        }
        
        if (table.statut === "occupée") {
            console.log(` Table ${numeroTable} déjà occupée`);
            return false;
        }
        
        if (nombrePersonnes > table.capacite) {
            console.log(` Table ${numeroTable} capacité insuffisante (${table.capacite} places)`);
            return false;
        }
        
        table.statut = "occupée";
        console.log(` Table ${numeroTable} réservée pour ${nombrePersonnes} personne(s)`);
        return true;
    },
    
    // Méthode pour libérer une table
    libererTable(numeroTable) {
        const table = this.tables.find(t => t.numero === numeroTable);
        
        if (!table) {
            console.log(" Table non trouvée");
            return false;
        }
        
        table.statut = "libre";
        table.commandeId = null;
        console.log(` Table ${numeroTable} libérée`);
        return true;
    },
    
    // Méthode pour afficher l'état des tables
    afficherTables() {
        console.log("\n ÉTAT DES TABLES \n");
        
        this.tables.forEach(table => {
            const icone = table.statut === "libre" ? "" : "";
            console.log(`${icone} Table ${table.numero} - ${table.capacite} places - ${table.statut.toUpperCase()}`);
        });
        
        const libres = this.tables.filter(t => t.statut === "libre").length;
        console.log(`\n Tables libres : ${libres}/${this.tables.length}`);
    },
    
    // 3. GESTION DES COMMANDES
    commandes: [],
    prochainNumeroCommande: 1,
    
    // Méthode pour créer une commande
    creerCommande(numeroTable) {
        const table = this.tables.find(t => t.numero === numeroTable);
        
        if (!table) {
            console.log(" Table non trouvée");
            return null;
        }
        
        if (table.statut !== "occupée") {
            console.log(" La table doit d'abord être réservée");
            return null;
        }
        
        const nouvelleCommande = {
            id: this.prochainNumeroCommande++,
            numeroTable: numeroTable,
            articles: [],
            statut: "en préparation",
            dateHeure: new Date().toLocaleString('fr-FR'),
            sousTotal: 0,
            remise: 0,
            pourboire: 0,
            total: 0
        };
        
        this.commandes.push(nouvelleCommande);
        table.commandeId = nouvelleCommande.id;
        
        console.log(` Commande #${nouvelleCommande.id} créée pour la table ${numeroTable}`);
        return nouvelleCommande.id;
    },
    
    // Méthode pour ajouter un article à une commande
    ajouterArticle(commandeId, idPlat, quantite = 1) {
        const commande = this.commandes.find(c => c.id === commandeId);
        
        if (!commande) {
            console.log(" Commande non trouvée");
            return false;
        }
        
        // Chercher le plat dans toutes les catégories
        let platTrouve = null;
        for (let categorie in this.menu) {
            const plat = this.menu[categorie].find(p => p.id === idPlat);
            if (plat) {
                platTrouve = plat;
                break;
            }
        }
        
        if (!platTrouve) {
            console.log(" Plat non trouvé dans le menu");
            return false;
        }
        
        if (!platTrouve.disponible) {
            console.log(` "${platTrouve.nom}" n'est pas disponible actuellement`);
            return false;
        }
        
        // Vérifier si l'article existe déjà dans la commande
        const articleExistant = commande.articles.find(a => a.idPlat === idPlat);
        
        if (articleExistant) {
            articleExistant.quantite += quantite;
            console.log(` +${quantite} "${platTrouve.nom}" (total: ${articleExistant.quantite})`);
        } else {
            commande.articles.push({
                idPlat: idPlat,
                nom: platTrouve.nom,
                prix: platTrouve.prix,
                quantite: quantite
            });
            console.log(` "${platTrouve.nom}" x${quantite} ajouté à la commande #${commandeId}`);
        }
        
        this.calculerTotalCommande(commandeId);
        return true;
    },
    
    // Méthode pour retirer un article d'une commande
    retirerArticle(commandeId, idPlat, quantite = null) {
        const commande = this.commandes.find(c => c.id === commandeId);
        
        if (!commande) {
            console.log(" Commande non trouvée");
            return false;
        }
        
        const index = commande.articles.findIndex(a => a.idPlat === idPlat);
        
        if (index === -1) {
            console.log(" Article non trouvé dans la commande");
            return false;
        }
        
        const article = commande.articles[index];
        
        if (quantite === null || quantite >= article.quantite) {
            // Retirer complètement l'article
            commande.articles.splice(index, 1);
            console.log(` "${article.nom}" retiré de la commande`);
        } else {
            // Réduire la quantité
            article.quantite -= quantite;
            console.log(` -${quantite} "${article.nom}" (reste: ${article.quantite})`);
        }
        
        this.calculerTotalCommande(commandeId);
        return true;
    },
    
    // Méthode pour calculer le total d'une commande
    calculerTotalCommande(commandeId) {
        const commande = this.commandes.find(c => c.id === commandeId);
        
        if (!commande) return 0;
        
        // Calculer le sous-total
        commande.sousTotal = commande.articles.reduce((total, article) => {
            return total + (article.prix * article.quantite);
        }, 0);
        
        // Calculer le total avec remise et pourboire
        const montantApresRemise = commande.sousTotal * (1 - commande.remise / 100);
        commande.total = montantApresRemise + commande.pourboire;
        
        return commande.total;
    },
    
    // Méthode pour changer le statut d'une commande
    changerStatutCommande(commandeId, nouveauStatut) {
        const statutsValides = ["en préparation", "servie", "payée"];
        
        if (!statutsValides.includes(nouveauStatut)) {
            console.log(" Statut invalide");
            return false;
        }
        
        const commande = this.commandes.find(c => c.id === commandeId);
        
        if (!commande) {
            console.log(" Commande non trouvée");
            return false;
        }
        
        commande.statut = nouveauStatut;
        console.log(` Commande #${commandeId} : ${nouveauStatut}`);
        
        // Si payée, libérer la table
        if (nouveauStatut === "payée") {
            this.libererTable(commande.numeroTable);
        }
        
        return true;
    },
    
    //  4. FACTURATION
    
    // Méthode pour générer une facture
    genererFacture(commandeId) {
        const commande = this.commandes.find(c => c.id === commandeId);
        
        if (!commande) {
            console.log(" Commande non trouvée");
            return;
        }
        
        console.log("\n" + "".repeat(60));
        console.log(` FACTURE - ${this.nom.toUpperCase()}`);
        console.log("".repeat(60));
        console.log(`Commande #${commande.id} - Table ${commande.numeroTable}`);
        console.log(`Date : ${commande.dateHeure}`);
        console.log(`Statut : ${commande.statut.toUpperCase()}`);
        console.log("".repeat(60));
        
        if (commande.articles.length === 0) {
            console.log("Aucun article commandé");
        } else {
            commande.articles.forEach(article => {
                const sousTotal = article.prix * article.quantite;
                console.log(`${article.quantite}x ${article.nom}`);
                console.log(`   ${article.prix.toFixed(2)}€ × ${article.quantite} = ${sousTotal.toFixed(2)}€`);
            });
        }
        
        console.log("".repeat(60));
        console.log(`Sous-total : ${commande.sousTotal.toFixed(2)}€`);
        
        if (commande.remise > 0) {
            const montantRemise = commande.sousTotal * (commande.remise / 100);
            console.log(`Remise (${commande.remise}%) : -${montantRemise.toFixed(2)}€`);
        }
        
        if (commande.pourboire > 0) {
            console.log(`Pourboire : +${commande.pourboire.toFixed(2)}€`);
        }
        
        console.log("".repeat(60));
        console.log(`TOTAL À PAYER : ${commande.total.toFixed(2)}€`);
        console.log("".repeat(60));
        console.log(`Merci de votre visite !`);
        console.log("".repeat(60) + "\n");
    },
    
    // Méthode pour appliquer une remise
    appliquerRemise(commandeId, pourcentage) {
        const commande = this.commandes.find(c => c.id === commandeId);
        
        if (!commande) {
            console.log(" Commande non trouvée");
            return false;
        }
        
        if (pourcentage < 0 || pourcentage > 100) {
            console.log(" Le pourcentage doit être entre 0 et 100");
            return false;
        }
        
        commande.remise = pourcentage;
        this.calculerTotalCommande(commandeId);
        
        const montantRemise = commande.sousTotal * (pourcentage / 100);
        console.log(` Remise de ${pourcentage}% appliquée (-${montantRemise.toFixed(2)}€)`);
        
        return true;
    },
    
    // Méthode pour ajouter un pourboire
    ajouterPourboire(commandeId, montant) {
        const commande = this.commandes.find(c => c.id === commandeId);
        
        if (!commande) {
            console.log(" Commande non trouvée");
            return false;
        }
        
        if (montant < 0) {
            console.log(" Le pourboire ne peut pas être négatif");
            return false;
        }
        
        commande.pourboire = montant;
        this.calculerTotalCommande(commandeId);
        
        console.log(` Pourboire de ${montant.toFixed(2)}€ ajouté`);
        return true;
    },
    
    // === 5. STATISTIQUES ===
    
    // Méthode pour trouver le plat le plus commandé
    platPlusCommande() {
        const compteur = {};
        
        this.commandes.forEach(commande => {
            commande.articles.forEach(article => {
                compteur[article.nom] = (compteur[article.nom] || 0) + article.quantite;
            });
        });
        
        if (Object.keys(compteur).length === 0) {
            console.log(" Aucune commande enregistrée");
            return null;
        }
        
        const [platPopulaire, quantite] = Object.entries(compteur)
            .sort((a, b) => b[1] - a[1])[0];
        
        console.log(`\n Plat le plus commandé : "${platPopulaire}" (${quantite} fois)`);
        return platPopulaire;
    },
    
    // Méthode pour calculer le chiffre d'affaires
    chiffreAffaires() {
        const total = this.commandes
            .filter(c => c.statut === "payée")
            .reduce((somme, c) => somme + c.total, 0);
        
        console.log(`\n Chiffre d'affaires : ${total.toFixed(2)}€`);
        return total;
    },
    
    // Méthode pour compter les commandes par jour
    commandesParJour() {
        const aujourd_hui = new Date().toLocaleDateString('fr-FR');
        const commandesDuJour = this.commandes.filter(c => 
            c.dateHeure.startsWith(aujourd_hui)
        );
        
        console.log(`\n Commandes aujourd'hui : ${commandesDuJour.length}`);
        return commandesDuJour.length;
    },
    
    // Méthode pour afficher toutes les statistiques
    afficherStatistiques() {
        console.log("\n STATISTIQUES DU RESTAURANT \n");
        
        const totalCommandes = this.commandes.length;
        const commandesPayees = this.commandes.filter(c => c.statut === "payée").length;
        const commandesEnCours = this.commandes.filter(c => c.statut !== "payée").length;
        
        console.log(`Total commandes : ${totalCommandes}`);
        console.log(`Commandes payées : ${commandesPayees}`);
        console.log(`Commandes en cours : ${commandesEnCours}`);
        
        this.platPlusCommande();
        this.chiffreAffaires();
        this.commandesParJour();
        
        // Top 5 des plats
        const compteur = {};
        this.commandes.forEach(commande => {
            commande.articles.forEach(article => {
                compteur[article.nom] = (compteur[article.nom] || 0) + article.quantite;
            });
        });
        
        const top5 = Object.entries(compteur)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5);
        
        if (top5.length > 0) {
            console.log("\n Top 5 des plats :");
            top5.forEach(([plat, quantite], index) => {
                console.log(`   ${index + 1}. ${plat} (${quantite} commandés)`);
            });
        }
    }
};


console.log(" TEST DU SYSTÈME DE RESTAURANT \n");

// Afficher le menu
restaurant.afficherMenu();

// Afficher les tables
restaurant.afficherTables();

// Réserver une table
console.log("\nRéservation de tables");
restaurant.reserverTable(2, 3);
restaurant.reserverTable(4, 5);

// Créer une commande
console.log("\n Création de commandes");
const commande1 = restaurant.creerCommande(2);

// Ajouter des articles
console.log("\n Ajout d'articles ");
restaurant.ajouterArticle(commande1, 1, 2);  // 2 Salades César
restaurant.ajouterArticle(commande1, 3, 1);  // 1 Steak frites
restaurant.ajouterArticle(commande1, 4, 1);  // 1 Saumon grillé
restaurant.ajouterArticle(commande1, 6, 2);  // 2 Tartes au citron
restaurant.ajouterArticle(commande1, 10, 2); // 2 Cafés

// Générer la facture
restaurant.genererFacture(commande1);

// Appliquer une remise
console.log("\n Appliquer une remise");
restaurant.appliquerRemise(commande1, 10);
restaurant.genererFacture(commande1);

// Ajouter un pourboire
console.log("\nAjouter un pourboire");
restaurant.ajouterPourboire(commande1, 5);
restaurant.genererFacture(commande1);

// Payer la commande
console.log("\n Paiement ");
restaurant.changerStatutCommande(commande1, "servie");
restaurant.changerStatutCommande(commande1, "payée");

// Créer d'autres commandes pour les stats
const commande2 = restaurant.creerCommande(4);
restaurant.ajouterArticle(commande2, 2, 4);
restaurant.ajouterArticle(commande2, 3, 3);
restaurant.ajouterArticle(commande2, 7, 4);
restaurant.changerStatutCommande(commande2, "payée");

// Afficher les statistiques
restaurant.afficherStatistiques();

// État final des tables
restaurant.afficherTables();

console.log("\n Système de restaurant opérationnel !");
