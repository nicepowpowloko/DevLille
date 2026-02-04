/*
 * ============================================
 * EXERCICE 11 : Système de bibliothèque
 * ============================================
 * Niveau : Avancé
 * Real Conseil - Formation DWWM
 * ============================================
 */

// Création de l'objet bibliothèque complet
const bibliotheque = {
    nom: "Bibliothèque Municipale de Lille",
    livres: [
        { titre: "1984", auteur: "George Orwell", annee: 1949, disponible: true },
        { titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", annee: 1943, disponible: true },
        { titre: "Harry Potter à l'école des sorciers", auteur: "J.K. Rowling", annee: 1997, disponible: false },
        { titre: "Le Seigneur des Anneaux", auteur: "J.R.R. Tolkien", annee: 1954, disponible: true },
        { titre: "L'Étranger", auteur: "Albert Camus", annee: 1942, disponible: true }
    ],
    
    // Méthode pour ajouter un livre
    ajouterLivre(livre) {
        // Vérifier que toutes les propriétés sont présentes
        if (!livre.titre || !livre.auteur || !livre.annee) {
            console.log("❌ Erreur : propriétés manquantes (titre, auteur, annee requis)");
            return false;
        }
        
        // Par défaut, le livre est disponible
        livre.disponible = livre.disponible !== undefined ? livre.disponible : true;
        
        this.livres.push(livre);
        console.log(`✅ "${livre.titre}" par ${livre.auteur} ajouté à la bibliothèque`);
        return true;
    },
    
    // Méthode pour rechercher par titre
    rechercherParTitre(titre) {
        console.log(`\n🔍 Recherche de : "${titre}"`);
        
        const livre = this.livres.find(l => 
            l.titre.toLowerCase().includes(titre.toLowerCase())
        );
        
        if (livre) {
            console.log("\n📖 Livre trouvé :");
            console.log(`   Titre : ${livre.titre}`);
            console.log(`   Auteur : ${livre.auteur}`);
            console.log(`   Année : ${livre.annee}`);
            console.log(`   Statut : ${livre.disponible ? "✅ Disponible" : "❌ Emprunté"}`);
            return livre;
        } else {
            console.log("❌ Aucun livre trouvé avec ce titre");
            return null;
        }
    },
    
    // Méthode pour rechercher par auteur
    rechercherParAuteur(auteur) {
        console.log(`\n🔍 Recherche des livres de : ${auteur}`);
        
        const livresTrouves = this.livres.filter(l => 
            l.auteur.toLowerCase().includes(auteur.toLowerCase())
        );
        
        if (livresTrouves.length > 0) {
            console.log(`\n📚 ${livresTrouves.length} livre(s) trouvé(s) :`);
            livresTrouves.forEach((livre, index) => {
                console.log(`\n${index + 1}. ${livre.titre} (${livre.annee})`);
                console.log(`   Statut : ${livre.disponible ? "✅ Disponible" : "❌ Emprunté"}`);
            });
            return livresTrouves;
        } else {
            console.log("❌ Aucun livre trouvé pour cet auteur");
            return [];
        }
    },
    
    // Méthode pour emprunter un livre
    emprunter(titre) {
        const livre = this.livres.find(l => 
            l.titre.toLowerCase() === titre.toLowerCase()
        );
        
        if (!livre) {
            console.log(`❌ Le livre "${titre}" n'existe pas dans la bibliothèque`);
            return false;
        }
        
        if (!livre.disponible) {
            console.log(`⚠️ "${livre.titre}" est déjà emprunté`);
            return false;
        }
        
        livre.disponible = false;
        console.log(`✅ "${livre.titre}" emprunté avec succès`);
        return true;
    },
    
    // Méthode pour rendre un livre
    rendre(titre) {
        const livre = this.livres.find(l => 
            l.titre.toLowerCase() === titre.toLowerCase()
        );
        
        if (!livre) {
            console.log(`❌ Le livre "${titre}" n'existe pas dans la bibliothèque`);
            return false;
        }
        
        if (livre.disponible) {
            console.log(`⚠️ "${livre.titre}" n'était pas emprunté`);
            return false;
        }
        
        livre.disponible = true;
        console.log(`✅ "${livre.titre}" rendu avec succès`);
        return true;
    },
    
    // Méthode pour lister les livres disponibles
    livresDisponibles() {
        const disponibles = this.livres.filter(l => l.disponible);
        
        console.log(`\n📗 LIVRES DISPONIBLES (${disponibles.length}) :`);
        
        if (disponibles.length === 0) {
            console.log("Aucun livre disponible actuellement");
        } else {
            disponibles.forEach((livre, index) => {
                console.log(`${index + 1}. "${livre.titre}" par ${livre.auteur} (${livre.annee})`);
            });
        }
        
        return disponibles;
    },
    
    // Méthode pour afficher les statistiques
    afficherStatistiques() {
        const total = this.livres.length;
        const disponibles = this.livres.filter(l => l.disponible).length;
        const empruntes = total - disponibles;
        const tauxEmprunt = total > 0 ? (empruntes / total) * 100 : 0;
        
        // Trouver le livre le plus ancien
        const plusAncien = this.livres.reduce((ancien, livre) => 
            livre.annee < ancien.annee ? livre : ancien
        );
        
        // Trouver le livre le plus récent
        const plusRecent = this.livres.reduce((recent, livre) => 
            livre.annee > recent.annee ? livre : recent
        );
        
        // Compter les livres par auteur
        const livresParAuteur = {};
        this.livres.forEach(livre => {
            livresParAuteur[livre.auteur] = (livresParAuteur[livre.auteur] || 0) + 1;
        });
        
        console.log("\n" + "=".repeat(70));
        console.log(`📊 STATISTIQUES - ${this.nom.toUpperCase()}`);
        console.log("=".repeat(70));
        console.log(`\n📚 Collection :`);
        console.log(`   Total de livres : ${total}`);
        console.log(`   Livres disponibles : ${disponibles} (${((disponibles/total)*100).toFixed(1)}%)`);
        console.log(`   Livres empruntés : ${empruntes} (${tauxEmprunt.toFixed(1)}%)`);
        
        console.log(`\n📅 Période :`);
        console.log(`   Livre le plus ancien : "${plusAncien.titre}" (${plusAncien.annee})`);
        console.log(`   Livre le plus récent : "${plusRecent.titre}" (${plusRecent.annee})`);
        
        console.log(`\n✍️ Auteurs :`);
        console.log(`   Nombre d'auteurs différents : ${Object.keys(livresParAuteur).length}`);
        console.log(`   Top 3 auteurs :`);
        
        const topAuteurs = Object.entries(livresParAuteur)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3);
        
        topAuteurs.forEach(([auteur, nombre], index) => {
            console.log(`      ${index + 1}. ${auteur} : ${nombre} livre(s)`);
        });
        
        console.log("=".repeat(70) + "\n");
    },
    
    // Méthode pour supprimer un livre
    supprimerLivre(titre) {
        const index = this.livres.findIndex(l => 
            l.titre.toLowerCase() === titre.toLowerCase()
        );
        
        if (index !== -1) {
            const livreSupprime = this.livres.splice(index, 1)[0];
            console.log(`🗑️ "${livreSupprime.titre}" supprimé de la bibliothèque`);
            return true;
        } else {
            console.log(`❌ Livre "${titre}" non trouvé`);
            return false;
        }
    },
    
    // Méthode pour afficher tous les livres
    afficherTousLesLivres() {
        console.log(`\n📚 CATALOGUE COMPLET - ${this.nom}`);
        console.log("=".repeat(70));
        
        this.livres.forEach((livre, index) => {
            const statut = livre.disponible ? "✅ Disponible" : "❌ Emprunté";
            console.log(`\n${index + 1}. ${livre.titre}`);
            console.log(`   Auteur : ${livre.auteur}`);
            console.log(`   Année : ${livre.annee}`);
            console.log(`   ${statut}`);
        });
        
        console.log("\n" + "=".repeat(70));
    }
};

