import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './index'; // Die Hauptseite
import Comments from './comments'; // Die Seite zu den Kommentaren

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/index" element={<Home />} />
                <Route path="/comments" element={<Comments />} />
            </Routes>
        </Router>
    );
}

export default App;