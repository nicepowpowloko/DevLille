

// Système complet de plateforme e-learning
const plateformeLearning = {
    nom: "Real Conseil E-Learning",
    
    //  1. GESTION DES COURS 
    cours: [
        {
            id: 1,
            titre: "JavaScript - Les Fondamentaux",
            description: "Apprendre les bases de JavaScript",
            duree: 40, // en heures
            niveau: "Débutant",
            modules: [
                {
                    id: 1,
                    titre: "Introduction à JavaScript",
                    lecons: [
                        { id: 1, titre: "Qu'est-ce que JavaScript ?", duree: 30, type: "vidéo" },
                        { id: 2, titre: "Variables et types", duree: 45, type: "vidéo" },
                        { id: 3, titre: "Exercices pratiques", duree: 60, type: "exercice" }
                    ]
                },
                {
                    id: 2,
                    titre: "Les objets en JavaScript",
                    lecons: [
                        { id: 4, titre: "Créer des objets", duree: 40, type: "vidéo" },
                        { id: 5, titre: "Méthodes et propriétés", duree: 50, type: "vidéo" }
                    ]
                }
            ],
            quiz: {
                id: 1,
                titre: "Quiz final JavaScript",
                scoreMinimum: 70,
                questions: [
                    {
                        id: 1,
                        question: "Quelle est la sortie de: console.log(typeof null) ?",
                        options: ["null", "undefined", "object", "number"],
                        bonneReponse: 2
                    },
                    {
                        id: 2,
                        question: "Comment déclarer une variable en JavaScript ?",
                        options: ["var x", "let x", "const x", "Toutes les réponses"],
                        bonneReponse: 3
                    },
                    {
                        id: 3,
                        question: "Que fait la méthode push() sur un tableau ?",
                        options: ["Retire le premier élément", "Ajoute un élément à la fin", "Trie le tableau", "Inverse le tableau"],
                        bonneReponse: 1
                    }
                ]
            },
            inscrits: 0,
            certificatsDelivres: 0
        },
        {
            id: 2,
            titre: "Python pour débutants",
            description: "Introduction au langage Python",
            duree: 35,
            niveau: "Débutant",
            modules: [
                {
                    id: 1,
                    titre: "Les bases de Python",
                    lecons: [
                        { id: 1, titre: "Installation et configuration", duree: 20, type: "vidéo" },
                        { id: 2, titre: "Premier programme", duree: 30, type: "vidéo" }
                    ]
                }
            ],
            quiz: {
                id: 2,
                titre: "Quiz Python",
                scoreMinimum: 70,
                questions: [
                    {
                        id: 1,
                        question: "Comment afficher du texte en Python ?",
                        options: ["echo('texte')", "print('texte')", "console.log('texte')", "write('texte')"],
                        bonneReponse: 1
                    },
                    {
                        id: 2,
                        question: "Quel type de données est [1, 2, 3] ?",
                        options: ["Tuple", "Liste", "Dictionnaire", "Set"],
                        bonneReponse: 1
                    }
                ]
            },
            inscrits: 0,
            certificatsDelivres: 0
        }
    ],
    
    // Méthode pour afficher tous les cours
    afficherCours() {
        console.log(`\n  CATALOGUE ${this.nom.toUpperCase()} \n`);
        
        this.cours.forEach(cours => {
            console.log(` ${cours.titre}`);
            console.log(`   Niveau : ${cours.niveau}`);
            console.log(`   Durée : ${cours.duree}h`);
            console.log(`   Modules : ${cours.modules.length}`);
            console.log(`   Inscrits : ${cours.inscrits}`);
            console.log(`   ${cours.description}`);
            console.log("");
        });
    },
    
    // Méthode pour trouver un cours
    trouverCours(coursId) {
        return this.cours.find(c => c.id === coursId);
    },
    
    // Méthode pour afficher le détail d'un cours
    afficherDetailCours(coursId) {
        const cours = this.trouverCours(coursId);
        
        if (!cours) {
            console.log(" Cours non trouvé");
            return;
        }
        
        console.log("\n" + "".repeat(70));
        console.log(` ${cours.titre.toUpperCase()}`);
        console.log("".repeat(70));
        console.log(`Description : ${cours.description}`);
        console.log(`Niveau : ${cours.niveau}`);
        console.log(`Durée totale : ${cours.duree}h`);
        console.log(`Nombre d'inscrits : ${cours.inscrits}`);
        console.log("\n CONTENU DU COURS :\n");
        
        cours.modules.forEach((module, indexModule) => {
            console.log(`Module ${indexModule + 1} : ${module.titre}`);
            module.lecons.forEach((lecon, indexLecon) => {
                console.log(`   ${indexModule + 1}.${indexLecon + 1} ${lecon.titre} (${lecon.duree}min - ${lecon.type})`);
            });
            console.log("");
        });
        
        console.log(` Quiz final : ${cours.quiz.questions.length} questions`);
        console.log(`   Score minimum pour réussir : ${cours.quiz.scoreMinimum}%`);
        console.log("".repeat(70) + "\n");
    },
    
    // === 2. GESTION DES ÉTUDIANTS ===
    etudiants: [],
    prochainIdEtudiant: 1,
    
    // Méthode pour créer un étudiant
    creerEtudiant(nom, prenom, email) {
        const nouvelEtudiant = {
            id: this.prochainIdEtudiant++,
            nom: nom,
            prenom: prenom,
            email: email,
            coursInscrits: [],
            certificats: [],
            dateInscription: new Date().toLocaleString('fr-FR')
        };
        
        this.etudiants.push(nouvelEtudiant);
        console.log(`\n Étudiant créé : ${prenom} ${nom}`);
        console.log(`   ID : ${nouvelEtudiant.id}`);
        console.log(`   Email : ${email}`);
        
        return nouvelEtudiant.id;
    },
    
    // Méthode pour trouver un étudiant
    trouverEtudiant(etudiantId) {
        return this.etudiants.find(e => e.id === etudiantId);
    },
    
    // Méthode pour inscrire un étudiant à un cours
    inscrireCours(etudiantId, coursId) {
        const etudiant = this.trouverEtudiant(etudiantId);
        const cours = this.trouverCours(coursId);
        
        if (!etudiant) {
            console.log(" Étudiant non trouvé");
            return false;
        }
        
        if (!cours) {
            console.log(" Cours non trouvé");
            return false;
        }
        
        // Vérifier si déjà inscrit
        const dejaInscrit = etudiant.coursInscrits.find(c => c.coursId === coursId);
        if (dejaInscrit) {
            console.log(" Déjà inscrit à ce cours");
            return false;
        }
        
        // Créer la structure de progression
        const inscription = {
            coursId: coursId,
            titreCours: cours.titre,
            dateInscription: new Date().toLocaleString('fr-FR'),
            progression: 0,
            leconsCompletes: [],
            tentativesQuiz: [],
            meilleurScore: 0,
            certificatObtenu: false,
            dateCompletion: null
        };
        
        etudiant.coursInscrits.push(inscription);
        cours.inscrits++;
        
        console.log(`\n ${etudiant.prenom} ${etudiant.nom} inscrit à "${cours.titre}"`);
        return true;
    },
    
    // Méthode pour marquer une leçon comme complétée
    completerLecon(etudiantId, coursId, moduleId, leconId) {
        const etudiant = this.trouverEtudiant(etudiantId);
        
        if (!etudiant) {
            console.log(" Étudiant non trouvé");
            return false;
        }
        
        const inscription = etudiant.coursInscrits.find(c => c.coursId === coursId);
        
        if (!inscription) {
            console.log(" Étudiant non inscrit à ce cours");
            return false;
        }
        
        // Vérifier si la leçon n'est pas déjà complétée
        const leconKey = `${moduleId}-${leconId}`;
        if (inscription.leconsCompletes.includes(leconKey)) {
            console.log(" Leçon déjà complétée");
            return false;
        }
        
        inscription.leconsCompletes.push(leconKey);
        
        // Calculer la progression
        const cours = this.trouverCours(coursId);
        let totalLecons = 0;
        cours.modules.forEach(module => {
            totalLecons += module.lecons.length;
        });
        
        inscription.progression = Math.round((inscription.leconsCompletes.length / totalLecons) * 100);
        
        console.log(` Leçon complétée ! Progression : ${inscription.progression}%`);
        
        return true;
    },
    
    // === 3. SYSTÈME DE QUIZ ===
    
    // Méthode pour passer un quiz
    passerQuiz(etudiantId, coursId, reponses) {
        const etudiant = this.trouverEtudiant(etudiantId);
        const cours = this.trouverCours(coursId);
        
        if (!etudiant || !cours) {
            console.log(" Étudiant ou cours non trouvé");
            return null;
        }
        
        const inscription = etudiant.coursInscrits.find(c => c.coursId === coursId);
        
        if (!inscription) {
            console.log(" Étudiant non inscrit à ce cours");
            return null;
        }
        
        console.log(`\n PASSAGE DU QUIZ : ${cours.quiz.titre} \n`);
        
        let bonnesReponses = 0;
        const corrections = [];
        
        cours.quiz.questions.forEach((question, index) => {
            const reponseEtudiant = reponses[index];
            const estCorrect = reponseEtudiant === question.bonneReponse;
            
            if (estCorrect) {
                bonnesReponses++;
            }
            
            corrections.push({
                questionId: question.id,
                question: question.question,
                reponseEtudiant: question.options[reponseEtudiant],
                bonneReponse: question.options[question.bonneReponse],
                correct: estCorrect
            });
            
            const icone = estCorrect ? "" : "";
            console.log(`${icone} Question ${index + 1} : ${question.question}`);
            console.log(`   Votre réponse : ${question.options[reponseEtudiant]}`);
            if (!estCorrect) {
                console.log(`   Bonne réponse : ${question.options[question.bonneReponse]}`);
            }
            console.log("");
        });
        
        const score = Math.round((bonnesReponses / cours.quiz.questions.length) * 100);
        const reussi = score >= cours.quiz.scoreMinimum;
        
        // Enregistrer la tentative
        const tentative = {
            date: new Date().toLocaleString('fr-FR'),
            score: score,
            bonnesReponses: bonnesReponses,
            totalQuestions: cours.quiz.questions.length,
            reussi: reussi,
            corrections: corrections
        };
        
        inscription.tentativesQuiz.push(tentative);
        
        // Mettre à jour le meilleur score
        if (score > inscription.meilleurScore) {
            inscription.meilleurScore = score;
        }
        
        console.log("".repeat(70));
        console.log(` RÉSULTAT : ${bonnesReponses}/${cours.quiz.questions.length} bonnes réponses`);
        console.log(`   Score : ${score}%`);
        console.log(`   Statut : ${reussi ? " RÉUSSI" : " ÉCHOUÉ"}`);
        console.log(`   (Score minimum : ${cours.quiz.scoreMinimum}%)`);
        console.log("".repeat(70) + "\n");
        
        // Délivrer le certificat si réussi et progression à 100%
        if (reussi && inscription.progression === 100 && !inscription.certificatObtenu) {
            this.delivrerCertificat(etudiantId, coursId);
        }
        
        return tentative;
    },
    
    // === 4. CERTIFICATS ===
    
    // Méthode pour délivrer un certificat
    delivrerCertificat(etudiantId, coursId) {
        const etudiant = this.trouverEtudiant(etudiantId);
        const cours = this.trouverCours(coursId);
        
        if (!etudiant || !cours) return false;
        
        const inscription = etudiant.coursInscrits.find(c => c.coursId === coursId);
        
        if (!inscription) return false;
        
        // Vérifier les conditions
        if (inscription.progression < 100) {
            console.log(" Le cours n'est pas complété à 100%");
            return false;
        }
        
        if (inscription.meilleurScore < cours.quiz.scoreMinimum) {
            console.log(" Score du quiz insuffisant");
            return false;
        }
        
        if (inscription.certificatObtenu) {
            console.log(" Certificat déjà délivré");
            return false;
        }
        
        // Générer le certificat
        const certificat = {
            numero: `CERT-${Date.now()}`,
            coursId: coursId,
            titreCours: cours.titre,
            etudiantNom: `${etudiant.prenom} ${etudiant.nom}`,
            dateObtention: new Date().toLocaleString('fr-FR'),
            score: inscription.meilleurScore,
            valide: true
        };
        
        etudiant.certificats.push(certificat);
        inscription.certificatObtenu = true;
        inscription.dateCompletion = certificat.dateObtention;
        cours.certificatsDelivres++;
        
        this.afficherCertificat(certificat);
        
        return true;
    },
    
    // Méthode pour afficher un certificat
    afficherCertificat(certificat) {
        console.log("\n" + "".repeat(70));
        console.log("🎓 CERTIFICAT DE RÉUSSITE".center(70));
        console.log("".repeat(70));
        console.log("");
        console.log(`          ${this.nom}`.center(70));
        console.log("");
        console.log("          certifie que".center(70));
        console.log("");
        console.log(`          ${certificat.etudiantNom}`.center(70));
        console.log("");
        console.log("          a complété avec succès le cours".center(70));
        console.log("");
        console.log(`          "${certificat.titreCours}"`.center(70));
        console.log("");
        console.log(`          Score obtenu : ${certificat.score}%`.center(70));
        console.log(`          Date : ${certificat.dateObtention}`.center(70));
        console.log(`          N° ${certificat.numero}`.center(70));
        console.log("");
        console.log("".repeat(70) + "\n");
    },
    
    // Méthode pour afficher les certificats d'un étudiant
    afficherCertificatsEtudiant(etudiantId) {
        const etudiant = this.trouverEtudiant(etudiantId);
        
        if (!etudiant) {
            console.log(" Étudiant non trouvé");
            return;
        }
        
        console.log(`\n CERTIFICATS DE ${etudiant.prenom.toUpperCase()} ${etudiant.nom.toUpperCase()} \n`);
        
        if (etudiant.certificats.length === 0) {
            console.log("Aucun certificat obtenu pour le moment");
        } else {
            etudiant.certificats.forEach((cert, index) => {
                console.log(`${index + 1}. ${cert.titreCours}`);
                console.log(`   Date : ${cert.dateObtention}`);
                console.log(`   Score : ${cert.score}%`);
                console.log(`   N° ${cert.numero}`);
                console.log("");
            });
        }
    },
    
    // === 5. STATISTIQUES ===
    
    // Méthode pour calculer le taux de réussite d'un cours
    tauxReussiteCours(coursId) {
        const cours = this.trouverCours(coursId);
        
        if (!cours) {
            console.log(" Cours non trouvé");
            return 0;
        }
        
        if (cours.inscrits === 0) {
            console.log(" Aucun étudiant inscrit");
            return 0;
        }
        
        const taux = (cours.certificatsDelivres / cours.inscrits) * 100;
        
        console.log(`\n Taux de réussite : "${cours.titre}"`);
        console.log(`   Inscrits : ${cours.inscrits}`);
        console.log(`   Certificats délivrés : ${cours.certificatsDelivres}`);
        console.log(`   Taux de réussite : ${taux.toFixed(1)}%`);
        
        return taux;
    },
    
    // Méthode pour trouver les étudiants les plus actifs
    etudiantsPlusActifs() {
        const classement = this.etudiants
            .map(etudiant => ({
                nom: `${etudiant.prenom} ${etudiant.nom}`,
                coursInscrits: etudiant.coursInscrits.length,
                certificats: etudiant.certificats.length,
                progressionMoyenne: etudiant.coursInscrits.length > 0
                    ? etudiant.coursInscrits.reduce((sum, c) => sum + c.progression, 0) / etudiant.coursInscrits.length
                    : 0
            }))
            .sort((a, b) => b.certificats - a.certificats || b.progressionMoyenne - a.progressionMoyenne)
            .slice(0, 5);
        
        console.log("\n TOP 5 ÉTUDIANTS LES PLUS ACTIFS \n");
        
        if (classement.length === 0) {
            console.log("Aucun étudiant inscrit");
        } else {
            classement.forEach((etudiant, index) => {
                console.log(`${index + 1}. ${etudiant.nom}`);
                console.log(`   Cours inscrits : ${etudiant.coursInscrits}`);
                console.log(`   Certificats : ${etudiant.certificats}`);
                console.log(`   Progression moyenne : ${etudiant.progressionMoyenne.toFixed(1)}%`);
                console.log("");
            });
        }
    },
    
    // Méthode pour trouver les cours les plus populaires
    coursPlusPopulaires() {
        const classement = [...this.cours]
            .sort((a, b) => b.inscrits - a.inscrits)
            .slice(0, 5);
        
        console.log("\n COURS LES PLUS POPULAIRES \n");
        
        classement.forEach((cours, index) => {
            console.log(`${index + 1}. ${cours.titre}`);
            console.log(`   Inscrits : ${cours.inscrits}`);
            console.log(`   Certificats délivrés : ${cours.certificatsDelivres}`);
            const taux = cours.inscrits > 0 ? (cours.certificatsDelivres / cours.inscrits) * 100 : 0;
            console.log(`   Taux de réussite : ${taux.toFixed(1)}%`);
            console.log("");
        });
    },
    
    // Méthode pour afficher toutes les statistiques
    afficherStatistiques() {
        console.log("\n STATISTIQUES PLATEFORME ");
        
        const totalEtudiants = this.etudiants.length;
        const totalCours = this.cours.length;
        const totalInscrits = this.cours.reduce((sum, c) => sum + c.inscrits, 0);
        const totalCertificats = this.etudiants.reduce((sum, e) => sum + e.certificats.length, 0);
        
        console.log(`\nÉtudiants inscrits : ${totalEtudiants}`);
        console.log(`Cours disponibles : ${totalCours}`);
        console.log(`Total inscriptions : ${totalInscrits}`);
        console.log(`Certificats délivrés : ${totalCertificats}`);
        
        this.coursPlusPopulaires();
        this.etudiantsPlusActifs();
        
        console.log("\n Taux de réussite par cours :\n");
        this.cours.forEach(cours => {
            if (cours.inscrits > 0) {
                const taux = (cours.certificatsDelivres / cours.inscrits) * 100;
                console.log(`   ${cours.titre} : ${taux.toFixed(1)}%`);
            }
        });
    }
};


