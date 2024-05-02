import { useSelector } from "react-redux";
import { getAllCategories } from "../features/category/category-slice";
import { getAllProducts } from "../features/product/product-slice";
import { Category, Product } from "../entities/api-util";

const CategoriesSectionForDetail = () => {
  const categories = useSelector(getAllCategories);
  const products = useSelector(getAllProducts);

  const categoryWithProductCount = categories.map((category: Category) => {
    const count = products.filter(
      (product: Product) => product.categoryId == category.id
    ).length;
    console.log({ ...category, count: count });

    return { ...category, count: count };
  });
  console.log(categoryWithProductCount);
  return (
    <>
      <div className="col-lg-12">
        <div className="input-group w-100 mx-auto d-flex mb-4">
          <input
            type="search"
            className="form-control p-3"
            placeholder="keywords"
            aria-describedby="search-icon-1"
          />
          <span id="search-icon-1" className="input-group-text p-3">
            <i className="fa fa-search"></i>
          </span>
        </div>
        <div className="mb-4">
          <h4>Categories</h4>
          <ul className="list-unstyled fruite-categorie">
            {/* {categoryWithProductCount} */}
            {categoryWithProductCount.map((category, index: number) => {
              <li key={index}>
                <div className="d-flex justify-content-between fruite-name">
                  <a href="#">
                    <i className="fas fa-apple-alt me-2"></i>
                    {category.name}
                  </a>
                  <span>({category.count})</span>
                </div>
              </li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CategoriesSectionForDetail;
