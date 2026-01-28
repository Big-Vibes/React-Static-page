export default function TestPad(props){
    return (
        <button
        style={{backgroundColor : props.color}}
        className={ props.on ? "on" : undefined}
        onClick={()=> props.HandleTurn(props.id)}        
        >
        </button>
    )
}