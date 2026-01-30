# Muistiinpano App
React-pohjainen muistiinpanosovellus, toteutettu osana opintojakson päättötyötä.

## Demo
https://notesapp-cyan-zeta.vercel.app/

## Kuvaus toiminnasta
Muistiinpano-app on sovellus, jonka avulla voit lisätä opintojaksoja ja liittää niihin muistiinpanoja ja tarkastella luotuja muistiinpanoja

## Käyttö

1. Asenna riippuvuudet komennolla:
npm install

2. käynnistä kehitysympäristö:
npm run dev

3. Avaa sovellus selaimessa osoitteessa:
http://localhost:5173/

## Keinoälyn käyttö

Hyödynsin keinoälyä tukena erityisesti tyylittelyssä, ideoinnissa ja ongelmanratkaisussa. Keinoälyä ei käytetty valmiiden ratkaisujen tuottamiseen, vaan se tarjosi vinkkejä ja suuntaa, joiden pohjalta toteutin toiminnallisuudet itse.

Käytin keinoälyä myös debuggauksen tukena virheiden paikantamisessa ja ratkaisemisessa. Esimerkiksi timestampin muotoilussa keinoäly auttoi ehdottamaan ratkaisua, jonka toimivuuden varmistin toteuttamalla ja testaamalla sen itse.

Kaikki ratkaisut on ymmärretty ja itse toteutettu.

## Projektin tila ja jatkokehitys

Tämä projekti on toteutettu opintojakson päättötyönä. Tavoitteena oli harjoitella Reactin perusperiaatteita sekä REST API:n käyttöä.

Sovellus on toimiva, mutta siinä on vielä joitakin pieniä puutteita. Mahdollisia jatkokehityskohteita ovat:

- Täysi responsiivisuus eri näyttöko'oille
- ID-arvojen yhtenäistäminen REST API:sta haettujen ja paikallisesti luotujen muistiinpanojen välillä
  - Paikallisesti luotujen muistiinpanojen ID:t perustuvat tällä hetkellä aikaleimaan
- Muistiinpanolistan suodatus
  - Tällä hetkellä muistiinpanolistauksen suodatusta ei voi palauttaa tilaan, jossa kaikki muistiinpanot ovat näkyvissä.


