import React, {useState} from 'react'

export default function TextArea(props) {

  const handleUPclick = ()=>{
    //console.log("Upper case botton clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLOWclick = ()=>{
    //console.log("Upper case botton clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleCOPYclick = () => {
    var text = document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value)
  }

  const handleONchange = (event)=>{
    //console.log("On change");
    setText(event.target.value)
  }

  const [text, setText] = useState("");

  return (
    <>
    <div className="container" style = {{color : props.mode==="dark"?"white":"black"}}>
        <h1>{props.heading}</h1>
        <div className="mb-0">
        <textarea className="form-control" value={text} onChange={handleONchange} style={{color : props.mode==="dark"?"white":"black" ,backgroundColor : props.mode==="dark"?"grey":"white"}}id="myBox" rows="8"></textarea>
        <button className="btn btn-primary my-3 mx-2" onClick={handleUPclick}>UpperCase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleLOWclick}>LowerCase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleCOPYclick}>Copy</button>
        </div>
    </div>
    <div className="container" style = {{color : props.mode==="dark"?"white":"black"}}>
      <h4>Text Summary</h4>
      <p>In your text there is {text.split(" ").length} words and {text.length} letters.</p>

    </div>



    </>
  )
}
