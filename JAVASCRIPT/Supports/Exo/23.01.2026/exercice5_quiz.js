// ==========================================
// EXERCICE 5 : QUIZ DE CULTURE GÉNÉRALE
// ==========================================

function quiz() {
    let questions = [
        {
            question: "Quelle est la capitale de la France ?",
            choixA: "Marseille",
            choixB: "Lyon",
            choixC: "Paris",
            choixD: "Bordeaux",
            bonneReponse: "C"
        },
        {
            question: "Combien font 7 x 8 ?",
            choixA: "54",
            choixB: "56",
            choixC: "64",
            choixD: "48",
            bonneReponse: "B"
        },
        {
            question: "Quel est le plus grand océan du monde ?",
            choixA: "Atlantique",
            choixB: "Indien",
            choixC: "Arctique",
            choixD: "Pacifique",
            bonneReponse: "D"
        },
        {
            question: "En quelle année l'homme a-t-il marché sur la Lune ?",
            choixA: "1969",
            choixB: "1965",
            choixC: "1972",
            choixD: "1959",
            bonneReponse: "A"
        },
        {
            question: "Quel est le symbole chimique de l'or ?",
            choixA: "Or",
            choixB: "Au",
            choixC: "Ag",
            choixD: "Go",
            bonneReponse: "B"
        },
        {
            question: "Combien y a-t-il de continents sur Terre ?",
            choixA: "5",
            choixB: "6",
            choixC: "7",
            choixD: "8",
            bonneReponse: "C"
        },
        {
            question: "Quelle est la langue la plus parlée au monde ?",
            choixA: "Anglais",
            choixB: "Espagnol",
            choixC: "Mandarin",
            choixD: "Français",
            bonneReponse: "C"
        },
        {
            question: "Qui a peint la Joconde ?",
            choixA: "Picasso",
            choixB: "Van Gogh",
            choixC: "Michel-Ange",
            choixD: "Léonard de Vinci",
            bonneReponse: "D"
        },
        {
            question: "Quelle est la vitesse de la lumière ?",
            choixA: "300 000 km/s",
            choixB: "150 000 km/s",
            choixC: "500 000 km/s",
            choixD: "200 000 km/s",
            bonneReponse: "A"
        },
        {
            question: "Combien de joueurs y a-t-il dans une équipe de football ?",
            choixA: "10",
            choixB: "11",
            choixC: "12",
            choixD: "9",
            bonneReponse: "B"
        }
    ];
    
    let score = 0;
    let questionsChoisies = [];
    
    // Choisir 5 questions aléatoires
    while (questionsChoisies.length < 5) {
        let index = Math.floor(Math.random() * questions.length);
        
        // Vérifier que cette question n'a pas déjà été choisie
        let dejaPris = false;
        for (let i = 0; i < questionsChoisies.length; i++) {
            if (questionsChoisies[i] === index) {
                dejaPris = true;
            }
        }
        
        if (!dejaPris) {
            questionsChoisies.push(index);
        }
    }
    
    console.log("=== QUIZ DE CULTURE GÉNÉRALE ===");
    console.log("Répondez aux 5 questions suivantes\n");
    
    // Poser les 5 questions
    for (let i = 0; i < questionsChoisies.length; i++) {
        let q = questions[questionsChoisies[i]];
        
        console.log("Question " + (i + 1) + "/5 :");
        console.log(q.question);
        console.log("A) " + q.choixA);
        console.log("B) " + q.choixB);
        console.log("C) " + q.choixC);
        console.log("D) " + q.choixD);
        
        let reponse = prompt("Votre réponse (A, B, C ou D) ?").toUpperCase();
        
        if (reponse === q.bonneReponse) {
            console.log("✅ Correct !\n");
            score++;
        } else {
            console.log("❌ Faux ! La bonne réponse était : " + q.bonneReponse + "\n");
        }
    }
    
    // Calculer le pourcentage
    let pourcentage = (score / 5) * 100;
    
    // Déterminer l'appréciation
    let appreciation = "";
    
    if (score === 5) {
        appreciation = "Parfait !";
    } else if (score === 4) {
        appreciation = "Très bien !";
    } else if (score === 3) {
        appreciation = "Bien";
    } else if (score === 2) {
        appreciation = "Peut mieux faire";
    } else {
        appreciation = "À retravailler";
    }
    
    // Afficher le résultat final
    console.log("=== RÉSULTAT FINAL ===");
    console.log("Score : " + score + "/5");
    console.log("Pourcentage : " + pourcentage + "%");
    console.log("Appréciation : " + appreciation);
    console.log("======================");
    
    // Retourner le résultat
    return {
        score: score,
        pourcentage: pourcentage,
        appreciation: appreciation
    };
}

// Utilisation
// let resultat = quiz();
// console.log("Vous avez obtenu " + resultat.score + "/5 (" + resultat.appreciation + ")");
