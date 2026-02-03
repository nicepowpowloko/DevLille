// Contenu des 15 modules HTML - Real Conseil
const modulesHTML = [
    // MODULE 1
    {
        id: 0,
        title: "Module 1 : Introduction au HTML",
        content: `
            <h2>Module 1 : Introduction au HTML</h2>
            
            <h3>Qu'est-ce que le HTML ?</h3>
            <p>
                <strong>HTML</strong> signifie <span class="highlight">HyperText Markup Language</span> (Langage de Balisage HyperTexte). 
                C'est le langage standard utilisé pour créer et structurer le contenu des pages web. HTML n'est pas un langage de programmation, 
                mais un langage de balisage qui utilise des balises pour définir la structure et le contenu d'une page.
            </p>

            <h3>Histoire du HTML</h3>
            <ul>
                <li><strong>1991</strong> : Tim Berners-Lee crée la première version de HTML</li>
                <li><strong>1995</strong> : HTML 2.0 devient un standard</li>
                <li><strong>1997</strong> : HTML 3.2 et HTML 4.0</li>
                <li><strong>1999</strong> : HTML 4.01</li>
                <li><strong>2014</strong> : HTML5 devient la recommandation officielle du W3C</li>
                <li><strong>Aujourd'hui</strong> : HTML5 est le standard actuel avec des évolutions continues</li>
            </ul>

            <h3>Rôle du HTML dans le développement web</h3>
            <p>Le développement web moderne repose sur trois technologies principales :</p>
            <ul>
                <li><strong>HTML</strong> : Structure et contenu de la page</li>
                <li><strong>CSS</strong> : Présentation et mise en forme visuelle</li>
                <li><strong>JavaScript</strong> : Interactivité et comportements dynamiques</li>
            </ul>

            <div class="example">
                <h4>Analogie</h4>
                <p>Imaginez la construction d'une maison :</p>
                <ul>
                    <li><strong>HTML</strong> = Les murs, les fondations, la structure</li>
                    <li><strong>CSS</strong> = La peinture, la décoration, l'aménagement</li>
                    <li><strong>JavaScript</strong> = L'électricité, la plomberie, les systèmes automatisés</li>
                </ul>
            </div>

            <h3>Les balises HTML</h3>
            <p>
                Les balises sont les éléments de base du HTML. Elles sont entourées de chevrons &lt; et &gt;.
                La plupart des balises fonctionnent par paire : une balise ouvrante et une balise fermante.
            </p>

            <div class="code-block">
                <code>&lt;balise&gt;Contenu&lt;/balise&gt;</code>
            </div>

            <h3>Les attributs</h3>
            <p>Les attributs fournissent des informations supplémentaires sur les balises.</p>

            <div class="code-block">
                <code>&lt;a href="https://www.example.com" target="_blank"&gt;Lien&lt;/a&gt;
&lt;img src="photo.jpg" alt="Description" width="300"&gt;</code>
            </div>

            <div class="tip">
                <strong> Conseil :</strong> Utilisez toujours des guillemets doubles pour les valeurs d'attributs et écrivez vos balises en minuscules pour respecter les standards modernes.
            </div>

            <h3>Outils nécessaires</h3>
            <ul>
                <li><strong>Un éditeur de texte</strong> : VS Code, Sublime Text, Notepad++</li>
                <li><strong>Un navigateur web</strong> : Chrome, Firefox, Safari, Edge</li>
                <li><strong>Les outils de développement</strong> : accessibles avec F12</li>
            </ul>

            <div class="example">
                <h4>Votre première page HTML</h4>
                <div class="code-block">
                    <code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Ma première page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Bonjour le monde !&lt;/h1&gt;
    &lt;p&gt;Ceci est ma première page HTML.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code>
                </div>
            </div>
        `
    },
    
    // MODULE 2
    {
        id: 1,
        title: "Module 2 : Structure d'une page HTML",
        content: `
            <h2>Module 2 : Structure d'une page HTML</h2>
            
            <h3>La déclaration DOCTYPE</h3>
            <p>Chaque document HTML doit commencer par une déclaration &lt;!DOCTYPE html&gt;. Cette déclaration indique au navigateur que le document est écrit en HTML5.</p>

            <div class="code-block">
                <code>&lt;!DOCTYPE html&gt;</code>
            </div>

            <h3>La balise &lt;html&gt;</h3>
            <p>La balise &lt;html&gt; est l'élément racine qui contient tout le contenu de la page.</p>

            <div class="code-block">
                <code>&lt;html lang="fr"&gt;
    &lt;!-- Contenu de la page --&gt;
&lt;/html&gt;</code>
            </div>

            <h3>La section &lt;head&gt;</h3>
            <p>La balise &lt;head&gt; contient les métadonnées de la page.</p>

            <div class="code-block">
                <code>&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Titre de ma page&lt;/title&gt;
    &lt;link rel="stylesheet" href="style.css"&gt;
&lt;/head&gt;</code>
            </div>

            <h3>La section &lt;body&gt;</h3>
            <p>La balise &lt;body&gt; contient tout le contenu visible de la page.</p>

            <h3>Structure complète d'une page HTML5</h3>
            <div class="code-block">
                <code>&lt;!DOCTYPE html&gt;
&lt;html lang="fr"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Ma Page Web&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;header&gt;
        &lt;h1&gt;Bienvenue sur mon site&lt;/h1&gt;
    &lt;/header&gt;
    
    &lt;main&gt;
        &lt;article&gt;
            &lt;h2&gt;Article principal&lt;/h2&gt;
            &lt;p&gt;Contenu...&lt;/p&gt;
        &lt;/article&gt;
    &lt;/main&gt;
    
    &lt;footer&gt;
        &lt;p&gt;&copy; 2024 Real Conseil&lt;/p&gt;
    &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</code>
            </div>

            <h3>Les commentaires HTML</h3>
            <div class="code-block">
                <code>&lt;!-- Ceci est un commentaire --&gt;</code>
            </div>

            <div class="tip">
                <strong> Bonne pratique :</strong> Une bonne indentation rend le code plus lisible et facile à maintenir.
            </div>
        `
    },
    
    // MODULE 3
    {
        id: 2,
        title: "Module 3 : Les balises de texte",
        content: `
            <h2>Module 3 : Les balises de texte</h2>
            
            <h3>Les titres (Headings)</h3>
            <p>HTML propose 6 niveaux de titres, de &lt;h1&gt; (le plus important) à &lt;h6&gt; (le moins important).</p>

            <div class="code-block">
                <code>&lt;h1&gt;Titre de niveau 1&lt;/h1&gt;
&lt;h2&gt;Titre de niveau 2&lt;/h2&gt;
&lt;h3&gt;Titre de niveau 3&lt;/h3&gt;
&lt;h4&gt;Titre de niveau 4&lt;/h4&gt;
&lt;h5&gt;Titre de niveau 5&lt;/h5&gt;
&lt;h6&gt;Titre de niveau 6&lt;/h6&gt;</code>
            </div>

            <div class="warning">
                <strong> Attention :</strong> N'utilisez qu'un seul &lt;h1&gt; par page. Respectez la hiérarchie des titres pour le SEO et l'accessibilité.
            </div>

            <h3>Les paragraphes</h3>
            <div class="code-block">
                <code>&lt;p&gt;Ceci est un paragraphe de texte.&lt;/p&gt;</code>
            </div>

            <h3>Mise en forme du texte</h3>
            <table>
                <thead>
                    <tr>
                        <th>Balise</th>
                        <th>Description</th>
                        <th>Exemple</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>&lt;strong&gt;</td>
                        <td>Texte important (gras)</td>
                        <td>&lt;strong&gt;Important&lt;/strong&gt;</td>
                    </tr>
                    <tr>
                        <td>&lt;em&gt;</td>
                        <td>Texte emphase (italique)</td>
                        <td>&lt;em&gt;Emphase&lt;/em&gt;</td>
                    </tr>
                    <tr>
                        <td>&lt;mark&gt;</td>
                        <td>Texte surligné</td>
                        <td>&lt;mark&gt;Surligné&lt;/mark&gt;</td>
                    </tr>
                    <tr>
                        <td>&lt;small&gt;</td>
                        <td>Petit texte</td>
                        <td>&lt;small&gt;Petit&lt;/small&gt;</td>
                    </tr>
                    <tr>
                        <td>&lt;del&gt;</td>
                        <td>Texte supprimé</td>
                        <td>&lt;del&gt;Supprimé&lt;/del&gt;</td>
                    </tr>
                    <tr>
                        <td>&lt;sub&gt;</td>
                        <td>Indice</td>
                        <td>H&lt;sub&gt;2&lt;/sub&gt;O</td>
                    </tr>
                    <tr>
                        <td>&lt;sup&gt;</td>
                        <td>Exposant</td>
                        <td>x&lt;sup&gt;2&lt;/sup&gt;</td>
                    </tr>
                </tbody>
            </table>

            <div class="tip">
                <strong> Préférez les balises sémantiques :</strong> Utilisez &lt;strong&gt; plutôt que &lt;b&gt; et &lt;em&gt; plutôt que &lt;i&gt;.
            </div>

            <h3>Les citations</h3>
            <div class="code-block">
                <code>&lt;blockquote&gt;Citation longue&lt;/blockquote&gt;
&lt;q&gt;Citation courte&lt;/q&gt;
&lt;cite&gt;Le Petit Prince&lt;/cite&gt;</code>
            </div>

            <h3>Code et texte préformaté</h3>
            <div class="code-block">
                <code>&lt;code&gt;console.log()&lt;/code&gt;
&lt;pre&gt;Texte préformaté&lt;/pre&gt;
&lt;kbd&gt;Ctrl&lt;/kbd&gt; + &lt;kbd&gt;S&lt;/kbd&gt;</code>
            </div>
        `
    },
    
    // MODULE 4
    {
        id: 3,
        title: "Module 4 : Les listes",
        content: `
            <h2>Module 4 : Les listes</h2>
            
            <h3>Listes non ordonnées (&lt;ul&gt;)</h3>
            <p>Les listes non ordonnées affichent des éléments avec des puces.</p>

            <div class="code-block">
                <code>&lt;ul&gt;
    &lt;li&gt;Premier élément&lt;/li&gt;
    &lt;li&gt;Deuxième élément&lt;/li&gt;
    &lt;li&gt;Troisième élément&lt;/li&gt;
&lt;/ul&gt;</code>
            </div>

            <h3>Listes ordonnées (&lt;ol&gt;)</h3>
            <p>Les listes ordonnées affichent des éléments numérotés.</p>

            <div class="code-block">
                <code>&lt;ol&gt;
    &lt;li&gt;Premier élément&lt;/li&gt;
    &lt;li&gt;Deuxième élément&lt;/li&gt;
    &lt;li&gt;Troisième élément&lt;/li&gt;
&lt;/ol&gt;</code>
            </div>

            <h3>Attributs des listes ordonnées</h3>
            <div class="code-block">
                <code>&lt;!-- Lettres majuscules --&gt;
&lt;ol type="A"&gt;
    &lt;li&gt;Point A&lt;/li&gt;
    &lt;li&gt;Point B&lt;/li&gt;
&lt;/ol&gt;

&lt;!-- Commencer à 10 --&gt;
&lt;ol start="10"&gt;
    &lt;li&gt;Dixième élément&lt;/li&gt;
&lt;/ol&gt;

&lt;!-- Ordre inversé --&gt;
&lt;ol reversed&gt;
    &lt;li&gt;3&lt;/li&gt;
    &lt;li&gt;2&lt;/li&gt;
    &lt;li&gt;1&lt;/li&gt;
&lt;/ol&gt;</code>
            </div>

            <h3>Listes imbriquées</h3>
            <div class="code-block">
                <code>&lt;ul&gt;
    &lt;li&gt;Fruits
        &lt;ul&gt;
            &lt;li&gt;Pommes&lt;/li&gt;
            &lt;li&gt;Bananes&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/li&gt;
    &lt;li&gt;Légumes
        &lt;ul&gt;
            &lt;li&gt;Carottes&lt;/li&gt;
            &lt;li&gt;Tomates&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/li&gt;
&lt;/ul&gt;</code>
            </div>

            <h3>Listes de définitions (&lt;dl&gt;)</h3>
            <p>Les listes de définitions associent des termes avec leurs définitions.</p>

            <div class="code-block">
                <code>&lt;dl&gt;
    &lt;dt&gt;HTML&lt;/dt&gt;
    &lt;dd&gt;HyperText Markup Language&lt;/dd&gt;
    
    &lt;dt&gt;CSS&lt;/dt&gt;
    &lt;dd&gt;Cascading Style Sheets&lt;/dd&gt;
&lt;/dl&gt;</code>
            </div>

            <div class="tip">
                <strong> Bonne pratique :</strong> Vous pouvez imbriquer des listes ordonnées dans des listes non ordonnées et vice-versa.
            </div>
        `
    },
    
    // MODULE 5
    {
        id: 4,
        title: "Module 5 : Les liens hypertextes",
        content: `
            <h2>Module 5 : Les liens hypertextes</h2>
            
            <h3>La balise &lt;a&gt; (Anchor)</h3>
            <p>La balise &lt;a&gt; crée un lien hypertexte.</p>

            <div class="code-block">
                <code>&lt;a href="destination"&gt;Texte du lien&lt;/a&gt;</code>
            </div>

            <h3>Types de liens</h3>

            <h4>1. Liens externes</h4>
            <div class="code-block">
                <code>&lt;a href="https://www.google.com"&gt;Google&lt;/a&gt;</code>
            </div>

            <h4>2. Liens internes</h4>
            <div class="code-block">
                <code>&lt;a href="contact.html"&gt;Contact&lt;/a&gt;
&lt;a href="pages/services.html"&gt;Services&lt;/a&gt;</code>
            </div>

            <h4>3. Liens d'ancrage</h4>
            <div class="code-block">
                <code>&lt;h2 id="section1"&gt;Section 1&lt;/h2&gt;
&lt;a href="#section1"&gt;Aller à la section 1&lt;/a&gt;</code>
            </div>

            <h4>4. Liens email</h4>
            <div class="code-block">
                <code>&lt;a href="mailto:contact@realconseil.fr"&gt;Nous contacter&lt;/a&gt;</code>
            </div>

            <h4>5. Liens téléphone</h4>
            <div class="code-block">
                <code>&lt;a href="tel:+33123456789"&gt;01 23 45 67 89&lt;/a&gt;</code>
            </div>

            <h3>L'attribut target</h3>
            <div class="code-block">
                <code>&lt;!-- Ouvrir dans un nouvel onglet --&gt;
&lt;a href="https://example.com" target="_blank" rel="noopener noreferrer"&gt;
    Lien externe
&lt;/a&gt;</code>
            </div>

            <div class="warning">
                <strong> Sécurité :</strong> Avec target="_blank", ajoutez toujours rel="noopener noreferrer" pour des raisons de sécurité.
            </div>

            <h3>Liens avec images</h3>
            <div class="code-block">
                <code>&lt;a href="https://www.realconseil.fr"&gt;
    &lt;img src="logo.png" alt="Logo Real Conseil"&gt;
&lt;/a&gt;</code>
            </div>

            <div class="tip">
                <strong> Accessibilité :</strong> Utilisez des textes de liens explicites. Préférez "Télécharger le catalogue PDF" à "Cliquer ici".
            </div>
        `
    },
    
    // MODULE 6
    {
        id: 5,
        title: "Module 6 : Les images",
        content: `
            <h2>Module 6 : Les images</h2>
            
            <h3>La balise &lt;img&gt;</h3>
            <p>La balise &lt;img&gt; permet d'insérer des images. C'est une balise auto-fermante.</p>

            <div class="code-block">
                <code>&lt;img src="chemin/image.jpg" alt="Description"&gt;</code>
            </div>

            <h3>Attributs essentiels</h3>

            <h4>1. src (source)</h4>
            <div class="code-block">
                <code>&lt;img src="images/photo.jpg" alt="Photo"&gt;</code>
            </div>

            <h4>2. alt (texte alternatif)</h4>
            <p>L'attribut alt est obligatoire pour l'accessibilité.</p>
            <div class="code-block">
                <code>&lt;img src="logo.png" alt="Logo de Real Conseil"&gt;</code>
            </div>

            <h4>3. width et height</h4>
            <div class="code-block">
                <code>&lt;img src="photo.jpg" alt="Photo" width="300" height="200"&gt;</code>
            </div>

            <h3>Formats d'images courants</h3>
            <table>
                <thead>
                    <tr>
                        <th>Format</th>
                        <th>Extension</th>
                        <th>Usage</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>JPEG</td>
                        <td>.jpg, .jpeg</td>
                        <td>Photos</td>
                    </tr>
                    <tr>
                        <td>PNG</td>
                        <td>.png</td>
                        <td>Transparence, logos</td>
                    </tr>
                    <tr>
                        <td>GIF</td>
                        <td>.gif</td>
                        <td>Animations</td>
                    </tr>
                    <tr>
                        <td>SVG</td>
                        <td>.svg</td>
                        <td>Vectoriel</td>
                    </tr>
                    <tr>
                        <td>WebP</td>
                        <td>.webp</td>
                        <td>Format moderne</td>
                    </tr>
                </tbody>
            </table>

            <h3>La balise &lt;figure&gt; et &lt;figcaption&gt;</h3>
            <div class="code-block">
                <code>&lt;figure&gt;
    &lt;img src="paysage.jpg" alt="Coucher de soleil"&gt;
    &lt;figcaption&gt;Coucher de soleil en Bretagne&lt;/figcaption&gt;
&lt;/figure&gt;</code>
            </div>

            <h3>Images réactives avec srcset</h3>
            <div class="code-block">
                <code>&lt;img src="image-400.jpg" 
     srcset="image-400.jpg 400w,
             image-800.jpg 800w,
             image-1200.jpg 1200w"
     sizes="(max-width: 600px) 400px, 800px"
     alt="Image responsive"&gt;</code>
            </div>

            <h3>Lazy loading</h3>
            <div class="code-block">
                <code>&lt;img src="image.jpg" alt="Image" loading="lazy"&gt;</code>
            </div>

            <div class="tip">
                <strong> Performance :</strong> Le lazy loading améliore les performances en ne chargeant les images que lorsqu'elles sont visibles.
            </div>
        `
    },
    
    // MODULE 7
    {
        id: 6,
        title: "Module 7 : Les tableaux",
        content: `
            <h2>Module 7 : Les tableaux</h2>
            
            <h3>Structure de base</h3>
            <p>Un tableau HTML est composé de balises &lt;table&gt;, &lt;tr&gt;, &lt;td&gt; et &lt;th&gt;.</p>

            <div class="code-block">
                <code>&lt;table&gt;
    &lt;tr&gt;
        &lt;th&gt;Prénom&lt;/th&gt;
        &lt;th&gt;Nom&lt;/th&gt;
        &lt;th&gt;Âge&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Jean&lt;/td&gt;
        &lt;td&gt;Dupont&lt;/td&gt;
        &lt;td&gt;28&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;</code>
            </div>

            <div class="warning">
                <strong> Important :</strong> N'utilisez JAMAIS les tableaux pour la mise en page. Utilisez CSS à la place.
            </div>

            <h3>Sections d'un tableau</h3>
            <div class="code-block">
                <code>&lt;table&gt;
    &lt;thead&gt;
        &lt;tr&gt;
            &lt;th&gt;Produit&lt;/th&gt;
            &lt;th&gt;Prix&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
        &lt;tr&gt;
            &lt;td&gt;Ordinateur&lt;/td&gt;
            &lt;td&gt;899€&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
    &lt;tfoot&gt;
        &lt;tr&gt;
            &lt;td&gt;Total&lt;/td&gt;
            &lt;td&gt;899€&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tfoot&gt;
&lt;/table&gt;</code>
            </div>

            <h3>Fusion de cellules</h3>

            <h4>colspan (fusion horizontale)</h4>
            <div class="code-block">
                <code>&lt;tr&gt;
    &lt;th colspan="2"&gt;Nom complet&lt;/th&gt;
&lt;/tr&gt;</code>
            </div>

            <h4>rowspan (fusion verticale)</h4>
            <div class="code-block">
                <code>&lt;tr&gt;
    &lt;th rowspan="2"&gt;Nom&lt;/th&gt;
    &lt;td&gt;Jean&lt;/td&gt;
&lt;/tr&gt;</code>
            </div>

            <h3>Légende du tableau</h3>
            <div class="code-block">
                <code>&lt;table&gt;
    &lt;caption&gt;Liste des stagiaires 2024&lt;/caption&gt;
    &lt;!-- contenu du tableau --&gt;
&lt;/table&gt;</code>
            </div>

            <h3>Accessibilité des tableaux</h3>
            <div class="code-block">
                <code>&lt;table&gt;
    &lt;thead&gt;
        &lt;tr&gt;
            &lt;th scope="col"&gt;Nom&lt;/th&gt;
            &lt;th scope="col"&gt;Prénom&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
        &lt;tr&gt;
            &lt;th scope="row"&gt;Dupont&lt;/th&gt;
            &lt;td&gt;Jean&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;</code>
            </div>

            <div class="tip">
                <strong> Bonne pratique :</strong> Utilisez scope="col" pour les en-têtes de colonnes et scope="row" pour les en-têtes de lignes.
            </div>
        `
    },
    
    // MODULE 8
    {
        id: 7,
        title: "Module 8 : Les formulaires (Partie 1)",
        content: `
            <h2>Module 8 : Les formulaires (Partie 1)</h2>
            
            <h3>La balise &lt;form&gt;</h3>
            <p>Tous les éléments de formulaire doivent être contenus dans une balise &lt;form&gt;.</p>

            <div class="code-block">
                <code>&lt;form action="traitement.php" method="post"&gt;
    &lt;!-- Champs du formulaire --&gt;
&lt;/form&gt;</code>
            </div>

            <h3>Méthodes GET vs POST</h3>
            <table>
                <thead>
                    <tr>
                        <th>Méthode</th>
                        <th>Quand l'utiliser</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>GET</td>
                        <td>Recherches, filtres, données non sensibles</td>
                    </tr>
                    <tr>
                        <td>POST</td>
                        <td>Connexion, inscription, données sensibles</td>
                    </tr>
                </tbody>
            </table>

            <h3>Types d'input courants</h3>

            <h4>1. text - Champ texte</h4>
            <div class="code-block">
                <code>&lt;input type="text" name="nom" placeholder="Votre nom"&gt;</code>
            </div>

            <h4>2. password - Mot de passe</h4>
            <div class="code-block">
                <code>&lt;input type="password" name="motdepasse"&gt;</code>
            </div>

            <h4>3. email - Email</h4>
            <div class="code-block">
                <code>&lt;input type="email" name="email" required&gt;</code>
            </div>

            <h4>4. number - Nombre</h4>
            <div class="code-block">
                <code>&lt;input type="number" name="age" min="18" max="100"&gt;</code>
            </div>

            <h4>5. date - Date</h4>
            <div class="code-block">
                <code>&lt;input type="date" name="naissance"&gt;</code>
            </div>

            <h3>Les libellés : &lt;label&gt;</h3>
            <div class="code-block">
                <code>&lt;label for="nom"&gt;Nom :&lt;/label&gt;
&lt;input type="text" id="nom" name="nom"&gt;</code>
            </div>

            <div class="tip">
                <strong> Accessibilité :</strong> Utilisez toujours des labels pour vos champs de formulaire.
            </div>

            <h3>Attributs communs</h3>
            <table>
                <thead>
                    <tr>
                        <th>Attribut</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>required</td>
                        <td>Champ obligatoire</td>
                    </tr>
                    <tr>
                        <td>readonly</td>
                        <td>Lecture seule</td>
                    </tr>
                    <tr>
                        <td>disabled</td>
                        <td>Désactivé</td>
                    </tr>
                    <tr>
                        <td>maxlength</td>
                        <td>Longueur maximale</td>
                    </tr>
                    <tr>
                        <td>pattern</td>
                        <td>Expression régulière</td>
                    </tr>
                </tbody>
            </table>

            <h3>Boutons de soumission</h3>
            <div class="code-block">
                <code>&lt;button type="submit"&gt;Envoyer&lt;/button&gt;
&lt;button type="reset"&gt;Réinitialiser&lt;/button&gt;</code>
            </div>

            <div class="example">
                <h4>Formulaire de contact simple</h4>
                <div class="code-block">
                    <code>&lt;form action="contact.php" method="post"&gt;
    &lt;label for="nom"&gt;Nom :&lt;/label&gt;
    &lt;input type="text" id="nom" name="nom" required&gt;
    
    &lt;label for="email"&gt;Email :&lt;/label&gt;
    &lt;input type="email" id="email" name="email" required&gt;
    
    &lt;button type="submit"&gt;Envoyer&lt;/button&gt;
&lt;/form&gt;</code>
                </div>
            </div>
        `
    },
    
    // MODULE 9
    {
        id: 8,
        title: "Module 9 : Les formulaires (Partie 2)",
        content: `
            <h2>Module 9 : Les formulaires (Partie 2)</h2>
            
            <h3>Cases à cocher : checkbox</h3>
            <div class="code-block">
                <code>&lt;label&gt;
    &lt;input type="checkbox" name="langages[]" value="html"&gt;
    HTML
&lt;/label&gt;
&lt;label&gt;
    &lt;input type="checkbox" name="langages[]" value="css"&gt;
    CSS
&lt;/label&gt;</code>
            </div>

            <h3>Boutons radio</h3>
            <div class="code-block">
                <code>&lt;label&gt;
    &lt;input type="radio" name="niveau" value="debutant"&gt;
    Débutant
&lt;/label&gt;
&lt;label&gt;
    &lt;input type="radio" name="niveau" value="avance"&gt;
    Avancé
&lt;/label&gt;</code>
            </div>

            <div class="tip">
                <strong> Important :</strong> Tous les boutons radio d'un même groupe doivent avoir le même attribut name.
            </div>

            <h3>Liste déroulante : &lt;select&gt;</h3>
            <div class="code-block">
                <code>&lt;select name="ville"&gt;
    &lt;option value=""&gt;-- Choisir --&lt;/option&gt;
    &lt;option value="paris"&gt;Paris&lt;/option&gt;
    &lt;option value="lyon"&gt;Lyon&lt;/option&gt;
    &lt;option value="marseille"&gt;Marseille&lt;/option&gt;
&lt;/select&gt;</code>
            </div>

            <h4>Groupes d'options</h4>
            <div class="code-block">
                <code>&lt;select name="formation"&gt;
    &lt;optgroup label="Développement Web"&gt;
        &lt;option value="html"&gt;HTML/CSS&lt;/option&gt;
        &lt;option value="js"&gt;JavaScript&lt;/option&gt;
    &lt;/optgroup&gt;
    &lt;optgroup label="Design"&gt;
        &lt;option value="photoshop"&gt;Photoshop&lt;/option&gt;
    &lt;/optgroup&gt;
&lt;/select&gt;</code>
            </div>

            <h3>Zone de texte : &lt;textarea&gt;</h3>
            <div class="code-block">
                <code>&lt;textarea name="message" rows="5" cols="40" 
          placeholder="Votre message..." required&gt;&lt;/textarea&gt;</code>
            </div>

            <h3>Upload de fichiers</h3>
            <div class="code-block">
                <code>&lt;form method="post" enctype="multipart/form-data"&gt;
    &lt;input type="file" name="fichier" accept=".pdf,.doc"&gt;
    &lt;button type="submit"&gt;Envoyer&lt;/button&gt;
&lt;/form&gt;</code>
            </div>

            <div class="warning">
                <strong> Important :</strong> N'oubliez pas enctype="multipart/form-data" pour l'upload de fichiers.
            </div>

            <h3>Champs HTML5 avancés</h3>

            <h4>Range - Curseur</h4>
            <div class="code-block">
                <code>&lt;input type="range" name="volume" min="0" max="100" value="50"&gt;</code>
            </div>

            <h4>Color - Sélecteur de couleur</h4>
            <div class="code-block">
                <code>&lt;input type="color" name="couleur" value="#667eea"&gt;</code>
            </div>

            <h3>Regroupement : &lt;fieldset&gt; et &lt;legend&gt;</h3>
            <div class="code-block">
                <code>&lt;fieldset&gt;
    &lt;legend&gt;Informations personnelles&lt;/legend&gt;
    &lt;label&gt;Nom : &lt;input type="text" name="nom"&gt;&lt;/label&gt;
    &lt;label&gt;Email : &lt;input type="email" name="email"&gt;&lt;/label&gt;
&lt;/fieldset&gt;</code>
            </div>

            <h3>Liste de suggestions : &lt;datalist&gt;</h3>
            <div class="code-block">
                <code>&lt;input list="navigateurs" name="navigateur"&gt;
&lt;datalist id="navigateurs"&gt;
    &lt;option value="Chrome"&gt;
    &lt;option value="Firefox"&gt;
    &lt;option value="Safari"&gt;
&lt;/datalist&gt;</code>
            </div>

            <h3>Validation HTML5</h3>
            <div class="code-block">
                <code>&lt;input type="email" required&gt;
&lt;input type="text" minlength="3" maxlength="20"&gt;
&lt;input type="number" min="18" max="100"&gt;
&lt;input type="text" pattern="[0-9]{5}"&gt;</code>
            </div>
        `
    },
    
    // MODULE 10
    {
        id: 9,
        title: "Module 10 : Structuration sémantique",
        content: `
            <h2>Module 10 : Structuration sémantique</h2>
            
            <h3>Qu'est-ce que le HTML sémantique ?</h3>
            <p>Le HTML sémantique utilise des balises qui donnent du sens au contenu, améliorant l'accessibilité et le SEO.</p>

            <h3>Balises de structure principales</h3>

            <h4>&lt;header&gt; - En-tête</h4>
            <div class="code-block">
                <code>&lt;header&gt;
    &lt;h1&gt;Nom du site&lt;/h1&gt;
    &lt;nav&gt;...&lt;/nav&gt;
&lt;/header&gt;</code>
            </div>

            <h4>&lt;nav&gt; - Navigation</h4>
            <div class="code-block">
                <code>&lt;nav&gt;
    &lt;ul&gt;
        &lt;li&gt;&lt;a href="#"&gt;Accueil&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;Services&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/nav&gt;</code>
            </div>

            <h4>&lt;main&gt; - Contenu principal</h4>
            <div class="code-block">
                <code>&lt;main&gt;
    &lt;h1&gt;Titre principal&lt;/h1&gt;
    &lt;p&gt;Contenu...&lt;/p&gt;
&lt;/main&gt;</code>
            </div>

            <div class="warning">
                <strong> Important :</strong> Il ne doit y avoir qu'une seule balise &lt;main&gt; par page.
            </div>

            <h4>&lt;section&gt; - Section thématique</h4>
            <div class="code-block">
                <code>&lt;section&gt;
    &lt;h2&gt;Nos services&lt;/h2&gt;
    &lt;p&gt;Description...&lt;/p&gt;
&lt;/section&gt;</code>
            </div>

            <h4>&lt;article&gt; - Contenu autonome</h4>
            <div class="code-block">
                <code>&lt;article&gt;
    &lt;h2&gt;Titre de l'article&lt;/h2&gt;
    &lt;p&gt;Contenu de l'article...&lt;/p&gt;
&lt;/article&gt;</code>
            </div>

            <h4>&lt;aside&gt; - Contenu complémentaire</h4>
            <div class="code-block">
                <code>&lt;aside&gt;
    &lt;h3&gt;Articles populaires&lt;/h3&gt;
    &lt;ul&gt;...&lt;/ul&gt;
&lt;/aside&gt;</code>
            </div>

            <h4>&lt;footer&gt; - Pied de page</h4>
            <div class="code-block">
                <code>&lt;footer&gt;
    &lt;p&gt;&copy; 2024 Real Conseil&lt;/p&gt;
&lt;/footer&gt;</code>
            </div>

            <h3>Structure complète</h3>
            <div class="code-block">
                <code>&lt;body&gt;
    &lt;header&gt;
        &lt;h1&gt;Real Conseil&lt;/h1&gt;
        &lt;nav&gt;...&lt;/nav&gt;
    &lt;/header&gt;
    
    &lt;main&gt;
        &lt;section&gt;
            &lt;article&gt;...&lt;/article&gt;
        &lt;/section&gt;
        &lt;aside&gt;...&lt;/aside&gt;
    &lt;/main&gt;
    
    &lt;footer&gt;...&lt;/footer&gt;
&lt;/body&gt;</code>
            </div>

            <div class="tip">
                <strong> Règle d'or :</strong> Choisissez vos balises en fonction du sens du contenu, pas de son apparence.
            </div>
        `
    },
    
    // MODULE 11
    {
        id: 10,
        title: "Module 11 : Multimédia (Audio & Vidéo)",
        content: `
            <h2>Module 11 : Multimédia (Audio & Vidéo)</h2>
            
            <h3>La balise &lt;audio&gt;</h3>
            <div class="code-block">
                <code>&lt;audio controls&gt;
    &lt;source src="audio.mp3" type="audio/mpeg"&gt;
    &lt;source src="audio.ogg" type="audio/ogg"&gt;
    Votre navigateur ne supporte pas l'audio.
&lt;/audio&gt;</code>
            </div>

            <h4>Attributs de &lt;audio&gt;</h4>
            <table>
                <thead>
                    <tr>
                        <th>Attribut</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>controls</td>
                        <td>Affiche les contrôles</td>
                    </tr>
                    <tr>
                        <td>autoplay</td>
                        <td>Lecture automatique</td>
                    </tr>
                    <tr>
                        <td>loop</td>
                        <td>Lecture en boucle</td>
                    </tr>
                    <tr>
                        <td>muted</td>
                        <td>Son coupé</td>
                    </tr>
                </tbody>
            </table>

            <h3>La balise &lt;video&gt;</h3>
            <div class="code-block">
                <code>&lt;video controls width="640" height="360"&gt;
    &lt;source src="video.mp4" type="video/mp4"&gt;
    &lt;source src="video.webm" type="video/webm"&gt;
    Votre navigateur ne supporte pas la vidéo.
&lt;/video&gt;</code>
            </div>

            <h3>Vidéo avec poster</h3>
            <div class="code-block">
                <code>&lt;video controls poster="vignette.jpg"&gt;
    &lt;source src="video.mp4" type="video/mp4"&gt;
&lt;/video&gt;</code>
            </div>

            <h3>Sous-titres avec &lt;track&gt;</h3>
            <div class="code-block">
                <code>&lt;video controls&gt;
    &lt;source src="video.mp4" type="video/mp4"&gt;
    &lt;track kind="subtitles" src="fr.vtt" srclang="fr" label="Français" default&gt;
    &lt;track kind="subtitles" src="en.vtt" srclang="en" label="English"&gt;
&lt;/video&gt;</code>
            </div>

            <h3>Formats recommandés</h3>
            <table>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Formats</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Audio</td>
                        <td>MP3, OGG, WAV</td>
                    </tr>
                    <tr>
                        <td>Vidéo</td>
                        <td>MP4, WebM, OGG</td>
                    </tr>
                </tbody>
            </table>

            <h3>Intégration YouTube</h3>
            <div class="code-block">
                <code>&lt;iframe width="560" height="315" 
        src="https://www.youtube.com/embed/VIDEO_ID" 
        frameborder="0" 
        allowfullscreen&gt;
&lt;/iframe&gt;</code>
            </div>

            <div class="warning">
                <strong> Attention :</strong> L'autoplay avec son est bloqué par la plupart des navigateurs. Utilisez muted si nécessaire.
            </div>

            <div class="tip">
                <strong> Bonne pratique :</strong> Proposez toujours plusieurs formats pour assurer la compatibilité.
            </div>
        `
    },
    
    // MODULE 12
    {
        id: 11,
        title: "Module 12 : Balises Meta et SEO",
        content: `
            <h2>Module 12 : Balises Meta et SEO</h2>
            
            <h3>Balises meta essentielles</h3>

            <h4>1. Encodage</h4>
            <div class="code-block">
                <code>&lt;meta charset="UTF-8"&gt;</code>
            </div>

            <h4>2. Viewport (Responsive)</h4>
            <div class="code-block">
                <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code>
            </div>

            <h4>3. Description</h4>
            <div class="code-block">
                <code>&lt;meta name="description" content="Formation HTML complète avec Real Conseil"&gt;</code>
            </div>

            <h4>4. Mots-clés</h4>
            <div class="code-block">
                <code>&lt;meta name="keywords" content="HTML, CSS, formation, web"&gt;</code>
            </div>

            <h4>5. Robots</h4>
            <div class="code-block">
                <code>&lt;meta name="robots" content="index, follow"&gt;</code>
            </div>

            <h3>Open Graph (Facebook, LinkedIn)</h3>
            <div class="code-block">
                <code>&lt;meta property="og:title" content="Formation HTML"&gt;
&lt;meta property="og:description" content="Apprenez le HTML5"&gt;
&lt;meta property="og:image" content="image.jpg"&gt;
&lt;meta property="og:url" content="https://www.realconseil.fr"&gt;</code>
            </div>

            <h3>Twitter Cards</h3>
            <div class="code-block">
                <code>&lt;meta name="twitter:card" content="summary_large_image"&gt;
&lt;meta name="twitter:title" content="Formation HTML"&gt;
&lt;meta name="twitter:description" content="Apprenez le HTML5"&gt;
&lt;meta name="twitter:image" content="image.jpg"&gt;</code>
            </div>

            <h3>&lt;head&gt; optimisé pour le SEO</h3>
            <div class="code-block">
                <code>&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Formation HTML | Real Conseil&lt;/title&gt;
    &lt;meta name="description" content="Formation HTML complète"&gt;
    &lt;meta name="keywords" content="HTML, formation, web"&gt;
    
    &lt;!-- Open Graph --&gt;
    &lt;meta property="og:title" content="Formation HTML"&gt;
    &lt;meta property="og:description" content="Apprenez le HTML5"&gt;
    &lt;meta property="og:image" content="og-image.jpg"&gt;
    
    &lt;!-- Twitter --&gt;
    &lt;meta name="twitter:card" content="summary_large_image"&gt;
    
    &lt;link rel="canonical" href="https://www.realconseil.fr/formation-html"&gt;
&lt;/head&gt;</code>
            </div>

            <h3>Bonnes pratiques SEO</h3>
            <ul>
                <li>Titre unique par page (50-60 caractères)</li>
                <li>Description accrocheuse (150-160 caractères)</li>
                <li>Hiérarchie des titres (h1, h2, h3)</li>
                <li>Attributs alt sur toutes les images</li>
                <li>URL canonical pour éviter le contenu dupliqué</li>
                <li>Site responsive (mobile-friendly)</li>
            </ul>

            <div class="tip">
                <strong> Outils utiles :</strong> Google Search Console, Facebook Sharing Debugger, PageSpeed Insights
            </div>
        `
    },
    
    // MODULE 13
    {
        id: 12,
        title: "Module 13 : Accessibilité Web",
        content: `
            <h2>Module 13 : Accessibilité Web</h2>
            
            <h3>Qu'est-ce que l'accessibilité web ?</h3>
            <p>L'accessibilité web consiste à rendre les sites utilisables par tous, y compris les personnes en situation de handicap.</p>

            <h3>Attributs ARIA</h3>

            <h4>Rôles ARIA</h4>
            <div class="code-block">
                <code>&lt;nav role="navigation" aria-label="Menu principal"&gt;...&lt;/nav&gt;
&lt;div role="button" tabindex="0"&gt;Cliquez&lt;/div&gt;
&lt;div role="alert"&gt;Message important&lt;/div&gt;</code>
            </div>

            <h4>aria-label</h4>
            <div class="code-block">
                <code>&lt;button aria-label="Fermer"&gt;X&lt;/button&gt;</code>
            </div>

            <h4>aria-labelledby</h4>
            <div class="code-block">
                <code>&lt;h2 id="titre"&gt;Section&lt;/h2&gt;
&lt;div aria-labelledby="titre"&gt;...&lt;/div&gt;</code>
            </div>

            <h4>aria-describedby</h4>
            <div class="code-block">
                <code>&lt;input type="password" aria-describedby="aide"&gt;
&lt;p id="aide"&gt;Minimum 8 caractères&lt;/p&gt;</code>
            </div>

            <h3>Images accessibles</h3>
            <div class="code-block">
                <code>&lt;!-- Image informative --&gt;
&lt;img src="graph.jpg" alt="Graphique montrant 25% d'augmentation"&gt;

&lt;!-- Image décorative --&gt;
&lt;img src="deco.png" alt=""&gt;

&lt;!-- Image fonctionnelle --&gt;
&lt;a href="contact.html"&gt;
    &lt;img src="email.png" alt="Nous contacter"&gt;
&lt;/a&gt;</code>
            </div>

            <h3>Navigation au clavier</h3>
            <div class="code-block">
                <code>&lt;!-- Élément focusable --&gt;
&lt;div tabindex="0"&gt;Contenu focusable&lt;/div&gt;

&lt;!-- Skip link --&gt;
&lt;a href="#main-content" class="skip-link"&gt;Aller au contenu&lt;/a&gt;</code>
            </div>

            <h3>Formulaires accessibles</h3>
            <div class="code-block">
                <code>&lt;label for="nom"&gt;Nom :&lt;/label&gt;
&lt;input type="text" id="nom" name="nom" 
       aria-required="true" 
       aria-describedby="nom-aide"&gt;
&lt;p id="nom-aide"&gt;Entrez votre nom complet&lt;/p&gt;</code>
            </div>

            <h3>Tableaux accessibles</h3>
            <div class="code-block">
                <code>&lt;table&gt;
    &lt;caption&gt;Résultats 2024&lt;/caption&gt;
    &lt;thead&gt;
        &lt;tr&gt;
            &lt;th scope="col"&gt;Nom&lt;/th&gt;
            &lt;th scope="col"&gt;Score&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
        &lt;tr&gt;
            &lt;th scope="row"&gt;Jean&lt;/th&gt;
            &lt;td&gt;95&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;</code>
            </div>

            <h3>Contraste des couleurs</h3>
            <ul>
                <li><strong>Niveau AA</strong> : Ratio 4.5:1 minimum</li>
                <li><strong>Niveau AAA</strong> : Ratio 7:1 minimum</li>
            </ul>

            <h3>Checklist d'accessibilité</h3>
            <ul>
                <li> Toutes les images ont un alt approprié</li>
                <li> Tous les formulaires ont des labels</li>
                <li> Navigation au clavier fonctionnelle</li>
                <li> Contraste suffisant (4.5:1)</li>
                <li> Structure de titres logique</li>
                <li> Vidéos avec sous-titres</li>
                <li> Focus visible</li>
            </ul>

            <div class="tip">
                <strong> Outils de test :</strong> WAVE, axe DevTools, Lighthouse, NVDA/JAWS
            </div>
        `
    },
    
    // MODULE 14
    {
        id: 13,
        title: "Module 14 : HTML5 avancé",
        content: `
            <h2>Module 14 : HTML5 avancé</h2>
            
            <h3>Géolocalisation</h3>
            <div class="code-block">
                <code>&lt;button onclick="getLocation()"&gt;Ma position&lt;/button&gt;

&lt;script&gt;
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}

function showPosition(position) {
    console.log("Lat: " + position.coords.latitude);
    console.log("Long: " + position.coords.longitude);
}
&lt;/script&gt;</code>
            </div>

            <h3>Local Storage</h3>
            <div class="code-block">
                <code>&lt;script&gt;
// Sauvegarder
localStorage.setItem('nom', 'Jean');

// Récupérer
let nom = localStorage.getItem('nom');

// Supprimer
localStorage.removeItem('nom');

// Tout effacer
localStorage.clear();
&lt;/script&gt;</code>
            </div>

            <h3>Canvas</h3>
            <div class="code-block">
                <code>&lt;canvas id="canvas" width="400" height="200"&gt;&lt;/canvas&gt;

&lt;script&gt;
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// Rectangle
ctx.fillStyle = '#667eea';
ctx.fillRect(10, 10, 150, 100);

// Cercle
ctx.beginPath();
ctx.arc(250, 60, 50, 0, 2 * Math.PI);
ctx.fillStyle = '#f093fb';
ctx.fill();
&lt;/script&gt;</code>
            </div>

            <h3>Drag and Drop</h3>
            <div class="code-block">
                <code>&lt;div draggable="true" ondragstart="drag(event)"&gt;
    Glissez-moi
&lt;/div&gt;

&lt;div ondrop="drop(event)" ondragover="allowDrop(event)"&gt;
    Zone de dépôt
&lt;/div&gt;

&lt;script&gt;
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
&lt;/script&gt;</code>
            </div>

            <h3>Web Workers</h3>
            <div class="code-block">
                <code>&lt;script&gt;
let worker = new Worker("worker.js");

worker.onmessage = function(event) {
    console.log("Message: " + event.data);
};

worker.postMessage("Hello");
&lt;/script&gt;

// worker.js
self.onmessage = function(e) {
    self.postMessage("Reçu: " + e.data);
};</code>
            </div>

            <h3>API Fetch</h3>
            <div class="code-block">
                <code>&lt;script&gt;
// GET
fetch('https://api.example.com/data')
    .then(response =&gt; response.json())
    .then(data =&gt; console.log(data))
    .catch(error =&gt; console.error(error));

// POST
fetch('https://api.example.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        nom: 'Dupont',
        email: 'dupont@example.com'
    })
})
.then(response =&gt; response.json())
.then(data =&gt; console.log(data));
&lt;/script&gt;</code>
            </div>

            <div class="tip">
                <strong> HTML5 offre aussi :</strong> WebSockets, WebRTC, Battery API, Vibration API, Payment Request API
            </div>
        `
    },
    
    // MODULE 15
    {
        id: 14,
        title: "Module 15 : Bonnes pratiques et validation",
        content: `
            <h2>Module 15 : Bonnes pratiques et validation</h2>
            
            <h3>Standards et validation</h3>
            <p>Respecter les standards du W3C garantit la compatibilité avec tous les navigateurs.</p>

            <h4>Outils de validation</h4>
            <ul>
                <li><strong>W3C Validator</strong> : https://validator.w3.org/</li>
                <li><strong>Wave</strong> : Test d'accessibilité</li>
                <li><strong>Lighthouse</strong> : Audit complet</li>
            </ul>

            <h3>Organisation du code</h3>
            <div class="code-block">
                <code>mon-projet/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   └── logo.png
└── documents/</code>
            </div>

            <h3>Conventions de nommage</h3>
            <ul>
                <li><strong>Fichiers</strong> : minuscules, tirets (mon-fichier.html)</li>
                <li><strong>Classes CSS</strong> : kebab-case (nav-principale)</li>
                <li><strong>IDs</strong> : camelCase ou kebab-case</li>
                <li><strong>Images</strong> : descriptives (logo-entreprise.png)</li>
            </ul>

            <h3>Commentaires</h3>
            <div class="code-block">
                <code>&lt;!-- ===== EN-TÊTE ===== --&gt;
&lt;header&gt;
    &lt;!-- Logo et navigation --&gt;
&lt;/header&gt;

&lt;!-- ===== CONTENU PRINCIPAL ===== --&gt;
&lt;main&gt;
    &lt;!-- Articles --&gt;
&lt;/main&gt;</code>
            </div>

            <h3>Performance</h3>
            <ul>
                <li>Optimiser les images (compression, dimensions)</li>
                <li>Minifier CSS et JS en production</li>
                <li>Utiliser le lazy loading</li>
                <li>Charger les scripts avec defer/async</li>
                <li>Mettre en cache les ressources</li>
            </ul>

            <h4>Chargement des scripts</h4>
            <div class="code-block">
                <code>&lt;script src="script.js" defer&gt;&lt;/script&gt;
&lt;script src="analytics.js" async&gt;&lt;/script&gt;</code>
            </div>

            <h3>Sécurité</h3>
            <ul>
                <li>Utiliser HTTPS</li>
                <li>Ajouter rel="noopener noreferrer" aux liens externes</li>
                <li>Valider les entrées utilisateur</li>
                <li>Utiliser Content Security Policy</li>
            </ul>

            <div class="code-block">
                <code>&lt;a href="https://example.com" target="_blank" rel="noopener noreferrer"&gt;
    Lien sécurisé
&lt;/a&gt;</code>
            </div>

            <h3>Checklist finale</h3>

            <h4>HTML</h4>
            <ul>
                <li>DOCTYPE déclaré</li>
                <li>Langue déclarée (lang="fr")</li>
                <li>Encodage UTF-8</li>
                <li>Titre unique et descriptif</li>
                <li>Meta description</li>
                <li>Balises sémantiques</li>
                <li>Code validé W3C</li>
            </ul>

            <h4>Accessibilité</h4>
            <ul>
                <li>Attributs alt sur images</li>
                <li>Labels sur formulaires</li>
                <li>Navigation au clavier</li>
                <li>Contraste suffisant</li>
            </ul>

            <h4>Performance</h4>
            <ul>
                <li>Images optimisées</li>
                <li>Lazy loading</li>
                <li>CSS/JS minifiés</li>
                <li>Scripts defer/async</li>
            </ul>

            <h4>SEO</h4>
            <ul>
                <li>Balises meta complètes</li>
                <li>Open Graph configuré</li>
                <li>Sitemap.xml créé</li>
            </ul>

            <h3>Ressources</h3>
            <ul>
                <li><strong>MDN Web Docs</strong> : developer.mozilla.org</li>
                <li><strong>W3Schools</strong> : w3schools.com</li>
                <li><strong>Can I Use</strong> : caniuse.com</li>
                <li><strong>CSS-Tricks</strong> : css-tricks.com</li>
            </ul>

            <h3>Conclusion</h3>
            <p>Félicitations ! Vous avez terminé cette formation HTML complète. Vous maîtrisez maintenant :</p>
            <ul>
                <li>La structure et la syntaxe HTML5</li>
                <li>Les balises de texte, listes et tableaux</li>
                <li>Les liens, images et multimédia</li>
                <li>Les formulaires complets</li>
                <li>La structuration sémantique</li>
                <li>L'accessibilité web</li>
                <li>Le SEO et les balises meta</li>
                <li>Les APIs HTML5 avancées</li>
                <li>Les bonnes pratiques</li>
            </ul>

            <div class="tip">
                <strong>Prochaines étapes :</strong>
                <ul>
                    <li>Approfondir <strong>CSS</strong> pour la mise en forme</li>
                    <li>Apprendre <strong>JavaScript</strong> pour l'interactivité</li>
                    <li>Explorer les <strong>frameworks</strong> modernes</li>
                    <li>Pratiquer avec des <strong>projets réels</strong></li>
                </ul>
            </div>

            <div style="text-align: center; margin-top: 40px; padding: 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 10px;">
                <h3 style="color: white;">Merci d'avoir suivi cette formation !</h3>
                <p>N'hésitez pas à revoir les modules et à pratiquer régulièrement.</p>
                <p><strong>Real Conseil - Formation Développeur Web</strong></p>
            </div>
        `
    }
];
