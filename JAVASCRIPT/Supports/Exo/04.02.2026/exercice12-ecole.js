

// Création de l'objet école complet avec objets imbriqués
const ecole = {
    nom: "Real Conseil Formation",
    classes: [
        {
            niveau: "DWWM",
            eleves: [
                { nom: "Dupont", prenom: "Marie", notes: [15, 14, 16, 13, 17] },
                { nom: "Martin", prenom: "Lucas", notes: [12, 11, 13, 12, 14] },
                { nom: "Bernard", prenom: "Sophie", notes: [18, 17, 19, 18, 20] }
            ]
        },
        {
            niveau: "CDA",
            eleves: [
                { nom: "Petit", prenom: "Thomas", notes: [16, 15, 17, 16, 18] },
                { nom: "Durand", prenom: "Julie", notes: [14, 13, 15, 14, 16] }
            ]
        }
    ],
    
    // Méthode pour ajouter une classe
    ajouterClasse(classe) {
        // Vérifier que la classe a les bonnes propriétés
        if (!classe.niveau) {
            console.log(" Erreur : la classe doit avoir un niveau");
            return false;
        }
        
        // Initialiser le tableau d'élèves si absent
        classe.eleves = classe.eleves || [];
        
        this.classes.push(classe);
        console.log(` Classe ${classe.niveau} ajoutée`);
        return true;
    },
    
    // Méthode pour ajouter un élève à une classe
    ajouterEleve(niveau, eleve) {
        // Trouver la classe correspondante
        const classe = this.classes.find(c => c.niveau === niveau);
        
        if (!classe) {
            console.log(` Classe ${niveau} non trouvée`);
            return false;
        }
        
        // Initialiser le tableau de notes si absent
        eleve.notes = eleve.notes || [];
        
        classe.eleves.push(eleve);
        console.log(` ${eleve.prenom} ${eleve.nom} ajouté(e) à la classe ${niveau}`);
        return true;
    },
    
    // Méthode pour calculer la moyenne d'un élève
    calculerMoyenneEleve(nom, prenom) {
        // Chercher l'élève dans toutes les classes
        let eleveTrouve = null;
        let classeTrouvee = null;
        
        for (let classe of this.classes) {
            const eleve = classe.eleves.find(e => 
                e.nom.toLowerCase() === nom.toLowerCase() && 
                e.prenom.toLowerCase() === prenom.toLowerCase()
            );
            
            if (eleve) {
                eleveTrouve = eleve;
                classeTrouvee = classe;
                break;
            }
        }
        
        if (!eleveTrouve) {
            console.log(" Élève non trouvé");
            return null;
        }
        
        // Calculer la moyenne
        if (eleveTrouve.notes.length === 0) {
            console.log(" Aucune note pour cet élève");
            return 0;
        }
        
        const somme = eleveTrouve.notes.reduce((total, note) => total + note, 0);
        const moyenne = somme / eleveTrouve.notes.length;
        
        console.log(`\n Moyenne de ${eleveTrouve.prenom} ${eleveTrouve.nom} (${classeTrouvee.niveau}) :`);
        console.log(`   Notes : ${eleveTrouve.notes.join(", ")}`);
        console.log(`   Moyenne : ${moyenne.toFixed(2)}/20`);
        
        return moyenne;
    },
    
    // Méthode pour calculer la moyenne d'une classe
    calculerMoyenneClasse(niveau) {
        const classe = this.classes.find(c => c.niveau === niveau);
        
        if (!classe) {
            console.log(` Classe ${niveau} non trouvée`);
            return null;
        }
        
        if (classe.eleves.length === 0) {
            console.log(" Aucun élève dans cette classe");
            return 0;
        }
        
        let totalMoyennes = 0;
        let nbEleves = 0;
        
        // Calculer la moyenne de chaque élève
        classe.eleves.forEach(eleve => {
            if (eleve.notes.length > 0) {
                const somme = eleve.notes.reduce((total, note) => total + note, 0);
                const moyenne = somme / eleve.notes.length;
                totalMoyennes += moyenne;
                nbEleves++;
            }
        });
        
        if (nbEleves === 0) {
            console.log(" Aucun élève avec des notes");
            return 0;
        }
        
        const moyenneClasse = totalMoyennes / nbEleves;
        
        console.log(`\n Moyenne de la classe ${niveau} : ${moyenneClasse.toFixed(2)}/20`);
        console.log(`   Nombre d'élèves : ${nbEleves}`);
        
        return moyenneClasse;
    },
    
    // Méthode pour trouver le meilleur élève de l'école
    meilleurEleve() {
        let meilleur = null;
        let meilleureMoyenne = 0;
        let meilleureClasse = null;
        
        // Parcourir toutes les classes
        this.classes.forEach(classe => {
            classe.eleves.forEach(eleve => {
                if (eleve.notes.length > 0) {
                    const somme = eleve.notes.reduce((total, note) => total + note, 0);
                    const moyenne = somme / eleve.notes.length;
                    
                    if (moyenne > meilleureMoyenne) {
                        meilleureMoyenne = moyenne;
                        meilleur = eleve;
                        meilleureClasse = classe.niveau;
                    }
                }
            });
        });
        
        if (meilleur) {
            console.log("\n MEILLEUR ÉLÈVE DE L'ÉCOLE ");
            console.log(`   ${meilleur.prenom} ${meilleur.nom}`);
            console.log(`   Classe : ${meilleureClasse}`);
            console.log(`   Moyenne : ${meilleureMoyenne.toFixed(2)}/20`);
            console.log(`   Notes : ${meilleur.notes.join(", ")}`);
        } else {
            console.log(" Aucun élève avec des notes");
        }
        
        return meilleur;
    },
    
    // Méthode pour afficher les statistiques de l'école
    afficherStatistiquesEcole() {
        console.log("\n" + "".repeat(70));
        console.log(` STATISTIQUES - ${this.nom.toUpperCase()}`);
        console.log("".repeat(70));
        
        console.log(`\n Nombre de classes : ${this.classes.length}`);
        
        let totalEleves = 0;
        let totalNotes = 0;
        let nombreNotes = 0;
        
        // Parcourir chaque classe
        this.classes.forEach(classe => {
            totalEleves += classe.eleves.length;
            
            console.log(`\n Classe ${classe.niveau} : ${classe.eleves.length} élève(s)`);
            
            classe.eleves.forEach(eleve => {
                const somme = eleve.notes.reduce((total, note) => total + note, 0);
                const moyenne = eleve.notes.length > 0 ? somme / eleve.notes.length : 0;
                
                console.log(`   ${eleve.prenom} ${eleve.nom} : ${moyenne.toFixed(2)}/20`);
                
                // Pour calculer la moyenne générale de l'école
                if (eleve.notes.length > 0) {
                    totalNotes += somme;
                    nombreNotes += eleve.notes.length;
                }
            });
        });
        
        console.log(`\n Total élèves : ${totalEleves}`);
        
        if (nombreNotes > 0) {
            const moyenneGenerale = totalNotes / nombreNotes;
            console.log(` Moyenne générale de l'école : ${moyenneGenerale.toFixed(2)}/20`);
        }
        
        console.log("".repeat(70) + "\n");
    },
    
    // Méthode pour supprimer un élève
    supprimerEleve(nom, prenom) {
        for (let classe of this.classes) {
            const index = classe.eleves.findIndex(e => 
                e.nom.toLowerCase() === nom.toLowerCase() && 
                e.prenom.toLowerCase() === prenom.toLowerCase()
            );
            
            if (index !== -1) {
                const eleveSuppr = classe.eleves.splice(index, 1)[0];
                console.log(` ${eleveSuppr.prenom} ${eleveSuppr.nom} supprimé(e) de ${classe.niveau}`);
                return true;
            }
        }
        
        console.log(" Élève non trouvé");
        return false;
    },
    
    // Méthode pour ajouter une note à un élève
    ajouterNote(nom, prenom, note) {
        if (note < 0 || note > 20) {
            console.log(" La note doit être entre 0 et 20");
            return false;
        }
        
        for (let classe of this.classes) {
            const eleve = classe.eleves.find(e => 
                e.nom.toLowerCase() === nom.toLowerCase() && 
                e.prenom.toLowerCase() === prenom.toLowerCase()
            );
            
            if (eleve) {
                eleve.notes.push(note);
                console.log(` Note ${note}/20 ajoutée à ${eleve.prenom} ${eleve.nom}`);
                return true;
            }
        }
        
        console.log(" Élève non trouvé");
        return false;
    },
    
    // Méthode pour lister tous les élèves par classe
    listerEleves() {
        console.log(`\n  LISTE DES ÉLÈVES - ${this.nom} \n`);
        
        this.classes.forEach(classe => {
            console.log(` Classe ${classe.niveau} (${classe.eleves.length} élève(s)) :`);
            
            classe.eleves.forEach((eleve, index) => {
                const somme = eleve.notes.reduce((total, note) => total + note, 0);
                const moyenne = eleve.notes.length > 0 ? (somme / eleve.notes.length).toFixed(2) : "N/A";
                
                console.log(`   ${index + 1}. ${eleve.prenom} ${eleve.nom} - Moyenne : ${moyenne}/20`);
            });
            
            console.log("");
        });
    }
};


