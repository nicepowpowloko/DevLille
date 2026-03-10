// ── Composant Hero ──
// Section d'accroche en haut de la landing page
// Pas de props — contenu statique

function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero-contenu">
        <span className="hero-badge">🚀 Nouvelle collection 2024</span>
        <h1 className="hero-titre">
          L'équipement parfait<br />
          pour les <span className="hero-accent">développeurs</span>
        </h1>
        <p className="hero-desc">
          Sélection de matériel haut de gamme pour booster ta productivité.
          Livraison gratuite dès 100 €.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary">Voir les produits ↓</button>
          <button className="btn btn-outline">En savoir plus</button>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-emoji">💻</div>
      </div>
    </section>
  )
}

export default Hero
