export default function Counter({onSetDiff, number, diff, onIncrease, onDecrease}) {
    const onChange = (e)=>{
        onSetDiff(parseInt(e.target.value));
    }
    return (
        <div>
            <h1>{number}</h1>
            <div>
                <input type="number" value={diff} min="1" onChange={onChange} />
                <button onClick={onDecrease}>-</button>
                <button onClick={onIncrease}>+</button>
            </div>
        </div>
    );
}