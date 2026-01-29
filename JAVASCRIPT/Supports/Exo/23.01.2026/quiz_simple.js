
let questions = [
    {
        question: "Sky Wolf est-il un Hacker ?",
        choixA: "Oui",
        choixB: "Non",
        choixC: "Peut-être"
        
    },
    {
        question: "Combien font 7 x 8 ?",
        choixA: "58",
        choixB: "56",
        choixC: "64",
        reponse: "B"
    },
    {
        question: "Quel est le plus grand océan ?",
        choixA: "Atlantique",
        choixB: "Indien",
        choixC: "Pacifique",
        reponse: "C"
    },
    {
        question: "En quelle année l'homme a marché sur la Lune ?",
        choixA: "1969",
        choixB: "1965",
        choixC: "1972",
        reponse: "A"
    },
    {
        question: "Quel est le symbole chimique de l'or ?",
        choixA: "Or",
        choixB: "Au",
        choixC: "Ag",
        reponse: "B"
    },
    {
        question: "Combien y a-t-il de continents ?",
        choixA: "5",
        choixB: "6",
        choixC: "7",
        reponse: "C"
    },
    {
        question: "Quelle est la langue la plus parlée ?",
        choixA: "Anglais",
        choixB: "Espagnol",
        choixC: "Mandarin",
        reponse: "C"
    },
    {
        question: "Qui a peint la Joconde ?",
        choixA: "Picasso",
        choixB: "Van Gogh",
        choixC: "Léonard de Vinci",
        reponse: "C"
    },
    {
        question: "Quelle est la vitesse de la lumière ?",
        choixA: "300 000 km/s",
        choixB: "150 000 km/s",
        choixC: "500 000 km/s",
        reponse: "A"
    },
    {
        question: "Combien de joueurs dans une équipe de foot ?",
        choixA: "10",
        choixB: "11",
        choixC: "12",
        reponse: "B"
    }
];

let questionsChoisies = [];
let questionActuelle = 0;
let score = 0;

// Fonction pour démarrer le quiz
function demarrerQuiz() {
    // Réinitialiser les variables
    questionActuelle = 0;
    score = 0;
    
    // Cacher l'écran de démarrage
    document.getElementById("start-screen").style.display = "none";
    
    // Afficher l'écran des questions
    document.getElementById("question-screen").style.display = "block";
    
    // Sélectionner 5 questions au hasard
    selectionnerQuestions();
    
    // Afficher la première question
    afficherQuestion();
}

// Fonction pour sélectionner 5 questions aléatoires
function selectionnerQuestions() {
    questionsChoisies = [];
    
    while (questionsChoisies.length < 5) {
        let numAleatoire = Math.floor(Math.random() * 10);
        
        // Vérifier si déjà choisi
        let dejaChoisi = false;
        for (let i = 0; i < questionsChoisies.length; i++) {
            if (questionsChoisies[i] === numAleatoire) {
                dejaChoisi = true;
            }
        }
        
        // Ajouter si pas déjà choisi
        if (dejaChoisi === false) {
            questionsChoisies.push(numAleatoire);
        }
    }
}

// Fonction pour afficher une question
function afficherQuestion() {
    // Récupérer la question
    let indexQuestion = questionsChoisies[questionActuelle];
    let q = questions[indexQuestion];
    
    // Afficher le numéro 
    document.getElementById("numero-question").textContent = questionActuelle + 1;
    
    // Afficher la question
    document.getElementById("question").textContent = q.question;
    
    // boutons de réponse
    let choixContainer = document.getElementById("choix-container");
    choixContainer.innerHTML = "";
    
    // Bouton A
    let boutonA = document.createElement("button");
    boutonA.className = "choix";
    boutonA.textContent = "A) " + q.choixA;
    boutonA.onclick = function() { verifierReponse("A", q.reponse, boutonA); };
    choixContainer.appendChild(boutonA);
    
    // Bouton B
    let boutonB = document.createElement("button");
    boutonB.className = "choix";
    boutonB.textContent = "B) " + q.choixB;
    boutonB.onclick = function() { verifierReponse("B", q.reponse, boutonB); };
    choixContainer.appendChild(boutonB);
    
    // Bouton C
    let boutonC = document.createElement("button");
    boutonC.className = "choix";
    boutonC.textContent = "C) " + q.choixC;
    boutonC.onclick = function() { verifierReponse("C", q.reponse, boutonC); };
    choixContainer.appendChild(boutonC);
}

// Fonction pour vérifier la réponse
function verifierReponse(reponseUser, bonneReponse, boutonClique) {
    // Désactiver tous les boutons
    let boutons = document.querySelectorAll(".choix");
    for (let i = 0; i < boutons.length; i++) {
        boutons[i].disabled = true;
        boutons[i].style.cursor = "not-allowed";
    }
    
    // Colorier la réponse
    if (reponseUser === bonneReponse) {
        // Bonne réponse
        boutonClique.classList.add("correct");
        score = score + 1;
    } else {
        // Mauvaise réponse
        boutonClique.classList.add("incorrect");
        
        // Montrer la bonne réponse
        for (let i = 0; i < boutons.length; i++) {
            if (boutons[i].textContent.startsWith(bonneReponse)) {
                boutons[i].classList.add("correct");
            }
        }
    }
    
    // Question suivante
    setTimeout(function() {
        questionActuelle = questionActuelle + 1;
        
        if (questionActuelle < 5) {
            // reste
            afficherQuestion();
        } else {
            // Fin du quiz
            afficherResultat();
        }
    }, 2000);
}

// Fonction pour afficher le résultat final
function afficherResultat() {
    // Cacher l'écran des questions
    document.getElementById("question-screen").style.display = "none";
    
    // Afficher l'écran de résultat
    document.getElementById("result-screen").style.display = "block";
    
    // Calculer le pourcentage
    let pourcentage = (score / 5) * 100;
    
    // Déterminer l'appréciation
    let appreciation = "";
    if (score === 5) {
        appreciation = "Parfait ! ";
    } else if (score === 4) {
        appreciation = "Très bien ! ";
    } else if (score === 3) {
        appreciation = "Bien ";
    } else if (score === 2) {
        appreciation = "Peut mieux faire ";
    } else {
        appreciation = "À retravailler ";
    }
    
    // Afficher le résultat
    document.getElementById("result").innerHTML = 
        "<h2>Résultat Final</h2>" +
        "<p style='font-size: 48px; margin: 20px 0;'>" + score + "/5</p>" +
        "<p style='font-size: 24px; color: #666;'>" + pourcentage + "%</p>" +
        "<p style='font-size: 28px; margin-top: 20px;'>" + appreciation + "</p>";
}