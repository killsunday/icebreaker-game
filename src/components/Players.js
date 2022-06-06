import { useState } from 'react';
import { Player } from "../components/Player.js";

export const Players = (props) => {
    const [ playerName, setPlayerName ] = useState("");

    const handleChange = (e) => {
        setPlayerName(e.currentTarget.value)
    }
    
    const handleKeyDown = (e) => {
        if(e.keyCode === 13 && e.currentTarget.value.trim() !== "") {
            e.preventDefault();
            props.onAddPlayer(playerName.trim());
            
            setPlayerName("");
        }
     }

    return (
        <div className="players">
            <h3>Players</h3>
            <ul className="player-list">
                {props.players.length !== 0 && props.players.map((player, index) => {
                    return (
                        <Player key={`player-${player.playerName}`} isActive={props.currentPlayerIndex === index} playerName={player.playerName} playerColor={player.playerColor} />
                    )
                })}
            </ul>
            <p>
                <button className="next-player-button" onClick={props.onSwitchPlayer}>Next Player</button>
            </p>
            {props.players.length < 10 && <input type="text" placeholder="Enter a players name..." value={playerName} onChange={handleChange} onKeyDown={handleKeyDown} />}
        </div>
    )
}