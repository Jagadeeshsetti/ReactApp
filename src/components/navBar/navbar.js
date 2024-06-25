import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserInfo } from "../../navigation/navigation-stack"


const NavBar = () => {

  const { name, count} = useContext(UserInfo);
  // console.log("globalInfo:", globalInfo);

  const linkStyle = {
    textDecoration: "none",
    padding: 20,
    color: "black",
  }
    return (

        <nav className="navbar navbar-expand-sm bg-light navbar-light">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
       <Link style={linkStyle} to={"/"}>Home</Link>
      </li>
      <li className="nav-item">
      <Link style={linkStyle} to={"/about"}>About</Link>
      </li>
      <li className="nav-item">
      <Link style={linkStyle} to={"/setting"}>Settings</Link>
      </li>
      <li className="nav-item">
      <Link style={linkStyle} to={"/contact"}>Contact</Link>
      </li>

      <li className="nav-item">
      {name} {count}
      </li>
    </ul>
  </div>
</nav>

    )

}

export default NavBar