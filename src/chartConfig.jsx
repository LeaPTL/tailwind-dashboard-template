// chartConfig.jsx

export const chartOptions = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Graphique des Ventes'
        },
        tooltip: {
            callbacks: {
                label: function (context) {
                    return `${context.dataset.label}: ${context.raw}`;
                }
            }
        }
    },
    scales: {
        x: {
            type: 'category',  // Assure-toi que c'est bien une échelle de type catégorie pour les labels
            title: {
                display: true,
                text: 'Mois'  // Légende de l'axe X
            }
        },
        y: {
            beginAtZero: true,  // L'axe Y commence à 0
            title: {
                display: true,
                text: 'Ventes'  // Légende de l'axe Y
            }
        }
    }
};

// Valeurs par défaut du graphique
export const defaultChartData = {
    labels: [], // Initialement vide, les labels seront ajoutés après réception des données
    datasets: [
        {
            label: 'Ventes',
            data: [], // Initialement vide, les données seront ajoutées après réception des données
            fill: false,
            borderColor: 'rgb(75, 192, 192)', // Couleur de la ligne
            tension: 0.1
        }
    ]
};
