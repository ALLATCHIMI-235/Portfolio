/* ============================================================
   PORTFOLIO HERENDJI ALLATCHIMI ABDERAMANE - v3
   ============================================================ */

const EMAILJS_CONFIG = {
  publicKey: 'YOUR_EMAILJS_PUBLIC_KEY',
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID'
};
const FORMSUBMIT_EMAIL = 'abderamaneherendjimi@gmail.com';

/* ====================== I18N ====================== */
const I18N = {
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.skills": "Compétences",
    "nav.projects": "Projets",
    "nav.contact": "Contact",
    "nav.cv": "Télécharger CV",
    "hero.available": "Ouvert aux opportunités · Alternance Fro'Marsac SAVENCIA",
    "hero.greeting": "Bonjour, je suis",
    "hero.title": "Data Scientist<br>Industriel<br><em>Junior</em>",
    "hero.desc": "J'aime transformer la donnée brute en décisions concrètes. Mon parcours mêle statistiques, machine learning et excellence industrielle, au service de problèmes réels — actuellement en alternance chez Fro'Marsac (groupe SAVENCIA).",
    "hero.cta1": "Voir mes projets",
    "hero.cta2": "Me contacter",
    "hero.stat1": "Projets data",
    "hero.stat2": "Données traitées",
    "hero.stat3": "MSID · 2024—2026",
    "about.eyebrow": "Qui je suis",
    "about.title": "À propos de moi",
    "about.cardTitle": "Formation académique",
    "about.cardSub": "Master MSID · UPPA",
    "about.p1": "<strong>Data Scientist Industriel Junior</strong> en formation Master MSID (Méthodes Stochastiques et Informatiques pour la Décision) à l'Université de Pau et des Pays de l'Adour, je me passionne pour la transformation des données complexes en informations exploitables. Mon parcours mêle <strong>statistiques avancées</strong>, <strong>machine learning</strong> et <strong>développement d'applications data</strong>.",
    "about.p2": "Aujourd'hui en <strong>alternance au sein du service Excellence Industrielle de Fro'Marsac</strong> (groupe SAVENCIA), mes missions couvrent la chaîne data complète :<br><br>• <strong>Structurer et organiser</strong> les données brutes issues des automates et systèmes industriels<br>• <strong>Analyser</strong> les données pour extraire des insights actionnables<br>• <strong>Créer des visualisations</strong> claires et impactantes pour les décideurs<br>• <strong>Programmer des scripts</strong> pour automatiser les processus métier<br>• <strong>Développer l'interopérabilité</strong> entre les différents systèmes (ERP, GMAO, automates)<br>• <strong>Utiliser l'IA</strong> pour améliorer l'analyse et la prédiction des dérives industrielles",
    "about.t1.title": "Master MSID — en cours",
    "about.t1.meta": "Méthodes Stochastiques et Informatiques pour la Décision · UPPA",
    "about.t1.h1": "Bourse Académie des Talents E2S — 5 000 €",
    "about.t1.h2": "Formation GRIF · TotalEnergies (sûreté de fonctionnement)",
    "about.t2.title": "Licence MIASHS",
    "about.t2.meta": "Mathématiques et Informatique Appliquées aux Sciences Humaines et Sociales · UPPA",
    "about.t3.title": "DUT STID",
    "about.t3.meta": "Statistiques et Informatique Décisionnelle · UPPA",
    "skills.eyebrow": "Ce que je fais",
    "skills.title": "Compétences",
    "skills.sub": "Une boîte à outils complète pour transformer la donnée en valeur, du pipeline ETL au modèle prédictif jusqu'au tableau de bord business.",
    "skills.level": "Maîtrise",
    "skills.adv": "Avancé",
    "skills.conf": "Confirmé",
    "skills.s1.title": "Data Science & ML",
    "skills.s1.desc": "Analyse multivariée, ACP, régression, SVD, KNN, deep learning, évaluation de modèles.",
    "skills.s2.title": "Data Engineering",
    "skills.s2.desc": "ETL, pipelines, bases relationnelles et NoSQL, architectures big data.",
    "skills.s3.title": "Data Visualisation",
    "skills.s3.desc": "Dashboards interactifs, reporting industriel, storytelling data orienté décision.",
    "skills.s4.title": "IA & LLM",
    "skills.s4.desc": "RAG, embeddings, chatbots, Text-to-SQL, applications IA conversationnelles.",
    "skills.s5.title": "Statistiques avancées",
    "skills.s5.desc": "SPC, sondages, modélisation stochastique, analyse de survie, séries temporelles.",
    "skills.s6.title": "Web & Soft skills",
    "skills.s6.desc": "Développement web, gestion de projet agile, communication client, anglais B2.",
    "projects.eyebrow": "Mes réalisations",
    "projects.title": "Projets sélectionnés",
    "projects.sub": "Une sélection de réalisations qui illustrent ma démarche : du cadrage au livrable, de la donnée brute à la décision.",
    "projects.filter.all": "Tous",
    "projects.filter.data": "Data Science",
    "projects.filter.ai": "IA & LLM",
    "projects.filter.dashboard": "Dashboard",
    "projects.filter.web": "Web",
    "projects.featuredBadge": "Projet phare",
    "projects.exploreLink": "Explorer le projet",
    "projects.count": "projets affichés",
    "contact.eyebrow": "Restons en contact",
    "contact.title": "Contactez-moi",
    "contact.sub": "Une question, un projet ? N'hésitez pas à me contacter — je réponds sous 24h.",
    "contact.infoTitle": "Informations de contact",
    "contact.location": "Localisation",
    "contact.locationValue": "Périgueux · Mobile partout en France",
    "contact.phone": "Téléphone",
    "contact.formTitle": "Envoyez-moi un message",
    "contact.formSub": "Décrivez votre projet ou votre demande, je vous répondrai rapidement.",
    "contact.fName": "Nom",
    "contact.fSubject": "Sujet",
    "contact.fMessage": "Message",
    "contact.fSend": "Envoyer le message",
    "contact.sending": "Envoi en cours…",
    "contact.success": "✓ Message envoyé ! Je vous répondrai très bientôt.",
    "contact.error": "Une erreur est survenue. Réessayez ou écrivez-moi directement à abderamaneherendjimi@gmail.com",
    "contact.required": "Merci de remplir tous les champs.",
    "contact.invalidEmail": "Adresse email invalide.",
    "footer.text": "© 2026 Herendji Allatchimi Abderamane · Périgueux, France · Data Scientist Industriel Junior",
    "partners.eyebrow": "Mes affiliations",
    "partners.title": "Institutions & partenaires",
    "partners.sub": "Les organisations qui ont rythmé mon parcours académique et professionnel.",
    "partners.uppa": "Université de formation",
    "partners.liuppa": "Stage de recherche · TELESCOL",
    "partners.e2s": "Bourse Académie des Talents",
    "partners.savencia": "Alternance · Excellence Industrielle",
    "partners.total": "Formation GRIF · Visite RAM",
    "partners.grif": "Sûreté de fonctionnement",
    "partners.syensqo": "AI4Industry · use-case HSE",
    "partners.oi": "Plateforme dashboards alternance",
    "partners.ance": "Client · Site vitrine",
    "modal.back": "Retour aux projets",
    "modal.documents": "Documents & ressources",
    "modal.stack": "Stack technique",
    "modal.role": "Mon rôle",
    "modal.supervision": "Encadrement",
    "modal.tab.summary": "Synthèse",
    "modal.tab.live": "Site live",
    "modal.tab.report": "Rapport",
    "modal.tab.presentation": "Présentation",
    "modal.tab.publication": "Publication",
    "modal.tab.notebook": "Notebook",
    "modal.tab.notification": "Notification officielle",
    "modal.tab.video": "Vidéo",
    "modal.openLive": "Ouvrir le site",
    "modal.openReport": "Ouvrir le PDF",
    "modal.openRPubs": "Ouvrir RPubs",
    "modal.openColab": "Ouvrir dans Colab",
    "modal.download": "Télécharger"
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.cv": "Download CV",
    "hero.available": "Open to opportunities · Apprentice at Fro'Marsac SAVENCIA",
    "hero.greeting": "Hello, I'm",
    "hero.title": "Junior<br>Industrial<br><em>Data Scientist</em>",
    "hero.desc": "I love turning raw data into concrete decisions. My background combines statistics, machine learning and industrial excellence, applied to real-world problems — currently apprentice at Fro'Marsac (SAVENCIA group).",
    "hero.cta1": "See my projects",
    "hero.cta2": "Get in touch",
    "hero.stat1": "Data projects",
    "hero.stat2": "Records processed",
    "hero.stat3": "MSID · 2024—2026",
    "about.eyebrow": "Who I am",
    "about.title": "About me",
    "about.cardTitle": "Academic background",
    "about.cardSub": "Master MSID · UPPA",
    "about.p1": "<strong>Junior Industrial Data Scientist</strong> currently studying for a Master MSID (Stochastic Methods and Computer Science for Decision-Making) at the University of Pau, with a strong passion for transforming complex data into actionable insights. My background combines <strong>advanced statistics</strong>, <strong>machine learning</strong> and <strong>data application development</strong>.",
    "about.p2": "Currently doing my <strong>apprenticeship within the Industrial Excellence team at Fro'Marsac</strong> (SAVENCIA group), my missions cover the full data chain:<br><br>• <strong>Structure and organize</strong> raw data from PLCs and industrial systems<br>• <strong>Analyze</strong> data to extract actionable insights<br>• <strong>Create clear and impactful visualizations</strong> for decision-makers<br>• <strong>Program scripts</strong> to automate business processes<br>• <strong>Develop interoperability</strong> between different systems (ERP, CMMS, PLCs)<br>• <strong>Use AI</strong> to improve analysis and prediction of industrial drifts",
    "about.t1.title": "Master MSID — ongoing",
    "about.t1.meta": "Stochastic Methods and Computer Science for Decision-Making · UPPA",
    "about.t1.h1": "E2S Talents' Academy Scholarship — €5,000",
    "about.t1.h2": "GRIF training · TotalEnergies (reliability engineering)",
    "about.t2.title": "Bachelor MIASHS",
    "about.t2.meta": "Applied Mathematics & Computer Science for Social Sciences · UPPA",
    "about.t3.title": "DUT STID",
    "about.t3.meta": "Statistics & Decision-making Computing · UPPA",
    "skills.eyebrow": "What I do",
    "skills.title": "Skills",
    "skills.sub": "A complete toolbox to turn data into value, from ETL pipelines to predictive models to business dashboards.",
    "skills.level": "Mastery",
    "skills.adv": "Advanced",
    "skills.conf": "Proficient",
    "skills.s1.title": "Data Science & ML",
    "skills.s1.desc": "Multivariate analysis, PCA, regression, SVD, KNN, deep learning, model evaluation.",
    "skills.s2.title": "Data Engineering",
    "skills.s2.desc": "ETL, pipelines, relational and NoSQL databases, big data architectures.",
    "skills.s3.title": "Data Visualization",
    "skills.s3.desc": "Interactive dashboards, industrial reporting, decision-oriented data storytelling.",
    "skills.s4.title": "AI & LLMs",
    "skills.s4.desc": "RAG, embeddings, chatbots, Text-to-SQL, conversational AI applications.",
    "skills.s5.title": "Advanced statistics",
    "skills.s5.desc": "SPC, surveys, stochastic modeling, survival analysis, time series.",
    "skills.s6.title": "Web & Soft skills",
    "skills.s6.desc": "Web development, agile project management, client communication, English B2.",
    "projects.eyebrow": "My work",
    "projects.title": "Selected projects",
    "projects.sub": "A curated selection that illustrates my approach: from framing to delivery, from raw data to decision.",
    "projects.filter.all": "All",
    "projects.filter.data": "Data Science",
    "projects.filter.ai": "AI & LLM",
    "projects.filter.dashboard": "Dashboard",
    "projects.filter.web": "Web",
    "projects.featuredBadge": "Featured project",
    "projects.exploreLink": "Explore project",
    "projects.count": "projects displayed",
    "contact.eyebrow": "Let's connect",
    "contact.title": "Contact me",
    "contact.sub": "A question, a project? Feel free to reach out — I reply within 24h.",
    "contact.infoTitle": "Contact information",
    "contact.location": "Location",
    "contact.locationValue": "Périgueux · Available across France",
    "contact.phone": "Phone",
    "contact.formTitle": "Send me a message",
    "contact.formSub": "Describe your project or request, I'll get back to you quickly.",
    "contact.fName": "Name",
    "contact.fSubject": "Subject",
    "contact.fMessage": "Message",
    "contact.fSend": "Send message",
    "contact.sending": "Sending…",
    "contact.success": "✓ Message sent! I'll reply very soon.",
    "contact.error": "An error occurred. Please retry or email me directly at abderamaneherendjimi@gmail.com",
    "contact.required": "Please fill all fields.",
    "contact.invalidEmail": "Invalid email address.",
    "footer.text": "© 2026 Herendji Allatchimi Abderamane · Périgueux, France · Junior Industrial Data Scientist",
    "partners.eyebrow": "My affiliations",
    "partners.title": "Institutions & partners",
    "partners.sub": "The organizations that shaped my academic and professional journey.",
    "partners.uppa": "Home university",
    "partners.liuppa": "Research internship · TELESCOL",
    "partners.e2s": "Talents' Academy scholarship",
    "partners.savencia": "Apprenticeship · Industrial Excellence",
    "partners.total": "GRIF training · RAM visit",
    "partners.grif": "Reliability engineering",
    "partners.syensqo": "AI4Industry · HSE use-case",
    "partners.oi": "Dashboards platform · apprenticeship",
    "partners.ance": "Client · Showcase website",
    "modal.back": "Back to projects",
    "modal.documents": "Documents & resources",
    "modal.stack": "Tech stack",
    "modal.role": "My role",
    "modal.supervision": "Supervision",
    "modal.tab.summary": "Summary",
    "modal.tab.live": "Live site",
    "modal.tab.report": "Report",
    "modal.tab.presentation": "Slides",
    "modal.tab.publication": "Publication",
    "modal.tab.notebook": "Notebook",
    "modal.tab.notification": "Official notification",
    "modal.tab.video": "Video",
    "modal.openLive": "Open site",
    "modal.openReport": "Open PDF",
    "modal.openRPubs": "Open RPubs",
    "modal.openColab": "Open in Colab",
    "modal.download": "Download"
  }
};

