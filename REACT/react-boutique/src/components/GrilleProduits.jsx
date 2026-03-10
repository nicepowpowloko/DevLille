// ── Composant GrilleProduits ──
// Affiche la grille de cartes produits
// Utilise .filter() pour ne montrer que la catégorie sélectionnée
// Puis .map() pour générer une CarteProduit par produit

import CarteProduit from './CarteProduit'

function GrilleProduits({ produits, categorie, onAjouterPanier }) {

  // Filtre selon la catégorie active
  const produitsFiltres = categorie === 'Toutes'
    ? produits
    : produits.filter(p => p.categorie === categorie)

  return (
    <section className="grille-section">
      <div className="grille-header">
        <h2 className="grille-titre">Nos produits</h2>
        <span className="grille-count">
          {produitsFiltres.length} produit{produitsFiltres.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Si aucun produit dans cette catégorie */}
      {produitsFiltres.length === 0 ? (
        <div className="grille-vide">
          <p>Aucun produit dans cette catégorie.</p>
        </div>
      ) : (
        <div className="grille">
          {produitsFiltres.map(produit => (
            <CarteProduit
              key={produit.id}
              produit={produit}
              onAjouterPanier={onAjouterPanier}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default GrilleProduits
