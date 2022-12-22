import React from "react";
import DropdownBootstrap from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

const DropdownMenu = ({ links = [], label }) => {
  return (
    <DropdownBootstrap>
      <DropdownBootstrap.Toggle variant="link" id="dropdown-basic">
        {label}
      </DropdownBootstrap.Toggle>
      {links.length > 0 && (
        <DropdownBootstrap.Menu>
          {links.map((link, index) => {
            return (
              <DropdownBootstrap.Item show="True">
                <Link key={index} to={link.to}>
                  {link.label}
                </Link>
              </DropdownBootstrap.Item>
            );
          })}
        </DropdownBootstrap.Menu>
      )}
    </DropdownBootstrap>
  );
};

export default DropdownMenu;
