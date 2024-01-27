import React, { useState, useEffect } from "react";
import Button from "../Button/button";

const Editor = () => {
  const [lines, setLines] = useState([]);
  const [inputLine, setInputLine] = useState([]);
  const handleSave = () => {
    localStorage.setItem("textareaContent", inputLine);
    console.log(localStorage.getItem("textareaContent"));
  };

  useEffect(() => {
    const strText = localStorage.getItem("textareaContent");
  }, []);
  const initalRender = (newText) => {
    const newLines = newText.split(",").map((line) => {
      let formattedLine = line;

      // Check for Heading format
      if (line.startsWith("# ") && line !== "# ") {
        formattedLine = `<h1>${line.substring(2)}</h1>`;
      }

      // Check for Bold format
      if (line.startsWith("* ") && line !== "* ") {
        formattedLine = `<strong>${line.substring(2)}</strong>`;
      }

      // Check for Red line format
      if (line.startsWith("** ") && line !== "** ") {
        formattedLine = `<span style="color: red;">${line.substring(3)}</span>`;
      }

      // Check for Underline format
      if (line.startsWith("*** ") && line !== "*** ") {
        formattedLine = `<u>${line.substring(4)}</u>`;
      }

      return formattedLine;
    });
    setLines(newLines);
  };
  const handleChange = (e) => {
    let newText = e.target.value;
    const inputText = newText.split("\n").map((line) => {
      return line;
    });
    setInputLine(inputText);
    const newLines = newText.split("\n").map((line) => {
      let formattedLine = line;

      // Check for Heading format
      if (line.startsWith("# ") && line !== "# ") {
        formattedLine = `<h1>${line.substring(2)}</h1>`;
      }

      // Check for Bold format
      if (line.startsWith("* ") && line !== "* ") {
        formattedLine = `<strong>${line.substring(2)}</strong>`;
      }

      // Check for Red line format
      if (line.startsWith("** ") && line !== "** ") {
        formattedLine = `<span style="color: red;">${line.substring(3)}</span>`;
      }

      // Check for Underline format
      if (line.startsWith("*** ") && line !== "*** ") {
        formattedLine = `<u>${line.substring(4)}</u>`;
      }

      return formattedLine;
    });
    setLines(newLines);
  };

  return (
    <>
      <div className="container mt-5 text-center">
        <div className="row">
          <div className="container mb-2" style={{ marginLeft: "630px" }}>
            <button onClick={handleSave}>save</button>
          </div>
          {/* <label htmlFor="input">Enter something:</label> */}
          <textarea
            id="input"
            value={inputLine.join("\n")}
            onChange={handleChange}
            placeholder="Type here..."
            rows="10"
            cols="80"
          />
          <div className="mt-3">
            <p>Rendered Output:</p>
            <div>
              {lines.map((line, index) => (
                <div key={index}>
                  <p dangerouslySetInnerHTML={{ __html: line }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editor;
