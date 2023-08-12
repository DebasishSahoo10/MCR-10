import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { useParams } from "react-router";

export const ProductPage = () => {
  const { state } = useContext(DataContext);
  const { id } = useParams();
  const selectedProduct = state.masterData.find((item) => item.id.toString() === id);
  console.log(selectedProduct);
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "85%",
        color: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height : "auto"
      }}
    >
      <h1 style={{marginBottom : "0"}}>Your Selected Product 🚲</h1>
      <div>
        <img src={selectedProduct.imageUrl} alt="" width={400}/>
        <h2 style={{marginTop : "0px"}}>{selectedProduct.name}</h2>
        <p>Price : {selectedProduct.price}</p>
        <p>Stock : {selectedProduct.stock}</p>
        <p>Supplier : {selectedProduct.supplier}</p>
        <p>Department : {selectedProduct.department}</p>
        <p>SKU : {selectedProduct.sku}</p>
        <p>Delivered : {selectedProduct.delivered}</p>
        <p>Descpription : {selectedProduct.description}</p>
      </div>
    </div>
  );
};
