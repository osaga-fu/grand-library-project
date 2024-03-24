import "./Header.css";
import Logo from "../../assets/books_logo.png"

export default function Header() {

  return (
    <header>
      <img className="logo" src={Logo} alt="Logo" />
      <h1>Grand Library</h1>
    </header>
  )
}