
import img1 from "../../assets/images/lightbulb-o.png"
import img2 from "../../assets/images/bank.png"
import img3 from "../../assets/images/balance-scale.png"
import Style from "./style.module.css";

export default function FooterComp() {
    return (
        <div className={Style.card}>
            <div className={Style.up}>
                <p>OUR VALUES</p>
            </div>
            <div className={Style.down}>
                <div className={Style.box1}>
                    <img src={img1} alt="" />
                    <h3>INNOVATIVE</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.
                    </p>

                </div>
                <div className={Style.box2}>
                    <img src={img2} alt="" />
                    <h3>LOYALTY</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.
                    </p>

                </div>
                <div className={Style.box3}>
                    <img src={img3} alt="" />
                    <h3>RESPECT</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.
                    </p>
                </div>
            </div>
        </div>
    );
}