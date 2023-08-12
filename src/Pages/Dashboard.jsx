import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

export const Dashboard = () => {
  const { state } = useContext(DataContext);
  const totalStat = state.masterData.reduce(
    (acc, curr) => {
      acc.totalStock += curr.stock;
      acc.delivered += curr.delivered;
      if (curr.stock <= 10) {
        acc.lowStock += curr.delivered;
      }
      return acc;
    },
    { totalStock: 0, delivered: 0, lowStock: 0 }
  );
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "85%",
        minHeight: "1000px",
        color: "black",
        display : "flex",
        flexDirection : "column",
        alignItems : "center"
      }}
    >
      <h1>Your Inventory 🛒</h1>
      <div style={{display : "flex", gap : "40px"}}>
        <div style={{backgroundColor : "#d9f99d", width : "180px", borderRadius : '10px'}}>
          <p
            style={{
              color: "darkgreen",
              fontSize: "large",
              fontWeight: "bold",
            }}
          >
            {totalStat.totalStock}
          </p>
          <p>Total Stock</p>
        </div>
        <div style={{backgroundColor : "#fde68a", width : "180px", borderRadius : '10px'}}>
          <p style={{ color: "darkorange", fontSize: "large", fontWeight: "bold" }}>
            {totalStat.delivered}
          </p>
          <p>Total Delivered</p>
        </div>
        <div style={{backgroundColor : "#fecaca", width : "180px", borderRadius : '10px'}}>
          <p style={{ color: "red", fontSize: "large", fontWeight: "bold" }}>
            {totalStat.lowStock}
          </p>
          <p>Low Stock Items</p>
        </div>
      </div>
    </div>
  );
};
