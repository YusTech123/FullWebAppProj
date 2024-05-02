const Copyright = () => {
  return (
    <>
      {/* <!-- Copyright Start --> */}
      <div className="container-fluid copyright bg-dark py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <span className="text-light">
                <a href="#">
                  <i className="fas fa-copyright text-light me-2"></i>Your Site
                  Name
                </a>
                , All right reserved.
              </span>
            </div>
            <div className="col-md-6 my-auto text-center text-md-end text-white">
              Designed By
              <a
                className="border-bottom link-light"
                target="_blank"
                href="https://github.com/YusTech123"
              >
                <span> </span> YusTech123
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Copyright End --> */}

      {/* <!-- Back to Top --> */}
      <a
        href="#"
        className="btn btn-primary border-3 border-primary rounded-circle back-to-top"
      >
        <i className="fa fa-arrow-up"></i>
      </a>
    </>
  );
};

export default Copyright;
