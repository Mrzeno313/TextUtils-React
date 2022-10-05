import React,{useState} from 'react'

 
export default function Textform(props) {
  
      const HandelUpClick = () =>
      {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
      }

      const HandelLowClick = () =>
      {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
      }

      const HandelClearClick = () =>
      {
        // console.log("Uppercase was clicked" + text);
        let newText = ''; 
        setText(newText);
        props.showAlert("Text Cleared!", "success");
      }

      const handelonchange = (event) =>
      {
        // console.log("Uppercase was OnChange");
        setText(event.target.value);
      }

      const HandelCopy = () => 
      {
        document.getElementById("mybox").innerText = "copied";
        setTimeout(() => {
          document.getElementById("mybox").innerText = "Copy Text";
        });
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
      }

      const HandelExtraSpace = () =>
       {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
      }

      const [text, setText] = useState('');

  return (
     <>
        <div className='container'  style={{color: props.mode ==='dark'?'white':'#042743'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handelonchange}  style={{backgroundColor: props.mode ==='dark'?'#13466e':'white', color: props.mode ==='dark'?'white':'#042743'}}
                 id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={HandelUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={HandelLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={HandelExtraSpace}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-1 my-1" onClick={HandelClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={HandelCopy}>Copy Text</button>
            
        </div>
        <div className="container my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>

          <h2>Your text summary</h2>
          <p>{text.split(" ").length} word and {text.length} characters</p> 
          <p>{0.008 * text.split(" ").length} Minutes read </p> 
          <h2>Preview</h2>
          <p>{text.length>0?text:"Nothing to preview!"}</p>

        </div>
        
    </>
  )
}