console.log("TEST DU SYSTÈME DE GESTION D'ÉCOLE \n");

// Afficher les statistiques initiales
ecole.afficherStatistiquesEcole();

// Ajouter une nouvelle classe
console.log(" Ajout d'une classe ");
ecole.ajouterClasse({
    niveau: "Designer Web",
    eleves: []
});

// Ajouter des élèves à cette nouvelle classe
console.log("\n Ajout d'élèves ");
ecole.ajouterEleve("Designer Web", {
    nom: "Rousseau",
    prenom: "Emma",
    notes: [15, 16, 14, 17]
});

ecole.ajouterEleve("DWWM", {
    nom: "Moreau",
    prenom: "Antoine",
    notes: [13, 12, 14, 13]
});

// Ajouter des notes à un élève existant
console.log("\n Ajout de notes ");
ecole.ajouterNote("Dupont", "Marie", 18);
ecole.ajouterNote("Martin", "Lucas", 15);

// Calculer la moyenne d'un élève
console.log("\n Calcul de moyennes individuelles ");
ecole.calculerMoyenneEleve("Bernard", "Sophie");
ecole.calculerMoyenneEleve("Dupont", "Marie");

// Calculer la moyenne d'une classe
console.log("\n Calcul de moyennes de classe ");
ecole.calculerMoyenneClasse("DWWM");
ecole.calculerMoyenneClasse("CDA");

