// ── Composant Header ──
// Reçoit : panier (nombre), onOuvrirPanier (fonction)

function Header({ panier, onOuvrirPanier }) {
  return (
    <header className="header">
      <div className="header-logo">
        <span className="logo-icon">⚡</span>
        <span className="logo-texte">TechStore</span>
      </div>

      <nav className="header-nav">
        <a href="#accueil">Accueil</a>
        <a href="#produits">Produits</a>
        <a href="#apropos">À propos</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="header-panier">
        <button className="btn-panier" onClick={onOuvrirPanier}>
          🛒 Panier
          {panier > 0 && (
            <span className="badge-panier">{panier}</span>
          )}
        </button>
      </div>
    </header>
  )
}

export default Header
