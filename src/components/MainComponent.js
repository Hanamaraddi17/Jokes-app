import React from 'react'
import Joke from './Joke'
import JokeList from './JokeList'

class MainComponent extends React.Component {
constructor(props){
    super(props);
    {
        this.state = {
            jokes:[
                    { id: 1, setup: "🌾 Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field!" },
                    { id: 2, setup: "⛄️ What do you get when you cross a snowman and a vampire?", punchline: "Frostbite!" },
                    { id: 3, setup: "💀 Why don't skeletons fight each other?", punchline: "They don't have the guts!" },
                    { id: 4, setup: "🐧 How does a penguin build its house?", punchline: "Igloos it together!" },
                    { id: 5, setup: "⛳️ Why did the golfer bring two pairs of pants?", punchline: "In case he got a hole in one!" },
                    { id: 6, setup: "🌊 What did one ocean say to the other ocean?", punchline: "Nothing, they just waved!" },
                    { id: 7, setup: "🔬 Why don't scientists trust atoms?", punchline: "Because they make up everything!" },
                    { id: 8, setup: "🍝 What do you call fake spaghetti?", punchline: "An impasta!" },
                    { id: 9, setup: "🥚 Why don't eggs tell jokes?", punchline: "Because they might crack up!" },
                    { id: 10, setup: "🪐 How do you organize a space party?", punchline: "You planet!" },
                    { id: 11, setup: "🍅 Why did the tomato turn red?", punchline: "Because it saw the salad dressing!" },
                    { id: 12, setup: "🐧 How does a penguin build its house?", punchline: "Igloos it together!" },
                    { id: 13, setup: "🥫 What do you call a can opener that doesn't work?", punchline: "A can't opener!" },
                    { id: 14, setup: "🌾 Why did the scarecrow become a successful neurosurgeon?", punchline: "Because he was outstanding in his field!" },
                    { id: 15, setup: "⛄️ What do you get when you cross a snowman and a vampire?", punchline: "Frostbite!" },
                    { id: 16, setup: "🚲 Why did the bicycle fall over?", punchline: "Because it was two-tired!" },
                    { id: 17, setup: "🥕 What's orange and sounds like a parrot?", punchline: "A carrot!" },
                    { id: 18, setup: "🌾 Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field!" },
                    { id: 19, setup: "🌴 What kind of tree fits in your hand?", punchline: "A palm tree!" },
                    { id: 20, setup: "🐟 What do you call a fish wearing a bowtie?", punchline: "Sophish-ticated!" },
                    { id: 21, setup: "💀 Why don't skeletons fight each other?", punchline: "They don't have the guts!" },
                    { id: 22, setup: "👀 What did the left eye say to the right eye?", punchline: "Between you and me, something smells!" },
                    { id: 23, setup: "🚲 Why couldn't the bicycle stand up by itself?", punchline: "It was two-tired!" },
                    { id: 24, setup: "🌾 Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field!" },
                    { id: 25, setup: "🧛‍♂️ What's a vampire's favorite fruit?", punchline: "A blood orange!" },
                    { id: 26, setup: "🪐 How do you organize a space party?", punchline: "You planet!" },
                    { id: 27, setup: "🐻 What do you call a bear with no teeth?", punchline: "A gummy bear!" },
                    { id: 28, setup: "⛳️ Why did the golfer bring two pairs of pants?", punchline: "In case he got a hole in one!" },
                    { id: 29, setup: "🐧 How does a penguin build its house?", punchline: "Igloos it together!" },
                    { id: 30, setup: "🔬 Why don't scientists trust atoms?", punchline: "Because they make up everything!" },
                    { id: 31, setup: "🍝 What do you call fake spaghetti?", punchline: "An impasta!" },
                    { id: 32, setup: "🥚 Why don't eggs tell jokes?", punchline: "Because they might crack up!" },
                    { id: 33, setup: "🪐 How do you organize a space party?", punchline: "You planet!" },
                    { id: 34, setup: "🍅 Why did the tomato turn red?", punchline: "Because it saw the salad dressing!" },
                    { id: 35, setup: "🐧 How does a penguin build its house?", punchline: "Igloos it together!" },
                    { id: 36, setup: "🥫 What do you call a can opener that doesn't work?", punchline: "A can't opener!" },
                    { id: 37, setup: "🌾 Why did the scarecrow become a successful neurosurgeon?", punchline: "Because he was outstanding in his field!" },
                    { id: 38, setup: "⛄️ What do you get when you cross a snowman and a vampire?", punchline: "Frostbite!" },
                    { id: 39, setup: "🚲 Why did the bicycle fall over?", punchline: "Because it was two-tired!" },
                    { id: 40, setup: "🥕 What's orange and sounds like a parrot?", punchline: "A carrot!" },
                    { id: 41, setup: "🌾 Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field!" },
                    { id: 42, setup: "🌴 What kind of tree fits in your hand?", punchline: "A palm tree!" },
                    { id: 43, setup: "🐟 What do you call a fish wearing a bowtie?", punchline: "Sophish-ticated!" },
                    { id: 44, setup: "💀 Why don't skeletons fight each other?", punchline: "They don't have the guts!" },
                    { id: 45, setup: "👀 What did the left eye say to the right eye?", punchline: "Between you and me, something smells!" },
                    { id: 46, setup: "🚲 Why couldn't the bicycle stand up by itself?", punchline: "It was two-tired!" },
                    { id: 47, setup: "🌾 Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field!" },
                    { id: 48, setup: "🧛‍♂️ What's a vampire's favorite fruit?", punchline: "A blood orange!" },
                    { id: 49, setup: "🪐 How do you organize a space party?", punchline: "You planet!" },
                    { id: 50, setup: "🐻 What do you call a bear with no teeth?", punchline: "A gummy bear!" }
          
            ]
        };
    }
}
    render(){
        return(
            <div> 
                <h1 style={{marginLeft:'25vw'}}>Welcome to the Joke center</h1>
                <JokeList jokes={ this.state.jokes}/>
            </div>
        )
    };
}

export default MainComponent;