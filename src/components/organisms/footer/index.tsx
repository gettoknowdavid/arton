import React from "react";
import {
  StyledFooter,
  StyledFooterBottomBar,
  StyledFooterItemTitle,
  StyledMainFooterList,
  StyledMainFooterListItem,
  StyledSubFooterList,
} from "./footer.styles";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <StyledFooter>
      <div>
        <StyledMainFooterList>
          <StyledMainFooterListItem>
            <StyledFooterItemTitle>Company</StyledFooterItemTitle>
            <StyledSubFooterList>
              <li>About us</li>
              <li>Offices</li>
              <li>Careers</li>
              <li>Legal Notes</li>
            </StyledSubFooterList>
          </StyledMainFooterListItem>
          <StyledMainFooterListItem>
            <StyledFooterItemTitle>Policies</StyledFooterItemTitle>
            <StyledSubFooterList>
              <li>Privacy Policy</li>
              <li>Purchase Conditions</li>
              <li>Cookie Settings</li>
              <li>Internationalization</li>
            </StyledSubFooterList>
          </StyledMainFooterListItem>
          <StyledMainFooterListItem>
            <StyledFooterItemTitle>Socials</StyledFooterItemTitle>
            <StyledSubFooterList>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>TikTok</li>
              <li>Instagram</li>
            </StyledSubFooterList>
          </StyledMainFooterListItem>
          <StyledMainFooterListItem>
            <StyledFooterItemTitle> Contact Us</StyledFooterItemTitle>
            <StyledSubFooterList>
              <li>Call: +234 812 345 6789</li>
              <li>Email: hello@thisisarton.com</li>
            </StyledSubFooterList>
          </StyledMainFooterListItem>
        </StyledMainFooterList>
        <StyledFooterBottomBar>
          <p>This is Arton® is &copy; {year}</p>
        </StyledFooterBottomBar>
      </div>
    </StyledFooter>
  );
}

export default Footer;
