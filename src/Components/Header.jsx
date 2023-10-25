import "../style.css";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div>
        <img src="https://placehold.co/100x100" alt="Placeholder" />
        <img src="https://placehold.co/161x100" alt="Placeholder" />
      </div>
      <div className="navigation">
        <section>
          <input type="text" placeholder="Search" />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </section>
        <nav>
          <ul>
            <li className="nav-item">
              <a href={"/HomePage"}>
                <span className="icon">
                  <i className="fa-solid fa-house"></i>
                </span>
                <span className="text">Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a href={"/RegisterPage"}>
                <span className="icon">
                  <i className="fa-regular fa-id-card"></i>
                </span>
                <span className="text">Register</span>
              </a>
            </li>
            <li className="nav-item">
              <a href={"/AcademicsPage"}>
                <span className="icon">
                  <i className="fa-solid fa-book"></i>
                </span>
                <span className="text">Academics</span>
              </a>
            </li>
            <li className="nav-item">
              <a href={"/FinancesPage"}>
                <span className="icon">
                  <i className="fa-solid fa-money-bills"></i>
                </span>
                <span className="text">Finances</span>
              </a>
            </li>
            <li className="nav-item">
              <a href={"/ServicesPage"}>
                <span className="icon">
                  <i className="fa-solid fa-bell-concierge"></i>
                </span>
                <span className="text">Services</span>
              </a>
            </li>
            <li className="nav-item">
              <a href={"/SupportPage"}>
                <span className="icon">
                  <i className="fa-solid fa-circle-info"></i>
                </span>
                <span className="text">Support</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="icon">
                  <i className="fa-solid fa-right-from-bracket"></i>
                </span>
                <span className="text">Log out</span>
              </a>
            </li>
            <div className="indicator"></div>
          </ul>
        </nav>
      </div>
    </header>
  );
}
