import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedDept, setSelectedDept] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/departments")
      .then(res => setDepartments(res.data));
  }, []);

  useEffect(() => {
  let url = "http://localhost:5000/api/products";
  if (selectedDept) url += `?department=${selectedDept}`;
  axios.get(url).then(res => {
    console.log("Fetched products:", res.data); // 👈 Add this
    setProducts(res.data);
  });
}, [selectedDept]);


  return (
    <div className="product-container">
      <h2>Product List</h2>

      <select onChange={e => setSelectedDept(e.target.value)}>
        <option value="">All Departments</option>
        {departments.map(d => (
          <option key={d._id} value={d.name}>{d.name}</option>
        ))}
      </select>

      <div className="product-grid">
        {products.map(p => (
          <div key={p._id} className="product-card">
            <h4>{p.name}</h4>
            <p>{p.description}</p>
            <p className="price">₹{p.price}</p>
            <p className="dept">{p.department}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;