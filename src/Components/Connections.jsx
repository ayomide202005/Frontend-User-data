import { useState } from "react";
import axios from "axios";

const Connections = () => {
  const [item, setItem] = useState("");

  const submitInfo = () => {
  const response = axios.post("http://localhost:5000/api/data", { item }) 
  console.log("Response:", response) 
      .then(() => { 
        console.log("Response:", response); 
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  return (
    <>
      <h2>Connection</h2>
      <input
        type="text"
        name="item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={submitInfo}>Submit Info</button>
    </>
  );
};

export default Connections;
