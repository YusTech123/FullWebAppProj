const BestSellerProductCard = () => {
  return (
    <>
      <div className="col-lg-6 col-xl-4">
        <div className="p-4 rounded bg-light">
          <div className="row align-items-center">
            <div className="col-6">
              <img
                src="img/best-product-2.jpg"
                className="img-fluid rounded-circle w-100"
                alt=""
              />
            </div>
            <div className="col-6">
              <a href="#" className="h5">
                Organic Tomato
              </a>
              <div className="d-flex my-3">
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
      </div>
    </>
  );
};

export default BestSellerProductCard;
