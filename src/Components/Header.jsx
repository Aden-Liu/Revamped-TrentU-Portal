import "../style.css";
import "./Header.css";
import { useState } from "react";

export default function Header() {
  const [menuStatus, setMenuStatus] = useState("");

  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <a href="#">myTrent</a>
        </div>
        <ul className="links">
          <li>
            <a href={"/HomePage"}>Home</a>
          </li>
          <li>
            <a href={"/RegisterPage"}>Register</a>
          </li>
          <li>
            <a href={"/AcademicsPage"}>Academics</a>
          </li>
          <li>
            <a href={"/FinancesPage"}>Finances</a>
          </li>
          <li>
            <a href={"/ServicesPage"}>Services</a>
          </li>
          <li>
            <a href={"/SupportPage"}>Support</a>
          </li>
        </ul>
        <a href="#" className="action-btn">
          Log out
        </a>
        <div className="toggle-btn">
          <i
            className="fa-solid fa-bars"
            onClick={() => {
              menuStatus == "" ? setMenuStatus("open") : setMenuStatus("");
            }}
          ></i>
        </div>
      </div>

      <div className={`dropdown-menu ${menuStatus}`}>
        <li>
          <a href={"/HomePage"}>Home</a>
        </li>
        <li>
          <a href={"/RegisterPage"}>Register</a>
        </li>
        <li>
          <a href={"/AcademicsPage"}>Academics</a>
        </li>
        <li>
          <a href={"/FinancesPage"}>Finances</a>
        </li>
        <li>
          <a href={"/ServicesPage"}>Services</a>
        </li>
        <li>
          <a href={"/SupportPage"}>Support</a>
        </li>
        <li>
          <a href="#" className="action-btn">
            Log out
          </a>
        </li>
      </div>
    </header>
  );
}
