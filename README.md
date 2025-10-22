# Galerie d'Images React

Une application de galerie d'images moderne construite avec React et Vite, permettant de visualiser, filtrer et interagir avec une collection d'images organisées par catégories.

## 🚀 Fonctionnalités

- **Galerie d'images responsive** avec grille adaptative
- **Tri automatique par popularité** : les images les plus likées apparaissent en premier
- **Filtrage par catégories** : nature, architecture, animaux, technologie, personnes
- **Système de likes/dislikes** pour chaque image avec tri dynamique
- **Modal de visualisation** pour voir les images en grand format
- **Suppression d'images** avec confirmation
- **Interface utilisateur moderne** avec Tailwind CSS
- **Design responsive** pour tous les appareils

## 🛠️ Technologies Utilisées

- **React 19.1.1** - Framework JavaScript pour l'interface utilisateur
- **Vite 5.4.0** - Outil de build rapide et moderne
- **Tailwind CSS 4.1.15** - Framework CSS utilitaire
- **JavaScript ES6+** - Langage de programmation moderne

## 📦 Installation

### Prérequis

- **Node.js version 20.19+ ou 22.12+** (requis pour Vite 5.4.0)
- npm ou yarn

> ⚠️ **Important** : Si vous utilisez Node.js 20.9.0 ou antérieur, vous devez mettre à jour vers une version plus récente pour éviter l'erreur `crypto.hash is not a function`.

### Étapes d'installation

1. **Cloner le repository**
   ```bash
   git clone <url-du-repository>
   cd gallery-react-app
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:5173
   ```

## 🎨 Structure du Projet

```
gallery-react-app/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/           # Images de la galerie
│   │   ├── animal1-5.jpg
│   │   ├── architecture1-5.jpg
│   │   ├── nature1-5.jpg
│   │   ├── people1-5.jpg
│   │   └── techno1-5.jpg
│   ├── components/       # Composants React
│   │   ├── layout/
│   │   │   └── Layout.jsx
│   │   ├── ImageCard.jsx
│   │   ├── ImageModal.jsx
│   │   ├── Sidebar.jsx
│   │   └── hero.jsx
│   ├── model/            # Données de la galerie
│   │   └── gallery.js
│   ├── App.jsx           # Composant principal
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Utilisation

### Navigation dans la galerie

1. **Tri automatique** : Les images sont automatiquement triées par popularité (plus likées en premier)
2. **Filtrage par catégorie** : Utilisez la barre latérale pour filtrer les images par catégorie
3. **Visualisation d'image** : Cliquez sur une image pour l'ouvrir en modal
4. **Interactions** : Utilisez les boutons ❤️ et 👎 pour liker/disliker (le tri se met à jour automatiquement)
5. **Suppression** : Cliquez sur 🗑️ pour supprimer une image

### Catégories disponibles

- **Toutes** - Affiche toutes les images
- **Nature** - Paysages, forêts, cascades
- **Architecture** - Bâtiments, ponts, structures
- **Animaux** - Faune sauvage et domestique
- **Technologie** - IA, code, réalité virtuelle
- **Personnes** - Portraits et scènes humaines

## 🔧 Scripts Disponibles

```bash
# Serveur de développement
npm run dev

# Build de production
npm run build

# Prévisualisation du build
npm run preview

# Linting
npm run lint
```

## 🎨 Personnalisation

### Ajouter de nouvelles images

1. Placez vos images dans le dossier `src/assets/`
2. Importez-les dans `src/model/gallery.js`
3. Ajoutez un nouvel objet à l'array `gallery` :

```javascript
{
  id: 26,
  title: "Mon Image",
  src: monImage,
  description: "Description de mon image",
  likes: 0,
  dislikes: 0,
  category: "nature", // ou autre catégorie
}
```

### Ajouter une nouvelle catégorie

1. Ajoutez le nom de la catégorie dans l'array `categories` dans `gallery.js`
2. Utilisez cette catégorie dans vos objets d'images

## 🐛 Résolution de Problèmes

### Erreur Node.js Version

Si vous rencontrez l'erreur "Vite requires Node.js version 20.19+" ou "crypto.hash is not a function", mettez à jour Node.js :

```bash
# Avec nvm (recommandé)
nvm install 20.19.0
nvm use 20.19.0

# Ou avec nvm pour la dernière version LTS
nvm install --lts
nvm use --lts

# Ou téléchargez depuis nodejs.org
```

### Vérification de la version Node.js

```bash
node --version
# Doit afficher v20.19.0 ou supérieur
```

### Problèmes d'import d'images

Assurez-vous que tous les imports d'images dans `gallery.js` correspondent aux fichiers présents dans `src/assets/`.

## 📱 Responsive Design

L'application s'adapte automatiquement à différentes tailles d'écran :

- **Mobile** : 1 colonne
- **Tablet** : 2 colonnes
- **Desktop** : 3 colonnes
- **Large Desktop** : 4 colonnes

## 🔄 Tri et Organisation

### Tri automatique par popularité

- **Images les plus likées** apparaissent en premier
- **Tri dynamique** : l'ordre se met à jour automatiquement lors des interactions
- **Filtrage intelligent** : chaque catégorie respecte l'ordre de popularité
- **Expérience utilisateur optimisée** : découvrez le meilleur contenu en premier

## 🚀 Déploiement

### Build de production

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `dist/`.

### Déploiement sur Vercel

1. Connectez votre repository à Vercel
2. Vercel détectera automatiquement Vite
3. Le déploiement se fera automatiquement

## 🤝 Contribution

1. Fork le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👨‍💻 Auteur

Développé avec ❤️ pour l'apprentissage de React et des technologies web modernes.

---

**Note** : Cette application est conçue à des fins éducatives et démontre l'utilisation de React avec des fonctionnalités modernes comme les hooks, la gestion d'état, et l'intégration avec Tailwind CSS.