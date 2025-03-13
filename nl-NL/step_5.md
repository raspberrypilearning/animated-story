## Tekst animeren

In deze stap voeg je een leuke animatie toe aan de tekst om de aandacht van mensen te trekken!

<iframe src="https://editor.raspberrypi.org/nl-NL/embed/viewer/animated-story-step5?page=sammy.html" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### De positie van de tuinafbeelding vastzetten

Je kunt de positie van de tuinafbeelding 'fixeren', zodat deze als achtergrond wordt weergegeven, terwijl andere content ervoor scrolt.

--- task ---

Voeg de eigenschap `background-attachment: fixed` toe aan de `.garden`-selector.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 75
line_highlights: 79
---

.garden {
  background-image: url("garden.jpg");
  background-size: cover;
  background-position-y: bottom;
  background-attachment: fixed;
}

--- /code ---

**Klik op Run**

- Scroll naar beneden om de tuinafbeelding als vaste achtergrond te zien.

--- collapse ---

---
title: Wat moet ik zien?
---
![Een gif die een vaste achtergrondafbeelding laat zien terwijl andere inhoud ervoor scrolt.](images/background-attachment-fixed.gif)

--- /collapse ---

--- /task ---

### Voeg een kop toe

Je kunt een koptekst voor de verhaalpagina toevoegen met behulp van een `<h1>`-element.

Het element `<h1>` moet het kenmerk `id="hideBounce"` hebben.

--- task ---

Open het `sammy.html` bestand.

Zoek de afsluitende `</section>` tag.

Voeg een `<h1>`-element toe.

--- code ---
---
language: html
filename: sammy.html
line_numbers: true
line_number_start: 16
line_highlights: 20
---

    <main>
      <section class="garden">
        <div id="bounce">OMLAAG SCROLLEN</div>
      </section>
      <h1 id="hideBounce">Sammy <br />De<br />Slak</h1>
    </main>

--- /code ---

**Klik op Run**

- Scroll naar beneden om de kop te zien.

--- /task ---

### Voeg wat tekst voor het verhaal toe

--- task ---

Voeg de verhaaltekst toe na de `<h1>` kop.

De verhaaltekst moet in een `<p>` element zitten.

--- code ---
---
language: html
filename: sammy.html
line_numbers: true
line_number_start: 16
line_highlights: 21-23
---

    <main>
      <section class="garden">
        <div id="bounce">OMLAAG SCROLLEN</div>
      </section>
      <h1 id="hideBounce">Sammy <br />De<br />Slak</h1>
      <p>
        Op een heldere en zonnige dag in de tuin werd Sammy de Slak wakker met een nieuwsgierig gevoel. <br /><br />Zijn glanzende schild glinsterde terwijl hij langzaam zijn gebruikelijke pad verliet. Sammy wilde zien wat er achter de bekende bladeren en bloemen lag. <br /><br />Terwijl hij verder gleed, leek de kleine tuinwereld zich voor hem te ontvouwen. <br /><br />Sammy ontdekte een stukje gras, met dauw die schitterde als diamanten in de ochtendzon. Opgewonden keek hij verder terwijl hij kleine tunnels en geheime schuilplaatsen verkende.<br /><br />Het avontuur bracht een glimlach op het gezicht van onze kleine slak. Sammy realiseerde zich dat er zelfs in de kleinste hoekjes van de tuin geheimen te vinden waren. <br /><br />Sammy zette zijn verkenning voort, gretig om meer wonderen te ontdekken in deze bloeiende wereld.
      </p>
    </main>


--- /code ---

**Klik op Run**

- Scroll naar beneden om de verhaaltekst te zien.

--- /task ---

### Animeer de tekst

Maak een animatie die je kunt toepassen op de verhaaltekst.

--- task ---

Open het `style.css` bestand.

Zoek het commentaar `/* ANIMATIES */`.

Voeg een keyframes animatie toe met de naam `rising`.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 51
line_highlights: 53-61
---

/* ANIMATIES */

@keyframes rising {
  from {
    transform: translateY(20%);
  }
  to {
    transform: translateY(0%);
  }
}

@keyframes bounce {

--- /code ---

--- /task ---

Maak vervolgens een nieuwe selector (`.rise`) die de `rising`-animatie gebruikt.

**Opmerking:** Later zul je JavaScript gebruiken om de `rise` klasse toe te voegen aan het `<p>` element wanneer het de viewport binnenkomt.

--- task ---

Maak de `.rise`-selector.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 51
line_highlights: 53-56
---

/* ANIMATIES */

.rise {
  animation: rising 2s ease;
}

@keyframes rising {

--- /code ---

De selector heeft één `animation` eigenschap ingesteld om de keyframes animatie `rising` aan te roepen die je eerder hebt gemaakt.

De animatie duurt twee seconden (`2s`) en maakt gebruik van de overgang `ease`.

**Tip:** Je kunt dit overal in het CSS-bestand toevoegen, maar het is handig om het dicht bij de code voor de keyframe-animatie toe te voegen.

--- /task ---

### Gebruik JavaScript om de animatie te activeren

Deze animatie is niet nodig op `index.html`.

Je moet een nieuw JavaScript-bestand maken met scripts die voor deze pagina vereist zijn.

--- task ---

Maak een nieuw JavaScript-bestand dat de scripts bevat die relevant zijn voor `sammy.html`.

- **Klik** op de knop **+ Add file**

![De knop 'Add file'.](images/addFile.png)

- Geef jouw nieuwe bestand de naam `sammy.js` en klik op de knop **Add file**.

--- /task ---

Je moet je nieuwe bestand koppelen vanaf de `sammy.html` pagina.

--- task ---

Open het `sammy.html` bestand.

Zoek het `<script>` element.

Voeg een tweede `<script>` element toe met het kenmerk `src="sammy.js"`

--- code ---
---
language: html
filename: sammy.html
line_numbers: true
line_number_start: 26
line_highlights: 27
---

  <script type="text/javascript" src="scripts.js"></script>
  <script type="text/javascript" src="sammy.js"></script>

--- /code ---

--- /task ---

Je maakt nu een JavaScript intersection observer met een callback die de `rise` klasse toevoegt aan het `<p>` element wanneer het de viewport binnenkomt.

--- task ---

Open het bestand `sammy.js` dat je eerder hebt gemaakt.

Voeg een intersection observer toe met de naam `riseObserver`.

--- code ---
---
language: js
filename: sammy.js
line_numbers: true
line_number_start: 1
line_highlights:
---

// Stijgende tekst waarnemer
const riseObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    entries[0].target.classList.add("rise");
  }
});
riseObserver.observe(document.querySelector("p"));

--- /code ---

**Tip:** Deze intersection observer is vergelijkbaar met `bounceObserver` die je in een eerdere stap hebt gemaakt.

Er zijn twee belangrijke verschillen:

- `riseObserver` let op `<p>` elementen
- `riseObserver` voegt de `rise`-klasse toe aan kruisende elementen.

**Klik op Run**

- Scroll naar beneden om de rising animatie te zien wanneer de tekst `<p>` in het venster verschijnt.

--- /task ---

Vervolgens kun je een animatie toevoegen aan de kop en een andere animatie aan een afbeelding.
