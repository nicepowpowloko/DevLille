# ⚡ TechStore — Projet React DWWM

Projet pédagogique pour comprendre l'architecture React et les composants.

## 🚀 Lancer le projet

```bash
# 1. Installer les dépendances
npm install

# 2. Démarrer le serveur de développement
npm run dev

# 3. Ouvrir dans le navigateur
# → http://localhost:5173
```

## 📁 Structure du projet

```
react-boutique/
├── index.html                  ← Point d'entrée HTML (div#root)
├── vite.config.js              ← Config Vite
├── package.json                ← Dépendances npm
│
└── src/
    ├── main.jsx                ← Monte App dans le DOM
    ├── App.jsx                 ← Composant racine (state global)
    │
    ├── data/
    │   └── produits.js         ← Données (simuler une API)
    │
    ├── components/
    │   ├── Header.jsx          ← Barre de navigation + panier
    │   ├── Hero.jsx            ← Section d'accroche
    │   ├── Filtres.jsx         ← Boutons de filtre par catégorie
    │   ├── GrilleProduits.jsx  ← Grille de cartes (.map + .filter)
    │   ├── CarteProduit.jsx    ← Une carte produit
    │   └── Footer.jsx          ← Pied de page
    │
    └── styles/
        └── index.css           ← Styles globaux
```

## 🧠 Concepts illustrés

| Concept       | Où le trouver                     |
|---------------|-----------------------------------|
| `useState`    | `App.jsx` (panier, categorie)     |
| Props         | `CarteProduit.jsx`, `Header.jsx`  |
| `.map()`      | `GrilleProduits.jsx`              |
| `.filter()`   | `GrilleProduits.jsx`              |
| Callback prop | `Filtres.jsx` → `onChange`        |
| Rendu conditionnel | `CarteProduit.jsx`           |
| Export default | Tous les composants              |
