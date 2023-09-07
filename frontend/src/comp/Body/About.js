import React, { useEffect, useState } from "react";

export default function About() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("/about");
    const items = await data.json();
    console.log(items);
    setItems(items);
  };

  return items.map((item) =>
    Object.keys(item).map((key) => (
      <div key={key}>
        <h1>{item[key]}</h1>
      </div>
    ))
  );
}
