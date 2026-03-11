// ── Composant APropos ──

function APropos() {
  return (
    <section className="apropos" id="apropos">
      <h2 className="section-titre">À propos de TechStore</h2>
      <div className="apropos-grille">
        <div className="apropos-carte">
          <span className="apropos-icon"></span>
          <h3>Notre mission</h3>
          <p>Fournir aux développeurs le meilleur matériel au meilleur prix depuis 2020.</p>
        </div>
        <div className="apropos-carte">
          <span className="apropos-icon"></span>
          <h3>Livraison</h3>
          <p>Livraison gratuite en France dès 100 €. Expédié en 24h.</p>
        </div>
        <div className="apropos-carte">
          <span className="apropos-icon"></span>
          <h3>Garantie</h3>
          <p>Satisfait ou remboursé sous 30 jours. Garantie constructeur 2 ans.</p>
        </div>
      </div>
    </section>
  )
}

export default APropos
