import { Link } from "react-router-dom";
import CartRow from "../components/CartRow";
import PageHeader from "../components/PageHeader";

const Cart = () => {
  return (
    <>
      <PageHeader homeName={"Home"} homeLink={"/"} pageName={"Cart"} />
      {/* <!-- Cart Page Start --> */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Products</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <CartRow
                  id={2.99}
                  name={"Big Banana"}
                  imageUrl={"/img/vegetable-item-3.png"}
                  quantity={2}
                  price={0}
                />
                <CartRow
                  id={2}
                  name={"Potatoes"}
                  imageUrl={"/img/vegetable-item-5.jpg"}
                  quantity={3}
                  price={2.99}
                />
                <CartRow
                  id={0}
                  name={"Awesome Brocoli"}
                  imageUrl={"/img/vegetable-item-2.jpg"}
                  quantity={4}
                  price={2.99}
                />
              </tbody>
            </table>
          </div>
          <div className="mt-5">
            <input
              type="text"
              className="border-0 border-bottom rounded me-5 py-3 mb-4"
              placeholder="Coupon Code"
            />
            <button
              className="btn border-secondary rounded-pill px-4 py-3 text-primary"
              type="button"
            >
              Apply Coupon
            </button>
          </div>
          <div className="row g-4 justify-content-end">
            <div className="col-8"></div>
            <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
              <div className="bg-light rounded">
                <div className="p-4">
                  <h1 className="display-6 mb-4">
                    Cart <span className="fw-normal">Total</span>
                  </h1>
                  <div className="d-flex justify-content-between mb-4">
                    <h5 className="mb-0 me-4">Subtotal:</h5>
                    <p className="mb-0">$96.00</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5 className="mb-0 me-4">Shipping</h5>
                    <div className="">
                      <p className="mb-0">Flat rate: $3.00</p>
                    </div>
                  </div>
                  <p className="mb-0 text-end">Shipping to Ukraine.</p>
                </div>
                <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                  <h5 className="mb-0 ps-4 me-4">Total</h5>
                  <p className="mb-0 pe-4">$99.00</p>
                </div>
                <Link
                  className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4"
                  type="button"
                  to="/checkout"
                >
                  Proceed Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
