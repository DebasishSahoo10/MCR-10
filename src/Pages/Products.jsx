import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { DataContext } from "../Context/DataContext";
import { NavLink } from "react-router-dom";

export const Products = () => {
  const location = useLocation();
  const [categoryFilter, setCategoryFilter] = useState(location.state ?? "All");
  const [sortFilter, setSortFilter] = useState("Name")
  const [lowStockFilter, setLowStockFilter] = useState(false)
  const { state } = useContext(DataContext);
  const navigate = useNavigate()

  const filteredState = state.masterData.filter((item) => 
    (categoryFilter === "All" ? item : item.department === categoryFilter) &&
    (lowStockFilter ? item.stock<=10 : item)
  ).sort((a,b) => {
    if (sortFilter === "Name") {
      return a.name[0].localeCompare(b.name[0])
    } else if (sortFilter === "Price") {
      return a.price - b.price
    } else {
      return a.stock - b.stock
    }
  });

  return (
    <div
      style={{
        backgroundColor: "white",
        width: "85%",
        height: "auto",
        color: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>All the Products 🎁</h1>
      <div style={{display : "flex", justifyContent : "space-between", backgroundColor : "lightgray", width : "95%", alignItems : "center", padding : "5px 10px", borderRadius : "6px"}}>
        <p>Products</p>
        <select
          name="categorySelect"
          defaultValue={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="All">All Category</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Toys">Toys</option>
          <option value="Clothing">Clothing</option>
        </select>
        <label htmlFor="lowStockCheckbox"><input type="checkbox" name="" id="lowStockCheckbox" defaultChecked={lowStockFilter} onClick={() => setLowStockFilter(prev => !prev)}/> Low Stock Items</label>
        <select name="sortSelect" id="" defaultValue={sortFilter} onChange={(e) => setSortFilter(e.target.value)}>
          <option value="Name">Name</option>
          <option value="Price">Price</option>
          <option value="Stock">Stock</option>
        </select>
        <button onClick={()=>navigate("/newItem")}>New</button>
      </div>
      <ul
        style={{
          paddingInlineStart: "0",
          padding: "0",
          margin: "0",
          width: "95%"
        }}
      >
        {filteredState.map((item) => {
          return (
            <li key={item.id} style={{ listStyle: "none", width: "100%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "30px",
                  textAlign: "left",
                  alignItems: "center",
                }}
              >
                <img src={item.imageUrl} alt="" width={50} height={50} />
                <p style={{ width: "150px" }}>
                  <NavLink to={`/product/${item.id}`}>{item.name}</NavLink>
                </p>
                <p style={{ width: "360px" }}>{item.description}</p>
                <p style={{ width: "120px" }}>{item.price}</p>
                <p style={{ width: "120px" }}>{item.stock}</p>
                <p style={{ width: "200px" }}>{item.supplier}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
