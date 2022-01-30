import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }

    const handleLoClick = ()=>{
        // console.log("Lowercase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");

    }

    const handleClearClick = ()=>{
        // console.log("ClearClick was clicked: " + text);
        let newText = "";
        setText(newText);
        props.showAlert("Cleared text", "success");

    }

    const handleCopy = ()=>{
        // var text = document.getElementById('myBox');
        // text.select();
        // navigator.clipboard.writeText(text.value);
        // document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text);
        props.showAlert("Copied text", "success");

    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed ExtraSpaces", "success");
    }

    const handleOnChange = (event)=>{
        // console.log("OnChange");
        setText(event.target.value);
    }

  const [text, setText] = useState("");
  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}} >
      <h1 className="mb-4">{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="6" placeholder="Enter text here"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-2" style={{color: props.mode === 'dark' ? 'white' : 'black'}} >
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes read </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"} </p>
    </div>
    </>
  );
}
