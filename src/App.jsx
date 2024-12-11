import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import io from 'socket.io-client'; // Importer socket.io-client pour WebSocket
import './css/style.css';
import './charts/ChartjsConfig';  // Configuration Chart.js

// Import des pages
import Dashboard from './pages/Dashboard';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Connexion au serveur Flask
    const socket = io('http://127.0.0.1:5000');  // backend Flask

    // Lorsque des données sont reçues via WebSocket
    socket.on('real_time_data', (data) => {
      console.log('Données reçues en temps réel:', data);
    });

    // Nettoyer la connexion WebSocket lorsque le composant est démonté
    return () => {
      socket.disconnect();
    };
  }, []);  // Le tableau vide [] indique que useEffect s'exécute une seule fois lors du montage du composant

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]);  // Déclenché lors du changement de route

  return (
      <>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
        </Routes>
      </>
  );
}

export default App;
