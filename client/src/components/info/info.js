import './info.css';

import img1 from '../../images/info/Businness2.png'
import img2 from '../../images/info/Costumer_Service.png'
import img3 from '../../images/info/Shipping-2.png'
import img4 from '../../images/info/Store2.png'


function Info() {
    return (
        <div className="info">

            <div className="item">
                <img src={img1} />
                <div className="text">
                    מיליון פתרונות במקום אחד.<br/>
                    לבית, למשרד..
                </div>
            </div>

            <div className="item">
                <img src={img2} />

                <div className="text">
                    שירות לקוחות עם חיוך<br/>

                    6992*
                </div>
            </div>

            <div className="item">
                <img src={img3} />

                <div className="text">
                    אספקה מהירה<br/>
                    לכל חלקי הארץ
                </div>
            </div>

            <div className="item">
                <img src={img4} />

                <div className="text">
                5000 מ״ר אולמות תצוגה<br/>

בסניפי הבית
                </div>
            </div>

        </div >
    );
}

export default Info;
