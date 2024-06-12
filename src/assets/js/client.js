document.addEventListener('DOMContentLoaded', () => {
    const addClientForm = document.getElementById('addClientForm');
    const clientList = document.getElementById('clientList');

    addClientForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const client = {
            nom: document.getElementById('nom').value,
            prenom: document.getElementById('prenom').value,
            adresse: document.getElementById('adresse').value,
            numeroTelephone: document.getElementById('numeroTelephone').value,
        };

        // Appel à l'API pour ajouter un client (remplacer l'URL par votre endpoint)
        fetch('http://localhost:8080/clients/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(client),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Client ajouté:', data);
            addClientToList(data);
            addClientForm.reset();
        })
        .catch((error) => {
            console.error('Erreur:', error);
        });
    });

    // Fonction pour ajouter un client à la liste
    function addClientToList(client) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${client.nom}</td>
            <td>${client.prenom}</td>
            <td>${client.adresse}</td>
            <td>${client.numeroTelephone}</td>
            <td>
                <button class="btn btn-sm btn-info">Éditer</button>
                <button class="btn btn-sm btn-danger">Supprimer</button>
            </td>
        `;
        clientList.appendChild(row);
    }

    // Charger la liste des clients au démarrage de la page
    fetch('http://localhost:8080/clients/')
        .then(response => response.json())
        .then(data => {
            data.forEach(client => addClientToList(client));
        })
        .catch((error) => {
            console.error('Erreur:', error);
        });
});