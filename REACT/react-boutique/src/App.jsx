// ── Composant App — Racine de l'application ──

import { useState } from 'react'

import { produits, categories } from './data/produits'

import Header          from './components/Header'
import Hero            from './components/Hero'
import Filtres         from './components/Filtres'
import GrilleProduits  from './components/GrilleProduits'
import PanierSidebar   from './components/PanierSidebar'
import APropos         from './components/APropos'
import Contact         from './components/Contact'
import Footer          from './components/Footer'

import './styles/index.css'

function App() {
  const [panier, setPanier]             = useState([])
  const [categorie, setCategorie]       = useState('Toutes')
  const [notification, setNotification] = useState(null)
  const [panierOuvert, setPanierOuvert] = useState(false)

  function ajouterAuPanier(produit) {
    setPanier([...panier, produit])
    setNotification(`✅ ${produit.nom} ajouté !`)
    setTimeout(() => setNotification(null), 2000)
  }

  function supprimerDuPanier(index) {
    setPanier(panier.filter((_, i) => i !== index))
  }

  function viderPanier() {
    setPanier([])
  }

  return (
    <div className="app">

      <Header
        panier={panier.length}
        onOuvrirPanier={() => setPanierOuvert(true)}
      />

      <PanierSidebar
        ouvert={panierOuvert}
        panier={panier}
        onFermer={() => setPanierOuvert(false)}
        onSupprimer={supprimerDuPanier}
        onVider={viderPanier}
      />

      {notification && (
        <div className="notification">{notification}</div>
      )}

      <Hero />

      <main className="main" id="produits">
        <Filtres
          categories={categories}
          actif={categorie}
          onChange={setCategorie}
        />
        <GrilleProduits
          produits={produits}
          categorie={categorie}
          onAjouterPanier={ajouterAuPanier}
        />
      </main>

      <APropos />
      <Contact />
      <Footer />

    </div>
  )
}

export default App
