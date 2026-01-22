
let age = 25;
let jour = "lundi";
let heure = 5;
let nbpersonne = 1;
let s3d = false;
let simax = true;

// Prix de base
let prix;

if (jour === "lundi") {
    prix = 6; 
} else if (age < 12) {
    prix = 6.50;
} else if (age <= 25) {
    prix = 8.50;
} else if (age < 60) {
    prix = 12.00;
} else {
    prix = 7.50; 
}

// Réduc et supp
//  (avant 12h)
if (heure < 12) {
    prix = prix - 2;
}


if (s3d) {
    prix = prix + 3;
} else if (simax) {
    prix = prix + 5;
}

// ici les reduction
let reduction;
if (prix < 9) {
    reduction = 0.95; 
} else if (prix < 30) {
    reduction = 0.90; 
} else if (prix < 50) {
    reduction = 0.85; 
} else {
    reduction = 0.80;
}

prix = prix * reduction;

// Ton calcul final
let billeterie = prix * nbpersonne;

// tu affiche ici dans ton html 
document.getElementById("resultat").innerHTML = 
    "Le tarif final pour " + nbpersonne + " personne(s) est de " + billeterie.toFixed(2) + " €";