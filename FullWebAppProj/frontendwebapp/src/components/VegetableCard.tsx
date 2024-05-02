import { Link } from "react-router-dom";

interface VegetableCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

const VegetableCard = ({
  id,
  name,
  price,
  description,
  imageUrl,
}: VegetableCardProps) => {
  return (
    <>
      <Link to={`/products/${id}`}>
        <div className="border border-primary rounded position-relative vesitable-item">
          <div className="vesitable-img">
            <img
              src={imageUrl}
              className="img-fluid w-100 rounded-top"
              alt=""
            />
          </div>
          <div
            className="text-white bg-primary px-3 py-1 rounded position-absolute"
            style={{ top: "10px", right: "10px" }}
          >
            Vegetable
          </div>
          <div className="p-4 rounded-bottom">
            <h4>{name}</h4>
            <p className="text-dark">{description}</p>
            <div className="d-flex justify-content-between flex-lg-wrap">
              <p className="text-dark fs-5 fw-bold mb-0">${price} / kg</p>
              <Link
                to={""}
                className="btn border border-secondary rounded-pill px-3 text-primary"
              >
                <i className="fa fa-shopping-bag me-2 text-primary"></i> Add to
                cart
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default VegetableCard;
