import React,{useState} from 'react';
import Mode from './Mode';
function TextForm(props) {
    const [text, setText] = useState("Enter your text here...");
    console.log(text);
    // This function converts the text to upper case
    // It uses the toUpperCase() method of the string object
    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };
    // This function converts the text to lower case
    // It uses the toLowerCase() method of the string object
    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };
    // This function removes extra spaces from the text
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    };
    // This function copies the text to clipboard
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    };
    // This function clears the text area
    // It sets the text to a default value
    const handleClearText = () => {
        let newText ="Enter your text here...";
        setText(newText);
    };
    // This function handles the change in the text area
    // It updates the state with the new value of the text area
    const handleChange = (event) => {
        setText(event.target.value);
    };
  return (
    <>
    <div className="container my-3">
      <h3 className="mb-4 mt-5">{props.desc}</h3>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="9"
          value={text}
          onChange={handleChange}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpperCase}>Convert To UpperCase</button>
      <button className="btn btn-secondary mx-2" onClick={handleLowerCase}>Convert To LowerCase</button>
      <button className="btn btn-warning mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <button className="btn btn-info mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-success mx-2" onClick={handleClearText}>Clear Text</button>
    </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
        </div>
    </>
  );
}
export default TextForm;