let currentLang = 'fr';
let currentFilter = 'all';

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (I18N[currentLang][k] !== undefined) el.innerHTML = I18N[currentLang][k];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const k = el.getAttribute('data-i18n-html');
    if (I18N[currentLang][k] !== undefined) el.innerHTML = I18N[currentLang][k];
  });
  document.documentElement.lang = currentLang;
  renderProjects(currentFilter);
  renderPartners();
}

/* ====================== TECH MARQUEE ====================== */
const TECH_LIST = [
  { name: 'Python', icon: 'code' }, { name: 'R', icon: 'code' }, { name: 'SQL', icon: 'database' },
  { name: 'scikit-learn', icon: 'brain' }, { name: 'XGBoost', icon: 'brain' }, { name: 'PyTorch', icon: 'brain' },
  { name: 'Ollama', icon: 'chip' }, { name: 'LangChain', icon: 'chip' }, { name: 'Streamlit', icon: 'app' },
  { name: 'Power BI', icon: 'chart' }, { name: 'Looker Studio', icon: 'chart' }, { name: 'OI Analytics', icon: 'chart' },
  { name: 'Talend', icon: 'pipe' }, { name: 'BigQuery', icon: 'database' }, { name: 'MongoDB', icon: 'database' },
  { name: 'Pandas', icon: 'panda' }, { name: 'Git', icon: 'git' }, { name: 'LaTeX', icon: 'doc' }
];
const TECH_ICONS = {
  code: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  database: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>',
  brain: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04Z"/></svg>',
  chip: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/></svg>',
  app: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>',
  chart: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M7 12l4-4 4 4 5-5"/></svg>',
  pipe: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="6" y1="9" x2="6" y2="15"/><line x1="9" y1="6" x2="15" y2="6"/></svg>',
  panda: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>',
  git: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><path d="M6 9v6a3 3 0 0 0 3 3h6"/></svg>',
  doc: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>'
};

function renderTechMarquee() {
  const track = document.getElementById('techTrack');
  if (!track) return;
  const items = [...TECH_LIST, ...TECH_LIST].map(t =>
    `<div class="tech-pill">${TECH_ICONS[t.icon] || TECH_ICONS.code}<span>${t.name}</span></div>`
  ).join('');
  track.innerHTML = items;
}

/* ====================== PARTNERS MARQUEE ====================== */
const PARTNERS_LIST = [
  { url: 'https://www.univ-pau.fr/', logo: 'assets/images/logo-uppa.png', name: 'UPPA', roleKey: 'partners.uppa', logoClass: '' },
  { url: 'https://organisation.univ-pau.fr/fr/grands-projets/l-i-site-e2s-solutions-pour-l-energie-et-l-environnement.html', logo: 'assets/images/logo-e2s.png', name: 'E2S UPPA', roleKey: 'partners.e2s', logoClass: 'partner-logo-dark', highlight: true },
  { url: 'https://liuppa.univ-pau.fr/', logo: 'assets/images/logo-liuppa.png', name: 'LIUPPA', roleKey: 'partners.liuppa', logoClass: '' },
  { url: 'https://www.savencia.com/', logo: 'assets/images/logo-savencia.png', name: 'SAVENCIA', roleKey: 'partners.savencia', logoClass: '' },
  { url: 'https://totalenergies.com/', logo: 'assets/images/logo-totalenergies.png', name: 'TotalEnergies', roleKey: 'partners.total', logoClass: '' },
  { url: 'https://grif.totalenergies.com/', logo: 'assets/images/logo-grif.png', name: 'GRIF', roleKey: 'partners.grif', logoClass: '' },
  { url: 'https://www.syensqo.com/', text: 'SYENSQO', textColor: '#1E3A5F', name: 'Syensqo', roleKey: 'partners.syensqo', logoClass: 'partner-logo-text' },
  { url: 'https://www.optimistik.com/oianalytics/', logo: 'assets/images/logo-oi-analytics.png', name: 'OI Analytics', roleKey: 'partners.oi', logoClass: '' },
  { url: 'https://ancecoaching.fr', logo: 'assets/images/logo-ance.png', name: 'ANCE Coaching', roleKey: 'partners.ance', logoClass: 'partner-logo-dark' }
];

function renderPartners() {
  const track = document.getElementById('partnersTrack');
  if (!track) return;
  const items = [...PARTNERS_LIST, ...PARTNERS_LIST].map(p => {
    const logoContent = p.text
      ? `<span class="serif partner-text-logo" style="color:${p.textColor};">${p.text}</span>`
      : `<img src="${p.logo}" alt="${p.name}" loading="lazy">`;
    const role = I18N[currentLang][p.roleKey] || '';
    return `<a href="${p.url}" target="_blank" rel="noopener" class="partner-card${p.highlight ? ' partner-card-highlight' : ''}" title="${p.name} — ${role}" aria-label="${p.name} : ${role}">
      <div class="partner-logo ${p.logoClass}">${logoContent}</div>
    </a>`;
  }).join('');
  track.innerHTML = items;
}

