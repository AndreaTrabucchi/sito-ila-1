# Sito Dott.ssa Ilaria Viganò

Prototipo statico pronto per GitHub Pages.

## File principali

- `index.html`: landing page completa
- `styles.css`: stile grafico responsive con palette rosa antico
- `script.js`: menu mobile leggero
- `assets/`: immagini ottimizzate
- `privacy.html` e `cookie.html`: segnaposto da verificare prima della pubblicazione
- `robots.txt` e `sitemap.xml`: da aggiornare con il dominio reale

## Da sostituire prima della pubblicazione

Cerca nel progetto:

- `INSERISCI_NUMERO_WHATSAPP_SOLO_CIFRE`
- `INSERISCI_EMAIL_CONFERMATA`
- `INSERISCI_DOMINIO`

Formato WhatsApp corretto:
`https://wa.me/39NUMERO` senza spazi, senza +, senza zeri o simboli extra.

## Note

La versione base non usa form, font esterni, Google Maps, analytics o script di tracciamento.
Questo riduce problemi privacy/cookie e rende il sito più veloce.


## Versione 2

Correzioni:
- hero desktop più compatta;
- immagine principale ritagliata meglio;
- H1 ridimensionato;
- allineamento hero corretto;
- responsive migliorato per tablet e smartphone;
- animazioni premium leggere con IntersectionObserver;
- rispetto di `prefers-reduced-motion`.


## Versione 3

Correzione più decisa della hero:
- immagine desktop trasformata in crop editoriale orizzontale/compatto;
- eliminato l'effetto figura intera gigante;
- immagine mobile separata e più controllata;
- hero più equilibrata su PC;
- mantenute animazioni premium leggere e accessibili.


## Versione 4

Correzione immagine:
- eliminata deformazione orizzontale della foto;
- nuovo crop naturale con proporzioni originali preservate;
- immagine desktop: `ilaria-vigano-hero-natural.jpg` (900x1029);
- immagine mobile: `ilaria-vigano-mobile-natural.jpg` (900x1090);
- CSS modificato per non forzare aspect-ratio sulla foto.


## Versione 5

Aggiornati contatti:
- WhatsApp: +39 324 83 60 568
- Link pulsanti WhatsApp: https://wa.me/393248360568
- Email: ilaaviga91@hotmail.it
- Link email: mailto:ilaaviga91@hotmail.it

Resta da sostituire prima della pubblicazione:
- `INSERISCI_DOMINIO` in `robots.txt` e `sitemap.xml`


## Versione 6

Aggiornamento font:
- Titoli: Fraunces
- Testi, menu e bottoni: Manrope
- Inseriti tramite Google Fonts per anteprima rapida.
- Nota privacy: l'uso di Google Fonts carica risorse esterne. Prima della pubblicazione definitiva valutare privacy/cookie oppure una soluzione locale/di sistema.


## Versione 7

Aggiunte premium:
- micro-barra tema fissa con tre simboli:
  - ◐ automatico in base all’ora del dispositivo
  - ☼ tema chiaro
  - ☾ tema scuro
- tema automatico: scuro dalle 20:00 alle 06:59, chiaro dalle 07:00 alle 19:59;
- salvataggio preferenza in localStorage;
- tema scuro coerente con rosa antico, antracite caldo e superfici morbide;
- barra progresso scroll superiore;
- header con micro-ombra allo scroll;
- micro-tilt sulla foto su desktop;
- hover premium su bottoni, card e FAQ;
- rispetto di prefers-reduced-motion.


## Versione 8

Direzione visuale: mix Botanica delicata + Zen / respiro.

Aggiunte:
- sfondo con orbs morbidi animati in stile respiro;
- decorazioni botaniche SVG leggere, senza immagini stock;
- linee zen astratte tra hero/metodo;
- piccoli segni decorativi nelle card destinatari;
- bordo interno leggerissimo su feature e contatti;
- micro-parallax botanico su desktop;
- compatibilità tema scuro;
- rispetto di prefers-reduced-motion.


## Versione 9

Ulteriore raffinamento premium:
- fascia valoriale Ascolto · Rispetto · Riservatezza · Collaborazione;
- petali astratti lentissimi nella hero;
- separatori organici morbidi tra sezioni;
- animazione di disegno delle linee botaniche/zen quando entrano in viewport;
- linea di percorso nella sezione metodo;
- micro-pulse sui numeri del metodo;
- shimmer leggero sugli elementi lista;
- CTA contatti con respiro luminoso molto sobrio;
- compatibilità tema scuro e prefers-reduced-motion.


## Versione 10

Ulteriore evoluzione premium:
- foto hero cliccabile;
- apertura foto in lightbox animata;
- chiusura con X, click sullo sfondo e tasto Esc;
- focus accessibile sul lightbox;
- blocco scroll pagina durante apertura;
- cornice botanica e sfondo blur;
- hint discreto “Apri foto” sulla hero;
- aura animata molto leggera intorno alla foto;
- spotlight sottile su card, step e FAQ al movimento del mouse;
- ottimizzazione tema scuro.
