import React, { useState } from "react";

export default function Textform(props) {
  const handleUpclick = () => {
    // console.log("Uppercase was clicked"+Text);
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success")
  };

  const handleLoclick = () => {
    // console.log("Uppercase was clicked"+Text);
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success")
  };
  const handleclrclick = () => {
    // console.log("Uppercase was clicked"+Text);

    setText("");
  };
  const handledgtclick = () => {
    // console.log("Uppercase was clicked"+Text);

    var numbers = Text.match(/\d+\.?\d*/g);
    if (numbers) {
      setText("There are numbers in text");
    } else {
      setText("There are no numbers in text");
    }
  };

  const handleToggleCaseClick = () => {
    let words = Text.split(" ");
    let newText = words
      .map((word) => {
        let newWord = "";
        for (let i = 0; i < word.length; i++) {
          let char = word.charAt(i);
          if (char >= "A" && char <= "Z") {
            char = char.toLowerCase();
          } else if (char >= "a" && char <= "z") {
            char = char.toUpperCase();
          }
          newWord += char;
        }

        return newWord;
      })
      .join(" ");

    setText(newText);
  };

  const handleSentenceCaseClick = () => {
    let lowerCase = Text.toLowerCase();
    let regex = /([^.!?]+[!?.\d\s]+)/g;
    let sentences = lowerCase.match(regex);
    let newText = sentences
      .map((sentence) => {
        return sentence.charAt(0) >= "a" && sentence.charAt(0) <= "z"
          ? sentence.charAt(0).toUpperCase() + sentence.slice(1)
          : sentence;
      })
      .join("");

    setText(newText);
  };
  const handlecopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to Clipboard","success")
  };

  const handleonChange = (event) => {
    // console.log("on change was clicked");
    setText(event.target.value);
  };

  const [Text, setText] = useState("enter text");
  // text="mdnmldsnvls"//wrong way

  // setText("new text")

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            value={Text}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
            onChange={handleonChange}
            id="myBox"
            rows="8"
          />
        </div>
        <button className="btn btn-primary mx-2 my-2 " onClick={handleUpclick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoclick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleclrclick}>
          Clear text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handledgtclick}>
          Is Any Digits
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleToggleCaseClick}
        >
          Toggle
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleSentenceCaseClick}
        >
          Sentence Case
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handlecopy}>
          copy
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Your text summary</h1>
        <p>
          {Text.split(" ").length} words {Text.length} characters
        </p>
        <p>{0.008 * Text.length} minutes read</p>
        <h2>Preview</h2>
        <p>{Text.length>0?Text:"Enter something in TEXTBOX"}</p>
      </div>
    </>
  );
}
