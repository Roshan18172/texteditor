import React,{useState} from 'react';
// import Mode from './Mode';
function TextForm(props) {
    const [text, setText] = useState("Enter your text here...");
    console.log(text);
    // This function converts the text to upper case
    // It uses the toUpperCase() method of the string object
    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
        document.getElementById("myBox").focus(); // Focus on the text area after
    };
    // This function converts the text to lower case
    // It uses the toLowerCase() method of the string object
    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
        document.getElementById("myBox").focus(); // Focus on the text area after
    };
    // This function removes extra spaces from the text
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces", "success");
        document.getElementById("myBox").focus(); // Focus on the text area after
    };
    // This function copies the text to clipboard
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard", "success");
        document.getElementById("myBox").focus(); // Focus on the text area after
    };
    // This function clears the text area
    // It sets the text to a default value
    const handleClearText = () => {
        let newText ="Enter your text here...";
        setText(newText);
        props.showAlert("Text Cleared", "success");
        document.getElementById("myBox").focus(); // Focus on the text area after
    };
    // This function handles the change in the text area
    // It updates the state with the new value of the text area
    const handleDownloadSummary = () => {
        const summary = `${text} \nWords: ${text.split(" ").length}\nCharacters: ${text.length}\nMinutes read: ${0.008 * text.split(" ").length}`;
        const blob = new Blob([summary], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "text_summary.txt";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        props.showAlert("Summary downloaded", "success");
    };
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
      <div className="row">
      <button className="btn btn-primary mx-2 col" onClick={handleUpperCase}>Convert To UpperCase</button>
      <button className="btn btn-secondary mx-2 col" onClick={handleLowerCase}>Convert To LowerCase</button>
      <button className="btn btn-warning mx-2 col" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <button className="btn btn-info mx-2 col" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-success mx-2 col" onClick={handleClearText}>Clear Text</button>
      <button className="btn btn-dark mx-2 col" onClick={handleDownloadSummary}>Download Summary</button>
      </div>
    </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.trim().length === 0 ? 0 : text.trim().split(/\s+/).filter(word => word.length > 0).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
        </div>
        
    </>
  );
}
export default TextForm;
