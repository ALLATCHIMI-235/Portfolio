# Portfolio · Herendji Allatchimi Abderamane

Portfolio personnel professionnel — **bilingue FR/EN**, **dark/light mode**, animations soignées, formulaire de contact intégré et infographies projets en haute qualité.

> 🎯 **Objectif** : présenter mon parcours data scientist, mes projets phares (alternance Fro'Marsac SAVENCIA, AI4Industry Syensqo) et permettre une prise de contact directe pour recruteurs et clients.

---

## 📂 Structure du projet

```
portfolio-final/
├── index.html                    # Page principale
├── styles.css                    # Styles (light/dark, animations, responsive)
├── script.js                     # i18n, projets, modal, formulaire
├── README.md                     # Ce fichier
└── assets/
    ├── images/
    │   ├── profile.jpeg                    ← Photo de profil
    │   ├── logo-savencia.png               ← Logo Fro' / SAVENCIA
    │   ├── logo-uppa.png                   ← Logo UPPA
    │   ├── logo-ance.png                   ← Logo ANCE Coaching
    │   ├── logo-oi-analytics.png
    │   └── projects/                       ← Infographies des projets
    │       ├── syensqo.jpg                 → AI4Industry · pipeline RAG
    │       ├── msp.jpg                     → Cartes SPC (Shewhart, CUSUM, EWMA)
    │       ├── svd.jpg                     → Compression image SVD
    │       ├── dwh.jpg                     → Data Warehouse étoile + ETL
    │       ├── survey.jpg                  → Étude anxiété UPPA (1248 répondants)
    │       └── liuppa.jpg                  → Cycle de la recherche scientifique
    └── docs/
        ├── CV_Herendji_Abderamane.pdf
        ├── Rapport_alternance_Abderamane.pdf      ← 48 pages, alternance Fro'Marsac
        ├── Presentation_Syensqo.pdf               ← 5 pages, use-case AI4Industry
        └── Rapport_Syensqo.pdf
```

---

## 🚀 Tester localement

Pour que les iframes (PDF, RPubs, ANCE Coaching) fonctionnent, **utilisez un serveur HTTP** plutôt que d'ouvrir le fichier directement :

```bash
# Avec Python (préinstallé partout)
python3 -m http.server 8000

# Avec Node.js
npx serve

# Puis http://localhost:8000
```

---

## ✉️ Configuration du formulaire de contact

Le formulaire fonctionne **immédiatement** grâce à un fallback **FormSubmit** (gratuit, pas d'inscription). À la première soumission, vous recevrez un mail d'activation à valider une seule fois — ensuite tous les messages arrivent directement dans votre boîte.

### Option A — FormSubmit (zéro config, recommandé pour démarrer)

Aucune action requise. Pour changer le destinataire, modifiez `FORMSUBMIT_EMAIL` au début de `script.js`.

### Option B — EmailJS (200 mails/mois gratuits, plus pro)

1. Créez un compte sur [emailjs.com](https://www.emailjs.com/)
2. Connectez votre Gmail (Email Services → Add New → Gmail)
3. Créez un template avec ces variables : `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
4. Récupérez Public Key, Service ID, Template ID
5. Modifiez le début de `script.js` :

```js
const EMAILJS_CONFIG = {
  publicKey: 'votre_public_key',
  serviceId: 'votre_service_id',
  templateId: 'votre_template_id'
};
```

---

## ☁️ Déploiement gratuit (5 minutes)

### Netlify (le plus rapide)
Glissez-déposez ce dossier sur [app.netlify.com/drop](https://app.netlify.com/drop). En ligne immédiatement avec HTTPS.

### Vercel
```bash
npm i -g vercel
vercel
```

### GitHub Pages
```bash
git init && git add . && git commit -m "Initial portfolio"
git remote add origin https://github.com/ALLATCHIMI-235/portfolio.git
git push -u origin main
```
Puis dans GitHub : Settings → Pages → Source `main` → `/` (root).

---

## ✏️ Éditer le contenu

### Textes (FR / EN)
Tous dans `script.js`, objet `I18N` (sections `fr` et `en`).

### Projets
Dans `script.js`, tableau `PROJECTS`. Chaque projet a :
- `featured: true` → projet vedette pleine largeur (un seul, premier)
- `thumb` → vignette : `{type: 'image', src: '...'}` ou `{type: 'savencia'}` etc.
- `banner` → infographie en bannière dans la modale (chemin ou `null`)
- `tabs` → onglets de la modale (synthèse / PDF / iframe)

Pour ajouter un PDF dans la modale :
```js
tabs: [
  { type: 'summary' },
  { type: 'pdf', file: 'assets/docs/mon_rapport.pdf', labelKey: 'modal.tab.report' }
]
```

Pour ajouter une iframe (site live ou RPubs) :
```js
{ type: 'iframe', url: 'https://exemple.com', labelKey: 'modal.tab.live' }
```

### Photo de profil
Remplacez `assets/images/profile.jpeg` (format carré idéalement, 800×800 minimum).

### Couleurs / thème
Dans `styles.css`, sections `[data-theme="light"]` et `[data-theme="dark"]` :

```css
[data-theme="light"] {
  --bg: #F5EDDD;          /* Fond crème principal */
  --accent: #1E3A5F;      /* Bleu marine pour les accents */
  --text: #1a1a1a;
  ...
}
```

---

## 🆕 Nouveautés v6

- 🎬 **Vidéo YouTube de la visite TotalEnergies** intégrée en iframe (responsive 16:9) dans la modale du projet
- 📑 **Rapport LIUPPA** : emplacement préparé. **À faire** : remplacer `assets/docs/Rapport_LIUPPA_Abderamane.pdf` par votre vrai rapport (le placeholder actuel est minimal)
- 🎨 **Vraie capture du site ANCE Coaching** comme vignette projet (au lieu du mockup)
- 🏞️ **Featured SAVENCIA** : nouvelle vignette pleine largeur avec logo Fro'/SAVENCIA en grand sur fond brun gradient + "Excellence Industrielle"
- 🤍 **Logo TotalEnergies** en version fond blanc dans le marquee partenaires (au lieu de fond noir)
- 📐 **Cards partenaires agrandies** (360×130px) avec logos plus grands (88×84px) sur **fond contrasté blanc** (plus de confusion avec le fond beige de la section)
- 🎯 **Effet WOW** sur le marquee : ombres prononcées, hover qui décolle (-6px), bordures qui virent à l'accent

## 🆕 Nouveautés v4

- 🏆 **Bourse Académie des Talents E2S** ajoutée (5 000 €, M2) — projet dédié avec PDF officiel et lien annuaire
- ⚙️ **Formation GRIF & visite TotalEnergies** ajoutée — projet dédié avec rapport de visite
- 📊 **Projet SAS** (jeu de dés, analyse statistique) ajouté avec visualisation custom et PDF
- 🔬 **ML Houses** : intégration directe du **notebook Google Colab** dans la modale (lecture en live)
- 🏢 **Section "Institutions & partenaires"** en bas de page : 8 logos cliquables (UPPA, E2S, SAVENCIA, TotalEnergies, GRIF, Syensqo, OI Analytics, ANCE)
- 📐 **Timeline améliorée** : logos UPPA agrandis dans des cadres dédiés, ajout de chips highlights (bourse, GRIF…)
- 🖼️ **Vignette SAVENCIA** mise à jour avec votre image officielle
- 🔗 Tous les liens externes ouvrent dans un nouvel onglet avec `rel="noopener"`

## 🆕 Nouveautés v3

- 🖼️ **6 infographies professionnelles** intégrées en vignettes ET en bannières d'ouverture des modales
- 💼 **LinkedIn** intégré dans la nav, le contact et le footer
- ✨ **Hero impactant** : badge "Disponible" animé, 3 stats clés (9+ projets · 12k+ données · M1 MSID), CTAs hiérarchisés
- 🌟 **Projet vedette pleine largeur** (SAVENCIA) + grille 3 colonnes pour les autres
- 📊 **Bannière infographie** en haut de chaque modale projet (impact visuel immédiat)
- 🔢 **Compteur dynamique** "X projets affichés" lors du filtrage
- ⚡ **Carrousel infini** des technologies (pause au survol)
- 📈 **Barres de niveau animées** sur les cartes compétences
- 📑 **Lecture PDF en live** dans les modales (viewer natif du navigateur)
- 📧 **Formulaire de contact** intégré (sans pop-up email) avec FormSubmit + EmailJS

---

## 📧 Contact

- **Email** : abderamaneherendjimi@gmail.com
- **Téléphone** : +33 6 28 55 76 89
- **GitHub** : [github.com/ALLATCHIMI-235](https://github.com/ALLATCHIMI-235)
- **LinkedIn** : [linkedin.com/in/herendji-allatchimi-abderamane](https://www.linkedin.com/in/herendji-allatchimi-abderamane)
- **Localisation** : Pau, France
