import textLogo from "../../text-logo.png";
import textlessLogo from "../../textless-logo.png";
import NavBar from "./NavBar/NavBar";
import SearchBar from "./SearchBar/SearchBar";

export default function Header() {
  return (
    <div className="Header">
      <div className="LogoContainer">
        <img src={textlessLogo} className="Logo" />
        <img src={textLogo} className="TextLogo" />
      </div>
      <SearchBar />
      <NavBar />
    </div>
  );
}
