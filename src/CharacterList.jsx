import { useState } from 'react';
import { characters } from './characters';
import { useNavigate } from 'react-router-dom';

const CharacterList = () => {
    const [SelectedChar, setSelectedChar] = useState(null);
    const navigate = useNavigate();

    console.log(characters);
    return(
        <div>
            <h1>캐릭터 목록</h1>
            {characters.map((char) => (
                <div 
                    key={char.id}
                    onClick={() => {
                        setSelectedChar(SelectedChar?.id === char.id ? null : char);
                    }}
                >
                    <strong>{char.name}</strong>
                    {SelectedChar?.id === char.id && (
                        <div>
                            <p>{char.job}</p>
                            <p>LV.{char.level}</p>
                            <button onClick={(e) => {
                                e.stopPropagation();
                                navigate('/game', { state: {char:SelectedChar}}) 
                                /*페이지 이동 시 키(char)의 SelectedChar를 갖고감*/
                                }}>게임 시작</button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
export default CharacterList;