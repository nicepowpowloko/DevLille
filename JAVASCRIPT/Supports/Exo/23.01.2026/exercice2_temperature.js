

function convertirTemperature() {
    // Demander la température
    let temperature = parseFloat(prompt("Quelle température voulez-vous convertir ?"));
    
    // Demander l'unité de départ
    let uniteDepart = prompt("Unité de départ ? (C, F ou K)").toUpperCase();
    
    // Demander l'unité d'arrivée
    let uniteArrivee = prompt("Unité d'arrivée ? (C, F ou K)").toUpperCase();
    
    let resultat = 0;
    
    // Vérifier que les unités sont valides
    if (uniteDepart !== "C" && uniteDepart !== "F" && uniteDepart !== "K") {
        console.log("Erreur : Unité de départ invalide");
        return null;
    }
    
    if (uniteArrivee !== "C" && uniteArrivee !== "F" && uniteArrivee !== "K") {
        console.log("Erreur : Unité d'arrivée invalide");
        return null;
    }
    
    // Si même unité, pas de conversion
    if (uniteDepart === uniteArrivee) {
        resultat = temperature;
    }
    
    // Conversions depuis Celsius
    if (uniteDepart === "C" && uniteArrivee === "F") {
        resultat = (temperature * 9/5) + 32;
    }
    
    if (uniteDepart === "C" && uniteArrivee === "K") {
        resultat = temperature + 273.15;
    }
    
    // Conversions depuis Fahrenheit
    if (uniteDepart === "F" && uniteArrivee === "C") {
        resultat = (temperature - 32) * 5/9;
    }
    
    if (uniteDepart === "F" && uniteArrivee === "K") {
        resultat = (temperature - 32) * 5/9 + 273.15;
    }
    
    // Conversions depuis Kelvin
    if (uniteDepart === "K" && uniteArrivee === "C") {
        resultat = temperature - 273.15;
    }
    
    if (uniteDepart === "K" && uniteArrivee === "F") {
        resultat = (temperature - 273.15) * 9/5 + 32;
    }
    
    // Afficher le résultat
    console.log("CONVERSION");
    console.log(temperature + "°" + uniteDepart + " = " + resultat.toFixed(2) + "°" + uniteArrivee);
    console.log("");
    
    // Retourner le résultat
    return {
        temperatureDepart: temperature,
        uniteDepart: uniteDepart,
        temperatureArrivee: resultat,
        uniteArrivee: uniteArrivee
    };
}

// Utilisation
// let resultat = convertirTemperature();
// console.log("Résultat : " + resultat.temperatureArrivee.toFixed(2) + "°" + resultat.uniteArrivee);
