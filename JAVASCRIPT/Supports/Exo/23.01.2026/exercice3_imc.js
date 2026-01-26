// ==========================================
// EXERCICE 3 : CALCULATEUR D'IMC
// ==========================================

function calculerIMC() {
    // Demander le poids
    let poids = parseFloat(prompt("Quel est votre poids en kg ?"));
    
    // Demander la taille
    let tailleCm = parseFloat(prompt("Quelle est votre taille en cm ?"));
    
    // Vérifier que les valeurs sont positives
    if (poids <= 0 || tailleCm <= 0) {
        console.log("Erreur : Les valeurs doivent être positives");
        return null;
    }
    
    // Convertir la taille en mètres
    let tailleM = tailleCm / 100;
    
    // Calculer l'IMC
    let imc = poids / (tailleM * tailleM);
    
    // Déterminer la catégorie
    let categorie = "";
    let recommandation = "";
    
    if (imc < 18.5) {
        categorie = "Insuffisance pondérale";
        recommandation = "Consultez un médecin pour un suivi nutritionnel adapté";
    } else if (imc >= 18.5 && imc < 25) {
        categorie = "Poids normal";
        recommandation = "Continuez à maintenir une alimentation équilibrée et une activité physique régulière";
    } else if (imc >= 25 && imc < 30) {
        categorie = "Surpoids";
        recommandation = "Adoptez une alimentation équilibrée et augmentez votre activité physique";
    } else {
        categorie = "Obésité";
        recommandation = "Consultez un professionnel de santé pour un accompagnement personnalisé";
    }
    
    // Afficher les résultats
    console.log("=== RÉSULTAT IMC ===");
    console.log("Poids : " + poids + " kg");
    console.log("Taille : " + tailleCm + " cm");
    console.log("IMC : " + imc.toFixed(1));
    console.log("Catégorie : " + categorie);
    console.log("Recommandation : " + recommandation);
    console.log("====================");
    
    // Retourner les résultats
    return {
        poids: poids,
        taille: tailleCm,
        imc: imc,
        categorie: categorie,
        recommandation: recommandation
    };
}

// Utilisation
// let resultat = calculerIMC();
// console.log("Votre IMC est de " + resultat.imc.toFixed(1) + " (" + resultat.categorie + ")");
