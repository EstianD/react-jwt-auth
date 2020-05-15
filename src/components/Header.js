import React, { useContext } from "react";
import AuthContext from "../hooks/AuthContext";

// Import Components
import Logout from "./logout";

const Header = ({ handleLogout }) => {
  const user = useContext(AuthContext);

  return (
    <div>
      Hello {user.username}
      <Logout handleLogout={handleLogout} />
    </div>
  );
};

export default Header;
