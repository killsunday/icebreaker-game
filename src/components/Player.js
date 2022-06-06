export const Player = (props) => {
    return (
        <li key={`player-item-${props.playerName.toLowerCase()}`} className={props.isActive ? 'active' : ''}> 
            <span className={`player-color color-${props.playerColor}`}></span>
            {props.playerName}
        </li>
    )
}