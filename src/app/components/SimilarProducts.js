"use client";

import React, { useRef, useState, useEffect } from "react";

const SimilarProducts = ({ title, units }) => {
  const rowRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  useEffect(() => {
    const checkOverflow = () => {
      const row = rowRef.current;
      if (row) {
        setIsOverflowing(row.scrollWidth > row.clientWidth); // Check if scrolling is needed
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  const scrollLeft = () => {
    rowRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    rowRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="position-relative mx-5 my-5">
      {/* Section Title */}
      <h3 className="mb-3 font-space-grotesk fs-4">{title}</h3>

      {/* Scroll Buttons (visible only when content overflows) */}
      {isOverflowing && (
        <>
          <button
            onClick={scrollLeft}
            className="btn bg-color4 position-absolute top-50 start-0 translate-middle-y"
            style={{ zIndex: 1 }}
          >
            &lt;
          </button>
          <button
            onClick={scrollRight}
            className="btn bg-color4 position-absolute top-50 end-0 translate-middle-y"
            style={{ zIndex: 1 }}
          >
            &gt;
          </button>
        </>
      )}

      {/* Scrollable Product Row */}
      <div
        className="row flex-nowrap overflow-hidden"
        ref={rowRef}
        style={{ scrollBehavior: "smooth" }}
      >
        {Array.from({ length: units }).map((_, index) => (
          <div
            className="col dynamic-size"
            key={index}
            style={{
              flex: isOverflowing ? "0 0 25%" : `${100 / units}%`, // Adjust size dynamically
              transition: "all 0.2s ease",
            }}
          >
            <div className="card bg-white d-flex flex-column border-0 card-hover">
              <span className="d-flex flex-column bg-color3 rounded-2">
                <span className="d-flex m-3 fs-8 justify-content-between">
                  <i className="bi bi-heart mx-2"></i>
                  <span className="font-geist text-nowrap bg-white rounded-1 px-2 h10 fw-medium fs-10 click">
                    ART DE LA TABLE
                  </span>
                </span>
                <img
                  src={`/thumbnail.webp`}
                  className="card-img-top w200 m-auto card-img-hover"
                  alt="Similar Product"
                />
                <div className="d-flex align-items-center bg-white m-1 p-1 justify-content-between quantity-modal">
                  <span>QTÉ</span>
                  <span className="bg-color7 d-flex rounded-2 mx-2">
                    <button
                      onClick={decrement}
                      className="btn btn-outline-secondary px-3 border-0"
                      disabled={quantity === 1}
                    >
                      −
                    </button>
                    <input
                      type="text"
                      value={quantity}
                      readOnly
                      className="form-control text-center rounded-0 border-0 outline-0 bg-color7 w-100"
                      style={{ width: "50px" }}
                    />
                    <button
                      onClick={increment}
                      className="btn btn-outline-secondary px-3 border-0"
                    >
                      +
                    </button>
                  </span>
                  <button className="btn btn-pink text-white ms-3 px-2 rounded-2">
                    Ajouter
                  </button>
                </div>
              </span>
              <div className="card-body">
                <h5 className="card-title font-playfair d-flex justify-content-between">
                  <p>Title</p>
                  <p className="font-geist">
                    0<sup>€</sup>
                  </p>
                </h5>
                <span className="card-text font-geist fs-14 text-grey d-flex justify-content-between">
                  <p>
                    0,35€ / Pièce{" "}
                    <span className="font-geist fs-10">REF:VABGN5</span>
                  </p>
                  <span className="font-geist fs-10 bg-grey rounded-4 px-2 h25 fw-medium">
                    20 pièces
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
