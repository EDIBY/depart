const nom = 'Awa'; // Type : string
const budget = 50000; // Type : number ; unité : FCFA
const transportTexte = '12500'; // Type : string ; unité : FCFA
const alimentationTexte = '18300'; // Type : string ; unité : FCFA
const loisirsTexte = '7500'; // Type : string ; unité : FCFA

// TODO : convertissez les trois dépenses en nombres.
const transport = Number(transportTexte); // Type : number ; unité : FCFA
const alimentation = Number(alimentationTexte); // Type : number ; unité : FCFA
const loisirs = Number(loisirsTexte); // Type : number ; unité : FCFA

// TODO : calculez le total, le budget restant et budgetRespected.
const totalDepenses = transport + alimentation + loisirs; // Type : number ; unité : FCFA
const budgetRestant = budget - totalDepenses; // Type : number ; unité : FCFA
const budgetRespected = budgetRestant >= 0; // Type : boolean

// TODO : affichez le rapport uniquement avec des littéraux de gabarit.
console.log(`Nom : ${nom}`);
console.log(`Budget : ${budget}`);
console.log(`trois dépenses : ${transport}, ${alimentation}, ${loisirs}`);
console.log(`Total : ${totalDepenses}`);
console.log(`Reste : ${budgetRestant}`);
console.log(`état du budget : ${budgetRespected}`);

