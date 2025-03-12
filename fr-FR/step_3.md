## Images à chargement lent

Dans cette étape, tu amélioreras les performances du navigateur en chargeant les images uniquement lorsqu’elles sont nécessaires.

<iframe src="https://editor.raspberrypi.org/en/embed/viewer/animated-story-step3" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### Pourquoi un chargement lent ?

Les images peuvent avoir des tailles de fichier importantes et peuvent utiliser beaucoup de données lorsque tu accèdes à une page web.

Lorsque tu ouvres une page web, **toutes** les images de la page sont chargées. Cela peut utiliser beaucoup de bande passante.

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
La quantité de données (bits) qui peut être transférée via une connexion informatique est appelée <span style="color: #0faeb0">**bande passante**</span>. L'utilisation d'une bande passante importante peut ralentir le chargement des pages pour les personnes disposant d'une mauvaise connectivité ou entraîner des coûts plus élevés. Réduire l’utilisation de la bande passante rend les sites web plus accessibles et conviviaux.
</p>

### Ajouter un nouvel attribut à chaque élément d'image

L'attribut `src` pour tous les éléments d'image dans `index.html` est défini à `spinner.gif`.

Cela signifie que lorsque la page se charge, la seule image qui doit être chargée est `spinner.gif`.

\--- task ---

Ouvre le fichier `index.html`.

Dans chaque élément `<img>`, ajoute un attribut `data-src` et définis sa valeur sur l'image concernée.

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 11
line_highlights: 19, 23, 27, 31, 35
------------------------------------------------------------------------

  <body>
    <main>
      <section class="garden">
        <div id="bounce">DÉFILER VERS LE BAS</div>
      </section>
      <p id="hideBounce">
        Lentement mais sûrement, Sammy glisse, laissant derrière lui une traînée brillante alors qu'il explore les merveilles du jardin.
      </p>
      <img src="spinner.gif" data-src="snail.svg" />
      <p>
        Rencontre une Abeille bourdonnante, un petit explorateur aux rayures jaunes et noires qui adore bourdonner autour des fleurs, recueillant du nectar sucré pour faire du miel délicieux.
      </p>
      <img src="spinner.gif" data-src="bee.png" />
      <p>
        Bella vole à proximité, ses ailes vibrantes peintes de belles couleurs, elle danse de fleur en fleur, apportant de la joie partout où elle va.
      </p>
      <img src="spinner.gif" data-src="butterfly.png" />
      <p>
        Et puis il y a Lucy, une petite coccinelle rouge avec des taches noires, qui adore jouer à cache-cache dans le jardin.
      </p>
      <img src="spinner.gif" data-src="ladybug.png" />
      <p>
        Enfin et surtout, il y a Iggy, un ami mystérieux qui est toujours prêt pour une nouvelle aventure.
      </p>
      <img src="spinner.gif" data-src="insect.png" />
      <p>
        Ensemble, ils créent un charmant groupe d'amis, prêts à se lancer dans des voyages passionnants !
      </p>
    </main>
  </body>

\--- /code ---

**Clique sur Run**

- Fais défiler vers le bas. Vois-tu les images que tu as ajoutées ?

Tu ne verras pas les images que tu as ajoutées. Toutes les images sont encore `spinner.gif`. C'est parce que c'est la propriété `src` qui définit l'image à afficher.

\--- /task ---

### Observer chaque élément image

Tu peux utiliser JavaScript pour observer chaque image de la page.

\--- task ---

Ouvre le fichier `scripts.js`.

Crée une constante (`const`) appelée `lazyImages`.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 10
line_highlights: 11
--------------------------------------------------------

// Observateur d'images
const lazyImages = document.querySelectorAll("img");

\--- /code ---

La constante `lazyImages` contient un tableau de tous les éléments `<img>` de la page.

Dans le code, la page est appelée `document`.

**Astuce :** sépare les différents observateurs à l’aide d’un saut de ligne (dans ce cas, sur la ligne 12).

\--- /task ---

### Créer un nouvel Intersection Observer appelé imageObserver

`imageObserver` est utilisé pour surveiller (« observer ») un tableau d'éléments (`entries`).

\--- task ---

Ouvre le fichier `scripts.js`.

Créer un observateur appelé `imageObsever`.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 10
line_highlights: 12-14
-----------------------------------------------------------

// Observateur d'images
const lazyImages = document.querySelectorAll("img");
const imageObserver = new IntersectionObserver((entries) => {

});

\--- /code ---

**Astuce :** le saut de ligne sur la ligne 13 contiendra le rappel.

\--- /task ---

### Dire à imageObserver d'observer

Appelle `imageObserver` pour `observer` chaque élément `<img>` dans le `document`.

\--- task ---

Utilise une boucle `forEach` pour observer chaque élément d'image (contenue dans le tableau `lazyImages`).

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 10
line_highlights: 15
--------------------------------------------------------

// Observateur d'images
const lazyImages = document.querySelectorAll("img");
const imageObserver = new IntersectionObserver((entries) => {

});
lazyImages.forEach((lazyImage) => imageObserver.observe(lazyImage));

