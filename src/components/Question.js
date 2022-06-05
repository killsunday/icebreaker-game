export const Question = (props) => {
    return (<div class={`question ${props.flipped ? 'flipped' : ''}`} onClick={props.onClick} key={`question-${props.index}`}>
        <div class="card-inner">
            <div class="question-number card-front">
                <p>{props.index + 1}</p>
            </div>
            <div class={`question-text card-back ${props.color ? "card-" + props.color : ''}`}>
                <p>{props.question}</p>
            </div>
        </div>
    </div>);
}