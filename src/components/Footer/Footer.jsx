import "./Footer.css";

import logo from "../../images/logo.png";

import { currentYear } from "../../components/Dob/Dob";

export default function Footer() {
  
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="intimFlorts" />
      </div>

      <div className="footer-info">
        <span> Terms |</span>
        <span> Policy |</span>
        <span> Cookie Policy |</span>
        <span> Help Center</span>
      </div>

      <div className="copyRight">
        &copy; {currentYear} Intim Florts | All Rights Reserved.
      </div>
    </footer>
  );
}