/* ====================== PROJECTS DATA ====================== */
const PROJECTS = [
  {
    id: 'savencia',
    category: ['dashboard', 'data'],
    featured: true,
    thumb: { type: 'image', src: 'assets/images/projects/savencia.jpg' },
    banner: 'assets/images/projects/savencia.jpg',
    fr: {
      tags: ['Alternance · 2025—2026', 'Excellence industrielle'],
      title: "Dashboards d'aide à la décision pour l'excellence industrielle",
      shortDesc: "Conception de tableaux de bord OI Analytics pour piloter les Nettoyages en Place (NEP) sur 6 lignes de production. Chiffrage des surconsommations en soude, acide et eau neuve, avec une synthèse en k€ pour le Directeur Industriel.",
      stack: ['OI Analytics', 'SQL', 'Power BI', 'OIBus', 'Python', 'Excel'],
      stats: [{num:'6',label:'Lignes NEP suivies'},{num:'3',label:'Recettes étudiées'},{num:'k€',label:'Synthèse direction'},{num:'24m',label:'Durée alternance'}],
      sections: [
        {h:"Contexte", p:"<p>Fro'Marsac, site du groupe <strong>SAVENCIA Fromage &amp; Dairy</strong> spécialisé dans les fromages frais et fondus, cherchait à mieux maîtriser ses consommations en utilités industrielles, en particulier sur les <strong>Nettoyages en Place (NEP)</strong> qui consomment de grandes quantités de soude, d'acide et d'eau.</p><p>Mon rôle au sein du <strong>service Excellence Industrielle</strong> est d'apporter une vue chiffrée et actionnable pour piloter ces consommations, identifier les surconsommations et alimenter les réflexions d'optimisation.</p>"},
        {h:"Approche", p:"<p>Mise en place d'un <strong>pipeline de données complet</strong> :</p><ul><li>Extraction depuis les automates via <strong>OIBus</strong></li><li>Stockage et structuration dans <strong>OI Analytics</strong></li><li>Construction de <strong>tableaux de bord interactifs</strong> avec drill-down par ligne, recette et période</li><li>Calculs de <strong>surconsommations</strong> par rapport à des cibles théoriques</li><li>Conversion automatique en <strong>équivalent k€</strong> pour la synthèse direction</li></ul>"},
        {h:"Résultats clés", p:"<p>Production de dashboards consultés en quotidien par le service Excellence Industrielle, avec une synthèse hebdomadaire au Directeur Industriel. Les outils permettent d'identifier rapidement les <strong>dérives en consommation</strong> et de prioriser les chantiers d'optimisation.</p>"}
      ],
      role: "Concepteur des dashboards et pipeline data, en lien direct avec les opérationnels et la direction.",
      supervision: "Sébastien Rosier · Tuteur Fro'Marsac<br>Christian Paroissin · UPPA"
    },
    en: {
      tags: ['Apprenticeship · 2025—2026', 'Industrial Excellence'],
      title: "Decision-support dashboards for Industrial Excellence",
      shortDesc: "Design of OI Analytics dashboards to monitor Cleaning-in-Place (CIP) cycles on 6 production lines. Quantification of soda, acid and water overconsumption, with a financial summary in k€ for the Industrial Director.",
      stack: ['OI Analytics', 'SQL', 'Power BI', 'OIBus', 'Python', 'Excel'],
      stats: [{num:'6',label:'CIP lines tracked'},{num:'3',label:'Recipes studied'},{num:'k€',label:'Director summary'},{num:'24m',label:'Apprenticeship'}],
      sections: [
        {h:"Context", p:"<p>Fro'Marsac, a <strong>SAVENCIA Fromage &amp; Dairy</strong> site specializing in fresh and processed cheeses, wanted to better control its industrial utility consumption, particularly on <strong>Cleaning-in-Place (CIP) cycles</strong>.</p>"},
        {h:"Approach", p:"<p>Setup of a <strong>full data pipeline</strong>:</p><ul><li>Extraction from PLCs via <strong>OIBus</strong></li><li>Storage in <strong>OI Analytics</strong></li><li>Building <strong>interactive dashboards</strong></li><li><strong>Overconsumption</strong> calculations</li><li>Automatic conversion to <strong>k€ equivalent</strong></li></ul>"},
        {h:"Key results", p:"<p>Daily-used dashboards by the Industrial Excellence team. The tools enable quick identification of <strong>consumption drifts</strong> and prioritization of optimization projects.</p>"}
      ],
      role: "Designed dashboards and data pipeline, working directly with operators and management.",
      supervision: "Sébastien Rosier · Fro'Marsac mentor<br>Christian Paroissin · UPPA"
    },
    tabs: [
      { type: 'summary' },
      { type: 'pdf', file: 'assets/docs/Rapport_alternance_Abderamane.pdf', labelKey: 'modal.tab.report' }
    ]
  },
  {
    id: 'syensqo',
    category: ['ai', 'data'],
    thumb: { type: 'image', src: 'assets/images/projects/syensqo.jpg' },
    banner: 'assets/images/projects/syensqo.jpg',
    fr: {
      tags: ['AI4Industry 2026', 'IA · LLM'],
      title: "Outil IA prescriptif HSE pour Syensqo",
      shortDesc: "Pipeline RAG + Text-to-SQL sur 12 000 rapports d'incidents pour anticiper les risques HSE en laboratoire chimique.",
      stack: ['Python', 'Ollama', 'LangChain', 'Streamlit', 'Pandas', 'SQL', 'Embeddings'],
      stats: [{num:'12k+',label:'Incidents traités'},{num:'13',label:'Étudiants'},{num:'5j',label:'Workshop'},{num:'MVP',label:'Livré'}],
      sections: [
        {h:"Contexte", p:"<p><strong>Syensqo</strong> — issu de la scission de Solvay en 2023 — accumule depuis 2019 plus de <strong>12 000 rapports d'incidents</strong> en texte libre dans ses laboratoires. Le volume rend impossible toute lecture manuelle. La direction nous a demandé un outil d'aide à la décision pour les managers HSE.</p>"},
        {h:"Approche", p:"<p>Pipeline IA hybride : un <strong>LLM routeur</strong> analyse la requête utilisateur et la dirige vers :</p><ul><li><strong>Text-to-SQL</strong> pour les questions quantitatives (« combien d'incidents en 2024 ? »)</li><li><strong>RAG sémantique</strong> pour les recherches contextuelles (« quels sont les risques récurrents en laboratoire électronique ? »)</li></ul><p>Les résultats sont fusionnés avant la génération de la réponse finale via <strong>Ollama</strong>, en local pour garantir la confidentialité.</p>"},
        {h:"Livrable", p:"<p>Le MVP combine un <strong>dashboard interactif Streamlit</strong> et un <strong>chatbot conversationnel</strong>. Le pipeline RAG s'appuie sur des embeddings vectorisés stockés localement.</p>"}
      ],
      role: "Cellule AI &amp; RAG (5 personnes) : implémentation du pipeline RAG, génération SQL et orchestration LLM.",
      supervision: "Jordy Bonnet · R&amp;I Syensqo<br>Benoit Liquet · UPPA"
    },
    en: {
      tags: ['AI4Industry 2026', 'AI · LLM'],
      title: "Prescriptive HSE AI tool for Syensqo",
      shortDesc: "RAG + Text-to-SQL pipeline over 12,000 incident reports to anticipate HSE risks in chemistry labs.",
      stack: ['Python', 'Ollama', 'LangChain', 'Streamlit', 'Pandas', 'SQL', 'Embeddings'],
      stats: [{num:'12k+',label:'Incidents'},{num:'13',label:'Students'},{num:'5d',label:'Workshop'},{num:'MVP',label:'Delivered'}],
      sections: [
        {h:"Context", p:"<p><strong>Syensqo</strong> has accumulated since 2019 over <strong>12,000 free-text incident reports</strong>. We were asked to design a decision-support tool for HSE managers.</p>"},
        {h:"Approach", p:"<p>Hybrid AI pipeline: an <strong>LLM router</strong> directs queries to <strong>Text-to-SQL</strong> or <strong>semantic RAG</strong>. Results are merged via <strong>Ollama</strong>, running locally.</p>"},
        {h:"Deliverable", p:"<p>Interactive <strong>Streamlit dashboard</strong> + <strong>conversational chatbot</strong> with locally-stored embeddings.</p>"}
      ],
      role: "AI & RAG cell (5 people): RAG implementation, SQL generation, LLM orchestration.",
      supervision: "Jordy Bonnet · R&I Syensqo<br>Benoit Liquet · UPPA"
    },
    tabs: [
      { type: 'summary' },
      { type: 'pdf', file: 'assets/docs/Presentation_Syensqo.pdf', labelKey: 'modal.tab.presentation' },
      { type: 'pdf', file: 'assets/docs/Rapport_Syensqo.pdf', labelKey: 'modal.tab.report' }
    ]
  },
  {
    id: 'ance',
    category: ['web'],
    thumb: { type: 'image', src: 'assets/images/projects/ance.jpg' },
    banner: 'assets/images/projects/ance.jpg',
    fr: {
      tags: ['Site web · Production', 'Client'],
      title: "ANCE Coaching — site vitrine professionnel",
      shortDesc: "Conception et développement d'un site vitrine pour ANCE Coaching, cabinet de coaching professionnel certifié.",
      stack: ['HTML5', 'CSS3', 'JavaScript', 'SEO', 'Hosting'],
      stats: [{num:'Live',label:'En production'},{num:'100%',label:'Responsive'},{num:'SEO',label:'Optimisé'},{num:'2025',label:'Lancement'}],
      sections: [
        {h:"Contexte", p:"<p>ANCE Coaching est un cabinet de coaching professionnel certifié. Le client souhaitait une <strong>vitrine en ligne moderne et sobre</strong> pour présenter ses services, sa démarche et permettre une prise de contact directe.</p>"},
        {h:"Approche", p:"<p>De la <strong>conception graphique</strong> au <strong>déploiement</strong> :</p><ul><li>Cadrage des besoins avec le client</li><li>Maquettes et choix d'identité visuelle (palette sobre or/noir)</li><li>Développement front-end responsive</li><li>Optimisation SEO (Schema.org, Open Graph)</li><li>Configuration du nom de domaine et hosting</li></ul>"}
      ],
      role: "Chef de projet et développeur unique : conception, développement, déploiement, formation client.",
      supervision: "Projet personnel"
    },
    en: {
      tags: ['Website · Live', 'Client work'],
      title: "ANCE Coaching — professional showcase website",
      shortDesc: "Design and development of a showcase website for ANCE Coaching.",
      stack: ['HTML5', 'CSS3', 'JavaScript', 'SEO', 'Hosting'],
      stats: [{num:'Live',label:'In production'},{num:'100%',label:'Responsive'},{num:'SEO',label:'Optimized'},{num:'2025',label:'Launch'}],
      sections: [
        {h:"Context", p:"<p>ANCE Coaching is a certified professional coaching practice wanting a <strong>modern, refined online showcase</strong>.</p>"},
        {h:"Approach", p:"<p>From <strong>design</strong> to <strong>deployment</strong>: needs scoping, mockups, responsive front-end, SEO optimization, hosting configuration.</p>"}
      ],
      role: "Sole project lead and developer: design, development, deployment, client training.",
      supervision: "Personal project"
    },
    tabs: [
      { type: 'summary' },
      { type: 'iframe', url: 'https://ancecoaching.fr', labelKey: 'modal.tab.live' }
    ]
  },
  {
    id: 'ml-houses',
    category: ['data'],
    thumb: { type: 'image', src: 'assets/images/projects/ml-houses.jpg' },
    banner: 'assets/images/projects/ml-houses.jpg',
    fr: {
      tags: ['Machine Learning', 'Python'],
      title: "Prédiction du prix immobilier — pipeline ML",
      shortDesc: "Pipeline ML complet : EDA, feature engineering, comparaison Random Forest / XGBoost / régression linéaire avec SHAP.",
      stack: ['Python', 'scikit-learn', 'XGBoost', 'SHAP', 'Pandas', 'Matplotlib'],
      stats: [{num:'0.91',label:'R² XGBoost'},{num:'5',label:'Modèles testés'},{num:'CV',label:'Validation 5-fold'},{num:'SHAP',label:'Interprétabilité'}],
      sections: [
        {h:"Contexte", p:"<p>Projet de modélisation prédictive sur un dataset de transactions immobilières. Objectif : prédire le prix de vente et fournir une analyse interprétable des facteurs clés.</p>"},
        {h:"Approche", p:"<p>Pipeline complet :</p><ul><li><strong>Analyse exploratoire</strong> : distribution des variables, corrélations, valeurs manquantes</li><li><strong>Feature engineering</strong> : encodage, transformations log, features composites</li><li><strong>Modélisation</strong> : régression linéaire, Random Forest, XGBoost, validation croisée 5-fold</li><li><strong>Interprétabilité</strong> : analyse SHAP des variables impactantes</li></ul>"},
        {h:"Résultats", p:"<p><strong>XGBoost</strong> obtient les meilleures performances (R² &asymp; 0.91 sur jeu de test). L'analyse SHAP révèle que la <strong>surface habitable</strong>, la <strong>localisation</strong> et la <strong>qualité des équipements</strong> sont les trois facteurs dominants.</p>"}
      ],
      role: "Projet académique individuel : conception, modélisation, rédaction du rapport.",
      supervision: "Master MSID · UPPA"
    },
    en: {
      tags: ['Machine Learning', 'Python'],
      title: "Real estate price prediction — ML pipeline",
      shortDesc: "Complete ML pipeline: EDA, feature engineering, Random Forest / XGBoost comparison with SHAP.",
      stack: ['Python', 'scikit-learn', 'XGBoost', 'SHAP', 'Pandas', 'Matplotlib'],
      stats: [{num:'0.91',label:'XGBoost R²'},{num:'5',label:'Models tested'},{num:'CV',label:'5-fold'},{num:'SHAP',label:'Interpretability'}],
      sections: [
        {h:"Context", p:"<p>Predictive modeling project on real estate transactions. Goal: predict sale price and provide interpretable analysis.</p>"},
        {h:"Approach", p:"<p>Full pipeline: exploratory analysis, feature engineering, modeling (Linear, Random Forest, XGBoost), 5-fold CV, SHAP interpretability.</p>"},
        {h:"Results", p:"<p><strong>XGBoost</strong> achieves R² &asymp; 0.91. SHAP reveals that <strong>living surface</strong>, <strong>location</strong> and <strong>amenities</strong> dominate.</p>"}
      ],
      role: "Individual academic project.",
      supervision: "Master MSID · UPPA"
    },
    tabs: [
      { type: 'summary' },
      {
        type: 'colab',
        url: 'https://colab.research.google.com/drive/1AoTqlnYw2v75xNTiPeZfcIg8bLOsTiEP?usp=sharing',
        labelKey: 'modal.tab.notebook',
        code: `# Pipeline ML — Prédiction prix immobilier
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from xgboost import XGBRegressor
from sklearn.model_selection import cross_val_score
import shap

# Exploration et feature engineering
df = pd.read_csv('houses.csv')
df = pd.get_dummies(df, drop_first=True)

# Comparaison de modèles via CV 5-fold
for name, model in [('Linear', LinearRegression()),
                    ('Random Forest', RandomForestRegressor(n_estimators=300)),
                    ('XGBoost', XGBRegressor(n_estimators=500, max_depth=6))]:
    scores = cross_val_score(model, X, y, cv=5, scoring='r2')
    print(name, "R² CV:", round(scores.mean(), 3))

# Interprétabilité SHAP du meilleur modèle
explainer = shap.TreeExplainer(best_model)
shap_values = explainer.shap_values(X_test)
shap.summary_plot(shap_values, X_test)`
      }
    ]
  },
  {
    id: 'bourse-talents',
    category: ['data'],
    thumb: { type: 'bourse' },
    banner: null,
    fr: {
      tags: ['Distinction · 2025—2026', 'Mérite académique'],
      title: "Bourse Académie des Talents E2S — UPPA",
      shortDesc: "Allocation de 5 000 € attribuée pour l'excellence académique en Master 2 MSID, dans le cadre du programme E2S UPPA (Énergie & Environnement).",
      stack: ['E2S UPPA', 'I-SITE', 'Master MSID', 'Excellence académique'],
      stats: [{num:'5 000 €',label:'Allocation'},{num:'M2',label:'MSID'},{num:'2025',label:'Promotion'},{num:'E2S',label:'Programme I-SITE'}],
      sections: [
        {h:"Contexte", p:"<p>L'<strong>Académie des Talents</strong> est un programme de bourses de mérite porté par <strong>E2S UPPA</strong> (Energy & Environment Solutions), l'I-SITE de l'Université de Pau et des Pays de l'Adour. Elle distingue les étudiants au parcours académique remarquable inscrits dans des Masters thématiquement liés à l'énergie et l'environnement.</p>"},
        {h:"Reconnaissance", p:"<p>J'ai été sélectionné comme <strong>lauréat 2025-2026</strong> par la commission d'attribution réunie le 3 juillet 2025, après approbation du consortium le 9 juillet 2025. Cette distinction valide la qualité de mon parcours en Master 1 MSID et m'accompagne pour la 2<sup>e</sup> année du Master.</p>"},
        {h:"Modalités", p:"<ul><li><strong>5 000 €</strong> versés en trois échéances liées aux résultats académiques</li><li>Engagement de présence à l'UPPA et de réussite aux examens</li><li>Participation aux activités de l'Académie des Talents</li><li>Annuaire officiel des lauréats publié sur le site E2S UPPA</li></ul>"}
      ],
      role: "Lauréat — sélection sur dossier académique et parcours.",
      supervision: "E2S UPPA · Direction des Grands Projets"
    },
    en: {
      tags: ['Distinction · 2025—2026', 'Academic merit'],
      title: "Talents' Academy Scholarship — E2S UPPA",
      shortDesc: "€5,000 scholarship awarded for academic excellence in the second year of the MSID Master, as part of the E2S UPPA program (Energy & Environment).",
      stack: ['E2S UPPA', 'I-SITE', 'MSID Master', 'Academic excellence'],
      stats: [{num:'€5,000',label:'Allowance'},{num:'M2',label:'MSID'},{num:'2025',label:'Cohort'},{num:'E2S',label:'I-SITE program'}],
      sections: [
        {h:"Context", p:"<p>The <strong>Talents' Academy</strong> is a merit scholarship program by <strong>E2S UPPA</strong> (Energy & Environment Solutions), the I-SITE of the University of Pau. It rewards students with outstanding academic backgrounds enrolled in Masters thematically linked to energy and environment.</p>"},
        {h:"Recognition", p:"<p>I was selected as a <strong>2025-2026 laureate</strong> by the awarding committee on July 3rd, 2025, after consortium approval on July 9th, 2025. This distinction validates my work during the first year of the MSID Master and supports me through the second year.</p>"},
        {h:"Terms", p:"<ul><li><strong>€5,000</strong> distributed in three installments tied to academic results</li><li>Commitment to attendance at UPPA and exam success</li><li>Participation in Talents' Academy events</li><li>Official laureate directory published on E2S UPPA website</li></ul>"}
      ],
      role: "Laureate — selection based on academic record.",
      supervision: "E2S UPPA · Major Projects Direction"
    },
    tabs: [
      { type: 'summary' },
      { type: 'pdf', file: 'assets/docs/Notification_Bourse_Talents_Academy.pdf', labelKey: 'modal.tab.notification' },
      { type: 'iframe', url: 'https://organisation.univ-pau.fr/fr/grands-projets/l-i-site-e2s-solutions-pour-l-energie-et-l-environnement.html', labelKey: 'modal.tab.live' }
    ]
  },
  {
    id: 'totalenergies',
    category: ['data'],
    thumb: { type: 'totalenergies' },
    banner: null,
    fr: {
      tags: ['Formation · M2 2024—2025', 'Sûreté de fonctionnement'],
      title: "Formation GRIF & visite TotalEnergies",
      shortDesc: "Formation au logiciel GRIF (Graphical Interface for Reliability Framework) par TotalEnergies, et visite du Centre Scientifique et Technique de Pau (CSTDF).",
      stack: ['GRIF', 'GRIFWIND', 'Monte Carlo', 'Réseaux de Petri', 'Loi de Weibull', 'Power BI', 'Python', 'SQL'],
      stats: [{num:'40+',label:'Années R&D GRIF'},{num:'GRIFWIND',label:'Éoliennes offshore'},{num:'CSTDF',label:'37 hectares'},{num:'M2',label:'MSID'}],
      sections: [
        {h:"Contexte", p:"<p>Dans le cadre du Master 2 MSID, nous avons reçu une <strong>formation complète sur GRIF</strong> dispensée par une intervenante de TotalEnergies — elle-même <strong>ancienne étudiante du Master MSID</strong>. Le programme couvrait la sûreté de fonctionnement des systèmes industriels complexes, et s'est conclu par une visite du <strong>Centre Scientifique et Technique de Pau (CSTDF)</strong>.</p>"},
        {h:"GRIF en pratique", p:"<p>GRIF (<em>Graphical Interface for Reliability Framework</em>) est un logiciel de référence développé par TotalEnergies depuis plus de 40 ans. Il permet :</p><ul><li>Le calcul d'<strong>indicateurs de fiabilité</strong> (disponibilité, maintenabilité, MTBF/MTTR)</li><li>La modélisation par <strong>simulation de Monte Carlo</strong></li><li>L'usage de <strong>réseaux de Petri</strong> pour les transitions d'états</li><li>Le paramétrage par <strong>lois probabilistes</strong> (notamment Weibull pour les défaillances)</li></ul>"},
        {h:"GRIFWIND — éoliennes offshore", p:"<p>Cas d'application avancé sur les <strong>fermes éoliennes offshore</strong> : optimisation des coûts logistiques (bateaux + techniciens) face aux contraintes météo, identification des points critiques, analyse de rentabilité d'investissement.</p>"},
        {h:"Visite du CSTDF — bâtiment Pangéa", p:"<p>Découverte du bâtiment <strong>Pangéa</strong>, dédié au calcul haute performance (HPC), à la modélisation 3D et à l'analyse Big Data / IA des installations industrielles. Ateliers menés par les équipes <strong>RAM (Reliability, Availability, Maintainability)</strong> et data.</p>"}
      ],
      role: "Étudiant — rédaction d'un rapport de visite détaillé.",
      supervision: "TotalEnergies · Service RAM (Pau)"
    },
    en: {
      tags: ['Training · M2 2024—2025', 'Reliability engineering'],
      title: "GRIF training & TotalEnergies visit",
      shortDesc: "Training on GRIF software (Graphical Interface for Reliability Framework) by TotalEnergies, and visit of the Pau Scientific & Technical Center (CSTDF).",
      stack: ['GRIF', 'GRIFWIND', 'Monte Carlo', 'Petri nets', 'Weibull distribution', 'Power BI', 'Python', 'SQL'],
      stats: [{num:'40+',label:'GRIF R&D years'},{num:'GRIFWIND',label:'Offshore wind'},{num:'CSTDF',label:'37 hectares'},{num:'M2',label:'MSID'}],
      sections: [
        {h:"Context", p:"<p>As part of the Master 2 MSID, we received a <strong>full training on GRIF</strong> delivered by a TotalEnergies engineer — herself a <strong>former MSID Master student</strong>. The program covered industrial systems reliability engineering and concluded with a visit of the <strong>Pau Scientific & Technical Center (CSTDF)</strong>.</p>"},
        {h:"GRIF in practice", p:"<p>GRIF (<em>Graphical Interface for Reliability Framework</em>) is a reference software developed by TotalEnergies over 40+ years. It enables:</p><ul><li>Computation of <strong>reliability indicators</strong> (availability, maintainability, MTBF/MTTR)</li><li>Modeling via <strong>Monte Carlo simulation</strong></li><li>Use of <strong>Petri nets</strong> for state transitions</li><li>Parametrization with <strong>probabilistic laws</strong> (notably Weibull for failures)</li></ul>"},
        {h:"GRIFWIND — offshore wind", p:"<p>Advanced application on <strong>offshore wind farms</strong>: optimization of logistics costs (vessels + technicians) under weather constraints, critical components identification, investment profitability analysis.</p>"},
        {h:"CSTDF visit — Pangea building", p:"<p>Discovery of the <strong>Pangea</strong> building, dedicated to high-performance computing (HPC), 3D modeling and Big Data / AI analysis of industrial assets. Workshops led by <strong>RAM (Reliability, Availability, Maintainability)</strong> and data teams.</p>"}
      ],
      role: "Student — wrote a detailed visit report.",
      supervision: "TotalEnergies · RAM service (Pau)"
    },
    tabs: [
      { type: 'summary' },
      { type: 'youtube', videoId: 'jONR_6LDSio', labelKey: 'modal.tab.video' },
      { type: 'pdf', file: 'assets/docs/Rapport_TotalEnergies.pdf', labelKey: 'modal.tab.report' }
    ]
  },
  {
    id: 'sas-dice',
    category: ['data'],
    thumb: { type: 'image', src: 'assets/images/projects/sas-dice.jpg' },
    banner: null,
    fr: {
      tags: ['Statistiques', 'SAS'],
      title: "Analyse statistique d'un jeu de dés en SAS",
      shortDesc: "Étude probabiliste d'un jeu de hasard : simulation Monte Carlo, calcul d'espérance/variance, intervalles de confiance et détermination de la mise équitable.",
      stack: ['SAS', 'Macro SAS', 'PROC UNIVARIATE', 'PROC GCHART', 'PROC SGPLOT', 'Probabilités'],
      stats: [{num:'10k',label:'Simulations'},{num:'TCL',label:'Théorème Central Limite'},{num:'IC',label:'Intervalle confiance'},{num:'M1',label:'MSID'}],
      sections: [
        {h:"Contexte", p:"<p>Projet de Master 1 MSID encadré par <strong>M. Walter Tinsson</strong>. Étude statistique et probabiliste complète d'un jeu basé sur le lancer de deux dés équilibrés, où la variable aléatoire X correspond au minimum des deux valeurs obtenues.</p>"},
        {h:"Approche statistique", p:"<ul><li>Simulation de la loi de X par <strong>Monte Carlo</strong> (10, 100, 1 000 et 10 000 itérations)</li><li>Vérification empirique de la <strong>loi des grands nombres</strong></li><li>Convergence : moyenne 2,56 et écart-type 1,42 pour 10 000 simulations</li><li>Visualisations : histogrammes horizontaux via <strong>PROC GCHART</strong></li></ul>"},
        {h:"Approche probabiliste", p:"<p>Modélisation théorique de la loi de X et calcul exact :</p><ul><li>P(X = x) = (2(6-x) + 1) / 36</li><li><strong>Espérance théorique</strong> : E(X) = 2,53 (≈ moyenne empirique)</li><li><strong>Variance théorique</strong> : V(X) = 1,97</li></ul>"},
        {h:"Détermination de la mise équitable", p:"<p>Étude du gain Y de l'organisateur en fonction du gros lot d. Résolution analytique de l'équation E(Y) = 0, donnant <strong>d = 100 €</strong> pour un jeu équitable. Application du <strong>Théorème Central Limite</strong> et calcul de la taille minimale d'échantillon n = 14 453 pour une marge d'erreur r = 0,25 € au niveau de confiance 95 %.</p>"},
        {h:"Programme SAS", p:"<p>Macro SAS paramétrable (α, r, d) générant la valeur de n, 100 simulations, un graphique de dispersion avec lignes de référence et un camembert de pourcentage de valeurs dans l'intervalle.</p>"}
      ],
      role: "Projet académique individuel.",
      supervision: "M. Walter Tinsson · UPPA"
    },
    en: {
      tags: ['Statistics', 'SAS'],
      title: "Statistical analysis of a dice game in SAS",
      shortDesc: "Probabilistic study of a chance-based game: Monte Carlo simulation, expectation/variance computation, confidence intervals and fair-bet determination.",
      stack: ['SAS', 'SAS Macro', 'PROC UNIVARIATE', 'PROC GCHART', 'PROC SGPLOT', 'Probability'],
      stats: [{num:'10k',label:'Simulations'},{num:'CLT',label:'Central Limit Theorem'},{num:'CI',label:'Confidence interval'},{num:'M1',label:'MSID'}],
      sections: [
        {h:"Context", p:"<p>Master 1 MSID project supervised by <strong>Mr. Walter Tinsson</strong>. Full statistical and probabilistic study of a game based on rolling two fair dice, where random variable X is the minimum of the two values.</p>"},
        {h:"Statistical approach", p:"<ul><li>Monte Carlo simulation of X distribution (10, 100, 1,000, 10,000 iterations)</li><li>Empirical verification of the <strong>law of large numbers</strong></li><li>Convergence: mean 2.56 and SD 1.42 at 10,000 simulations</li><li>Horizontal histograms via <strong>PROC GCHART</strong></li></ul>"},
        {h:"Probabilistic approach", p:"<p>Theoretical modeling and exact computation:</p><ul><li>P(X = x) = (2(6-x) + 1) / 36</li><li><strong>Theoretical expectation</strong>: E(X) = 2.53 (≈ empirical mean)</li><li><strong>Theoretical variance</strong>: V(X) = 1.97</li></ul>"},
        {h:"Fair-bet determination", p:"<p>Study of organizer's gain Y as a function of jackpot d. Analytical resolution of E(Y) = 0, giving <strong>d = €100</strong> for a fair game. Application of the <strong>Central Limit Theorem</strong> and computation of minimum sample size n = 14,453 for an error margin r = €0.25 at 95% confidence.</p>"},
        {h:"SAS program", p:"<p>Parametrizable SAS macro (α, r, d) generating n, 100 simulations, a scatter plot with reference lines and a pie chart of values within the interval.</p>"}
      ],
      role: "Individual academic project.",
      supervision: "Mr. Walter Tinsson · UPPA"
    },
    tabs: [
      { type: 'summary' },
      { type: 'pdf', file: 'assets/docs/Projet_SAS_Abderamane.pdf', labelKey: 'modal.tab.report' }
    ]
  },
  {
    id: 'msp',
    category: ['data'],
    thumb: { type: 'image', src: 'assets/images/projects/msp.jpg' },
    banner: 'assets/images/projects/msp.jpg',
    fr: {
      tags: ['Statistiques', 'R'],
      title: "Maîtrise statistique des procédés (SPC)",
      shortDesc: "Rapport publié sur RPubs : cartes de contrôle (Shewhart, CUSUM, EWMA), capabilité processus (Cp, Cpk), détection de dérives.",
      stack: ['R', 'RMarkdown', 'qcc', 'ggplot2', 'RPubs'],
      stats: [{num:'SPC',label:'Cartes contrôle'},{num:'Cpk',label:'Capabilité'},{num:'R',label:'RMarkdown'},{num:'RPubs',label:'Publication'}],
      sections: [
        {h:"Contexte", p:"<p>Rapport académique de Master 1 sur la <strong>Maîtrise Statistique des Procédés</strong>, méthode incontournable du contrôle qualité industriel pour détecter les dérives d'un processus avant qu'elles ne génèrent des défauts.</p>"},
        {h:"Contenu du rapport", p:"<ul><li><strong>Cartes de contrôle</strong> : Shewhart, CUSUM, EWMA</li><li><strong>Indicateurs de capabilité</strong> : Cp, Cpk, Pp, Ppk</li><li><strong>Détection de dérives</strong> : règles WECO, Western Electric</li><li><strong>Cas pratique</strong> appliqué à des données industrielles réelles</li></ul>"},
        {h:"Publication", p:"<p>Le rapport est <strong>publié sur RPubs</strong> et accessible publiquement.</p>"}
      ],
      role: "Rédaction et analyse complète, en autonomie.",
      supervision: "Master MSID · UPPA"
    },
    en: {
      tags: ['Statistics', 'R'],
      title: "Statistical Process Control (SPC)",
      shortDesc: "RPubs report: control charts (Shewhart, CUSUM, EWMA), capability (Cp, Cpk), drift detection.",
      stack: ['R', 'RMarkdown', 'qcc', 'ggplot2', 'RPubs'],
      stats: [{num:'SPC',label:'Charts'},{num:'Cpk',label:'Capability'},{num:'R',label:'RMarkdown'},{num:'RPubs',label:'Pub.'}],
      sections: [
        {h:"Context", p:"<p>Master 1 report on <strong>Statistical Process Control</strong>, an essential method in industrial quality control.</p>"},
        {h:"Contents", p:"<ul><li>Shewhart, CUSUM, EWMA charts</li><li>Cp, Cpk, Pp, Ppk indicators</li><li>WECO drift detection rules</li><li>Industrial case study</li></ul>"},
        {h:"Publication", p:"<p>Published on <strong>RPubs</strong>, publicly accessible.</p>"}
      ],
      role: "Sole author: writing, analysis and publication.",
      supervision: "Master MSID · UPPA"
    },
    tabs: [
      { type: 'summary' },
      { type: 'iframe', url: 'https://rpubs.com/Allatchimi/Rapport_MSP_ABDERAMANE', labelKey: 'modal.tab.publication' }
    ]
  },
  {
    id: 'svd',
    category: ['data'],
    thumb: { type: 'image', src: 'assets/images/projects/svd.jpg' },
    banner: 'assets/images/projects/svd.jpg',
    fr: {
      tags: ['Algèbre linéaire', 'Python'],
      title: "Décomposition SVD & compression d'images",
      shortDesc: "Implémentation et visualisation de la décomposition en valeurs singulières (SVD) pour la compression d'images en niveaux de gris.",
      stack: ['Python', 'NumPy', 'Matplotlib', 'PIL'],
      stats: [{num:'SVD',label:'Décomposition'},{num:'90%',label:'Compression max'},{num:'Math',label:'Académique'},{num:'M1',label:'MSID'}],
      sections: [
        {h:"Contexte", p:"<p>Projet de mathématiques appliquées explorant la <strong>décomposition en valeurs singulières (SVD)</strong>, l'un des outils les plus puissants de l'algèbre linéaire numérique, avec une application concrète : la compression d'images.</p>"},
        {h:"Travaux réalisés", p:"<ul><li>Implémentation manuelle de la SVD à partir de NumPy</li><li>Application sur des images en niveaux de gris</li><li>Étude de la <strong>perte d'information</strong> en fonction du nombre de valeurs singulières conservées (k=5, 20, 50, 100)</li><li>Analyse du compromis qualité / taille</li></ul>"}
      ],
      role: "Projet individuel.",
      supervision: "Master MSID · UPPA"
    },
    en: {
      tags: ['Linear algebra', 'Python'],
      title: "SVD decomposition & image compression",
      shortDesc: "SVD implementation for grayscale image compression with comparative visualization.",
      stack: ['Python', 'NumPy', 'Matplotlib', 'PIL'],
      stats: [{num:'SVD',label:'Decomposition'},{num:'90%',label:'Max compression'},{num:'Math',label:'Academic'},{num:'M1',label:'MSID'}],
      sections: [
        {h:"Context", p:"<p>Applied math project on <strong>SVD</strong>, with image compression as application.</p>"},
        {h:"Work", p:"<ul><li>Manual SVD from NumPy</li><li>Application on grayscale images</li><li>Study of information loss vs k (5, 20, 50, 100)</li><li>Quality/size tradeoff analysis</li></ul>"}
      ],
      role: "Individual project.",
      supervision: "Master MSID · UPPA"
    },
    tabs: [
      { type: 'summary' },
      { type: 'colab', url: 'https://colab.research.google.com/drive/14vuqmb3MeujUxzSpAhc585iS4YubpyVw?usp=sharing', labelKey: 'modal.tab.notebook', code: `# Compression d'image par SVD
import numpy as np
import matplotlib.pyplot as plt
from PIL import Image

# Chargement de l'image en niveaux de gris
img = np.array(Image.open('phare.jpg').convert('L'))
print("Dimensions:", img.shape)

# Décomposition en valeurs singulières : A = U Σ Vᵀ
U, S, VT = np.linalg.svd(img, full_matrices=False)

# Reconstruction avec différents rangs k
fig, axes = plt.subplots(1, 5, figsize=(15, 4))
for ax, k in zip(axes, [5, 20, 50, 100, len(S)]):
    A_k = U[:, :k] @ np.diag(S[:k]) @ VT[:k, :]
    ax.imshow(A_k, cmap='gray')
    compression = 100 * (1 - k * (img.shape[0] + img.shape[1] + 1) / img.size)
    ax.set_title("k = " + str(k))
    ax.axis('off')
plt.tight_layout()
plt.show()` }
    ]
  },
  {
    id: 'dwh',
    category: ['data', 'dashboard'],
    thumb: { type: 'image', src: 'assets/images/projects/dwh.jpg' },
    banner: 'assets/images/projects/dwh.jpg',
    fr: {
      tags: ['Data Warehouse', 'BI'],
      title: "Data Warehouse & ETL — projet académique",
      shortDesc: "Conception d'un entrepôt de données complet : modélisation en étoile, ETL Talend, dashboards Power BI.",
      stack: ['Talend', 'SQL Server', 'Power BI', 'Modélisation dimensionnelle'],
      stats: [{num:'ETL',label:'Talend'},{num:'⭐',label:'Schéma étoile'},{num:'BI',label:'Power BI'},{num:'M1',label:'MSID'}],
      sections: [
        {h:"Contexte", p:"<p>Projet de groupe d'une chaîne décisionnelle complète, du fichier source à la restitution business. L'objectif : maîtriser de bout en bout le cycle de vie d'un Data Warehouse.</p>"},
        {h:"Travaux", p:"<ul><li><strong>Modélisation dimensionnelle</strong> en schéma étoile (faits + dimensions)</li><li>Construction des <strong>flux ETL</strong> sous Talend Open Studio (Extract / Transform / Load)</li><li>Alimentation d'une base SQL Server</li><li>Restitution via <strong>tableaux de bord Power BI</strong> avec mesures DAX</li></ul>"}
      ],
      role: "Modélisation et développement ETL au sein d'un binôme.",
      supervision: "Master MSID · UPPA"
    },
    en: {
      tags: ['Data Warehouse', 'BI'],
      title: "Data Warehouse & ETL — academic project",
      shortDesc: "Complete data warehouse: star schema, Talend ETL, Power BI dashboards.",
      stack: ['Talend', 'SQL Server', 'Power BI', 'Dimensional modeling'],
      stats: [{num:'ETL',label:'Talend'},{num:'⭐',label:'Star schema'},{num:'BI',label:'Power BI'},{num:'M1',label:'MSID'}],
      sections: [
        {h:"Context", p:"<p>Group project on a complete decision chain, from source file to business reporting.</p>"},
        {h:"Work", p:"<ul><li>Dimensional modeling (star schema)</li><li>Talend ETL flows</li><li>SQL Server loading</li><li>Power BI dashboards with DAX</li></ul>"}
      ],
      role: "Data modeling and ETL development.",
      supervision: "Master MSID · UPPA"
    },
    tabs: [{ type: 'summary' }]
  },
  {
    id: 'survey',
    category: ['data'],
    thumb: { type: 'image', src: 'assets/images/projects/survey.jpg' },
    banner: 'assets/images/projects/survey.jpg',
    fr: {
      tags: ['Sondages', 'R'],
      title: "Étude sur l'anxiété étudiante à l'UPPA",
      shortDesc: "Conception d'un questionnaire, échantillonnage stratifié, analyse statistique et restitution des résultats.",
      stack: ['R', 'sondage', 'survey', 'ggplot2', 'questionr'],
      stats: [{num:'1248',label:'Répondants'},{num:'Strat',label:'Échantillonnage'},{num:'χ²',label:'Tests'},{num:'M1',label:'MSID'}],
      sections: [
        {h:"Contexte", p:"<p>Projet d'enquête statistique sur le <strong>niveau d'anxiété ressenti par les étudiants</strong> à l'Université de Pau et des Pays de l'Adour, particulièrement dans le contexte post-Covid.</p>"},
        {h:"Méthodologie", p:"<ul><li>Conception du questionnaire (questions fermées et échelles de Likert)</li><li><strong>Échantillonnage stratifié</strong> par filière (Licence 30%, Master 40%, Doctorat 30%)</li><li>Diffusion via plateformes étudiantes (n = 1 248)</li><li>Analyse via R : statistiques descriptives, tests d'indépendance χ², régression logistique</li><li>Production d'un rapport et d'une restitution visuelle</li></ul>"},
        {h:"Résultats clés", p:"<p>Les principaux facteurs identifiés : <strong>charge de travail (68%)</strong>, examens (61%), avenir professionnel (54%), santé (46%) et finances (32%).</p>"}
      ],
      role: "Co-conception, traitement statistique et rédaction.",
      supervision: "Master MSID · UPPA"
    },
    en: {
      tags: ['Surveys', 'R'],
      title: "Student anxiety survey at UPPA",
      shortDesc: "Questionnaire design, stratified sampling, statistical analysis.",
      stack: ['R', 'sondage', 'survey', 'ggplot2', 'questionr'],
      stats: [{num:'1248',label:'Respondents'},{num:'Strat',label:'Sampling'},{num:'χ²',label:'Tests'},{num:'M1',label:'MSID'}],
      sections: [
        {h:"Context", p:"<p>Statistical survey on <strong>student anxiety levels</strong> at UPPA in the post-Covid context.</p>"},
        {h:"Methodology", p:"<ul><li>Questionnaire with Likert scales</li><li><strong>Stratified sampling</strong> by program (n = 1,248)</li><li>R analysis: descriptive stats, χ² tests, logistic regression</li></ul>"},
        {h:"Key results", p:"<p>Main factors: <strong>workload (68%)</strong>, exams (61%), career future (54%), health (46%), finances (32%).</p>"}
      ],
      role: "Co-design, statistical processing and writing.",
      supervision: "Master MSID · UPPA"
    },
    tabs: [{ type: 'summary' }]
  },
  {
    id: 'liuppa',
    category: ['data'],
    thumb: { type: 'image', src: 'assets/images/projects/liuppa.jpg' },
    banner: 'assets/images/projects/liuppa.jpg',
    fr: {
      tags: ['Stage recherche · 2022', 'Projet TELESCOL'],
      title: "TELESCOL — robots de télé-présence (LIUPPA)",
      shortDesc: "Stage de fin de DUT au LIUPPA : suivi et évaluation du déploiement des robots de télé-présence pour les enfants malades, via des enquêtes et des dashboards dynamiques.",
      stack: ['SQL', 'Power BI', 'Enquêtes', 'Dashboard dynamique', 'Méthodologie de recherche'],
      stats: [{num:'2022',label:'Année'},{num:'TELESCOL',label:'Projet'},{num:'50p',label:'Rapport'},{num:'Robots',label:'Télé-présence'}],
      sections: [
        {h:"Contexte", p:"<p>Stage de fin de DUT STID au sein du <strong>Laboratoire Informatique de l'Université de Pau et des Pays de l'Adour (LIUPPA)</strong>, dans le cadre du projet <strong>TELESCOL</strong> (déclinaison du plan national <strong>TED-i</strong>). Mission : permettre aux enfants empêchés de venir à l'école pour raisons de santé de continuer leur scolarité grâce à des <strong>robots de télé-présence</strong>.</p><p>Encadré par <strong>M. Laurent Gallon</strong>, ce stage m'a immergé dans un projet à fort impact sociétal mêlant recherche universitaire, dispositif éducatif et collecte de données terrain.</p>"},
        {h:"Mission technique", p:"<ul><li>Conception et déploiement de <strong>protocoles d'enquête</strong> auprès des élèves, familles et enseignants</li><li>Définition des <strong>indicateurs clés</strong> de suivi du déploiement</li><li>Création de <strong>tableaux de bord dynamiques</strong> pour visualiser l'usage des robots et l'efficacité du dispositif</li><li>Analyse statistique des retours et propositions d'amélioration</li></ul>"},
        {h:"Apports", p:"<p>Première immersion dans la <strong>recherche académique appliquée</strong>. Découverte du cycle complet : revue de littérature, formalisation, expérimentation, analyse, rédaction. Ce stage m'a confirmé mon intérêt pour les outils statistiques et la data visualisation au service de problématiques humaines, et m'a orienté naturellement vers le Master MSID.</p>"}
      ],
      role: "Stagiaire DUT STID — conception du protocole de suivi, dashboards, analyse.",
      supervision: "M. Laurent Gallon · Tuteur LIUPPA<br>M. Ghislain Verdier · UPPA"
    },
    en: {
      tags: ['Research internship · 2022', 'TELESCOL project'],
      title: "TELESCOL — telepresence robots (LIUPPA)",
      shortDesc: "DUT-end internship at LIUPPA: monitoring and evaluation of telepresence robots deployment for sick children, via surveys and dynamic dashboards.",
      stack: ['SQL', 'Power BI', 'Surveys', 'Dynamic dashboards', 'Research methodology'],
      stats: [{num:'2022',label:'Year'},{num:'TELESCOL',label:'Project'},{num:'50p',label:'Report'},{num:'Robots',label:'Telepresence'}],
      sections: [
        {h:"Context", p:"<p>End-of-DUT STID internship at the <strong>UPPA Computer Science Lab (LIUPPA)</strong>, as part of the <strong>TELESCOL</strong> project (a local implementation of the national <strong>TED-i</strong> plan). Mission: enable children prevented from attending school for health reasons to continue their education through <strong>telepresence robots</strong>.</p><p>Supervised by <strong>Mr. Laurent Gallon</strong>, this internship immersed me in a high-impact project combining academic research, educational devices and field data collection.</p>"},
        {h:"Technical mission", p:"<ul><li>Design and deployment of <strong>survey protocols</strong> for students, families and teachers</li><li>Definition of <strong>key indicators</strong> for deployment monitoring</li><li>Creation of <strong>dynamic dashboards</strong> to visualize robot usage and program effectiveness</li><li>Statistical analysis of feedback and improvement proposals</li></ul>"},
        {h:"Outcomes", p:"<p>First immersion in <strong>applied academic research</strong>. Discovery of the full cycle: literature review, formalization, experimentation, analysis, writing. This internship confirmed my interest in statistical tools and data visualization for human-centered problems, and naturally led me to the MSID Master.</p>"}
      ],
      role: "DUT STID intern — survey protocol design, dashboards, analysis.",
      supervision: "Mr. Laurent Gallon · LIUPPA mentor<br>Mr. Ghislain Verdier · UPPA"
    },
    tabs: [
      { type: 'summary' },
      { type: 'pdf', file: 'assets/docs/Rapport_LIUPPA_Abderamane.pdf', labelKey: 'modal.tab.report' }
    ]
  }
];