\--- /code ---

\--- /task ---

\--- collapse ---

---

## title: Qu'est-ce qu'une boucle forEach ?

En JavaScript, une boucle `forEach` est utilisée pour parcourir chaque élément d'un tableau et faire quelque chose avec chacun d'eux.

\--- /collapse ---

### Créer le rappel (callback)

Le rappel doit vérifier chaque image qu'il a observée.

\--- task ---

Utilise une boucle `forEach` pour appeler l'action pertinente pour chaque image que l'observateur a « observée ».

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 10
line_highlights: 13-17
-----------------------------------------------------------

// Observateur d'images
const lazyImages = document.querySelectorAll("img");
const imageObserver = new IntersectionObserver((entries) => {
entries.forEach(
(entry) => {

```
}
```

);
});
lazyImages.forEach((lazyImage) => imageObserver.observe(lazyImage));

\--- /code ---

**Astuce :** contrairement à bounceObserver, imageObserver doit vérifier chaque entrée du tableau, donc une boucle `forEach` est nécessaire.

**Astuce :** le saut de ligne à la ligne 15 contiendra l'action à effectuer sur chaque image observée (`entry`).

\--- /task ---

La méthode `isIntersecting` est utilisée pour vérifier si un élément `<img>` (`entry`) est entré dans la fenêtre d'affichage.

\--- task ---

Crée une instruction conditionnelle pour vérifier si une entrée observée dans le tableau se trouve dans la fenêtre d’affichage.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 10
line_highlights: 15-17
-----------------------------------------------------------

// Observateur d'images
const lazyImages = document.querySelectorAll("img");
const imageObserver = new IntersectionObserver((entries) => {
entries.forEach(
(entry) => {
if (entry.isIntersecting) {

```
  }
}
```

);
});
lazyImages.forEach((lazyImage) => imageObserver.observe(lazyImage));

\--- /code ---

**Astuce :** le saut de ligne sur la ligne 16 contiendra l'action à effectuer sur une image (`entry`) qui est entrée dans la fenêtre d'affichage.

\--- /task ---

Si une image du tableau se trouve dans la fenêtre d'affichage, la valeur de son attribut `src` (actuellement `spinner.gif`) est modifiée par la valeur de son attribut `data-src` (le fichier image que tu souhaites charger).

\--- task ---

Crée l'action pour changer la valeur de `src` en valeur de `data-src`.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 10
line_highlights: 16-19
-----------------------------------------------------------

// Observateur d'images
const lazyImages = document.querySelectorAll("img");
const imageObserver = new IntersectionObserver((entries) => {
entries.forEach(
(entry) => {
if (entry.isIntersecting) {
setTimeout(
() => (entry.target.src = entry.target.getAttribute("data-src")),
1000
);
}
}
);
});
lazyImages.forEach((lazyImage) => imageObserver.observe(lazyImage));

\--- /code ---

\--- collapse ---

---

## title: Pourquoi y a-t-il un setTimeout ?

L'imageObserver utilise `setTimeout` avec une valeur de `1000` (ms). Cela ajoute une pause d'une seconde avant que la valeur de l'attribut `src` ne soit échangée pour la valeur de l'attribut `data-src`.

Si ce n’était pas le cas, l’échange pourrait se produire trop rapidement pour que tu puisses le voir !

\--- /collapse ---

**Clique sur Run**

- Fais défiler vers le bas et regarde chaque chargement d'image lorsqu'elle entre dans la fenêtre d'affichage (après une pause d'une seconde).

\--- /task ---

\--- collapse ---

---

## title: Les images ne se chargent pas

- Assure-toi qu'il s'agit de `img`, et non de `<img>`entre chevrons à la ligne 11.
- Vérifie qu'il y a une virgule `,` après la ligne 17.
- Vérifie qu'il y a un point-virgule `;` à la fin des lignes 19, 22, 23 et 24.

\--- /collapse ---

### Arrêter l'observation

Tu devrais arrêter d'observer les éléments de l'image après que leur attribut `src` soit changé à la valeur de leur attribut `data-src`.

Cela évite les problèmes de mémoire ou de performances.

\--- task ---

Ajoute la méthode `unobserve()` au rappel.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 10
line_highlights: 20
--------------------------------------------------------

// Observateur d'images
const lazyImages = document.querySelectorAll("img");
const imageObserver = new IntersectionObserver((entries) => {
entries.forEach(
(entry) => {
if (entry.isIntersecting) {
setTimeout(
() => (entry.target.src = entry.target.getAttribute("data-src")),
1000
);
imageObserver.unobserve(entry.target);
}
}
);
});
lazyImages.forEach((lazyImage) => imageObserver.observe(lazyImage));

\--- /code ---

**Astuce :** à la ligne 20, la propriété `.target` de `entry` fait référence à l’élément observé. Il s'agit de l'élément qui entre ou sort de la fenêtre d'affichage et celui que tu souhaites arrêter de suivre.

\--- /task ---

Ensuite, tu vas ajouter une nouvelle page web et une barre de navigation à ton site web.
