import React from "react";

const Card = () => {
  return (
    <>
      <div className="cart_container">
        <div className="card_image">
          <img
            className="img_card"
            src="/images/product.png"
            alt="card image"
            loading="lazy"
          />
          <img
            className="img_heart"
            src="/images/like.png"
            alt="heart icon"
            loading="lazy"
          />
        </div>
        <div className="status">SODLING</div>
        <div className="product_name">Naminos Dementus A Milance - Pattern</div>
        <div className="product_price">$86.00 - $99.00</div>
        <div className="product_colors">
          <div className="product-blue"></div>
          <div className="product-black"></div>
          <div className="product-silver"></div>
        </div>
      </div>
    </>
  );
};

export default Card;
