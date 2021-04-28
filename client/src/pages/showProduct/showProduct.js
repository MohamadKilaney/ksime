import './showProduct.css'
import React, { useState } from 'react';

//import components
import Header from '../../components/header/header';
import Navbar from '../../components/navbar/navbar';

import photo1 from '../../images/500.jpg'
import photo2 from '../../images/350.jpg'
import photo3 from '../../images/creativity.jpg'



function ShowProducts() {
  const [image, setImage] = useState(photo1);

  function changeSrc(e) {
    e.preventDefault();
    console.log(e.target.src);
    setImage(e.target.src);
  }
  return (
    <div className="ShowProducts">
      <Header />
      <Navbar />

      <div className="cont">
        <div className="images">
          <div className="imageList">
            <div className="ImageList1" onClick={changeSrc}>
              <img src={photo1} />
            </div>
            <div className="ImageList1" onClick={changeSrc}>
              <img src={photo2} />
            </div>
            <div className="ImageList1" onClick={changeSrc}>
              <img src={photo3} />
            </div>

          </div>
          <img src={image} />
        </div>

        <div className="detials">
          <div className="title">
            <span>כסא בר – דגם מילר</span>
          </div>

          <div className="sub-title">
            <span>כסא בר מעוצב, ריפוד דמוי עור, שלד מתכת</span>
          </div>

          <div className="price">
            <span> 664 ₪</span>
          </div>

          <div className="des">
          هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال "lorem ipsum" في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات الفكاهية إليها.


          </div>
        </div>
      </div>
    </div >
  );
}

export default ShowProducts;
