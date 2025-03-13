## Améliorer ton projet

Si tu as le temps, tu peux :

- Ajouter une autre page pour un deuxième personnage de la page d'introduction `index.html`
- Supprimer le `setTimeout` de `imageObserver`
- Améliorer les performances du navigateur en utilisant `unobserve`

--- collapse ---

---
title: Ajouter la page d'histoire pour Bella
---

--- task ---

- **Clique** sur le bouton **+ Add file**.

![Le bouton 'Add file'.](images/addFile.png)

- Nomme ton nouveau fichier `bella.html` et clique sur le bouton **Add file**.

--- /task ---

--- task ---

Ouvre le fichier `sammy.html`.

Sélectionne tout le code HTML (Ctrl + A ou Cmd + A).

Copie le code HTML sélectionné (Ctrl + C ou Cmd + C).

Ouvre le fichier `bella.html` et colle le code HTML dans celui-ci (Ctrl + V ou Cmd + V).

--- /task ---

--- task ---

Modifie le titre de la page.

--- code ---
---
language: html
filename: bella.html
line_numbers: true
line_number_start: 6
line_highlights:
---

    <title>Bella</title>

--- /code ---

--- /task ---

--- task ---

Ajoute le nouveau lien à la barre de navigation sur **les trois** pages HTML.

--- code ---
---
language: html
filename:
line_numbers: true
line_number_start: 13
line_highlights: 15
---

      <a href="index.html">Intro</a>
      <a href="sammy.html">Sammy</a>
      <a href="bella.html">Bella</a>

--- /code ---

--- /task ---

--- task ---

Ouvre `bella.html`

Modifie le texte `<h1>` :

--- code ---
---
language: html
filename: bella.html
line_numbers: true
line_number_start: 22
line_highlights:
---

      <h1 id="hideBounce">Bella <br />Le<br />Papillon</h1>

--- /code ---

--- /task ---

--- task ---

Ajoute le texte de l'histoire de Bella le papillon.

--- code ---
---
language: html
filename: bella.html
line_numbers: true
line_number_start: 23
line_highlights: 24
---

      <p>
      Dans un jardin baigné de soleil, Bella le papillon virevoltait de fleur en fleur, ses ailes éclatantes de bleu, d'orange et de rose capturant la lumière avec une grâce hypnotisante.<br /><br />À chaque battement léger, elle semait la joie, explorant les recoins secrets et découvrant les trésors cachés d’un monde foisonnant de beauté.<br /><br />Lorsqu’elle croisa d’autres papillons, Bella se joignit à un ballet aérien, créant un chef-d'œuvre vivant, dansant avec eux dans un ciel radieux.<br /><br />Le jardin l’enveloppait, et chaque instant se transformait en une célébration vibrante de la vie.<br /><br />Comme Sammy l'escargot, Bella comprit que même dans les coins les plus discrets de leur univers, des merveilles insoupçonnées attendaient d’être révélées.<br /><br />Dans ce havre lumineux, le jardin de Sammy et Bella baignait dans une joie infinie.
      </p>

--- /code ---

Tu peux ajouter ta propre histoire pour personnaliser la page !

--- /task ---

--- task ---

Modifie l'élément `<img>`.

--- code ---
---
language: html
filename: bella.html
line_numbers: true
line_number_start: 27
line_highlights:
---

        <img id="butterfly" class="butterfly" src="butterfly.png" data-src="butterfly.png" alt="A cartoon butterfly" />

--- /code ---

--- /task ---

Tu devrais créer un nouveau fichier JavaScript avec les scripts requis par cette page.

--- task ---

Crée un nouveau fichier JavaScript qui contiendra les scripts pertinents pour `bella.html`.

- **Clique** sur le bouton **+ Add file**

![Le bouton 'Add file'.](images/addFile.png)

- Nomme ton nouveau fichier `bella.js` et clique sur le bouton **Add file**.

--- /task ---

--- task ---

Ouvre le fichier `sammy.js`.

Copie le contenu de `sammy.js` vers `bella.js`.

--- /task ---

--- task ---

Modifie `snailObserver` pour créer `butterflyObserver`.

--- code ---
---
language: js
filename: bella.js
line_numbers: true
line_number_start: 16
line_highlights: 16, 17, 19, 24
---

// Observateur de papillons
const butterflyObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    entries[0].target.classList.add("startFly");
  }
},
{ threshold: 1 }
);
butterflyObserver.observe(document.querySelector("#butterfly"));

--- /code ---

--- /task ---

Tu dois lier le fichier `bella.js` à partir de `bella.html`.

--- task ---

Ouvre le fichier `bella.html`.

Modifie l'attribut `src` du deuxième élément `<script>` de `src="sammy.js"` en `src="bella.js"`.

--- code ---
---
language: html
filename: bella.html
line_numbers: true
line_number_start: 31
line_highlights: 32
---

  <script type="text/javascript" src="scripts.js"></script>

  <script type="text/javascript" src="bella.js"></script>

--- /code ---

--- /task ---

--- task ---

Ouvre le fichier `style.css` et copie le sélecteur `.snail`, puis colle-le sous le sélecteur `.startCrawl`.

Renomme-le `.butterfly`.

Ajoute la propriété `animation`.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 107
line_highlights: 112, 121
---

