

// Création de l'objet banque avec gestion complète des comptes
const banque = {
    nom: "Banque Populaire du Nord",
    comptes: [],
    prochainNumero: 1001,
    
    // Méthode pour créer un nouveau compte
    creerCompte(titulaire, soldeInitial = 0) {
        // Créer le nouveau compte
        const nouveauCompte = {
            numero: this.prochainNumero++,
            titulaire: titulaire,
            solde: soldeInitial,
            historique: []
        };
        
        // Enregistrer l'ouverture dans l'historique si solde initial > 0
        if (soldeInitial > 0) {
            nouveauCompte.historique.push({
                date: new Date().toLocaleString('fr-FR'),
                type: "Ouverture de compte",
                montant: soldeInitial,
                soldeApres: soldeInitial
            });
        }
        
        // Ajouter le compte à la liste
        this.comptes.push(nouveauCompte);
        
        console.log(`\n Compte créé avec succès !`);
        console.log(`   Numéro de compte : ${nouveauCompte.numero}`);
        console.log(`   Titulaire : ${titulaire}`);
        console.log(`   Solde initial : ${soldeInitial.toFixed(2)}€`);
        
        return nouveauCompte.numero;
    },
    
    // Méthode pour trouver un compte par son numéro
    trouverCompte(numeroCompte) {
        return this.comptes.find(c => c.numero === numeroCompte);
    },
    
    // Méthode pour déposer de l'argent
    deposer(numeroCompte, montant) {
        const compte = this.trouverCompte(numeroCompte);
        
        if (!compte) {
            console.log(" Compte non trouvé");
            return false;
        }
        
        if (montant <= 0) {
            console.log(" Le montant doit être positif");
            return false;
        }
        
        // Effectuer le dépôt
        compte.solde += montant;
        
        // Enregistrer dans l'historique
        compte.historique.push({
            date: new Date().toLocaleString('fr-FR'),
            type: "Dépôt",
            montant: montant,
            soldeApres: compte.solde
        });
        
        console.log(`\n Dépôt effectué`);
        console.log(`   Compte : ${compte.numero}`);
        console.log(`   Montant déposé : ${montant.toFixed(2)}€`);
        console.log(`   Nouveau solde : ${compte.solde.toFixed(2)}€`);
        
        return true;
    },
    
    // Méthode pour retirer de l'argent
    retirer(numeroCompte, montant) {
        const compte = this.trouverCompte(numeroCompte);
        
        if (!compte) {
            console.log(" Compte non trouvé");
            return false;
        }
        
        if (montant <= 0) {
            console.log(" Le montant doit être positif");
            return false;
        }
        
        if (compte.solde < montant) {
            console.log(` Solde insuffisant`);
            console.log(`   Solde disponible : ${compte.solde.toFixed(2)}€`);
            console.log(`   Montant demandé : ${montant.toFixed(2)}€`);
            return false;
        }
        
        // Effectuer le retrait
        compte.solde -= montant;
        
        // Enregistrer dans l'historique
        compte.historique.push({
            date: new Date().toLocaleString('fr-FR'),
            type: "Retrait",
            montant: -montant,
            soldeApres: compte.solde
        });
        
        console.log(`\n Retrait effectué`);
        console.log(`   Compte : ${compte.numero}`);
        console.log(`   Montant retiré : ${montant.toFixed(2)}€`);
        console.log(`   Nouveau solde : ${compte.solde.toFixed(2)}€`);
        
        return true;
    },
    
    // Méthode pour effectuer un virement entre deux comptes
    virer(compteSource, compteDestination, montant) {
        const source = this.trouverCompte(compteSource);
        const destination = this.trouverCompte(compteDestination);
        
        if (!source || !destination) {
            console.log(" Un des comptes n'existe pas");
            return false;
        }
        
        if (montant <= 0) {
            console.log(" Le montant doit être positif");
            return false;
        }
        
        if (source.solde < montant) {
            console.log(" Solde insuffisant sur le compte source");
            console.log(`   Solde disponible : ${source.solde.toFixed(2)}€`);
            return false;
        }
        
        // Effectuer le virement
        source.solde -= montant;
        destination.solde += montant;
        
        const date = new Date().toLocaleString('fr-FR');
        
        // Enregistrer dans l'historique du compte source
        source.historique.push({
            date: date,
            type: `Virement vers ${destination.numero} (${destination.titulaire})`,
            montant: -montant,
            soldeApres: source.solde
        });
        
        // Enregistrer dans l'historique du compte destination
        destination.historique.push({
            date: date,
            type: `Virement depuis ${source.numero} (${source.titulaire})`,
            montant: montant,
            soldeApres: destination.solde
        });
        
        console.log(`\n Virement effectué`);
        console.log(`   De : Compte ${source.numero} (${source.titulaire})`);
        console.log(`   Vers : Compte ${destination.numero} (${destination.titulaire})`);
        console.log(`   Montant : ${montant.toFixed(2)}€`);
        console.log(`   Solde source : ${source.solde.toFixed(2)}€`);
        console.log(`   Solde destination : ${destination.solde.toFixed(2)}€`);
        
        return true;
    },
    
    // Méthode pour afficher l'historique d'un compte
    afficherHistorique(numeroCompte) {
        const compte = this.trouverCompte(numeroCompte);
        
        if (!compte) {
            console.log(" Compte non trouvé");
            return;
        }
        
        console.log("\n" + "".repeat(80));
        console.log(` HISTORIQUE DU COMPTE ${compte.numero} - ${compte.titulaire}`);
        console.log("".repeat(80));
        console.log(`Solde actuel : ${compte.solde.toFixed(2)}€`);
        console.log("");
        
        if (compte.historique.length === 0) {
            console.log("Aucune transaction enregistrée");
        } else {
            compte.historique.forEach((transaction, index) => {
                const signe = transaction.montant >= 0 ? "+" : "";
                console.log(`${index + 1}. ${transaction.date}`);
                console.log(`   ${transaction.type}`);
                console.log(`   Montant : ${signe}${transaction.montant.toFixed(2)}€`);
                console.log(`   Solde après : ${transaction.soldeApres.toFixed(2)}€`);
                console.log("");
            });
        }
        
        console.log("".repeat(80) + "\n");
    },
    
    // Méthode pour calculer les intérêts sur un compte
    calculerInterets(numeroCompte, tauxAnnuel) {
        const compte = this.trouverCompte(numeroCompte);
        
        if (!compte) {
            console.log(" Compte non trouvé");
            return false;
        }
        
        if (tauxAnnuel <= 0 || tauxAnnuel > 20) {
            console.log(" Le taux doit être entre 0 et 20%");
            return false;
        }
        
        // Calculer les intérêts
        const interets = compte.solde * (tauxAnnuel / 100);
        compte.solde += interets;
        
        // Enregistrer dans l'historique
        compte.historique.push({
            date: new Date().toLocaleString('fr-FR'),
            type: `Intérêts annuels (${tauxAnnuel}%)`,
            montant: interets,
            soldeApres: compte.solde
        });
        
        console.log(`\n Intérêts calculés et ajoutés`);
        console.log(`   Compte : ${compte.numero}`);
        console.log(`   Taux : ${tauxAnnuel}%`);
        console.log(`   Intérêts : ${interets.toFixed(2)}€`);
        console.log(`   Nouveau solde : ${compte.solde.toFixed(2)}€`);
        
        return true;
    },
    
    // Méthode pour afficher tous les comptes
    afficherTousLesComptes() {
        console.log(`\n ${this.nom.toUpperCase()} `);
        console.log(`Nombre de comptes : ${this.comptes.length}`);
        console.log("");
        
        if (this.comptes.length === 0) {
            console.log("Aucun compte enregistré");
        } else {
            this.comptes.forEach(compte => {
                console.log(`Compte n°${compte.numero} - ${compte.titulaire}`);
                console.log(`   Solde : ${compte.solde.toFixed(2)}€`);
                console.log(`   Transactions : ${compte.historique.length}`);
                console.log("");
            });
        }
    },
    
    // Méthode pour calculer le solde total de tous les comptes
    calculerSoldeTotal() {
        const total = this.comptes.reduce((somme, compte) => somme + compte.solde, 0);
        console.log(`\n Solde total de la banque : ${total.toFixed(2)}€`);
        return total;
    },
    
    // Méthode pour fermer un compte
    fermerCompte(numeroCompte) {
        const index = this.comptes.findIndex(c => c.numero === numeroCompte);
        
        if (index === -1) {
            console.log(" Compte non trouvé");
            return false;
        }
        
        const compte = this.comptes[index];
        
        if (compte.solde > 0) {
            console.log(` Le compte a encore un solde de ${compte.solde.toFixed(2)}€`);
            console.log("   Veuillez retirer l'argent avant de fermer le compte");
            return false;
        }
        
        this.comptes.splice(index, 1);
        console.log(`\n Compte ${numeroCompte} fermé avec succès`);
        
        return true;
    },
    
    // Méthode pour obtenir les statistiques d'un compte
    statistiquesCompte(numeroCompte) {
        const compte = this.trouverCompte(numeroCompte);
        
        if (!compte) {
            console.log(" Compte non trouvé");
            return;
        }
        
        let totalDepots = 0;
        let totalRetraits = 0;
        let nombreDepots = 0;
        let nombreRetraits = 0;
        
        compte.historique.forEach(transaction => {
            if (transaction.montant > 0) {
                totalDepots += transaction.montant;
                nombreDepots++;
            } else if (transaction.montant < 0) {
                totalRetraits += Math.abs(transaction.montant);
                nombreRetraits++;
            }
        });
        
        console.log(`\n STATISTIQUES COMPTE ${compte.numero} `);
        console.log(`Titulaire : ${compte.titulaire}`);
        console.log(`Solde actuel : ${compte.solde.toFixed(2)}€`);
        console.log(`\nDépôts :`);
        console.log(`   Nombre : ${nombreDepots}`);
        console.log(`   Total : ${totalDepots.toFixed(2)}€`);
        console.log(`\nRetraits :`);
        console.log(`   Nombre : ${nombreRetraits}`);
        console.log(`   Total : ${totalRetraits.toFixed(2)}€`);
        console.log(`\nTotal transactions : ${compte.historique.length}`);
    },
    
    // Méthode pour obtenir les 5 dernières transactions
    dernieresTransactions(numeroCompte, nombre = 5) {
        const compte = this.trouverCompte(numeroCompte);
        
        if (!compte) {
            console.log(" Compte non trouvé");
            return;
        }
        
        console.log(`\n Les ${nombre} dernières transactions :`);
        
        const dernieres = compte.historique.slice(-nombre).reverse();
        
        dernieres.forEach((transaction, index) => {
            const signe = transaction.montant >= 0 ? "+" : "";
            console.log(`\n${index + 1}. ${transaction.type}`);
            console.log(`   ${transaction.date}`);
            console.log(`   ${signe}${transaction.montant.toFixed(2)}€`);
        });
    }
};