/* ====================== RENDER PROJECT THUMBNAILS ====================== */
function renderThumb(p) {
  const thumb = p.thumb;
  switch (thumb.type) {
    case 'image':
      return `<img src="${thumb.src}" alt="${p[currentLang].title}" class="thumb-image" loading="lazy">`;
    case 'savencia':
      return `<div class="thumb-savencia"><div class="thumb-savencia-content"><div class="thumb-savencia-logo"><img src="assets/images/logo-savencia.png" alt="Fro' SAVENCIA"></div><h4>Excellence Industrielle</h4></div></div>`;
    case 'ance':
      return `<div class="thumb-ance"><img src="assets/images/logo-ance.png" alt="ANCE Coaching"></div>`;
    case 'ml':
      return `<div class="thumb-ml"><div class="thumb-ml-label">PRÉDICTION DE PRIX · XGBOOST · R²=0.91</div><div class="thumb-ml-chart">
        <div class="bar" style="height:25%;background:var(--accent-soft);"></div>
        <div class="bar" style="height:50%;background:var(--accent-soft);"></div>
        <div class="bar" style="height:38%;background:var(--accent-soft);"></div>
        <div class="bar" style="height:78%;background:var(--accent);"></div>
        <div class="bar" style="height:92%;background:var(--accent);"></div>
        <div class="bar" style="height:65%;background:var(--accent-soft);"></div>
        <div class="bar" style="height:45%;background:var(--accent-soft);"></div>
        <div class="bar" style="height:30%;background:var(--accent-soft);"></div>
      </div></div>`;
    case 'bourse':
      return `<div class="thumb-bourse">
        <div class="thumb-bourse-medal">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="8" r="6"/>
            <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
          </svg>
        </div>
        <div class="thumb-bourse-amount">5 000 €</div>
        <div class="thumb-bourse-label">Académie des Talents</div>
        <div class="thumb-bourse-sub">E2S UPPA · 2025—2026</div>
      </div>`;
    case 'totalenergies':
      return `<div class="thumb-total">
        <div class="thumb-total-logo">
          <img src="assets/images/logo-totalenergies.png" alt="TotalEnergies">
        </div>
        <div class="thumb-total-grif">
          <span class="thumb-total-tag">GRIF</span>
          <span class="thumb-total-divider">·</span>
          <span class="thumb-total-tag-light">Sûreté de fonctionnement</span>
        </div>
      </div>`;
    default:
      return `<div style="background:var(--bg-card);width:100%;height:100%;"></div>`;
  }
}

