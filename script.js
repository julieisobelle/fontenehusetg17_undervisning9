console.log('Hello World!');
/*
null = noe som ikke finnes = feil id-navn sjekk for skrivefeil
nøkkelord må ha en console.log for å bekrefte riktig kode
*/


/* H = Hent
const = variabel nøkkelord
hamburgerIcon = variabel navn
= = lagre/identifisere som
document = HTML-dokumentet alle .html
.querySelector() = JavaScript-metode . som henter en selektor med ()
#hamburgerIcon = HTML-element med det id-navnet 

Setter opp en variabel som henter et element fra HTML */

/*                    document.getElementById("hamburgerIcon"); */
const hamburgerIcon = document.querySelector("#hamburgerIcon");
console.log(hamburgerIcon);

/*
.addEventListener() = Legger til interaktivitet på nettsiden
"click" = Hva lytter nettleseren til?
, function = Hva skal skje etter lyttet  */
hamburgerIcon.addEventListener("click", function () {
    console.log("Noe er klikket på");

    const navList = document.querySelector("#navList");
    console.log(navList);

    /*
    .classList = Referer til alle klassenavn i koden
    .toggle() = Skrur av og på klassenavnet i () */
    navList.classList.toggle("navHamburgerList");
});