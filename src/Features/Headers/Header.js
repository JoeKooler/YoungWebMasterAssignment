import textLogo from "../../text-logo.png";
import textlessLogo from "../../textless-logo.png";
import NavBar from "./NavBar/NavBar";
import SearchBar from "./SearchBar/SearchBar";

export default function Header() {
  return (
    <div className="Header">
      <div className="SearchBarHeader">
        <div className="LogoContainer">
          <img src={textlessLogo} className="Logo" alt="rip" />
          <img src={textLogo} className="TextLogo" alt="rip" />
        </div>
        <SearchBar />
      </div>
      <NavBar />
    </div>
  );
}
