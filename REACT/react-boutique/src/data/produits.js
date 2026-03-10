// ── Données des produits ──
// Dans une vraie app, ces données viendraient d'une API (fetch)

export const produits = [
  {
    id: 1,
    nom: "Casque Sony WH-1000XM5",
    categorie: "Audio",
    prix: 279,
    description: "Réduction de bruit active, 30h d'autonomie, son Hi-Res.",
    image: "🎧",
    stock: 12,
    nouveaute: true,
  },
  {
    id: 2,
    nom: "Clavier Mécanique Keychron K2",
    categorie: "Accessoires",
    prix: 99,
    description: "Switch Red, rétroéclairage RGB, compatible Mac & Windows.",
    image: "⌨️",
    stock: 5,
    nouveaute: false,
  },
  {
    id: 3,
    nom: "Écran LG 27'' 4K",
    categorie: "Écrans",
    prix: 449,
    description: "Dalle IPS, 144Hz, HDR10, parfait pour le dev et le gaming.",
    image: "🖥️",
    stock: 3,
    nouveaute: false,
  },
  {
    id: 4,
    nom: "Webcam Logitech Brio 4K",
    categorie: "Accessoires",
    prix: 189,
    description: "4K Ultra HD, auto-focus, compatible Teams & Zoom.",
    image: "📷",
    stock: 8,
    nouveaute: true,
  },
  {
    id: 5,
    nom: "Hub USB-C 7-en-1",
    categorie: "Accessoires",
    prix: 59,
    description: "HDMI 4K, USB-A x3, SD card, charge 100W.",
    image: "🔌",
    stock: 20,
    nouveaute: false,
  },
  {
    id: 6,
    nom: "SSD Externe Samsung T7",
    categorie: "Stockage",
    prix: 119,
    description: "1 To, USB 3.2, 1050 Mo/s, compact et robuste.",
    image: "💾",
    stock: 0,
    nouveaute: false,
  },
]

export const categories = ["Toutes", "Audio", "Accessoires", "Écrans", "Stockage"]
