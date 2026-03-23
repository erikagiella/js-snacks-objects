
# Snack 1: Bici da Corsa - Peso Minore

## Obiettivo
Creare un array di oggetti che descrivono bici da corsa con nome e peso, quindi stampare la bici con peso minore.

## Proprietà Oggetto
- `nome`: string (nome della bici)
- `peso`: number (peso in kg)

## Soluzione

```js
// Array di oggetti bici
const bici = [
    { nome: "Bici Rossi", peso: 6.5 },
    { nome: "Bici Blu", peso: 5.8 },
    { nome: "Bici Nera", peso: 7.2 },
    { nome: "Bici Rossa", peso: 5.3 }
];

// Trovare la bici con peso minore
const biciPiuLeggera = bici.reduce((min, corrente) => 
    corrente.peso < min.peso ? corrente : min
);

console.log("Bici più leggera:", biciPiuLeggera);
```

## Soluzione Alternativa (sort)
```js
const ordinataPeso = [...bici].sort((a, b) => a.peso - b.peso);
console.log("Bici più leggera:", ordinataPeso[0]);
```
