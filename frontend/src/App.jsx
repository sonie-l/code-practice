import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5001/api/items")
    .then((res) => res.json())
    .then((data) => setItems(data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Luxury Items</h1>
      <u1>
        {items.map((items) => (
          <li key={items.id}>
            {items.name} - ${items.price}
          </li>
        ))}
      </u1>      
    </div>
  );
}

export default App;