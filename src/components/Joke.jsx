export default function Joke({setup, punchline}) {
    
    return (

        <article>
            <h2>I'm Joke</h2>
            <p>{setup ? setup: ""}</p>
            <p>{punchline}</p>
        </article>
    )
}

