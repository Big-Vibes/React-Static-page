export default function TestPad(prop){
    return (
        <button
        style={{backgroundColor : prop.color}}
        className={ prop.on ? "on" : undefined}
        onClick={()=> prop.HandleTurn(prop.id)}        
        >
        </button>
    )
}