console.log(" TEST DE LA PLATEFORME E-LEARNING \n");

// Afficher le catalogue
plateformeLearning.afficherCours();

// Créer des étudiants
console.log(" Création d'étudiants ");
const etud1 = plateformeLearning.creerEtudiant("Dupont", "Marie", "marie.dupont@email.fr");
const etud2 = plateformeLearning.creerEtudiant("Martin", "Lucas", "lucas.martin@email.fr");
const etud3 = plateformeLearning.creerEtudiant("Bernard", "Sophie", "sophie.bernard@email.fr");

// Inscrire aux cours
console.log("\n Inscriptions aux cours ");
plateformeLearning.inscrireCours(etud1, 1); // Marie → JavaScript
plateformeLearning.inscrireCours(etud1, 2); // Marie → Python
plateformeLearning.inscrireCours(etud2, 1); // Lucas → JavaScript
plateformeLearning.inscrireCours(etud3, 2); // Sophie → Python

// Afficher le détail d'un cours
plateformeLearning.afficherDetailCours(1);

// Compléter des leçons
console.log("\n Progression dans les cours ");
plateformeLearning.completerLecon(etud1, 1, 1, 1);
plateformeLearning.completerLecon(etud1, 1, 1, 2);
plateformeLearning.completerLecon(etud1, 1, 1, 3);
plateformeLearning.completerLecon(etud1, 1, 2, 4);
plateformeLearning.completerLecon(etud1, 1, 2, 5);

// Passer le quiz (Marie)
console.log("\n  Passage du quiz ");
const reponsesMarie = [2, 3, 1]; // Réponses aux 3 questions
plateformeLearning.passerQuiz(etud1, 1, reponsesMarie);

// Passer le quiz (Lucas)
const reponsesLucas = [0, 1, 0]; // Mauvaises réponses
plateformeLearning.passerQuiz(etud2, 1, reponsesLucas);

// Afficher les certificats de Marie
plateformeLearning.afficherCertificatsEtudiant(etud1);

// Afficher les statistiques
plateformeLearning.afficherStatistiques();

console.log("\n Plateforme e-learning opérationnelle !");