/* ====================== RENDER PROJECTS ====================== */
function renderProjects(filter = 'all') {
  const featuredEl = document.getElementById('featuredProject');
  const grid = document.getElementById('projectsGrid');
  const countEl = document.getElementById('projectsCount');
  if (!grid || !featuredEl) return;

  featuredEl.innerHTML = '';
  grid.innerHTML = '';

  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.category.includes(filter));
  const featured = filtered.find(p => p.featured);
  const others = filtered.filter(p => !p.featured);

  // Featured
  if (featured) {
    const data = featured[currentLang];
    const tagsHTML = data.tags.map((t, i) => `<span class="${i === 0 ? 'tag' : 'tag-outline'}">${t}</span>`).join('');
    const stackHTML = data.stack.slice(0, 5).map(s => `<span class="tag-outline">${s}</span>`).join('');
    featuredEl.innerHTML = `
      <div class="featured-project" data-project-id="${featured.id}">
        <div class="featured-project-thumb">${renderThumb(featured)}</div>
        <div class="featured-project-info">
          <span class="featured-project-tag"><svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><span>${I18N[currentLang]['projects.featuredBadge']}</span></span>
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:14px;">${tagsHTML}</div>
          <h3 class="featured-project-title">${data.title}</h3>
          <p class="featured-project-desc">${data.shortDesc}</p>
          <div class="featured-project-stack">${stackHTML}</div>
          <span class="featured-project-link">${I18N[currentLang]['projects.exploreLink']}<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
        </div>
      </div>
    `;
    featuredEl.querySelector('.featured-project').onclick = () => openModal(featured.id);
  }

  // Grille des autres
  others.forEach(p => {
    const data = p[currentLang];
    const card = document.createElement('div');
    card.className = 'project-card';
    card.dataset.projectId = p.id;
    card.onclick = () => openModal(p.id);
    const tagsHTML = data.tags.map((t, i) => `<span class="${i === 0 ? 'tag' : 'tag-outline'}">${t}</span>`).join('');
    const stackHTML = data.stack.slice(0, 3).map(s => `<span class="tag-outline">${s}</span>`).join('');
    card.innerHTML = `
      <div class="project-thumb">${renderThumb(p)}</div>
      <div class="project-info">
        <div class="project-tags">${tagsHTML}</div>
        <h3 class="project-title">${data.title}</h3>
        <p class="project-desc">${data.shortDesc}</p>
        <div class="project-tags">${stackHTML}</div>
      </div>
    `;
    grid.appendChild(card);
  });

  // Count
  if (countEl) countEl.textContent = `${filtered.length} ${I18N[currentLang]['projects.count']}`;
}

