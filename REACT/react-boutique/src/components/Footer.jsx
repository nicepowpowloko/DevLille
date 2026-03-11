// ── Composant Footer ──
// Pas de props — contenu statique

function Footer() {
  const annee = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-contenu">
        <div className="footer-logo">
          <span>TechStore</span>
          <p>L'équipement des développeurs.</p>
        </div>

        <div className="footer-liens">
          <h4>Navigation</h4>
          <a href="#">Accueil</a>
          <a href="#">Produits</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-liens">
          <h4>Légal</h4>
          <a href="#">Mentions légales</a>
          <a href="#">CGV</a>
          <a href="#">Politique de confidentialité</a>
        </div>
      </div>

      <div className="footer-bas">
        <p>© {annee} TechStore — Tous droits réservés</p>
      </div>
    </footer>
  )
}

export default Footer
