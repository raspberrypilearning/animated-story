\--- question ---

---

## legend: Vraag 3 van 3

Hoe reageert de intersection observer als een waargenomen element de viewport binnenkomt of verlaat?

\--- choices ---

- ( ) Het reageert door de breedte en hoogte van de viewport te wijzigen.

  \--- feedback ---

  De intersection observer past de viewportgrootte niet rechtstreeks aan. Het verwerkt zichtbaarheidswijzigingen door te reageren met een of meer acties.

  \--- /feedback ---

- ( ) Het reageert door de CSS-stijlen van het waargenomen element te wijzigen.

  \--- feedback ---

  Niet helemaal. De intersection observer wijzigt de CSS-stijlen niet rechtstreeks. In plaats daarvan wordt er een specifieke actie uitgevoerd waarmee je de zichtbaarheidswijzigingen kunt verwerken.

  \--- /feedback ---

- (x) Het reageert door een callback-functie aan te roepen.

  \--- feedback ---

  Juist! De intersection observer meldt wijzigingen door een callbackfunctie aan te roepen die je schrijft bij het instellen van de observer. Deze callback wordt geactiveerd wanneer het waargenomen element de viewport binnenkomt of verlaat.

  \--- /feedback ---

\--- /choices ---

\--- /question ---
