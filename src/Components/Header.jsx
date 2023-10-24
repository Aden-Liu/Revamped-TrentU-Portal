import "../style.css"

export default function Header() {
  return (
    <header>
      <div>
        <img src="" alt="Placeholder"/>
        <img src="" alt="Placeholder" />
      </div>
        <nav>
            <ul>
                <li><a href={'/HomePage'}>Home</a></li>
                <li><a href={'/RegisterPage'}>Register</a></li>
                <li><a href={'/AcademicsPage'}>Academics</a></li>
                <li><a href={'/FinancesPage'}>Finances</a></li>
                <li><a href={'/ServicesPage'}>Serives</a></li>
                <li><a href={'/SupportPage'}>Support</a></li>
                <li>Log out</li>
            </ul>
        </nav>
        <div>
          <input type="text" placeholder="Search"/>
          <button><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
    </header>
  )
}
