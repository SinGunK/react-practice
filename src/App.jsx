import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CharacterList from './CharacterList';
import GamePage from './GamePage';

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CharacterList />} />
                <Route path="/game" element={<GamePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;