import "./Products.css";
import hairOil from "../assets/images/hair-oil.png";
import soap from "../assets/images/soap.jpg";

export default function Products() {
  return (
    <div className="products-page">
      <h1 className="products-title">Our Natural Products</h1>
      <p className="products-subtitle">
        Crafted with authentic Ayurvedic wisdom and 100% natural ingredients
      </p>

      <div className="products-grid">
        {/* Hair Oil */}
        <div className="product-card">
          <img src={hairOil} alt="Ayura Naturals Hair Oil" />
          <h3>Ayura Naturals Keshvardhini Herbal Hair Growth Oil</h3>
          <p className="product-desc">
            ආයුර්වේද ශාක සාර හා පිරිසිදු පොල්තෙල් යොදා නිපදවා ඇත.
          </p>

          <ul>
            <li>හිස්කෙස් ගැලවී යාම පාලනය කරයි</li>
            <li>අකලට හිසකෙස් පැසීම අඩු කරයි</li>
            <li>ඉස්හොරි ඇතිවීම පාලනය කරයි</li>
            <li>හිස්කබලේ වියලි ස්වාභාවය නැති කරයි</li>
          </ul>

          <p className="whatsapp-info">
            More information on WhatsApp: <strong>071 213 7626</strong>
          </p>
        </div>

        {/* Soap */}
        <div className="product-card">
          <img src={soap} alt="Ayura Naturals Soap" />
          <h3>Ayura Naturals Face & Body Soap</h3>
          <p className="product-desc">
            ආයුරා නැචුරල්ස් විසින් හදුන්වාදෙන Face and Body Soap
          </p>

          <ul>
            <li>සම ආශ්‍රිත කැසීම් සඳහා</li>
            <li>හමේ රෝග පාලනයට</li>
            <li>කුරුලෑ හා ලප කැලැල් අඩු කරයි</li>
            <li>100% ස්වාභාවික අමුද්‍රව්‍ය</li>
          </ul>

          <p className="whatsapp-info">
            More information on WhatsApp: <strong>071 213 7626</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
