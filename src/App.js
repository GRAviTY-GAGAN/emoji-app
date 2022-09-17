import { useState } from 'react';
import './App.css';

var emojiDictionary = {
  '😊' : 'smiling',
  '🤨' : 'disbelief',
  "😥" : 'sad',
  '😡' : 'angry',
  '😑' : 'annoyance',
  '💓' : 'heart',
};

var emojisWeKnow = Object.keys(emojiDictionary);

function App() {
  const [meaning, setMeaning] = useState('');

  function emojiHandler(e) {
    var userInput = e.target.value;

    var meaning = emojiDictionary[userInput];

    if(meaning === undefined) {
      meaning = "We don't have this in our database"; 
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji App</h1>
      <div className='input'><input onChange={emojiHandler} type="text" /></div>
      <em>{meaning}</em>
      <p><strong>Emojis we know</strong></p>
      {emojisWeKnow.map((emoji) => {
        return (
          <span onClick={() => {emojiClickHandler(emoji)}} className='emoji' key={emoji}>{emoji}</span>
        )
    })}
    </div>
  );
}

export default App;
