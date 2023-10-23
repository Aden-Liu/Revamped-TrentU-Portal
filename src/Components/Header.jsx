export default function Header() {
  return (
    <header>
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
    </header>
  )
}
