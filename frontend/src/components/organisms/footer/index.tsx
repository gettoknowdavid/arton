import React from "react";
import { StyledFooter } from "./footer.styles";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <StyledFooter>
      <div>
        <p>THISISARTON® &copy; {year}</p>
      </div>
    </StyledFooter>
  );
}

export default Footer;
