import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Products = (props) => {
  //
  const [products, setProducts] = useState();
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const { token } = useContext(AppContext);
  //
  useEffect(() => {
    console.log("shop=>", token);
    allProducts();
  }, []);
  //
  const allProducts = async () => {
    try {
      const res = await fetch(`/api/products`);
      const data = await res.json();
      // if (res.status !== 200) {
      //   console.log(data);
      // } else {
      //   setProducts(data);
      // }

      setProducts(data);
    } catch (e) {
      console.log(e);
    }
  };
  //
  const handleSearch = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/products/search?name=${search}`);
      const data = await res.json();
      data && setProducts(data);
    } catch (e) {
      console.log(e);
    }
  };
  //
  const add = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "COntent-type": "application/json",
        },
        body: JSON.stringify({ name, price }),
      });
      const data = await res.json();
      console.log(data);
      // allProducts();
      setProducts(data);
    } catch (e) {
      console.log(e);
    }
  };
  //
  return (
    <>
      <h1>Shop</h1>
      <div>
        <input onChange={(e) => setSearch(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        <form onSubmit={add}>
          Name:
          <input onChange={(e) => setName(e.target.value)} />
          Price:
          <input onChange={(e) => setPrice(e.target.value)} />
          <input type="submit" value="Add product" />
        </form>
      </div>
      {products &&
        products.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                display: "inline-block",
                margin: "20px",
                padding: "20px",
                border: "1px solid #000",
              }}>
              <h4>{item.name}</h4>
              <p>{item.price}</p>
              <Link to={`/product/${item.id}`}>Buy Now</Link>
            </div>
          );
        })}
    </>
  );
};
export default Products;
