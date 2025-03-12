## Animer le texte

Dans cette étape, tu vas ajouter une animation cool au texte pour attirer l'attention des gens !

<iframe src="https://editor.raspberrypi.org/en/embed/viewer/animated-story-step5?page=sammy.html" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### Fixer la position de l'image du jardin

Tu peux « fixer » la position de l'image du jardin comme arrière-plan, de sorte qu'elle reste fixe tandis que le contenu défile devant elle.

\--- task ---

Ajoute la propriété `background-attachment: fixed` au sélecteur `.garden`.

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 75
line_highlights: 79
--------------------------------------------------------

.garden {
background-image: url("garden.jpg");
background-size: cover;
background-position-y: bottom;
background-attachment: fixed;
}

\--- /code ---

**Clique sur Run**

- Fais défiler vers le bas pour voir l’image du jardin comme arrière-plan fixe.

\--- collapse ---

---

## title: Que devrais-je voir ?

![Un gif montrant une image d'arrière-plan fixe tandis qu'un autre contenu défile devant lui.](images/background-attachment-fixed.gif)

\--- /collapse ---

\--- /task ---

### Ajouter un titre

Tu peux ajouter un titre pour la page de l'histoire en utilisant un élément `<h1>`.

L'élément `<h1>` doit avoir l'attribut `id="hideBounce"`.

\--- task ---

Ouvre le fichier `sammy.html`.

Recherche la balise de fermeture `</section>`.

Ajoute un élément `<h1>`.

## --- code ---

language: html
filename: sammy.html
line_numbers: true
line_number_start: 16
line_highlights: 20
--------------------------------------------------------

```
<main>
  <section class="garden">
    <div id="bounce">DÉFILER VERS LE BAS</div>
  </section>
  <h1 id="hideBounce">Sammy <br />L'escargot<br /></h1>
</main>
```

\--- /code ---

**Clique sur Run**

- Fais défiler vers le bas pour voir le titre.

\--- /task ---

### Ajouter le texte de l'histoire

\--- task ---

Ajoute le texte de l'histoire après le titre `<h1>`.

Le texte de l'histoire doit être dans un élément `<p>`.

## --- code ---

language: html
filename: sammy.html
line_numbers: true
line_number_start: 16
line_highlights: 21-23
-----------------------------------------------------------

```
<main>
  <section class="garden">
    <div id="bounce">DÉFILER VERS LE BAS</div>
  </section>
  <h1 id="hideBounce">Sammy <br />L'escargot<br /></h1>
  <p>
    Par une journée lumineuse et ensoleillée, dans la douceur du jardin, Sammy l'escargot se réveilla, les antennes frémissantes de curiosité. <br /><br />Sa coquille, brillante sous les rayons du soleil, scintillait tandis qu'il s'aventurait lentement au-delà de son chemin habituel. Il désirait découvrir ce qui se cachait au-delà des feuilles et des fleurs qu'il connaissait si bien. <br /><br />Au fur et à mesure de sa progression, le petit monde du jardin semblait se déployer sous ses yeux émerveillés. <br /><br />Sammy aperçut une touffe d'herbe, délicatement baignée de rosée, qui scintillait comme des diamants sous la lumière douce du matin. L'excitation monta en lui lorsqu'il se mit à explorer des tunnels minuscules et des cachettes secrètes, comme un trésor caché dans ce jardin qui semblait sans fin.<br /><br />Un sourire se dessina sur son visage. Sammy comprit alors qu'en dépit de sa petite taille, il y avait toujours des merveilles à découvrir, même dans les recoins les plus discrets du jardin. <br /><br />Poussé par son enthousiasme, il continua son exploration, avide de percer d'autres secrets de ce monde florissant et vibrant.
  </p>
</main>
```

\--- /code ---

**Clique sur Run**

- Fais défiler vers le bas pour voir le texte de l'histoire.

\--- /task ---

### Animer le texte

Crée une animation à appliquer au texte de l'histoire.

\--- task ---

Ouvre le fichier `style.css`.

Trouve le commentaire `/* ANIMATIONS */`.

Ajoute une animation d'images clés appelée `rise`.

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 51
line_highlights: 53-61
-----------------------------------------------------------

/\* ANIMATIONS \*/

@keyframes rising {
from {
transform: translateY(20%);
}
to {
transform: translateY(0%);
}
}

@keyframes bounce {

\--- /code ---

\--- /task ---

Ensuite, crée un nouveau sélecteur (`.rise`) qui utilise l'animation `rising`.

**Remarque :** plus tard, tu utiliseras JavaScript pour ajouter la classe `rise` à l'élément `<p>` lorsqu'il entre dans la fenêtre d'affichage.

\--- task ---

Crée le sélecteur `.rise`.

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 51
line_highlights: 53-56
-----------------------------------------------------------

/\* ANIMATIONS \*/

.rise {
animation: rising 2s ease;
}

@keyframes rising {

\--- /code ---

Le sélecteur a une propriété `animation` configurée pour appeler l'animation `rising` que tu as créé plus tôt.

L'animation est configurée pour durer deux secondes (`2s`) et utiliser la transition `ease`.

**Astuce :** tu peux ajouter ceci n'importe où dans le fichier CSS, mais il est logique de l'ajouter près du code pour l'animation des images clés.

\--- /task ---

### Utiliser JavaScript pour déclencher l'animation

Cette animation ne sera pas nécessaire sur `index.html`.

Tu devrais créer un nouveau fichier JavaScript avec les scripts requis par cette page.

\--- task ---

Crée un nouveau fichier JavaScript qui contiendra les scripts pertinents pour `sammy.html`.

- **Clique** sur le bouton **+ Add file**

![Le bouton 'Add file'.](images/addFile.png)

- Nomme ton nouveau fichier `sammy.js` et clique sur le bouton **Add file**.

\--- /task ---

Tu dois lier ton nouveau fichier à partir de la page `sammy.html`.

\--- task ---

Ouvre le fichier `sammy.html`.

Trouve l'élément `<script>`.

Ajoute un second élément `<script>` avec l'attribut `src="sammy.js"`

## --- code ---

language: html
filename: sammy.html
line_numbers: true
line_number_start: 26
line_highlights: 27
--------------------------------------------------------

  <script type="text/javascript" src="scripts.js"></script>

  <script type="text/javascript" src="sammy.js"></script>

\--- /code ---

\--- /task ---

Tu vas maintenant créer un Intersection Observer JavaScript avec un rappel qui ajoute la classe `rise` à l'élément `<p>` lorsqu'il entre dans la fenêtre d'affichage.

\--- task ---

Ouvre le fichier `sammy.js` que tu as créé précédemment.

Ajouter un Intersection Observer appelé `riseObserver`.

## --- code ---

language: js
filename: sammy.js
line_numbers: true
line_number_start: 1
line_highlights:
-----------------------------------------------------

// Observateur de texte ascendant
const riseObserver = new IntersectionObserver((entries) => {
if (entries[0].isIntersecting) {
entries[0].target.classList.add("rise");
}
});
riseObserver.observe(document.querySelector("p"));

\--- /code ---

**Astuce :** cet Intersection Observer est similaire à `bounceObserver` que tu as créé à une étape précédente.

Il y a deux différences principales :

- `riseObserver` surveille les éléments `<p>`
- `riseObserver` ajoute la classe `rise` aux éléments qui se croisent.

**Clique sur Run**

- Fais défiler vers le bas pour voir l'animation montante lorsque le texte `<p>` entre dans la fenêtre d'affichage.

\--- /task ---

Ensuite, tu ajouteras une animation à l'entête et une animation différente à une image.
