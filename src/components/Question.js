export const Question = (props) => {
    return (<div className={`question ${props.flipped ? 'flipped' : ''}`} onClick={props.onClick} key={`question-${props.index}`}>
        <div className="card-inner">
            <div className="question-number card-front">
                <p>{props.index + 1}</p>
            </div>
            <div className={`question-text card-back ${props.color ? "card-" + props.color : ''}`}>
                <p>{props.question}</p>
            </div>
        </div>
    </div>);
}