// ========================================
// TESTS DU SYSTÈME
// ========================================
console.log("=== TEST DU SYSTÈME DE BIBLIOTHÈQUE ===\n");

// Afficher tous les livres
bibliotheque.afficherTousLesLivres();

// Ajouter un nouveau livre
console.log("\n--- Ajout de livres ---");
bibliotheque.ajouterLivre({
    titre: "Les Misérables",
    auteur: "Victor Hugo",
    annee: 1862
});

bibliotheque.ajouterLivre({
    titre: "Notre-Dame de Paris",
    auteur: "Victor Hugo",
    annee: 1831
});

// Rechercher par titre
bibliotheque.rechercherParTitre("1984");

// Rechercher par auteur
bibliotheque.rechercherParAuteur("Victor Hugo");

// Emprunter des livres
console.log("\n--- Emprunts ---");
bibliotheque.emprunter("1984");
bibliotheque.emprunter("Le Petit Prince");
bibliotheque.emprunter("1984");  // Déjà emprunté

// Lister les livres disponibles
bibliotheque.livresDisponibles();

// Rendre un livre
console.log("\n--- Retours ---");
bibliotheque.rendre("1984");
bibliotheque.rendre("Harry Potter à l'école des sorciers");

// Afficher les statistiques
bibliotheque.afficherStatistiques();

