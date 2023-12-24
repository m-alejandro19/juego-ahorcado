let word:string [] = [
    'Antigua y Barbuda',
    'Argentina',
    'Bahamas',
    'Barbados',
    'Belice',
    'Bolivia',
    'Brasil',
    'Canadá',
    'Chile',
    'Colombia',
    'Costa Rica',
    'Cuba',
    'Dominica',
    'Ecuador',
    'El Salvador',
    'Estados Unidos',
    'Granada',
    'Guatemala',
    'Guyana',
    'Haití',
    'Honduras',
    'Jamaica',
    'México',
    'Nicaragua',
    'Panamá',
    'Paraguay',
    'Perú',
    'República Dominicana',
    'San Cristóbal y Nieves',
    'San Vicente y las Granadinas',
    'Santa Lucía',
    'Surinam',
    'Trinidad y Tobago',
    'Uruguay',
    'Venezuela'
];

export const getRandomWord = () => {
    
    const randomIndex = Math.floor(Math.random() * word.length);

    return word[randomIndex];
};
