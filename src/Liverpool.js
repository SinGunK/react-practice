import { useState } from 'react';
import './Style.css';
import { playerInfo } from './playerInfo';

export default function Liverpool() {
    const [players, setPlayers] = useState(playerInfo);

    return (
        <div>
            <h4>명단</h4>
            {players.map((list) => (
            <div key = {list.no} className="player-card">
                <img
                    className="avatar"
                    src={list.url || "https://via.placeholder.com/150"}
                    alt={list.name}
                />
            </div>
        ))}
        </div>
    );
}