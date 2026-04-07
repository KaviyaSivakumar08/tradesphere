import React, { useState } from "react";
import axios from "axios";

function App() {
  const [buyerName, setBuyerName] = useState("");
  const [cropId, setCropId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [message, setMessage] = useState("");

  const handleBuy = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/buy", {
        buyerName,
        cropId: Number(cropId),
        quantity: Number(quantity),
      });

      setMessage(
        `Purchase Successful! Total Amount ₹${res.data.totalAmount}`
      );

      setBuyerName("");
      setCropId("");
      setQuantity("");
    } catch (err) {
      console.error(err);
      setMessage("Crop not found or insufficient quantity");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "50px auto", textAlign: "center" }}>
      <h1>🛒 Buy Crop</h1>

      <form onSubmit={handleBuy}>
        <input
          type="text"
          placeholder="Buyer Name"
          value={buyerName}
          onChange={(e) => setBuyerName(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="number"
          placeholder="Crop ID"
          value={cropId}
          onChange={(e) => setCropId(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="number"
          placeholder="Quantity (kg)"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit">Buy Crop</button>
      </form>

      {message && <p style={{ marginTop: "20px" }}>{message}</p>}
    </div>
  );
}

export default App;
