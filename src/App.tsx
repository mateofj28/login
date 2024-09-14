// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import IndexPages from './components';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<IndexPages />} />
        {/* Agrega aquí otras rutas si es necesario */}
        <Route path="/" element={<IndexPages />} /> {/* Ruta por defecto */}
      </Routes>
    </Router>
  );
}

export default App;

