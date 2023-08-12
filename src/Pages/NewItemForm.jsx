import { useContext, useState } from "react";
import { DataContext } from "../Context/DataContext";
import { v4 as uuid} from "uuid";

export const NewItemForm = () => {
  const { dispatch } = useContext(DataContext);
  const [newItem, setNewItem] = useState({
    id : 0,
    department: "Kitchen",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    sku: "",
    supplier: "",
    delivered: 0,
    imageUrl: "",
  });
  const addItem = () => {
    dispatch({type : "ADD_ITEM", payload : newItem})
  };
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "85%",
        minHeight: "120vh",
        color: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ marginBottom: "0" }}>Add your new Item ✅</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h3>Fill Up Below details</h3>
        <div>
          <label htmlFor="">Department :</label>
          <br />
          <select
            name="department"
            onChange={(e) =>
              setNewItem((prev) => ({ ...prev, department: e.target.value }))
            }
            style={{
              width: "20vw",
              height: "40px",
              borderRadius: "6px",
              padding: "5px",
              backgroundColor: "transparent",
              border: "2px solid darkgreen",
              color: "black",
              fontSize: "large",
              marginLeft: "20px",
            }}
            defaultValue={newItem.department}
          >
            <option value="Kitchen">Kitchen</option>
            <option value="Clothing">Clothing</option>
            <option value="Toys">Toys</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Name : </label>
          <br />
          <input
            type="text"
            name=""
            id=""
            onChange={(e) =>
              setNewItem((prev) => ({ ...prev, name: e.target.value, id : uuid() }))
            }
            style={{
              width: "20vw",
              height: "40px",
              borderRadius: "6px",
              backgroundColor: "transparent",
              border: "2px solid darkgreen",
              color: "black",
              fontSize: "large",
              marginLeft: "20px",
            }}
          />
        </div>
        <div>
          <label htmlFor="">Description :</label>
          <br />
          <input
            type="text"
            onChange={(e) =>
              setNewItem((prev) => ({ ...prev, description: e.target.value }))
            }
            style={{
              width: "20vw",
              height: "40px",
              borderRadius: "6px",
              backgroundColor: "transparent",
              border: "2px solid darkgreen",
              color: "black",
              fontSize: "large",
              marginLeft: "20px",
            }}
          />
        </div>
        <div>
          <label htmlFor="">Price :</label>
          <br />
          <input
            type="number"
            name=""
            id=""
            onChange={(e) =>
              setNewItem((prev) => ({ ...prev, price: Number(e.target.value) }))
            }
            style={{
              width: "20vw",
              height: "40px",
              borderRadius: "6px",
              backgroundColor: "transparent",
              border: "2px solid darkgreen",
              color: "black",
              fontSize: "large",
              marginLeft: "20px",
            }}
          />
        </div>
        <div>
          <label htmlFor="">Stock :</label>
          <br />
          <input
            type="number"
            name=""
            id=""
            onChange={(e) =>
              setNewItem((prev) => ({ ...prev, stock: Number(e.target.value) }))
            }
            style={{
              width: "20vw",
              height: "40px",
              borderRadius: "6px",
              backgroundColor: "transparent",
              border: "2px solid darkgreen",
              color: "black",
              fontSize: "large",
              marginLeft: "20px",
            }}
          />
        </div>
        <div>
          <label htmlFor="">SKU :</label>
          <br />
          <input
            type="text"
            name=""
            id=""
            onChange={(e) =>
              setNewItem((prev) => ({ ...prev, sku: e.target.value }))
            }
            style={{
              width: "20vw",
              height: "40px",
              borderRadius: "6px",
              backgroundColor: "transparent",
              border: "2px solid darkgreen",
              color: "black",
              fontSize: "large",
              marginLeft: "20px",
            }}
          />
        </div>
        <div>
          <label htmlFor="">Supplier :</label>
          <br />
          <input
            type="text"
            name=""
            id=""
            onChange={(e) =>
              setNewItem((prev) => ({ ...prev, supplier: e.target.value }))
            }
            style={{
              width: "20vw",
              height: "40px",
              borderRadius: "6px",
              backgroundColor: "transparent",
              border: "2px solid darkgreen",
              color: "black",
              fontSize: "large",
              marginLeft: "20px",
            }}
          />
        </div>
        <div>
          <label htmlFor="">Delivered :</label>
          <br />
          <input
            type="number"
            name=""
            id=""
            onChange={(e) =>
              setNewItem((prev) => ({ ...prev, delivered: Number(e.target.value) }))
            }
            style={{
              width: "20vw",
              height: "40px",
              borderRadius: "6px",
              backgroundColor: "transparent",
              border: "2px solid darkgreen",
              color: "black",
              fontSize: "large",
              marginLeft: "20px",
            }}
          />
        </div>
        <div>
          <label htmlFor="">Image URL :</label>
          <br />
          <input
            type="text"
            name=""
            id=""
            onChange={(e) =>
              setNewItem((prev) => ({ ...prev, imageUrl: e.target.value }))
            }
            style={{
              width: "20vw",
              height: "40px",
              borderRadius: "6px",
              backgroundColor: "transparent",
              border: "2px solid darkgreen",
              color: "black",
              fontSize: "large",
              marginLeft: "20px",
            }}
          />
        </div>
        <button
          style={{
            width: "25vw",
            height: "60px",
            borderRadius: "6px",
            backgroundColor: "transparent",
            border: "2px solid darkgreen",
            color: "black",
            fontSize: "large",
            marginLeft: "20px",
            marginTop: "20px",
            marginBottom: "40px",
          }}
          onClick={() => addItem()}
        >
          Add/Save
        </button>
      </div>
    </div>
  );
};
