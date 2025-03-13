## Afbeeldingen traag laden

In deze stap verbeter je de browserprestaties door afbeeldingen alleen te laden wanneer ze nodig zijn.

<iframe src="https://editor.raspberrypi.org/nl-NL/embed/viewer/animated-story-step3" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### Waarom traag laden?

Afbeeldingen kunnen grote bestandsgroottes hebben en veel data verbruiken wanneer je een webpagina bezoekt.

Wanneer je een webpagina opent, worden **alle** afbeeldingen op de pagina geladen. Dit kan veel bandbreedte vergen.

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
De hoeveelheid data (bits) die via een computerverbinding kan worden verzonden, wordt de <span style="color: #0faeb0">**bandbreedte**</span>genoemd. Het gebruik van veel bandbreedte kan ervoor zorgen dat pagina's langzaam laden voor mensen met een slechte verbinding, of meer geld kosten. Het verminderen van het gebruik van bandbreedte maakt websites toegankelijker en gebruiksvriendelijker.
</p>

### Voeg een nieuw kenmerk toe aan elk afbeeldingselement

Het `src`-kenmerk voor alle afbeeldingselementen in `index.html` is ingesteld op `spinner.gif`.

Dit betekent dat wanneer de pagina wordt geladen, de enige afbeelding die geladen moet worden `spinner.gif` is.

--- task ---

Open het `index.html` bestand.

Voeg in elk `<img>`-element een `data-src`-kenmerk toe en stel de waarde ervan in op de relevante afbeelding.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 11
line_highlights: 19, 23, 27, 31, 35
---

  <body>
    <main>
      <section class="garden">
        <div id="bounce">OMLAAG SCROLLEN</div>
      </section>
      <p id="hideBounce">
        Langzaam maar zeker glijdt Sammy voorbij, waarbij hij een glanzend spoor achterlaat terwijl hij de wonderen van de tuin verkent.
        </p>
      <img src="spinner.gif" data-src="snail.svg" />
      <p>
        Maak kennis met Buzz Bee, een kleine ontdekkingsreiziger met gele en zwarte strepen die graag rond bloemen zoemt en zoete nectar verzamelt om er heerlijke honing van te maken.
      </p>
      <img src="spinner.gif" data-src="bee.png" />
      <p>
        Vlakbij fladdert Bella, met haar felgekleurde vleugels vol prachtige kleuren, en ze danst van bloem naar bloem, overal waar ze komt brengt ze vreugde.
      </p>
      <img src="spinner.gif" data-src="butterfly.png" />
      <p>
        En dan is er nog Lucy, een klein rood lieveheersbeestje met zwarte stippen, dat dol is op verstoppertje spelen in de tuin.
      </p>
      <img src="spinner.gif" data-src="ladybug.png" />
      <p>
        En last but not least is er Iggy, een mysterieuze vriend die altijd klaar is voor een nieuw avontuur.
      </p>
      <img src="spinner.gif" data-src="insect.png" />
      <p>
        Samen vormen ze een gezellige vriendengroep, klaar om op spannende avonturen te gaan!
      </p>
    </main>
  </body>

--- /code ---

**Klik op Run**

- Scroll naar beneden. Zie je de afbeeldingen die je hebt toegevoegd?

De afbeeldingen die je hebt toegevoegd worden niet weergegeven. Alle afbeeldingen zijn nog steeds `spinner.gif`. Dit komt doordat de eigenschap `src` bepaalt welke afbeelding moet worden weergegeven.

--- /task ---

### Elk afbeeldingselement observeren

Je kunt JavaScript gebruiken om elke afbeelding op de pagina te observeren.

--- task ---

Open het `scripts.js` bestand.

Maak een constante (`const`) met de naam `trageAfbeeldingen`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 10
line_highlights: 11
---

// Afbeelding observer
const lazyImages = document.querySelectorAll("img");

--- /code ---

De constante `lazyImages` bevat een array van alle `<img>` elementen op de pagina.

In de code heet de pagina het `document`.

**Tip:** Scheid de verschillende waarnemers door middel van een regelafbreking (in dit geval, op regel 12).

--- /task ---

### Maak een nieuwe intersection observator met de naam imageObserver

`imageObserver` wordt gebruikt om een reeks elementen (`entries`) te bekijken ('observeren').

--- task ---

Open het `scripts.js` bestand.

Maak een observator met de naam `imageObsever`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 10
line_highlights: 12-14
---

// Afbeeldingswaarnemer
const lazyImages = document.querySelectorAll("img");
const imageObserver = new IntersectionObserver((entries) => {

});

--- /code ---

