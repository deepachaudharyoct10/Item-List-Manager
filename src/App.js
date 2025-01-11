import React, { useState } from "react";

const ItemListManager = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue.trim()]);
      setInputValue(""); // Clear the input field
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <h1>Item List Manager</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter item"
        style={{ padding: "10px", width: "200px" }}
      />
      <button
        onClick={handleAddItem}
        style={{
          padding: "10px",
          marginLeft: "10px",
          backgroundColor: "green",
          color: "white",
          border: "none",
        }}
      >
        Add Item
      </button>
      <ul style={{ marginTop: "20px" }}>
        {items.map((item, index) => (
          <li key={index} style={{ margin: "5px 0" }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListManager;
