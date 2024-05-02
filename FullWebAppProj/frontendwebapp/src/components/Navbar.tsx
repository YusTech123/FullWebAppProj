import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { logout } from "../features/account/account-slice";
import { AuthApiStatusCode, Roles, TokenResponse } from "../entities/api-util";
import { signOutUser } from "../features/auth/auth-api-slice";
import { HttpStatusCode } from "axios";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useAppSelector((state) => state.account.loggedIn);
  const userRole = useAppSelector((state) => state.account.role);
  const isAdmin =
    userRole == Roles.SuperAdmin || userRole == Roles.Admin ? true : false;

  const handleUserSignOut = async () => {
    await dispatch(signOutUser())
      .unwrap()
      .then(
        (result: any) => {
          switch (result.status) {
            case HttpStatusCode.Ok:
              // call user by token and login properly details
              dispatch(logout());
              navigate("/signin");
              break;
            case HttpStatusCode.Unauthorized:
              break;
            case HttpStatusCode.InternalServerError:
              break;
            case HttpStatusCode.GatewayTimeout:
              break;
            default:
          }
        }
      )
      .catch(() => {});
  };

  return (
    <>
      {/* <!-- Navbar start --> */}
      <div className="container-fluid fixed-top">
        <div className="container topbar bg-primary d-none d-lg-block">
          <div className="d-flex justify-content-between">
            <div className="top-info ps-2">
              <small className="me-3">
                <i className="fas fa-map-marker-alt me-2 text-secondary"></i>
                <a href="#" className="text-white">
                  123 Street, New York
                </a>
              </small>
              <small className="me-3">
                <i className="fas fa-envelope me-2 text-secondary"></i>
                <a href="#" className="text-white">
                  Email@Example.com
                </a>
              </small>
            </div>
            <div className="top-link pe-2">
              <a href="#" className="text-white">
                <small className="text-white mx-2">Privacy Policy</small>/
              </a>
              <a href="#" className="text-white">
                <small className="text-white mx-2">Terms of Use</small>/
              </a>
              <a href="#" className="text-white">
                <small className="text-white ms-2">Sales and Refunds</small>
              </a>
            </div>
          </div>
        </div>
        <div className="container px-0">
          <nav className="navbar navbar-light bg-white navbar-expand-xl">
            <Link to="/" className="navbar-brand">
              <h1 className="text-primary display-6">Fruitables</h1>
            </Link>
            <button
              className="navbar-toggler py-2 px-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars text-primary"></span>
            </button>
            <div
              className="collapse navbar-collapse bg-white"
              id="navbarCollapse"
            >
              <div className="navbar-nav mx-auto">
                <Link to="/" className="nav-item nav-link active">
                  Home
                </Link>
                <Link to="/products" className="nav-item nav-link">
                  Products
                </Link>
                <Link to="/testimonials" className="nav-item nav-link">
                  Testimonial
                </Link>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Categories
                  </a>
                  <div className="dropdown-menu m-0 bg-secondary rounded-0">
                    <Link to="/cart" className="dropdown-item">
                      Cart
                    </Link>
                    <Link to="/checkout" className="dropdown-item">
                      Checkout
                    </Link>
                  </div>
                </div>
                {isAdmin && isLoggedIn && (
                  <div className="nav-item dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Admin
                    </a>
                    <div className="dropdown-menu m-0 bg-secondary rounded-0">
                      <Link to="/admin/products" className="dropdown-item">
                        Products
                      </Link>
                      <Link to="/admin/categories" className="dropdown-item">
                        Categories
                      </Link>
                      <Link to="/admin/roles" className="dropdown-item">
                        Roles
                      </Link>
                    </div>
                  </div>
                )}
                {isLoggedIn && (
                  <Link to="profile" className="nav-item nav-link">
                    Profile
                  </Link>
                )}
                <Link to="contact" className="nav-item nav-link">
                  Contact
                </Link>
              </div>
              <div className="d-flex m-3 me-0">
                <button
                  className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
                  data-bs-toggle="modal"
                  data-bs-target="#searchModal"
                >
                  <i className="fas fa-search text-primary"></i>
                </button>
                <Link to="/cart" className="position-relative me-4 my-auto">
                  <i className="fa fa-shopping-bag fa-2x"></i>
                  <span
                    className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                    style={{
                      top: "-5px",
                      left: "15px",
                      height: "20px",
                      minWidth: "20px",
                    }}
                  >
                    3
                  </span>
                </Link>
                {isLoggedIn ? (
                  <Link to="" className="my-auto" onClick={handleUserSignOut}>
                    <i className="fas fa-door-open fa-2x"></i>
                  </Link>
                ) : (
                  <Link to="/signin" className="my-auto">
                    <i className="fas fa-user fa-2x"></i>
                  </Link>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* <!-- Navbar End --> */}
    </>
  );
};

export default Navbar;
