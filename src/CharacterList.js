import { useState } from 'react';
import {characters} from './characters';

const CharacterList = () => {
    const [chosenChar, setchosenChar] = useState(null);
    console.log(characters);
    return(
        <div>
            <h1>캐릭터 목록</h1>
            {characters.map((char) => (
                <div 
                    key={char.id}
                    onClick={() => {
                        if(chosenChar?.id ===char.id) {
                            setchosenChar(null);
                        } else {
                            setchosenChar(char);
                        }
                    }}
                >
                    <strong>{char.name}</strong>
                    {chosenChar?.id === char.id && (
                        <div>
                            <p>{char.job}</p>
                            <p>LV.{char.level}</p>
                            <button>게임 시작</button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
export default CharacterList;