// import Top from "./component/Top";

// import PropsMake from "./component/PropsMake";
import Jokes from "./component/Jokes";
import JokesData from "./component/JokesData";


export default function Nav(){
    const JokeElement = JokesData.map((UseJoke)=>{
        return <Jokes 
        key = {UseJoke.id}
        setup={UseJoke.Oue} 
        punchline={UseJoke.PLine} 
        />
    })

   
    // return(
    //     <>
    //     <Top />
        {/* <Bodyy 
        img = {{  src: "https://scrimba.com/links/travel-journal-japan-image-url", 
            alt : "Mount Fuji"}}
            title={"Osun State"}
            country="Nigeria"
            googleMapsLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
            dates="12 Dec, 2025 - 25 Jan, 2026"
            text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."/> */}
      

        {/* For Joke  */}
        {JokeElement} 
        
        {/* For props lerning */}
        {/* <PropsMake 
        img="src\Image\mr-whiskerson.png"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
        Setup="This is my best joke"
        Punchline="Okay this is the joke"
        upvotes={10}
        isPun={true}
        comments={[
            {author: "", text: "", title: ""},
            {author: "", text: "", title: ""}
        ]}
        /> */}
        {/* <PropsMake
        img="src\Image\felix.png"
        name="Mr. Felix"
        phone="09000004"
        email="mr.Felix@catnap.meow"
        Setup="This is my best joke"
        Punchline="Okay this is the joke"
         /> */}
        {/* <PropsMake
        img="src\Image\fluffykins.png"
        name="Mr. fluffykins"
        phone="070223323"
        email="mr.fluffykins@catnap.meow"
        Setup="This is my best joke"
        Punchline="Okay this is the joke"
        /> */}
        {/* <PropsMake 
        img="src\Image\pumpkin.png"
        name="Mr. pumpkin"
        phone="08122543607"
        email="mr.pumpkin@catnap.meow"
        Setup="This is my best joke taken"
        Punchline="Okay this is the joke"
        /> */}

        
     
        

    //     </>
    
    // )
}