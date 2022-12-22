import React from "react";
import { Link } from "react-router-dom";

const CreateCard = ({ links = [], label, description }) => {
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{label}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{description}</h6>
        {links.length > 0 && (
          <div>
            {links.map((link, index) => {
              return (
                <div>
                  <Link key={index} to={link.to}>
                    {link.label}
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateCard;