// Livres disponibles après les retours
bibliotheque.livresDisponibles();

/*
 * EXPLICATIONS :
 * ==============
 * 
 * MÉTHODES DE TABLEAU UTILISÉES :
 * ================================
 * - find() : trouve le premier élément qui correspond
 * - filter() : filtre les éléments selon une condition
 * - findIndex() : trouve l'index du premier élément qui correspond
 * - push() : ajoute un élément à la fin
 * - splice() : supprime un élément
 * - forEach() : parcourt tous les éléments
 * - reduce() : réduit un tableau à une seule valeur
 * - sort() : trie les éléments
 * - slice() : extrait une portion du tableau
 * 
 * MÉTHODES DE CHAÎNES :
 * =====================
 * - toLowerCase() : convertit en minuscules pour comparaison insensible à la casse
 * - includes() : vérifie si une chaîne contient une sous-chaîne
 * - toUpperCase() : convertit en majuscules
 * 
 * OPÉRATEUR TERNAIRE :
 * ====================
 * condition ? valeurSiVrai : valeurSiFaux
 * Exemple : livre.disponible ? "Disponible" : "Emprunté"
 * 
 * OPÉRATEUR LOGIQUE || :
 * ======================
 * valeur1 || valeur2
 * Retourne valeur1 si elle est truthy, sinon valeur2
 * Exemple : compteur[auteur] || 0
 * 
 * DESTRUCTURATION :
 * =================
 * const [cle, valeur] = paire
 * Extrait automatiquement les valeurs d'un tableau
 * 
 * FONCTIONNALITÉS IMPLÉMENTÉES :
 * ===============================
 * ✅ Ajouter des livres avec validation
 * ✅ Rechercher par titre (recherche partielle)
 * ✅ Rechercher par auteur (recherche partielle)
 * ✅ Emprunter avec vérifications
 * ✅ Rendre avec vérifications
 * ✅ Lister les livres disponibles
 * ✅ Statistiques complètes
 * ✅ Supprimer un livre
 * ✅ Afficher le catalogue complet
 * 
 * AMÉLIORATIONS POSSIBLES :
 * =========================
 * - Ajouter une date d'emprunt et limite de retour
 * - Gérer plusieurs exemplaires d'un même livre
 * - Système de réservation
 * - Historique des emprunts
 * - Pénalités pour retard
 * - Catégories de livres (roman, science, etc.)
 * - ISBN et code-barres
 * - Système de membres/adhérents
 * - Recherche avancée (année, disponibilité)
 * - Export des données (CSV, JSON)
 */
