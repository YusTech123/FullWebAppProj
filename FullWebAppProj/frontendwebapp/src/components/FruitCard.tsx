import { useSelector } from "react-redux";
import { getAllCategories } from "../features/category/category-slice";
import { Category } from "../entities/api-util";
import { Link } from "react-router-dom";

interface FruitCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  categoryId: string;
  description: string;
}

const FruitCard = ({
  id,
  name,
  price,
  imageUrl,
  categoryId,
  description,
}: FruitCardProps) => {
  const categories = useSelector(getAllCategories);

  const categoryName = categories.find(
    (category: Category) => category.id == categoryId
  ).name;

  return (
    <>
      <Link to={`/products/${id}`} className="col-md-6 col-lg-4 col-xl-3">
        <div className="rounded position-relative fruite-item">
          <div className="fruite-img">
            <img
              src={imageUrl}
              className="img-fluid w-100 rounded-top"
              alt=""
            />
          </div>
          <div
            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
            style={{ top: "10px", left: "10px" }}
          >
            {categoryName}
          </div>
          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
            <h4>{name}</h4>
            <p className="text-dark">{description}</p>
            <div className="d-flex justify-content-between flex-lg-wrap">
              <p className="text-dark fs-5 fw-bold mb-0">${price} / kg</p>
              <Link
                to={""}
                className="btn border border-secondary rounded-pill px-3 text-primary"
              >
                <i className="fa fa-shopping-bag me-2 text-primary"></i>
                Add to cart
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default FruitCard;
