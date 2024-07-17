const fs = require('fs');
const path = require('path');

const swaggerPath = path.join(__dirname, 'swagger.json');

fs.readFile(swaggerPath, 'utf8', (err, data) => {
    if (err) {
        console.error('Erreur lors de la lecture du fichier:', err);
        return;
    }

    if (data.length === 0) {
        console.error('Le fichier swagger.json est vide.');
        return;
    }

    console.log('Contenu du fichier swagger.json:', data);

    try {
        const swagger = JSON.parse(data);
        console.log('Le JSON a été analysé avec succès.');
        // Traitez le fichier swagger ici
    } catch (parseError) {
        console.error('Erreur lors de l\'analyse du JSON:', parseError);
    }
});