## Verbeter je project

Als je tijd hebt, kun je:

- Voeg een andere pagina toe voor een tweede personage van de `index.html`-intropagina
- Verwijder de `setTimeout` van `imageObserver`
- Verbeter de browserprestaties door `unobserve` te gebruiken

\--- collapse ---

---

## title: Voeg de verhaalpagina toe voor Bella

\--- task ---

- **Klik** op de knop **+ Add file**.

![De knop 'Add file'.](images/addFile.png)

- Geef jouw nieuwe bestand de naam `bella.html` en klik op de knop **Add file**.

\--- /task ---

\--- task ---

Open het bestand `sammy.html`.

Selecteer alle HTML (Ctrl + A of Cmd + A).

Kopieer de geselecteerde HTML (Ctrl + C of Cmd + C).

Open het bestand `bella.html` en plak de HTML-code erin (Ctrl + V of Cmd + V).

\--- /task ---

\--- task ---

Wijzig de paginatitel.

## --- code ---

language: html
filename: bella.html
line_numbers: true
line_number_start: 6
line_highlights:
-----------------------------------------------------

```
<title>Bella</title>
```

\--- /code ---

\--- /task ---

\--- task ---

Voeg de nieuwe link toe aan de navigatiebalk op **alle drie** de HTML-pagina's.

## --- code ---

language: html
filename:
line_numbers: true
line_number_start: 13
line_highlights: 15
--------------------------------------------------------

```
  <a href="index.html">Inleiding</a>
      <a href="sammy.html">Sammy</a>
      <a href="bella.html">Bella</a>
```

\--- /code ---

\--- /task ---

\--- task ---

Open `bella.html`

Verander de `<h1>` tekst:

## --- code ---

language: html
filename: bella.html
line_numbers: true
line_number_start: 22
line_highlights:
-----------------------------------------------------

```
  <h1 id="hideBounce">Bella <br />De<br />Vlinder</h1>
```

\--- /code ---

\--- /task ---

\--- task ---

Voeg een verhaaltekst toe over Bella de vlinder.

## --- code ---

language: html
filename: bella.html
line_numbers: true
line_number_start: 23
line_highlights: 24
--------------------------------------------------------

```
  <p>
 In een zonnige tuin danst Bella de vlinder van bloem tot bloem, met op haar vleugels schitterende blauwe, oranje en roze kleuren.<br /><br />Elke sierlijke fladdering verspreidde vreugde terwijl ze verborgen hoeken verkende en de schoonheid ontdekte die haar kleine wereld vulde.<br /><br />Toen Bella andere vlinders tegenkwam, deed ze mee aan een vlinderballet en creëerde een levend meesterwerk in de lucht.<br /><br />De tuin omarmde haar en transformeerde elk moment in een viering van het leven.<br /><br />Net als Sammy de slak realiseerde Bella zich dat er zelfs in de kleinste hoeken van hun wereld geheimen en wonderen wachtten om ontdekt te worden.<br /><br />In dit zonnige paradijs was de tuin van Sammy en Bella gevuld met vreugde.
 </p>
```

\--- /code ---

Je kunt je eigen verhaal toevoegen om de pagina nog persoonlijker te maken!

\--- /task ---

\--- task ---

Verander het `<img>` element.

## --- code ---

language: html
filename: bella.html
line_numbers: true
line_number_start: 27
line_highlights:
-----------------------------------------------------

```
    <img id="butterfly" class="butterfly" src="butterfly.png" data-src="butterfly.png" alt="A cartoon butterfly" />
```

\--- /code ---

\--- /task ---

Je moet een nieuw JavaScript-bestand maken met de scripts die voor deze pagina vereist zijn.

\--- task ---

Maak een nieuw JavaScript-bestand dat de scripts bevat die relevant zijn voor `bella.html`.

- **Klik** op de knop **+ Add file**

![De knop 'Add file'.](images/addFile.png)

- Geef jouw nieuwe bestand de naam `bella.js` en klik op de knop **Add file**.

\--- /task ---

\--- task ---

Open het `sammy.js` bestand.

Kopieer de inhoud van `sammy.js` naar `bella.js`.

\--- /task ---

\--- task ---

Vervang `snailObserver` door `butterflyObserver`.

## --- code ---

language: js
filename: bella.js
line_numbers: true
line_number_start: 16
line_highlights: 16, 17, 19, 24
--------------------------------------------------------------------

// Vlinder waarnemer
const butterflyObserver = new IntersectionObserver((entries) => {
if (entries[0].isIntersecting) {
entries[0].target.classList.add("startFly");
}
},
{ threshold: 1 }
);
butterflyObserver.observe(document.querySelector("#butterfly"));

\--- /code ---

\--- /task ---

Je moet het bestand `bella.js` koppelen aan `bella.html`.

\--- task ---

Open het `bella.html` bestand.

Wijzig het `src`-kenmerk van het tweede `<script>`-element van `src="sammy.js"` in `src="bella.js"`.

## --- code ---

language: html
filename: bella.html
line_numbers: true
line_number_start: 31
line_highlights: 32
--------------------------------------------------------

  <script type="text/javascript" src="scripts.js"></script>

  <script type="text/javascript" src="bella.js"></script>

\--- /code ---

