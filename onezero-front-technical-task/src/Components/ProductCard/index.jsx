/* eslint-disable react/prop-types */
import "./ProductCard.scss";
import { Modal } from "../Modal/index";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="product-card" onClick={() => setModalOpen(!modalOpen)}>
      <div className="product-image">
        <img src={product.coverImageSrc} alt={product.name[0].value} />
        <div className="price">
          <span>₼</span> {product.priceSell.toFixed(2)}
        </div>
      </div>
      <div className="product-info">
        <h3>{product.name[0].value}</h3>
      </div>

      {modalOpen && (
        <Modal product={product} onClose={() => setModalOpen(!modalOpen)} />
      )}
    </div>
  );
};

export default ProductCard;
