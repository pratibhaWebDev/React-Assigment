import React, { useState } from 'react'

function Autocorrects() {

    const [inputText,setInputText]=useState("")

    const corrections = {
        "teh": "the",
        "recieve": "receive",
        "adress": "address",
        "wierd": "weird",
        "thier": "their",
        "ma":"am"
      };

    const handleChange=(e)=>{
        setInputText(e.target.value)
    }


    const getCorrectedText = (text) => {
        return text
          .split(" ")
          .map(word => corrections[word] || word)
          .join(" ");
      };
    
      const correctedText = getCorrectedText(inputText);

  return (
    <div style={{ maxWidth: "500px", margin: "20px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
    <h2>AutoCorrect App</h2>
    <input
      type="text"
      value={inputText}
      onChange={handleChange}
      placeholder="Type here..."
      style={{ width: "100%", padding: "10px", fontSize: "16px" }}
    />

    <div style={{ marginTop: "20px" }}>
      <strong>Corrected Preview:</strong>
      <p>{correctedText}</p>
    </div>
  </div>
  )
}

export default Autocorrects
