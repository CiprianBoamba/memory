// Import useState from React to help manage state in your app
import { useState } from 'react';
import './App.css';

// This is a list of card images
const cardImages = [
  { src: '/img/helmet-1.png' },
  { src: '/img/potion-1.png' },
  { src: '/img/ring-1.png' },
  { src: '/img/scroll-1.png' },
  { src: '/img/shield-1.png' },
  { src: '/img/sword-1.png' },
];

function App() {
  // Create a state for cards and a function to update it
  const [cards, setCards] = useState([]);

  // Create a state for turns and a function to update it
  const [turns, setTurns] = useState(0);

  // This function shuffles the cards and updates the state
  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]

      // Sort cards randomly
      .sort(() => Math.random() - 0.5)
      // Assign a random id to each card
      .map((card) => ({ ...card, id: Math.random() }));

    // Update the state with the shuffled cards
    setCards(shuffleCards);
    // Reset the turns state to 0
    setTurns(0);
  };

  console.log(cards, turns);

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <div>
              <img className="front" src={card.src} alt="card front" />
              <img className="back" src="/img/cover.png" alt="card back" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
