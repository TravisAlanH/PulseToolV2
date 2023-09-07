import React, { useEffect, useState } from "react";
// import axios from "axios";

export default function About() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    // await axios.get("https://pulseback.onrender.com/about").then((res) => {
    //   console.log(res.data);
    //   setItems(res.data);
    // });
    const data = await fetch("/about");
    console.log(data);
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
