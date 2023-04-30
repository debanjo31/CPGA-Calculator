import React from "react";
import { FaBookOpen } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      <div className="text">
        <h2 style={{ marginRight: "10px" }}>
          {" "}
          <FaBookOpen style={{ verticalAlign: "sub" }} />
        </h2>
        <h2>CPGA calculator</h2>
      </div>
    </div>
  );
}

export default Header;
