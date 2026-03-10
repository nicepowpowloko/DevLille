// ── Composant PanierSidebar ──
// Panneau latéral qui s'ouvre quand on clique sur "Panier"
// Props : ouvert, panier[], onFermer, onSupprimer, onVider

function PanierSidebar({ ouvert, panier, onFermer, onSupprimer, onVider }) {
  const total = panier.reduce((acc, p) => acc + p.prix, 0)

  return (
    <>
      {/* Overlay sombre derrière le panneau */}
      {ouvert && (
        <div className="panier-overlay" onClick={onFermer} />
      )}

      {/* Panneau latéral */}
      <div className={`panier-sidebar ${ouvert ? 'ouvert' : ''}`}>

        <div className="panier-header">
          <h2>🛒 Mon panier</h2>
          <button className="panier-fermer" onClick={onFermer}>✕</button>
        </div>

        {/* Panier vide */}
        {panier.length === 0 ? (
          <div className="panier-vide">
            <p>Ton panier est vide.</p>
            <button className="btn btn-outline" onClick={onFermer}>
              Voir les produits
            </button>
          </div>
        ) : (
          <>
            {/* Liste des articles */}
            <div className="panier-liste">
              {panier.map((produit, index) => (
                <div className="panier-item" key={index}>
                  <span className="panier-item-emoji">{produit.image}</span>
                  <div className="panier-item-info">
                    <p className="panier-item-nom">{produit.nom}</p>
                    <p className="panier-item-prix">{produit.prix} €</p>
                  </div>
                  <button
                    className="panier-item-suppr"
                    onClick={() => onSupprimer(index)}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            {/* Total + actions */}
            <div className="panier-footer">
              <div className="panier-total">
                <span>Total</span>
                <span className="panier-total-prix">{total} €</span>
              </div>
              <button className="btn btn-primary" style={{ width: '100%' }}>
                Passer la commande
              </button>
              <button
                className="btn btn-outline"
                style={{ width: '100%', marginTop: '8px' }}
                onClick={onVider}
              >
                Vider le panier
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default PanierSidebar
