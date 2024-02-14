import React, { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';

function ProductCard({ imageSrc, productName, price, addToCart, removeFromCart, isSale, isRating, Discount }) {
  const [isInCart, setIsInCart] = useState(false);

  const handleCartToggle = () => {
    if (isInCart) {
      setIsInCart(false);
      removeFromCart();
    } else {
      setIsInCart(true);
      addToCart();
    }
  };

  return (
    <div className="col mb-5">
      <div className="card h-100 product-card-container" style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s' }}>
        {isSale && (
          <div
            className="badge bg-dark text-white position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            Sale
          </div>
        )}
        <img className="card-img-top" src={imageSrc} alt="Product" />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{productName}</h5>
            {isRating && (
              <div className="d-flex justify-content-center small text-warning mb-2">
                <Icon.StarFill />
                <Icon.StarFill />
                <Icon.StarFill />
                <Icon.StarFill />
                <Icon.StarFill />
              </div>
            )}
            {Discount ? (
                <>
                    <span className="text-muted text-decoration-line-through">
                        {Discount.oPrice}
                    </span>{' '+Discount.cPrice}
                </>
            ) : (
              <span>{price}</span>
            )}

          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              className="btn btn-outline-dark mt-auto"
              onClick={handleCartToggle}
            >
              {isInCart ? "Remove from Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
