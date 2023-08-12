import { NavLink } from "react-router-dom";

export const SideBar = () => {
  const getActiveLinkStyle = (isActive) => {
    if (isActive) {
      return { color: "#2563eb" };
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        width: "100%",
        minHeight: "1000px",
        paddingTop: "100px",
        alignItems : "center",
        backgroundColor : "#d9f99d"
      }}
    >
      <NavLink to="/" style={({isActive})=> getActiveLinkStyle(isActive)}>Dashboard</NavLink>
      <NavLink to="/departments"  style={({isActive})=> getActiveLinkStyle(isActive)}>Departments</NavLink>
      <NavLink to="/products"  style={({isActive})=> getActiveLinkStyle(isActive)}>Products</NavLink>
    </div>
  );
};
