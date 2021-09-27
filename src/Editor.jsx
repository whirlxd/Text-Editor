// eslint-disable-next-line
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./index.css";

function Editor() {
  const module = {
    toolbar: [
      [{ header: [1, 2, 3, 4, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const [value, setValue] = useState(
    localStorage.hasOwnProperty("text") ? localStorage.getItem("text") : "Start By typing anything then press the save button to save it , next time you reopen this you would get what you saved back instead of this text"
  );
  const save = (val) => {
    localStorage.setItem("text", val);
    alert("Your most recent shitty piece of text has been saved kthx");
  };

  return (
    <div className="container">
      <button onClick={() => save(value)} className="saveBtn">
        Save
      </button>
      <ReactQuill
        className="ql-toolbar"
        theme="snow"
        value={value}
        onChange={setValue}
        modules={module}
        formats={formats}
      />
    </div>
  );
}

export default Editor;
