import NewJoke from "./component/NewJoke"
import JokesData from "./component/JokesData"

const JokeTask = JokesData.map((item) => {
    return(
        <NewJoke 
        key= {item.id}
        setup = {item.Oue}
        punchline = {item.PLine}
        />
        )
    
})

export default function Task2(){
    return(
        {JokeTask}
    )
    
}

