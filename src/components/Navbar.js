import logo from "../images/react-icon-small.png"

export default function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} className="react-logo" />
            <h3>ReactFacts</h3>
            <h4>My React Site</h4>
        </div>
    )
}