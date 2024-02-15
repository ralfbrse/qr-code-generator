import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import QRCode from "qrcode.react";

function App() {
  const [link, setLink] = useState("");
  const [qrCodeValue, setQRCodeValue] = useState("");

  const handleChange = (e) => {
    setLink(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQRCodeValue(link);
  };

  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter URL"
          value={link}
          onChange={handleChange}
        />
        <button type="submit">Generate QR Code</button>
      </form>
      {qrCodeValue && (
        <div>
          <h2>Generated QR Code:</h2>
          <QRCode value={qrCodeValue} />
        </div>
      )}
    </div>
  );
}

export default App;
