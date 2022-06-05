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
            props.onAddPlayer(playerName);
            
            console.log("what?");
            setPlayerName("");
        }
     }

    return (
        <div className="players">
            <ul className="player-list">
                {props.players.length !== 0 && props.players.map((player) => {
                    return (
                        <Player key={`player-${player.playerName}`} playerName={player.playerName} playerColor={player.playerColor} />
                    )
                })}
            </ul>
            {props.players.length < 10 && <input type="text" value={playerName} onChange={handleChange} onKeyDown={handleKeyDown} />}
        </div>
    )
}