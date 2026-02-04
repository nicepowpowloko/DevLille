
// Création du tableau de contacts (tableau d'objets)
const contacts = [
    {
        nom: "Dupont",
        prenom: "Marie",
        telephone: "0601020304",
        email: "marie.dupont@email.fr"
    },
    {
        nom: "Martin",
        prenom: "Lucas",
        telephone: "0605060708",
        email: "lucas.martin@email.fr"
    },
    {
        nom: "Bernard",
        prenom: "Sophie",
        telephone: "0609101112",
        email: "sophie.bernard@email.fr"
    },
    {
        nom: "Petit",
        prenom: "Thomas",
        telephone: "0613141516",
        email: "thomas.petit@email.fr"
    }
];

// Fonction pour afficher tous les contacts
function afficherContacts() {
    console.log("\nLISTE DES CONTACTS ");
    
    contacts.forEach((contact, index) => {
        console.log(`\n${index + 1}. ${contact.prenom} ${contact.nom}`);
        console.log(`Tél : ${contact.telephone}`);
        console.log(`Email : ${contact.email}`);
    });
    
    console.log("\n\n");
}

// Fonction pour rechercher un contact par son nom
function rechercherContact(nom) {
    console.log(`\n Recherche de : ${nom}`);
    
    // Trouver le contact (insensible à la casse)
    const contact = contacts.find(c => c.nom.toLowerCase() === nom.toLowerCase());
    
    if (contact) {
        console.log("\n Contact trouvé :");
        console.log(`   Nom complet : ${contact.prenom} ${contact.nom}`);
        console.log(`   Téléphone : ${contact.telephone}`);
        console.log(`   Email : ${contact.email}`);
    } else {
        console.log(" Contact non trouvé dans la liste");
    }
}

// Fonction pour ajouter un nouveau contact
function ajouterContact(contact) {
    // Vérifier que le contact a toutes les propriétés requises
    if (!contact.nom || !contact.prenom || !contact.telephone || !contact.email) {
        console.log(" Erreur : toutes les informations sont requises");
        return false;
    }
    
    // Ajouter le contact au tableau
    contacts.push(contact);
    console.log(`\n Contact ${contact.prenom} ${contact.nom} ajouté avec succès !`);
    return true;
}

// Fonction pour supprimer un contact
function supprimerContact(nom) {
    const index = contacts.findIndex(c => c.nom.toLowerCase() === nom.toLowerCase());
    
    if (index !== -1) {
        const contactSupprime = contacts.splice(index, 1)[0];
        console.log(`\n Contact ${contactSupprime.prenom} ${contactSupprime.nom} supprimé`);
        return true;
    } else {
        console.log(`\n Contact ${nom} non trouvé`);
        return false;
    }
}

// Tests des fonctions
console.log("TEST DU SYSTÈME DE CONTACTS ");

// Afficher tous les contacts
afficherContacts();

// Rechercher un contact existant
rechercherContact("Martin");

// Rechercher un contact inexistant
rechercherContact("Durand");

// Ajouter un nouveau contact
ajouterContact({
    nom: "Durand",
    prenom: "Julie",
    telephone: "0617181920",
    email: "julie.durand@email.fr"
});

// Afficher la liste mise à jour
afficherContacts();

// Rechercher le contact ajouté
rechercherContact("Durand");

// Supprimer un contact
supprimerContact("Bernard");

// Afficher la liste finale
afficherContacts();

// Statistiques
console.log(` Nombre total de contacts : ${contacts.length}`);

/*
 * EXPLICATIONS :
 
 * 1. contacts est un TABLEAU d'OBJETS
 * 2. forEach() parcourt chaque élément du tableau
 * 3. find() trouve le premier élément qui correspond
 * 4. findIndex() trouve l'index du premier élément qui correspond
 * 5. push() ajoute un élément à la fin du tableau
 * 6. splice(index, 1) supprime 1 élément à partir de l'index
 * 7. toLowerCase() rend la recherche insensible à la casse
 * 
 * MÉTHODES DE TABLEAU UTILISÉES :
 
 * - forEach() : parcourir tous les éléments
 * - find() : trouver un élément
 * - findIndex() : trouver l'index d'un élément
 * - push() : ajouter un élément
 * - splice() : supprimer un élément
 * 
 * AMÉLIORATIONS POSSIBLES :
 
 * - Valider le format de l'email
 * - Valider le format du téléphone
 * - Empêcher les doublons
 * - Trier les contacts par nom
 * - Exporter/importer des contacts
 */
