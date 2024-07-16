const fs = require('fs');
const path = require('path');

// Chemin vers le fichier swagger.json
const swaggerFilePath = path.resolve(__dirname, 'swagger.json');

// Fonction pour lire et traiter le fichier swagger.json
function processSwagger(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Erreur lors de la lecture du fichier ${filePath}:`, err);
      return;
    }

    // Parse le contenu JSON
    try {
      const swaggerData = JSON.parse(data);
      console.log('Contenu du fichier swagger.json:', swaggerData);
      // Ajoutez ici le traitement spécifique de votre fichier JSON
    } catch (parseErr) {
      console.error('Erreur lors de l\'analyse du JSON:', parseErr);
    }
  });
}

// Appel de la fonction pour traiter le fichier swagger.json
processSwagger(swaggerFilePath);