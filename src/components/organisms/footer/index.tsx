import React from "react";
import { useStyletron } from "baseui";

function Footer() {
  const [css, theme] = useStyletron();
  const year = new Date().getFullYear();

  return (
    <footer
      className={css({
        marginTop: "10rem",
        paddingTop: "4rem",
        paddingRight: "2rem",
        paddingLeft: "2rem",
        display: "flex",
        justifyContent: "center",
        borderTop: "1px solid #000",
      })}
    >
      <div>
        <ul
          className={css({
            maxWidth: "1920px",
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            margin: "0 auto",
            padding: 0,
            listStyleType: "none",
            textTransform: "uppercase",
          })}
        >
          <li className={css({ marginRight: "1rem", width: "17rem" })}>
            <p className={css({ fontSize: "1.167rem", fontWeight: 500 })}>
              Company
            </p>
            <ul
              className={css({
                margin: 0,
                padding: 0,
                listStyleType: "none",
                fontWeight: 300,
              })}
            >
              <li>About us</li>
              <li>Offices</li>
              <li>Careers</li>
              <li>Legal Notes</li>
            </ul>
          </li>
          <li className={css({ marginRight: "1rem", width: "17rem" })}>
            <p className={css({ fontSize: "1.167rem", fontWeight: 500 })}>
              Policies
            </p>
            <ul
              className={css({
                margin: 0,
                padding: 0,
                listStyleType: "none",
                fontWeight: 300,
              })}
            >
              <li>Privacy Policy</li>
              <li>Purchase Conditions</li>
              <li>Cookie Settings</li>
              <li>Internationalization</li>
            </ul>
          </li>
          <li className={css({ marginRight: "1rem", width: "17rem" })}>
            <p className={css({ fontSize: "1.167rem", fontWeight: 500 })}>
              Socials
            </p>
            <ul
              className={css({
                margin: 0,
                padding: 0,
                listStyleType: "none",
                fontWeight: 300,
              })}
            >
              <li>Facebook</li>
              <li>Twitter</li>
              <li>TikTok</li>
              <li>Instagram</li>
            </ul>
          </li>
          <li className={css({ marginRight: "1rem", width: "17rem" })}>
            <p className={css({ fontSize: "1.167rem", fontWeight: 500 })}>
              Contact Us
            </p>
            <ul
              className={css({
                margin: 0,
                padding: 0,
                listStyleType: "none",
                fontWeight: 300,
              })}
            >
              <li>Call: +234 812 345 6789</li>
              <li>Email: hello@thisisarton.com</li>
            </ul>
          </li>
        </ul>
        <div
          className={css({
            textTransform: "uppercase",
            letterSpacing: "1px",
            marginTop: "4rem",
            display: "flex",
            justifyContent: "center",
            fontWeight: 300,
          })}
        >
          <p>This is Arton® is &copy; {year}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
