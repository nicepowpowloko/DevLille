

// Création de l'objet étudiant avec gestion des notes
const etudiant = {
    nom: "Dupont",
    prenom: "Alexandre",
    notes: [],
    
    // Méthode pour ajouter une note
    ajouterNote(note) {
        // Vérifier que la note est entre 0 et 20
        if (note >= 0 && note <= 20) {
            this.notes.push(note);
            console.log(` Note ${note}/20 ajoutée`);
        } else {
            console.log(" Erreur : La note doit être entre 0 et 20");
        }
    },
    
    // Méthode pour calculer la moyenne
    calculerMoyenne() {
        // Si pas de notes, retourner 0
        if (this.notes.length === 0) {
            return 0;
        }
        
        // Calculer la somme de toutes les notes
        const somme = this.notes.reduce((total, note) => total + note, 0);
        
        // Calculer la moyenne
        return somme / this.notes.length;
    },
    
    // Méthode pour obtenir la mention
    obtenirMention() {
        const moyenne = this.calculerMoyenne();
        
        if (moyenne >= 16) {
            return "Très bien";
        } else if (moyenne >= 14) {
            return "Bien";
        } else if (moyenne >= 12) {
            return "Assez bien";
        } else if (moyenne >= 10) {
            return "Passable";
        } else {
            return "Insuffisant";
        }
    },
    
    // Méthode pour afficher le bulletin
    afficherBulletin() {
        console.log("\n" + "=".repeat(60));
        console.log(` BULLETIN DE ${this.prenom.toUpperCase()} ${this.nom.toUpperCase()}`);
        console.log("=".repeat(60));
        
        if (this.notes.length === 0) {
            console.log("Aucune note enregistrée");
        } else {
            console.log(`\nNotes (${this.notes.length}) : ${this.notes.join(", ")}`);
            console.log(`Moyenne générale : ${this.calculerMoyenne().toFixed(2)}/20`);
            console.log(`Mention : ${this.obtenirMention()}`);
            
            // Afficher la note minimale et maximale
            const noteMin = Math.min(...this.notes);
            const noteMax = Math.max(...this.notes);
            console.log(`\nNote minimale : ${noteMin}/20`);
            console.log(`Note maximale : ${noteMax}/20`);
        }
        
        console.log("=".repeat(60) + "\n");
    },
    
    // Méthode pour supprimer une note
    supprimerNote(index) {
        if (index >= 0 && index < this.notes.length) {
            const noteSupprimmee = this.notes.splice(index, 1)[0];
            console.log(` Note ${noteSupprimee}/20 supprimée`);
        } else {
            console.log(" Index invalide");
        }
    },
    
    // Méthode pour afficher les statistiques
    afficherStatistiques() {
        if (this.notes.length === 0) {
            console.log("Aucune statistique disponible");
            return;
        }
        
        const moyenne = this.calculerMoyenne();
        const noteMin = Math.min(...this.notes);
        const noteMax = Math.max(...this.notes);
        
        // Compter les notes par catégorie
        const notesExcellentes = this.notes.filter(n => n >= 16).length;
        const notesBonnes = this.notes.filter(n => n >= 14 && n < 16).length;
        const notesMoyennes = this.notes.filter(n => n >= 10 && n < 14).length;
        const notesInsuffisantes = this.notes.filter(n => n < 10).length;
        
        console.log("\nSTATISTIQUES");
        console.log(`Nombre de notes : ${this.notes.length}`);
        console.log(`Moyenne : ${moyenne.toFixed(2)}/20`);
        console.log(`Note minimale : ${noteMin}/20`);
        console.log(`Note maximale : ${noteMax}/20`);
        console.log(`Écart : ${(noteMax - noteMin).toFixed(2)} points`);
        console.log("\nRépartition :");
        console.log(`   Excellentes (≥16) : ${notesExcellentes}`);
        console.log(`   Bonnes (14-16) : ${notesBonnes}`);
        console.log(`   Moyennes (10-14) : ${notesMoyennes}`);
        console.log(`    Insuffisantes (<10) : ${notesInsuffisantes}`);
    }
};

// Tests du système de notes
console.log(" TEST DU SYSTÈME DE NOTES \n");

// Ajouter plusieurs notes
console.log("Ajout de notes :");
etudiant.ajouterNote(15);
etudiant.ajouterNote(12);
etudiant.ajouterNote(18);
etudiant.ajouterNote(14);
etudiant.ajouterNote(16);

// Essayer d'ajouter une note invalide
etudiant.ajouterNote(25);  // Erreur : hors limites
etudiant.ajouterNote(-5);  // Erreur : hors limites

// Afficher le bulletin
etudiant.afficherBulletin();

// Afficher les statistiques détaillées
etudiant.afficherStatistiques();

// Ajouter d'autres notes pour tester les mentions
console.log("\n TEST DES MENTIONS ");

// Test mention "Très bien"
const etudiantExcellent = {
    ...etudiant,
    notes: [18, 17, 19, 16, 18]
};
console.log(`Notes : ${etudiantExcellent.notes.join(", ")}`);
console.log(`Moyenne : ${etudiantExcellent.calculerMoyenne().toFixed(2)}`);
console.log(`Mention : ${etudiantExcellent.obtenirMention()}`);

// Test mention "Insuffisant"
const etudiantDifficile = {
    ...etudiant,
    notes: [8, 7, 9, 6, 8]
};
console.log(`\nNotes : ${etudiantDifficile.notes.join(", ")}`);
console.log(`Moyenne : ${etudiantDifficile.calculerMoyenne().toFixed(2)}`);
console.log(`Mention : ${etudiantDifficile.obtenirMention()}`);

/*
 * EXPLICATIONS :
 
 * 1. reduce() additionne toutes les notes
 *    - reduce((total, note) => total + note, 0)
 *    - Le 0 à la fin est la valeur initiale de "total"
 * 
 * 2. Math.min() et Math.max() trouvent la plus petite et plus grande valeur
 *    - L'opérateur ... (spread) décompose le tableau
 * 
 * 3. filter() crée un nouveau tableau avec les éléments qui respectent la condition
 * 
 * 4. toFixed(2) arrondit à 2 décimales
 * 
 * 5. join(", ") transforme un tableau en chaîne avec séparateur
 * 
 * BARÈME DES MENTIONS :
 
 * >= 16 : Très bien
 * >= 14 : Bien
 * >= 12 : Assez bien
 * >= 10 : Passable
 * < 10  : Insuffisant
 * 
 * AMÉLIORATIONS POSSIBLES :
 
 * - Ajouter des coefficients aux notes
 * - Gérer plusieurs matières
 * - Calculer la médiane
 * - Afficher un graphique des notes
 * - Comparer avec la moyenne de classe
 * - Historique des progressions
 */