console.log(" TEST DU SYSTÈME BANCAIRE COMPLET ");

// Créer des comptes
console.log("\n Création de comptes ");
const compte1 = banque.creerCompte("Marie Dupont", 1000);
const compte2 = banque.creerCompte("Lucas Martin", 500);
const compte3 = banque.creerCompte("Sophie Bernard", 2000);

// Effectuer des opérations
console.log("\n Opérations bancaires ");
banque.deposer(compte1, 500);
banque.retirer(compte1, 200);
banque.deposer(compte2, 300);

// Effectuer un virement
console.log("\n Virement ");
banque.virer(compte1, compte2, 300);

// Essayer un virement impossible
banque.virer(compte2, compte1, 5000);

// Calculer des intérêts
console.log("\n Calcul d'intérêts ");
banque.calculerInterets(compte1, 2);
banque.calculerInterets(compte3, 1.5);

// Afficher l'historique d'un compte
banque.afficherHistorique(compte1);

// Afficher les statistiques d'un compte
banque.statistiquesCompte(compte1);

// Afficher les dernières transactions
banque.dernieresTransactions(compte1, 3);

// Afficher tous les comptes
banque.afficherTousLesComptes();

// Calculer le solde total de la banque
banque.calculerSoldeTotal();

/*
 * EXPLICATIONS :

 * 
 * STRUCTURE D'UN COMPTE :

 * {
 *   numero: 1001,
 *   titulaire: "Marie Dupont",
 *   solde: 1000,
 *   historique: [
 *     {
 *       date: "04/02/2026 à 10:30:15",
 *       type: "Dépôt",
 *       montant: 500,
 *       soldeApres: 1500
 *     }
 *   ]
 * }
 * 
 * GESTION DE L'HISTORIQUE :
 
 * - Chaque opération est enregistrée avec :
 *   * Date et heure exacte
 *   * Type d'opération
 *   * Montant (positif pour dépôt, négatif pour retrait)
 *   * Solde après l'opération
 * 
 * MÉTHODES DE DATES :

 * new Date() : crée un objet date avec l'heure actuelle
 * .toLocaleString('fr-FR') : formate la date en français
 * 
 * CALCULS :

 * - Intérêts : solde × (taux / 100)
 * - Virement : retrait du compte source + dépôt au compte destination
 * 
 * VALIDATIONS :

 * - Vérifier que le compte existe
 * - Vérifier que le montant est positif
 * - Vérifier qu'il y a assez d'argent pour un retrait
 * - Vérifier le taux d'intérêt
 * 
 * MÉTHODES DE TABLEAUX :

 * - push() : ajoute un élément à la fin
 * - find() : trouve un élément
 * - findIndex() : trouve l'index d'un élément
 * - reduce() : calcule une somme
 * - forEach() : parcourt chaque élément
 * - slice() : extrait une portion du tableau
 * - reverse() : inverse l'ordre du tableau
 * 
 * FONCTIONNALITÉS IMPLÉMENTÉES :

 *  Créer un compte avec solde initial
 *  Déposer de l'argent
 *  Retirer de l'argent (avec vérification)
 *  Virer entre deux comptes
 *  Historique complet de toutes les opérations
 *  Calcul d'intérêts
 *  Affichage de l'historique formaté
 *  Statistiques par compte
 *  Dernières transactions
 *  Liste de tous les comptes
 *  Solde total de la banque
 *  Fermeture de compte
 * 
 
 */
