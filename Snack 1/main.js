

// Inizializzo l'array di oggetti bici
const bici = [
    {
        nome: 'Bici Rossa',
        peso: 780,
    },
    {
        nome: 'Bici Blu',
        peso: 1020,
    },
    {
        nome: 'Bici Gialla',
        peso: 860,
    },
    {
        nome: 'Bici Verde',
        peso: 735,
    },
    {
        nome: 'Bici Bianca',
        peso: 915,
    },
]


// Inizializzo le variabili biciPiuLeggera pesoMinore con il primo id e peso
let biciPiuLeggera = bici[0].nome;
let pesoMinore = bici[0].peso;

// Ciclo l'array per trovare la bici con il peso minore
for (let i = 0; i < bici.length; i++) {
    const bicicletta = bici[i];
    if (bicicletta.peso < pesoMinore) {
        pesoMinore = bicicletta.peso;
        biciPiuLeggera = bicicletta.nome;
    }
}

// Stampo a schermo la bici più leggera chiamando la funzione stampaBiciLeggera
const biciEl = document.getElementById('biciLeggera');
biciEl.innerHTML = stampaBiciLeggera(biciPiuLeggera, pesoMinore);


// Creo una funzione per stampare la bici più leggera
function stampaBiciLeggera(biciPiuLeggera, peso) {
    return `<h4>
        La bicicletta più leggera è la n°${biciPiuLeggera},
        che pesa ${peso} grammi! 
    </h4>`
}



//BONUS

// Stampo a schermo l'elenco delle bici 
// selezione dell'elemento HTML in cui stampare l'elenco
const elencoBiciEl = document.getElementById('elencoBici');
// Chiamo la funzione per stampare l'elenco delle bici nell'elemento HTML
elencoBiciEl.innerHTML = stampaElencoBici(bici);

// Creo una funzione per stampare l'elenco delle bici
function stampaElencoBici(bici) {
    let ulEl = '<ul>';
    for (let i = 0; i < bici.length; i++) {
        const bicicletta = bici[i];
        ulEl += `<li>La ${bicicletta.nome} pesa ${bicicletta.peso} grammi</li>`;
    }
    ulEl += '</ul>';
    return ulEl;
}
