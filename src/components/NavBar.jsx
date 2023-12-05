/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const NavBar = ({ onPrevClick, onNextClick }) => {
    return (
      <div>
        <button onClick={onPrevClick}>Précédent</button>
        <button onClick={onNextClick}>Suivant</button>
      </div>
    );
  };


export default NavBar