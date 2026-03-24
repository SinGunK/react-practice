import { useState } from 'react';
import { characters } from './characters';
import { useNavigate } from 'react-router-dom';

const CharacterList = () => {
    const [chosenChar, setchosenChar] = useState(null);
    const navigate = useNavigate();

    console.log(characters);
    return(
        <div>
            <h1>캐릭터 목록</h1>
            {characters.map((char) => (
                <div 
                    key={char.id}
                    onClick={() => {
                        setchosenChar(chosenChar?.id === char.id ? null : char);
                    }}
                >
                    <strong>{char.name}</strong>
                    {chosenChar?.id === char.id && (
                        <div>
                            <p>{char.job}</p>
                            <p>LV.{char.level}</p>
                            <button onClick={() => navigate('/game')}>게임 시작</button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
export default CharacterList;