import { Link } from "react-router-dom"
import axios from 'axios';
import React, { useState, useEffect } from 'react';


export default function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch API data
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []); 

  return (
    <div className="content">
      <h3>Product</h3>
      <div>
        {data.map(p => (
          <div key={p.id}>
              <h6>{`Items ${p.id}  from the array`}</h6>
              <h2>{p.title}</h2>
              <p>{p.body}</p>
              <Link to={`/products/${p.id}`}><img src="https://via.placeholder.com/250x150" alt="product" /></Link>
          </div>
        ))} 
      </div>
    </div>
  )
}