import { useNavigate } from "react-router";


export const Departments = () => {
  const navigate = useNavigate();
  const handleDepartmentClick = (department) => {
    navigate("/products",  {state : department});
  };
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "85%",
        height: "100vh",
        color: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>All the Departments 🎪</h1>
      <div style={{fontSize : "larger", fontWeight : "bold", display : "flex", gap : "30px", color : "white"}}>
        <p style={{backgroundColor : "#c084fc", width : "135px", height : "80px", paddingTop : "42px", borderRadius : "10px"}} onClick={() => handleDepartmentClick("Kitchen")}>Kitchen</p>
        <p style={{backgroundColor : "#c084fc", width : "135px", height : "80px", paddingTop : "42px", borderRadius : "10px"}} onClick={() => handleDepartmentClick("Clothing")}>Clothing</p>
        <p style={{backgroundColor : "#c084fc", width : "135px", height : "80px", paddingTop : "42px", borderRadius : "10px"}} onClick={() => handleDepartmentClick("Toys")}>Toys</p>
      </div>
    </div>
  );
};