**Tip:** De regelafbreking op regel 13 bevat de callback.

--- /task ---

### Vertel imageObserver om te observeren

Roep `imageObserver` aan om elk `<img>` element in het `document` te `observeren`.

--- task ---

Gebruik een `forEach`-lus om elk afbeeldingselement (in het `lazyImages`-array) te bekijken.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 10
line_highlights: 15
---

// Afbeeldingswaarnemer
const lazyImages = document.querySelectorAll("img");
const imageObserver = new IntersectionObserver((entries) => {

});
lazyImages.forEach((lazyImage) => imageObserver.observe(lazyImage));

--- /code ---

--- /task ---

--- collapse ---

---
title: Wat is een forEach lus?
---

In JavaScript wordt een `forEach`-lus gebruikt om elk item in een array te doorlopen en met elk item iets te doen.

--- /collapse ---

### De callback maken

De callback moet elke afbeelding die het heeft waargenomen, controleren.

--- task ---

Gebruik een `forEach`-lus om de actie aan te roepen die relevant is voor elke afbeelding die de observer heeft 'waargenomen'.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 10
line_highlights: 13-17
---

// Afbeeldingswaarnemer
const lazyImages = document.querySelectorAll("img");
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(
    (entry) => {

    }
  );
});
lazyImages.forEach((lazyImage) => imageObserver.observe(lazyImage));

--- /code ---

**Tip:** In tegenstelling tot bounceObserver moet imageObserver elke invoer in de array controleren. Daarom is een `forEach`-lus vereist.

**Tip:** De regelafbreking op regel 15 bevat de actie die moet worden uitgevoerd op elke waargenomen afbeelding (`entry`).

--- /task ---

De `isIntersecting`-methode wordt gebruikt om te controleren of een `<img>`-element (`entry`) de viewport is binnengekomen.

--- task ---

Maak een voorwaardelijke instructie om te controleren of een waargenomen item in het array in de viewport staat.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 10
line_highlights: 15-17
---

// Afbeeldingswaarnemer
const lazyImages = document.querySelectorAll("img");
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(
    (entry) => {
      if (entry.isIntersecting) {
        
      }
    }
  );
});
lazyImages.forEach((lazyImage) => imageObserver.observe(lazyImage));

--- /code ---

**Tip:** De regelafbreking op regel 16 bevat de actie die moet worden uitgevoerd op een afbeelding (`item`) die in de viewport is binnengekomen.

--- /task ---

Als een afbeelding in de array in de viewport is, wordt de waarde van het `src` attribuut (op dit moment `spinner.gif`) veranderd naar de waarde van het 'data-src' attribuut (het afbeeldingsbestand dat je wilt laden).

--- task ---

Maak de actie aan om de waarde `src` te veranderen naar `data-src`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 10
line_highlights: 16-19
---

// Afbeeldingswaarnemer
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

--- /code ---

--- collapse ---

---
title: Waarom is er een setTimeout?
---

De imageObserver gebruikt `setTimeout` met een waarde van `1000` (ms). Hiermee wordt een pauze van één seconde toegevoegd voordat de waarde van het kenmerk `src` wordt verwisseld met de waarde van het kenmerk `data-src`.

Als dit niet het geval is, dan zal de omwisseling wellicht te snel plaatsvinden om het te kunnen zien!

--- /collapse ---

**Klik op Run**

- Scroll naar beneden en bekijk hoe elke afbeelding wordt geladen zodra deze in het venster verschijnt (na een pauze van één seconde).

--- /task ---

--- collapse ---

---
title: De afbeeldingen worden niet geladen
---
- Zorg ervoor dat `img`, niet `<img>` tussen de haakjes op regel 11 staat.
- Controleer of er een komma `,` na regel 17 staat.
- Controleer of er een puntkomma `;` aan het einde van de regels 19, 22, 23 en 24 staat.

--- /collapse ---

### Stop met observeren

Je moet stoppen om de afbeelding elementen te observeren nadat het `src` attribuut veranderd is naar de waarde van het `data-src` attribuut.

Hiermee voorkom je geheugen- of prestatieproblemen.

--- task ---

Voeg de `unobserve()`-methode toe aan de callback.

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 10
line_highlights: 20
---

// Afbeeldingswaarnemer
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

--- /code ---

**Tip:** Op regel 20 verwijst de eigenschap `.target` van de `entry` naar het element dat wordt waargenomen. Het is het element dat de viewport binnenkomt of verlaat en het element dat je niet meer wilt volgen.

--- /task ---

Vervolgens ga je een nieuwe webpagina en de navigatiebalk aan je website toevoegen.
