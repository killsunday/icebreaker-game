export const Player = (props) => {
    return (
        <li key={`player-item-${props.playerName}`}> <span className={`player-color color-${props.playerColor}`}></span> {props.playerName}</li>
    )
}