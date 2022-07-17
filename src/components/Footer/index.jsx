
import img1 from "../../assets/images/facebook-official.png"
import img2 from "../../assets/images/twitter.png"
import Style from "./style.module.css";

export default function FooterComp() {
    return (

        <div className={Style.footer}>
            <div className={Style.up}>
                <p>Copyright © 2016. PT Company</p>
            </div>
            <div className={Style.down}>
                <img src={img1}></img>
                <img src={img2}></img>
            </div>
        </div>

    );
}