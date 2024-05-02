import React from "react";

const BestSellerCategoryCard = () => {
  return (
    <>
      <div className="col-md-6 col-lg-6 col-xl-3">
        <div className="text-center">
          <img
            src="img/fruite-item-4.jpg"
            className="img-fluid rounded"
            alt=""
          />
          <div className="py-2">
            <a href="#" className="h5">
              Organic Tomato
            </a>
            <div className="d-flex my-3 justify-content-center">
              <i className="fas fa-star text-primary"></i>
              <i className="fas fa-star text-primary"></i>
              <i className="fas fa-star text-primary"></i>
              <i className="fas fa-star text-primary"></i>
              <i className="fas fa-star"></i>
            </div>
            <h4 className="mb-3">3.12 $</h4>
            <a
              href="#"
              className="btn border border-secondary rounded-pill px-3 text-primary"
            >
              <i className="fa fa-shopping-bag me-2 text-primary"></i> Add to
              cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSellerCategoryCard;
