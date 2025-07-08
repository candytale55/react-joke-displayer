export default function Joke({setup, punchline, upVotes, isPun, userComments}) {
    
    
    return (

        <article className="joke">
            {setup && <p className="setup">{setup}</p>}
            <hr />
            <p className="punchline">{punchline}</p>
            <p className="upVotes">{upVotes + 1}</p>
            {isPun && <p className="pun">Pun!!!!</p>}
            <p className="userComments">{"hi"}</p>
        </article>
    )
}


