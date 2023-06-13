import { Translate } from "react-translated";

import "./Footer.css";

import logo from "../../images/logo.png";

import { currentYear } from "../../services/dob";

const footerInfoContet = ["Terms", "Policy", "Cookie Policy", "Help Center"];

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="intimFlorts" />
      </div>

      <div className="footer-info">
        {footerInfoContet.map((item, i) => (
          <span key={item + i}>
            <Translate text={item} /> {i !== footerInfoContet.length - 1 && " | "}
          </span>
        ))}
      </div>

      <div className="copyRight">
        &copy; {currentYear} <Translate text="Intim Florts | All Rights Reserved" />
      </div>
    </footer>
  );
}
