import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5001/api/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const filtered = items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: 20 }}>
      <h1>Luxury Items</h1>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: 8, width: 200, marginBottom: 16 }}
      />
      <ul>
        {filtered.map((item) => (
          <li key={item.id}>
            {item.name} — ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;