\--- /task ---

\--- task ---

Open het `style.css` bestand en kopieer de `.snail`-selector, plak deze vervolgens onder de `.startCrawl`-selector.

Geef deze de naam `.butterfly`.

Voeg de eigenschap `animation` toe.

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 107
line_highlights: 112, 121
--------------------------------------------------------------

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

/\* NAV-BALK \*/

\--- /code ---

\--- /task ---

\--- task ---

Voeg een nieuwe selector toe met de naam `.startFly`.

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 124
line_highlights: 124 - 128
---------------------------------------------------------------

.startFly {
opacity: 1;
animation: fly 2s infinite;
}

/\* NAV-BALK \*/

\--- /code ---

\--- /task ---

Maak een nieuwe animatie voor Bella.

\--- task ---

Zoek het commentaar `/* ANIMATIES */`.

Voeg een nieuwe `@keyframes`-animatie toe met de naam 'fly', die past bij het vlinder personage.

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 51
line_highlights: 53 - 76
-------------------------------------------------------------

/\* ANIMATIES \*/

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

\--- /code ---

\--- /task ---

\--- /collapse ---

\--- collapse ---

---

## title: Verwijder setTimeout

Je kunt de `setTimeout` in `imageObserver` verwijderen, omdat je niet wilt dat mensen de spinner-afbeelding zien als dat niet nodig is.

\--- task ---

Open het `scripts.js` bestand.

Verwijder `setTimeout`.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 10
line_highlights: 16
--------------------------------------------------------

// Afbeeldingswaarnemer
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

\--- /code ---

\--- /task ---

\--- /collapse ---

\--- collapse ---

---

## title: Gebruik unobserve om browserprestaties te verbeteren

Je hebt de `unobserve` methode in `imageObserver` gebruikt.

Voeg de `unobserve`-methode toe aan andere intersection observer-callbacks.

\--- task ---

Open het `scripts.js` bestand.

Voeg de `unobserve`-methode toe aan de callback in `bounceObserver`.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 1
line_highlights: 6
-------------------------------------------------------

// Verberg bounce observer
const bounceObserver = new IntersectionObserver((entries) => {
if (entries[0].isIntersecting) {
console.log("BOUNCE TRIGGER IN VIEWPORT");
document.querySelector("#bounce").style.opacity = 0;
bounceObserver.unobserve(entries[0].target);
}
});
bounceObserver.observe(document.querySelector("#hideBounce"));

\--- /code---

\--- /task ---

\--- task ---

Open het `sammy.js` bestand.

Voeg de `unobserve`-methode toe aan de callback in `riseObserver`.

## --- code ---

language: js
filename: sammy.js
line_numbers: true
line_number_start: 1
line_highlights: 5
-------------------------------------------------------

// Stijgende tekst waarnemer
const riseObserver = new IntersectionObserver((entries) => {
if (entries[0].isIntersecting) {
entries[0].target.classList.add("rise");
riseObserver.unobserve(entries[0].target);
}
});
riseObserver.observe(document.querySelector("p"));

\--- /code---

\--- /task ---

\--- task ---

Voeg de `unobserve`-methode toe aan de callback in `snailObserver`.

## --- code ---

language: js
filename: sammy.js
line_numbers: true
line_number_start: 16
line_highlights: 20
--------------------------------------------------------

// Slakwaarnemer
const snailObserver = new IntersectionObserver((entries) => {
if (entries[0].isIntersecting) {
entries[0].target.classList.add("startCrawl");
snailObserver.unobserve(entries[0].target);
}
},
{ threshold: 1 }
);
snailObserver.observe(document.querySelector("#snail"));

\--- /code---

\--- /task ---

\--- task ---

Open het `bella.js` bestand.

Voeg de `unobserve`-methode toe aan de callback in `riseObserver`.

## --- code ---

language: js
filename: bella.js
line_numbers: true
line_number_start: 1
line_highlights: 5
-------------------------------------------------------

// Stijgende tekst waarnemer
const riseObserver = new IntersectionObserver((entries) => {
if (entries[0].isIntersecting) {
entries[0].target.classList.add("rise");
riseObserver.unobserve(entries[0].target);
}
});
riseObserver.observe(document.querySelector("p"));

\--- /code---

\--- /task ---

\--- task ---

Voeg de `unobserve`-methode toe aan de callback in `butterflyObserver`.

## --- code ---

language: js
filename: bella.js
line_numbers: true
line_number_start: 16
line_highlights: 20
--------------------------------------------------------

// Vlinderwaarnemer
const butterflyObserver = new IntersectionObserver((entries) => {
if (entries[0].isIntersecting) {
entries[0].target.classList.add("startFly");
butterflyObserver.unobserve(entries[0].target);
}
},
{ threshold: 1 }
);
butterflyObserver.observe(document.querySelector("#butterfly"));

\--- /code---

\--- /task ---

\--- /collapse ---

\--- collapse ---

---

## title: Bekijk het verbeterde project

<iframe src="https://editor.raspberrypi.org/en/embed/viewer/animated-story-upgraded?page=bella.html" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

Je kunt het [geüpgrade project hier](https://editor.raspberrypi.org/en/projects/animated-story-upgraded){:target="_blank"} bekijken.

\--- /collapse ---
