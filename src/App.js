import React, { useState } from "react";
import "./styles.css";

var emojis = {
  "🥳": "Partying Face",
  "🎂": "Birthday Cake",
  "🍰": "Piece of cake or shortcake",
  "🎈": "Balloon",
  "🎉": "Party popper",
  "🎊": "Confetti ball",
  "🎁": "Wrapped Gifts",
  "🕯️": "Candle",
  "🧁": "Cupcakes",
  "🍫": "Chocolate Bars",
  "🍭": "Lollypops",
  "🍬": "Candy",
  "🍦": "Vanilla ice cream",
  "🍨": "Scoops of ice cream",
  "🥂": "Clinking Champagne glasses"
};

export default function App() {
  var [meaning, setuserMeaning] = useState("");

  // make an array of object keys

  var myemojiList = Object.keys(emojis);

  // onChange Event for input boks

  function onChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojis[userInput];
    console.log(meaning);

    if (meaning === undefined) {
      meaning = "We dont have this in our list. Try another one";
    }

    setuserMeaning(meaning);
  }

  //ClickHandler function

  function clickHandler(emoji) {
    var meaning = emojis[emoji];
    setuserMeaning(meaning);
  }
  //

  return (
    <div className="App">
      <h1>Birthday Emoji Finder</h1>
      <input
        placeholder="Paste your emoji here..."
        onChange={onChangeHandler}
      ></input>
      <p className="meaning">{meaning}</p>
      <h3>Or click on each of these emojis to know what they mean!</h3>
      {myemojiList.map(function (emoji) {
        return (
          <span
            onClick={() => clickHandler(emoji)}
            key={emoji}
            style={{ fontSize: "large", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
