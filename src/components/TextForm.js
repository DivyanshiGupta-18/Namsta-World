import React, {useState} from 'react'

export default function TextForm(props){
    const handleUpClick = () =>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success");
    }
    const handleLoClick = () =>{
        console.log("Lowercase was clicked" + text);
         let newText = text.toLowerCase();
         setText(newText)
         props.showAlert("Converted to Lowercase!", "success");
     }
     const handleCopy = () => {
         console.log("I am copy");
         var text = document.getElementById("myBox");
         text.select();
         text.setSelectionRange(0, 9999);
         navigator.clipboard.writeText(text);
       //  document.getSelection().removeAllRanges();
         props.showAlert("Copied to Clipboard!", "success");
     }
     const handleClearClick = () =>{
        console.log("Uppercase was clicked" + text);
         let newText = '';
         setText(newText)
         props.showAlert("Text Cleared!", "success");

     }
     const handleExtraSpace = () => {
           let newText = text.split(/[ ] + /);
           setText(newText.join (" "))
           props.showAlert("Removed Extra Spaces!", "success");
     }

    const handleOnChange = (event) =>{
        //console.log("on change");
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    //text = "new Text"; //wrong way to change the state
    //setText =("new Text"); //correct way to change the state  
    return(
        <>
    <div className="container" style={{color:props.mode === 'dark' ?'white':'#042743'}}>
        <h1 className='my-3'>{props.heading} </h1>
       <div className="mb-3">
       <textarea className="form-control" value={text} onChange={handleOnChange} style={{background:props.mode === 'dark' ?'#13466e':'white',color: props.mode === 'dark' ?'white':'#042743'}}id="myBox" rows="8"></textarea>
   </div>
   <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick = {handleUpClick} >Convert to Uppercase </button>
   <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick = {handleLoClick} >Convert to Lowercase </button>
   <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick = {handleClearClick} >Clear Text </button>
   <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick = {handleCopy} >Copy Text </button>
   <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick = {handleExtraSpace} >Remove Extra Space </button>
        </div>
        <div className="container my-2" style={{color:props.mode === 'dark' ?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
