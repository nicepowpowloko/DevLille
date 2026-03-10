// ── Composant Filtres ──
// Reçoit les categories, le filtre actif, et la fonction pour changer le filtre
// Illustre parfaitement les props : données + fonction callback

function Filtres({ categories, actif, onChange }) {
  return (
    <div className="filtres">
      <span className="filtres-label">Filtrer :</span>
      <div className="filtres-boutons">
        {categories.map(cat => (
          <button
            key={cat}
            className={`btn-filtre ${actif === cat ? 'actif' : ''}`}
            onClick={() => onChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Filtres
