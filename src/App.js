import React, { useState } from "react";
import "./styles.css";

const petDictionary = {
  "🐒": "Monkey",
  "🦍": "Gorilla",
  "🦧": "Orangutan",
  "🦮": "Guide Dog",
  "🐕‍🦺": "Service Dog",
  "🐩": "Poodle",
  "🐕": "Dog",
  "🐈": "Cat",
  "🐅": "Tiger",
  "🐆": "Leopard",
  "🦌‍": "Deer",
  "🐎": "Horse"
};

var pets = Object.keys(petDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("Which pet are you seeking?");
  const [petName, setPet] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    setPet(userInput);

    if (userInput in petDictionary) {
      setMeaning(petDictionary[userInput]);
    } else {
      setMeaning("Wait, that's new.");
    }
  }

  function emojiClickHandler(userInput) {
    setMeaning(petDictionary[userInput]);
  }

  return (
    <div className="App">
      <h1>Know your pet</h1>
      <input
        onChange={emojiInputHandler}
        value={petName}
        placeholder="Search you emoji here..."
      />
      <h2>{meaning}</h2>
      <div className="output-section">
        {pets.map((pets) => (
          <div
            className="output"
            onClick={() => emojiClickHandler(pets)}
            style={{ fontSize: "2rem", cursor: "pointer" }}
          >
            {" "}
            {pets}{" "}
          </div>
        ))}
      </div>
    </div>
  );
}
