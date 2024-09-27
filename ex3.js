const inscriptions = [ 
    { id: 10, nom: 'ALAMI', filiere: 'DEVOWFS', frais: 400 }, 
    { id: 11, nom: 'RAJI', filiere: 'DEVOWFS', frais: 500 }, 
    { id: 12, nom: 'NAJI', filiere: 'DEVOWFS', frais: 600 }, 
    { id: 13, nom: 'IBRAHIMI', filiere: 'DEVOWFS', frais: 700 } 
];

const pureAppendInscription = (newInscription, inscriptions) => {
    return [...inscriptions, newInscription];
};

const newInscription = { id: 14, nom: 'EL Haouil', filiere: 'DEVOWFS', frais: 800 };

const newList = pureAppendInscription(newInscription, inscriptions);

const TotalFrais =newList.reduce((acc,inscription)=>{
   return acc+=inscription.frais
},0)
console.log(TotalFrais)
console.log(newList); 
console.log(inscriptions); 
