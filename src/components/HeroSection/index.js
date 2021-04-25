import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import supreme from "../../assets/images/supreme.png";
import hawaiian from "../../assets/images/hawaiian.png";
import veggie from "../../assets/images/veggie.png";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="herosection">
      <MenuItem
        img={supreme}
        title="Supreme Pizza"
        description="Marinara sauce, Basil, Italian sausage, Roma tomatoes,Olives, and Pesto"
        price={250}
        id={100}
      />
      <MenuItem
        img={hawaiian}
        title="Hawaiian Pizza"
        description="Marinara sauce, Basil, Italian sausage, Roma tomatoes,Olives, and Pesto"
        price={275}
        id={101}
      />
      <MenuItem
        img={veggie}
        title="Veggie overload"
        description="Marinara sauce, Basil, Italian sausage, Roma tomatoes,Olives, and Pesto"
        price={200}
        id={102}
      />
    </div>
  );
}

export default HeroSection;