/* ====================== MODAL ====================== */
function openModal(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;
  const d = p[currentLang];
  const t = I18N[currentLang];

  const tagsHTML = d.tags.map((tag, i) => `<span class="${i === 0 ? 'tag' : 'tag-outline'}">${tag}</span>`).join('');
  const statsHTML = d.stats.map(s => `<div class="modal-stat-card"><div class="modal-stat-num">${s.num}</div><div class="modal-stat-label">${s.label}</div></div>`).join('');
  const sectionsHTML = d.sections.map(s => `<h2>${s.h}</h2>${s.p}`).join('');
  const stackHTML = d.stack.map(s => `<span class="tag-outline">${s}</span>`).join('');

  // Banner (si infographie disponible)
  const bannerHTML = p.banner ? `<div class="modal-banner"><div class="modal-banner-img"><img src="${p.banner}" alt="${d.title}"></div></div>` : '';

  const tabsBtnHTML = p.tabs.map((tab, i) => {
    const label = tab.type === 'summary' ? t['modal.tab.summary'] : t[tab.labelKey];
    return `<button class="vtab ${i === 0 ? 'active' : ''}" data-tab="tab-${i}">${label}</button>`;
  }).join('');

  const tabsContentHTML = p.tabs.map((tab, i) => {
    let content = '';
    if (tab.type === 'summary') {
      content = `<p style="font-size:14px;color:var(--text-muted);line-height:1.75;margin-bottom:14px;">${d.shortDesc}</p><div class="tags">${stackHTML}</div>`;
    } else if (tab.type === 'iframe') {
      let openLabel;
      if (tab.url.includes('rpubs')) openLabel = t['modal.openRPubs'];
      else if (tab.url.includes('colab')) openLabel = t['modal.openColab'];
      else openLabel = t['modal.openLive'];
      content = `<div class="viewer-actions"><a href="${tab.url}" target="_blank" rel="noopener" class="viewer-action-btn"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>${openLabel}</a></div><iframe src="${tab.url}" class="viewer-iframe" loading="lazy" title="${d.title}"></iframe>`;
    } else if (tab.type === 'youtube') {
      // Certaines vidéos YouTube refusent l'embed (Erreur 153 = lecteur restreint).
      // Solution pro : preview avec thumbnail + bouton play -> ouvre sur YouTube
      const watchUrl = `https://www.youtube.com/watch?v=${tab.videoId}`;
      const thumbUrl = `https://img.youtube.com/vi/${tab.videoId}/maxresdefault.jpg`;
      const thumbFallback = `https://img.youtube.com/vi/${tab.videoId}/hqdefault.jpg`;
      const openLabel = currentLang === 'fr' ? 'Regarder sur YouTube' : 'Watch on YouTube';
      const captionText = currentLang === 'fr'
        ? 'Vidéo de la visite TotalEnergies à Pau · Centre Scientifique et Technique'
        : 'TotalEnergies visit video in Pau · Scientific & Technical Center';
      content = `<div class="youtube-preview">
        <a href="${watchUrl}" target="_blank" rel="noopener" class="youtube-thumb-wrap" aria-label="${openLabel}">
          <img src="${thumbUrl}" onerror="this.onerror=null;this.src='${thumbFallback}';" class="youtube-thumb" alt="${d.title}" loading="lazy">
          <div class="youtube-thumb-overlay">
            <div class="youtube-play-btn" aria-hidden="true">
              <svg width="68" height="48" viewBox="0 0 68 48"><path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"/><path d="M 45,24 27,14 27,34" fill="#fff"/></svg>
            </div>
          </div>
        </a>
        <p class="youtube-caption">${captionText}</p>
        <div class="youtube-actions">
          <a href="${watchUrl}" target="_blank" rel="noopener" class="btn-primary"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>${openLabel}</a>
        </div>
      </div>`;
    } else if (tab.type === 'colab') {
      // Preview élégant pour Colab (Google bloque l'iframe pour des raisons de sécurité)
      const noticeText = currentLang === 'fr'
        ? "Notebook Google Colab accessible publiquement en lecture. Cliquez pour ouvrir l'environnement interactif."
        : "Google Colab notebook publicly accessible in read mode. Click to open the interactive environment.";
      const codeSample = tab.code || `# Notebook Jupyter
# Cliquez sur le bouton ci-dessous pour ouvrir le notebook complet
# dans Google Colab.`;
      content = `<div class="colab-preview">
        <div class="colab-preview-header">
          <div class="colab-preview-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
          </div>
          <div class="colab-preview-info">
            <div class="colab-preview-title">Notebook Jupyter (Google Colab)</div>
            <div class="colab-preview-sub">${noticeText}</div>
          </div>
        </div>
        <pre class="colab-code"><code>${codeSample}</code></pre>
        <div class="colab-actions">
          <a href="${tab.url}" target="_blank" rel="noopener" class="btn-primary"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>${t['modal.openColab']}</a>
        </div>
      </div>`;
    } else if (tab.type === 'pdf') {
      content = `<div class="viewer-actions"><a href="${tab.file}" target="_blank" rel="noopener" class="viewer-action-btn"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>${t['modal.openReport']}</a><a href="${tab.file}" download class="viewer-action-btn"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>${t['modal.download']}</a></div><iframe src="${tab.file}#view=FitH" class="viewer-pdf" loading="lazy" title="${d.title}"></iframe>`;
    }
    return `<div class="vcontent ${i === 0 ? 'active' : ''}" data-content="tab-${i}">${content}</div>`;
  }).join('');

  const html = `
    ${bannerHTML}
    <div class="modal-hero">
      <div class="blob"></div>
      <div class="modal-tags">${tagsHTML}</div>
      <h1 class="modal-title">${d.title}</h1>
      <p class="modal-intro">${d.shortDesc}</p>
      <div class="modal-stats">${statsHTML}</div>
    </div>
    <div class="modal-body">
      <div class="modal-content">
        ${sectionsHTML}
        <h2>${t['modal.documents']}</h2>
        <div class="modal-viewer">
          <div class="viewer-tabs">${tabsBtnHTML}</div>
          <div class="vcontent-wrap">${tabsContentHTML}</div>
        </div>
      </div>
      <aside class="modal-aside">
        <div class="aside-card">
          <div class="aside-label">${t['modal.stack']}</div>
          <div class="tags">${stackHTML}</div>
        </div>
        <div class="aside-card">
          <div class="aside-label">${t['modal.role']}</div>
          <p>${d.role}</p>
        </div>
        <div class="aside-card">
          <div class="aside-label">${t['modal.supervision']}</div>
          <p>${d.supervision}</p>
        </div>
      </aside>
    </div>
  `;
  document.getElementById('modalContent').innerHTML = html;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('modal').scrollTop = 0;

  document.querySelectorAll('#modalContent .vtab').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('#modalContent .vtab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('#modalContent .vcontent').forEach(c => c.classList.remove('active'));
      const target = document.querySelector(`#modalContent [data-content="${btn.dataset.tab}"]`);
      if (target) target.classList.add('active');
    };
  });
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.getElementById('modalContent').innerHTML = '';
  document.body.style.overflow = '';
}