// Trouver le meilleur élève
ecole.meilleurEleve();

// Lister tous les élèves
ecole.listerEleves();

// Afficher les statistiques finales
ecole.afficherStatistiquesEcole();

/*
 * EXPLICATIONS :
 * ==============
 * 
 * OBJETS IMBRIQUÉS :
 * ==================
 * ecole {
 *   classes: [
 *     {
 *       niveau: "DWWM",
 *       eleves: [
 *         { nom: "Dupont", notes: [15, 14] }
 *       ]
 *     }
 *   ]
 * }
 * 
 * PARCOURS D'OBJETS IMBRIQUÉS :
 * ==============================
 * - Boucle for...of pour parcourir les classes
 * - find() pour trouver un élément spécifique
 * - forEach() pour parcourir tous les éléments
 * 
 * MÉTHODES UTILISÉES :
 * ====================
 * - find() : trouve le premier élément qui correspond
 * - findIndex() : trouve l'index d'un élément
 * - filter() : filtre les éléments
 * - reduce() : calcule une somme
 * - push() : ajoute un élément
 * - splice() : supprime un élément
 * 
 * CALCULS :
 * =========
 * - Moyenne d'un élève : somme des notes / nombre de notes
 * - Moyenne d'une classe : somme des moyennes / nombre d'élèves
 * - Moyenne de l'école : somme de toutes les notes / nombre total de notes
 * 
 * RECHERCHE DANS OBJETS IMBRIQUÉS :
 * ==================================
 * Pour trouver un élève, il faut :
 * 1. Parcourir toutes les classes
 * 2. Dans chaque classe, parcourir tous les élèves
 * 3. Vérifier si nom ET prénom correspondent
 * 
 * BONNES PRATIQUES :
 * ==================
 * - Toujours vérifier si l'objet existe avant de l'utiliser
 * - Initialiser les tableaux vides si non présents
 * - Valider les données (notes entre 0 et 20)
 * - Gérer les cas où il n'y a pas de notes
 * - Retourner des valeurs pour permettre les tests
 * 
 * FONCTIONNALITÉS IMPLÉMENTÉES :
 * ===============================
 * ✅ Ajouter une classe
 * ✅ Ajouter un élève à une classe
 * ✅ Calculer la moyenne d'un élève
 * ✅ Calculer la moyenne d'une classe
 * ✅ Trouver le meilleur élève
 * ✅ Afficher les statistiques complètes
 * ✅ Supprimer un élève
 * ✅ Ajouter une note
 * ✅ Lister tous les élèves
 * 
 * AMÉLIORATIONS POSSIBLES :
 * =========================
 * - Gérer les absences et justifications
 * - Ajouter des matières avec coefficients
 * - Système d'appréciation
 * - Calcul de la médiane
 * - Génération de bulletins PDF
 * - Historique des moyennes par trimestre
 * - Graphiques de progression
 * - Export Excel/CSV
 * - Système de messagerie élèves/profs
 * - Gestion des emplois du temps
 */
