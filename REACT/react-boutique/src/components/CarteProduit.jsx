// ── Composant CarteProduit ──
// Le composant le plus important : affiche un produit
// Reçoit toutes les infos via props + la fonction onAjouterPanier

function CarteProduit({ produit, onAjouterPanier }) {
  // On déstructure l'objet produit pour plus de lisibilité
  const { nom, categorie, prix, description, image, stock, nouveaute } = produit

  const enRupture = stock === 0

  return (
    <div className={`carte ${enRupture ? 'carte-rupture' : ''}`}>

      {/* Badge Nouveauté */}
      {nouveaute && (
        <span className="carte-badge">✨ Nouveauté</span>
      )}

      {/* Image / Emoji */}
      <div className="carte-image">
        <span className="carte-emoji">{image}</span>
      </div>

      {/* Infos */}
      <div className="carte-infos">
        <span className="carte-categorie">{categorie}</span>
        <h3 className="carte-nom">{nom}</h3>
        <p className="carte-desc">{description}</p>
      </div>

      {/* Pied de carte */}
      <div className="carte-footer">
        <span className="carte-prix">{prix} €</span>

        <div className="carte-actions">
          {enRupture ? (
            <button className="btn btn-rupture" disabled>
              Rupture de stock
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => onAjouterPanier(produit)}
            >
              Ajouter au panier
            </button>
          )}
        </div>
      </div>

      {/* Stock restant */}
      {!enRupture && stock <= 5 && (
        <p className="carte-stock-alerte">
          ⚠️ Plus que {stock} en stock !
        </p>
      )}
    </div>
  )
}

export default CarteProduit
