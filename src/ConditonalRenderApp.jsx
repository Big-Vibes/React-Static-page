import ConditonalRendering from "./ConditonalRendering";
import JokesData from "./component/JokesData";

export default function CondtRApp(){  
    const ConJokes = JokesData.map((ConUseJoke)=>{
     return (<ConditonalRendering 
     key= {ConUseJoke.id}
     setup={ConUseJoke.Oue} 
     punchline={ConUseJoke.PLine} />
     
     )
    })
    // const JokeElement = JokesData.map((UseJoke)=>{
    //     return <Jokes setup={UseJoke.Oue} punchline={UseJoke.PLine} />
    // })

    return (
        <>
        {ConJokes}
        </>
    )
}