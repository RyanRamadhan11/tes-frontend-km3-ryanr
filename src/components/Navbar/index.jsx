
import {
    Navbar,
} from "react-bootstrap";

import Style from "./style.module.css";

export default function NavbarComp() {
    return (

        <Navbar className={Style.navbar}>
            <div className={Style.left}><p>Company</p></div>
            <ul>
                <li><a href="#">ABOUT</a>
                    <ul className={Style.dropdown}>
                        <li><a href="#">HISTORY</a></li>
                        <li><a href="#">VISION MISSION</a></li>
                    </ul>
                </li>
                <li><a href="#">OUR WORK</a></li>
                <li><a href="#">OUR TEAM</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>

        </Navbar>

    );
}