/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../features/categories/categorySlice";
import "./ProductList.scss";
import { useParams } from "react-router";
import ProductCard from "../ProductCard";

export const ProductList = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category);

  const { categoryquery } = useParams();
  

  const getSpecificCategory = () => {
    return categories.categories?.categories?.find(
      (category) => category.name[0].value === categoryquery
    );
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <div>
      {categories.loading && <div>Loading...</div>}
      {categories.loading && categories.error ? (
        <div>Error: {categories.error}</div>
      ) : null}

      <div className="product-list">
        {categoryquery == undefined || categoryquery == "All" ? (
          <div>
            {categories.categories?.categories?.map((cat) => {
              return (
                <>
                  <p className="category-header">{cat.name[0].value}</p>

                  <div className="product-container">
                    {cat.menuItems?.map((product) => {
                      return (
                        <div className="product-card-wrapper" key={product.id}>
                          <ProductCard product={product} />
                        </div>
                      );
                    })}
                  </div>
                </>
              );
            })}
          </div>
        ) : (
          <div>
            <p className="category-header">
              {getSpecificCategory()?.name[0].value}
            </p>

            <div className="product-list">
              {getSpecificCategory()?.menuItems?.map((product) => {
                return (
                  <div
                    className="product-card-wrapper product-container"
                    key={product.id}
                  >
                    <ProductCard product={product} />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
