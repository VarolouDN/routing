import {NavLink} from "react-router-dom";

function Menu() {
    return(
        <nav>

            <NavLink end to=".">Home</NavLink><br/>
            <NavLink to="about">About</NavLink><br/>
            <NavLink to="contacts">Contacts</NavLink><br/>

        </nav>
    )
}
export default Menu