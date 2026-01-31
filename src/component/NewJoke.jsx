export default function NewJoke(prop){
    return(
        <>
        {prop.setup && <p className="setup">Setup:{prop.setup}</p>}
        <p className="punchline">Punchline: {prop.punchline}</p>
        </>

    )
}

//  <>
//             {prop.setup && <p className="setup">Setup: {prop.setup}</p>}
//             <p className="punchline">Punchline: {prop.punchline}</p>
//             <hr />
//         </>