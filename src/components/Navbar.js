import logo from "../images/react-icon-small.png"

export default function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} className="react-logo" />
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </div>
    )
}