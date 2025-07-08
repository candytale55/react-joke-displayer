import Joke from "./components/Joke"


export default function App() {
  return (
    <>
      <h1>I am App.</h1>
      <Joke
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
        upVotes={10}
        isPun={true}
        comments={
          [
            { author: "Gina", text: "hahahahah", title: "I will steal this one!" }
            { author: "Gina", text: "hahahahah", title: "I will steal this one!" }
          ]
        }
      />
      <Joke
        punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
        upVotes={10}
        isPun={true}
      />
      <Joke
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
        upVotes={10}
        isPun={false}
      />
      <Joke
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
        upVotes={10}
        isPun={true}
      />
      <Joke
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
        upVotes={10}
        isPun={true}
      />
    </>
  )
}