/* ====================== CONTACT FORM ====================== */
function setupContactForm() {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  const submitBtn = document.getElementById('formSubmit');
  if (!form) return;
  let useEmailJS = false;
  if (window.emailjs && EMAILJS_CONFIG.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY') {
    try { emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey }); useEmailJS = true; } catch (e) {}
  }
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const t = I18N[currentLang];
    const data = {
      name: form.cName.value.trim(),
      email: form.cEmail.value.trim(),
      subject: form.cSubject.value.trim(),
      message: form.cMessage.value.trim()
    };
    if (!data.name || !data.email || !data.subject || !data.message) {
      showStatus(status, t['contact.required'], 'error'); return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      showStatus(status, t['contact.invalidEmail'], 'error'); return;
    }
    submitBtn.disabled = true;
    showStatus(status, t['contact.sending'], 'loading');

    try {
      if (useEmailJS) {
        await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, {
          from_name: data.name, from_email: data.email,
          subject: data.subject, message: data.message,
          to_email: 'abderamaneherendjimi@gmail.com'
        });
        showStatus(status, t['contact.success'], 'success');
        form.reset();
      } else {
        // FormSubmit AJAX — version simplifiée pour éviter les bugs récents
        // 1. JSON est plus fiable que FormData pour FormSubmit AJAX
        // 2. Pas de _template (cause des rejets)
        // 3. Pas de _replyto (déprécié, l'email est pris du champ "email")
        const payload = {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          _subject: `[Portfolio] ${data.subject}`,
          _captcha: 'false'
        };
        const resp = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });
        const responseText = await resp.text();
        let json = {};
        try { json = JSON.parse(responseText); } catch (e) {
          console.warn('[Contact] Response non-JSON:', responseText.slice(0, 200));
        }
        if (!resp.ok || json.success === 'false' || json.success === false) {
          console.error('[Contact] FormSubmit error:', { status: resp.status, body: json, raw: responseText.slice(0, 300) });
          throw new Error(json.message || `HTTP ${resp.status}`);
        }
        // Première soumission : FormSubmit retourne success=true + message d'activation
        // Soumissions suivantes (après activation) : message direct dans la boîte
        showStatus(status, t['contact.success'], 'success');
        form.reset();
      }
    } catch (err) {
      console.error('[Contact form] Error:', err);
      const errMsg = (err && err.message) ? ` (${err.message})` : '';
      showStatus(status, t['contact.error'] + errMsg, 'error');
    } finally {
      submitBtn.disabled = false;
    }
  });
}
function showStatus(el, msg, type) { el.className = 'form-status ' + type; el.textContent = msg; }

