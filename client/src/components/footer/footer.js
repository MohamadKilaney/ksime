import React, { useState } from 'react';
import "./footer.css";


function Footer() {
    return (
        <div className="footer">
            <div className="p-1">
                <h3>שירות לקוחות</h3>
                <span>0524523183</span>
                <span>0524523183</span>
                <span>ksime@gmail.com</span>
                <span>אודותינו</span>
                <span>יצירת קשר</span>
            </div>

            <div className="p-2">
                <h3>קטגוריות</h3>
                <span>ריהוט משרדי</span>
                <span>ריהוט גן</span>
                <span>ריהוט למסעדות</span>
                <span>ריהוט לאולמות אירועים</span>
                <span>ריהוט למוסדות חינוך</span>
                <span>קטלוג צבעים</span>
            </div>
            <div className="p-3">
                <h3>מי אנחנו</h3>
                <p>הוא פשוט טקסט גולמי של תעשיית ההדפסה וההקלדה. היה טקסט סטנדרטי עוד במאה ה-16, כאשר הדפסה לא ידועה לקחה מגש של דפוס ועירבלה אותו כדי ליצור סוג של ספר דגימה.</p>

            </div>
        </div>
    );
};

export default Footer;