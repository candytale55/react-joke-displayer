export default function Joke({setup, punchline}) {
    
    return (

        <article>
            {setup && <p className="setup">{setup}</p>}
            <hr />
            <p className="punchline">{punchline}</p>
        </article>
    )
}

