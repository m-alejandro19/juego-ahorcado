let word:string [] = [
    'ANTIGUA Y BARBUDA',
    'ARGENTINA',
    'BAHAMAS',
    'BARBADOS',
    'BELICE',
    'BOLIVIA',
    'BRASIL',
    'CANADA',
    'CHILE',
    'COLOMBIA',
    'COSTA RICA',
    'CUBA',
    'DOMINICA',
    'ECUADOR',
    'EL SALVADOR',
    'ESTADOS UNIDOS',
    'GRANADA',
    'GUATEMALA',
    'GUYANA',
    'HAITI',
    'HONDURAS',
    'JAMAICA',
    'MEXICO',
    'NICARAGUA',
    'PANAMA',
    'PARAGUAY',
    'PERU',
    'REPUBLICA DOMINICANA',
    'SANTA LUCIA',
    'SAN VICENTE Y LAS GRANADINAS',
    'SURINAM',
    'TRINIDAD Y TOBAGO',
    'URUGUAY',
    'VENEZUELA'
];

export const getRandomWord = () => {
    
    const randomIndex = Math.floor(Math.random() * word.length);

    return word[randomIndex];
};