/* ====================== EVENTS ====================== */
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
  document.getElementById('themeToggle').onclick = () => {
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur === 'light' ? 'dark' : 'light';

    // Helper: applique le changement de thème
    const applyTheme = () => {
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateThemeIcon(next);
    };

    // Si le navigateur supporte la View Transitions API (Chrome 111+, Safari 18+)
    // → fade synchronisé natif, ultra-fluide
    if (document.startViewTransition) {
      document.startViewTransition(applyTheme);
    } else {
      // Fallback CSS : les transitions CSS prennent le relais
      applyTheme();
    }
  };
  const savedLang = localStorage.getItem('lang') || 'fr';
  currentLang = savedLang;
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === currentLang);
    b.onclick = () => {
      currentLang = b.dataset.lang;
      localStorage.setItem('lang', currentLang);
      document.querySelectorAll('.lang-btn').forEach(x => x.classList.toggle('active', x.dataset.lang === currentLang));
      applyI18n();
    };
  });
  applyI18n();
  renderTechMarquee();

  const navToggle = document.getElementById('navMobileToggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle) navToggle.onclick = () => navLinks.classList.toggle('open');
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderProjects(currentFilter);
    };
  });

  document.getElementById('modalClose').onclick = closeModal;
  document.getElementById('modalBack').onclick = closeModal;
  document.getElementById('modalOverlay').onclick = (e) => {
    if (e.target.id === 'modalOverlay') closeModal();
  };
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  setupContactForm();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 120;
    sections.forEach(sec => {
      if (scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight) {
        const id = sec.id;
        navItems.forEach(item => {
          item.classList.toggle('active', item.getAttribute('href') === `#${id}`);
        });
      }
    });
  });
});

function updateThemeIcon(theme) {
  const moon = document.getElementById('iconMoon');
  const sun = document.getElementById('iconSun');
  if (theme === 'dark') { moon.hidden = true; sun.hidden = false; }
  else { moon.hidden = false; sun.hidden = true; }
}