.startCrawl {
  opacity: 1;
  transform: translateX(25%);
}

.butterfly {
  opacity: 0;
  transform: translateX(-20%);
  transition: all 2s ease-out;
  height: 20vh;
  width: 20vh;
  margin-top: 80vh;
  position: relative;
  padding-left: 0;
  animation: fly 3s infinite;
}

/* BARRE DE NAVIGATION */

--- /code ---

--- /task ---

--- task ---

Ajoute un nouveau sélecteur appelé `.startFly`.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 124
line_highlights: 124 - 128
---

.startFly {
  opacity: 1;
  animation: fly 2s infinite;
}

/* BARRE DE NAVIGATION */

--- /code ---

--- /task ---

Crée une nouvelle animation pour Bella.

--- task ---

Trouve le commentaire `/* ANIMATIONS */`.

Ajoute une nouvelle animation `@keyframes` appelée 'fly' pour correspondre au personnage du papillon.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 51
line_highlights: 53 - 76
---

/* ANIMATIONS */

@keyframes fly {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(-10px);
  }
  10% {
    transform: translateY(-20px);
  }
  30% {
    transform: translateY(-10px);
  }
  40% {
    transform: translateY(-5px);
  }
  60% {
    transform: translateY(-20px);
  }
  70% {
    transform: translateY(-15px);
  }
}

--- /code ---

--- /task ---

--- /collapse ---

--- collapse ---

---
title: Supprimer setTimeout
---

Tu peux supprimer le `setTimeout` dans `imageObserver`, car tu ne veux pas que les gens voient l'image spinner s'ils n'y sont pas obligés.

--- task ---

Ouvre le fichier `scripts.js`.

Supprime `setTimeout`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 10
line_highlights: 16
---

// Observateur d'images
const lazyImages = document.querySelectorAll("img");
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(
    (entry) => {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.getAttribute("data-src");
        imageObserver.unobserve(entry.target);
      }
    }
  );
});
lazyImages.forEach((lazyImage) => imageObserver.observe(lazyImage));

--- /code ---

--- /task ---

--- /collapse ---

--- collapse ---

---
title: Utilise unobserve pour améliorer les performances du navigateur
---

Tu as utilisé la méthode `unobserve` dans `imageObserver`.

Ajoute la méthode `unobserve` à d'autres rappels d'Intersection Observer.

--- task ---

Ouvre le fichier `scripts.js`.

Ajoute la méthode `unobserve` à la fonction de rappel dans `bounceObserver`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 1
line_highlights: 6
---

// Masquer le bounce observer
const bounceObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    console.log("BOUNCE TRIGGER DANS LA FENÊTRE D'AFFICHAGE");
    document.querySelector("#bounce").style.opacity = 0;
    bounceObserver.unobserve(entries[0].target);
  }
});
bounceObserver.observe(document.querySelector("#hideBounce"));

--- /code ---

--- /task ---

--- task ---

Ouvre le fichier `sammy.js`.

Ajoute la méthode `unobserve` à la fonction de rappel dans `riseObserver`.

--- code ---
---
language: js
filename: sammy.js
line_numbers: true
line_number_start: 1
line_highlights: 5
---

// Observateur de texte ascendant
const riseObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    entries[0].target.classList.add("rise");
    riseObserver.unobserve(entries[0].target);
  }
});
riseObserver.observe(document.querySelector("p"));

--- /code ---

--- /task ---

--- task ---

Ajoute la méthode `unobserve` à la fonction de rappel dans `snailObserver`.

--- code ---
---
language: js
filename: sammy.js
line_numbers: true
line_number_start: 16
line_highlights: 20
---

// Observateur d'escargot
const snailObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    entries[0].target.classList.add("startCrawl");
    snailObserver.unobserve(entries[0].target);
  }
},
{ threshold: 1 }
);
snailObserver.observe(document.querySelector("#snail"));

--- /code ---

--- /task ---

--- task ---

Ouvre le fichier `bella.js`.

Ajoute la méthode `unobserve` à la fonction de rappel dans `riseObserver`.

--- code ---
---
language: js
filename: bella.js
line_numbers: true
line_number_start: 1
line_highlights: 5
---

// Observateur de texte ascendant
const riseObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    entries[0].target.classList.add("rise");
    riseObserver.unobserve(entries[0].target);
  }
});
riseObserver.observe(document.querySelector("p"));

--- /code ---

--- /task ---

--- task ---

Ajoute la méthode `unobserve` à la fonction de rappel dans `butterflyObserver`.

--- code ---
---
language: js
filename: bella.js
line_numbers: true
line_number_start: 16
line_highlights: 20
---

// Observateur de papillons
const butterflyObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    entries[0].target.classList.add("startFly");
    butterflyObserver.unobserve(entries[0].target);
  }
},
{ threshold: 1 }
);
butterflyObserver.observe(document.querySelector("#butterfly"));

--- /code ---

--- /task ---

--- /collapse ---

--- collapse ---

---
title: Voir le projet amélioré
---

<iframe src="https://editor.raspberrypi.org/fr-FR/embed/viewer/animated-story-upgraded?page=bella.html" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

Tu peux voir les [fichiers du projet amélioré ici](https://editor.raspberrypi.org/fr-FR/projects/animated-story-upgraded){:target="_blank"}.

--- /collapse ---
