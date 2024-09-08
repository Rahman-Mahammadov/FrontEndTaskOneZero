/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Modal.scss";

export const Modal = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = (e) => {
    e.stopPropagation();
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = (e) => {
    e.stopPropagation();
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <div className="modal-body">
          <img
            src={product.coverImageSrc}
            alt={product.name[0].value}
            className="product-image"
          />
          <div className="product-details">
            <h2>{product.name[0].value}</h2>

            <p className="price">🔥 {product.priceSell.toFixed(2)} $</p>
            <div className="quantity-control">
              <button className="decrement" onClick={decreaseQuantity}>
                −
              </button>
              <span className="quantity">{quantity}</span>
              <button className="increment" onClick={increaseQuantity}>
                +
              </button>
            </div>
            <ul className="attributes">
              <li>
                <strong>Calories:</strong> {product.calories}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
